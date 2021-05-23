<script>
    import { page } from '$app/stores';
</script>

<div id="auth">
    <div id="inner" class="column" on:submit|preventDefault>
        <div id="logo">¿ Salut ça taff ?</div>

        <div id="form-container" class="column">
            <slot />
        </div>

        <div id="footer">
            {#if $page.path === '/auth/register'}
                <a href="/auth/login" sveltekit:prefetch>Se connecter</a>
            {:else}
                <a href="/auth/register" sveltekit:prefetch>S'inscrire</a>
            {/if}
            <span>·</span>
            <a href="https://github.com/salut-ca-taff" target="_blank" rel="external">GitHub</a>
            <span>·</span>
            <a href="https://hopper.run/post/60a95f0d974640be8d422a04" target="_blank" rel="external">Hopper</a>
        </div>
    </div>
</div>

<style lang="scss">
    @import 'src/styles/vars';

    #auth {
        flex-grow: 1;
        justify-content: flex-end;

        background-color: $color-primary;
    }

    #inner {
        justify-content: space-evenly;
        align-items: center;

        width: 600px;

        background-color: white;
    }

    #logo {
        font-weight: 500;
        font-size: 32px;
    }

    #form-container {
        width: 60%;
    }

    #footer {
        justify-content: space-evenly;

        width: 50%;

        font-size: 20px;
    }
</style>