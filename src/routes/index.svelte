<script>
    import { title } from '../app';
</script>

<svelte:head>
    <title>{title('Accueil')}</title>
</svelte:head>

<h1 id="title">¿ Salut ça taff ?</h1>

<style lang="scss">
    @import '../styles/vars';

    #title {
        font-family: $font-circular;
        font-size: 54px;
    }
</style>