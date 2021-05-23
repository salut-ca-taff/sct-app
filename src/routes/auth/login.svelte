<script>
    import { title } from '/src/app';

    import { login } from '$lib/auth';

    import { goto } from '$app/navigation';

    let email = '';
    let password = '';
    let disabled = false;

    function submit()
    {
        disabled = true;

        login(email, password)
            .then(() => goto('/'))
            .catch(() => disabled = false);
    }
</script>

<svelte:head>
    <title>{title('Se connecter')}</title>
</svelte:head>

<form id="form" class="column" on:submit|preventDefault={submit}>
    <input type="email" placeholder="E-Mail" bind:value={email} {disabled} />
    <input type="password" placeholder="Mot de passe" bind:value={password} {disabled} />

    <input type="submit" value="Se connecter" {disabled} />
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