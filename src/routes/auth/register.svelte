<script>
    import { title } from '/src/app';

    import { goto } from '$app/navigation';

    import { register } from '$lib/auth';

    let email = '';
    let username = '';
    let password = '';
    let passwordConfirm = '';
    let school = '';

    let disabled = false;

    function submit()
    {
        if (password !== passwordConfirm) {
            alert('Les mots de passe diffèrent');
            return;
        }

        disabled = true;

        register(email, username, password, school)
            .then(() => goto('/'))
            .catch(() => disabled = false);
    }
</script>

<svelte:head>
    <title>{title('S\'inscrire')}</title>
</svelte:head>

<form id="form" class="column" on:submit|preventDefault={submit}>
    <input type="email" placeholder="E-Mail" bind:value={email} {disabled} />
    <input type="text" placeholder="Nom d'utilisateur" bind:value={username} {disabled} />

    <input type="password" placeholder="Mot de passe" bind:value={password} {disabled} />
    <input type="password" placeholder="Confirmer le mot de passe" bind:value={passwordConfirm} {disabled} />

    <input type="text" placeholder="Ecole" bind:value={school} {disabled} />

    <input type="submit" value="S'inscrire" {disabled} />
</form>

<style lang="scss">
    #form {
        display: flex;

        input {
            margin-bottom: 20px;
        }

        input[type=submit] {
            margin-top: 15px;
        }
    }
</style>