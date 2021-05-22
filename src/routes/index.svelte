<script>
    import { title } from '../app';
</script>

<svelte:head>
    <title>{title('Accueil')}</title>
</svelte:head>

<div id="index">
    <h1 id="title">¿ Salut ça taff ?</h1>
</div>

<style lang="scss">
    @import '../styles/vars';

    #index {
        height: 100vh;

        justify-content: center;
        align-items: center;
    }

    #title {
        font-family: $font-circular;
        font-size: 54px;
    }
</style>