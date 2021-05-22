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
        flex-grow: 1;

        justify-content: center;
        align-items: center;
    }

    #title {
        font-family: $font-circular;
        font-size: 54px;
    }
</style>