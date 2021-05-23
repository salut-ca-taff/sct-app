<script>
    import { title } from '/src/app';

    export let resource;
</script>

<svelte:head>
    <title>{title(resource.title)}</title>
</svelte:head>

<div id="content">
    <div id="content-inner" class="column">
        <span id="title">{resource.title}</span>
        <span id="author">Posté par {resource.author} le {resource.posted.toLocaleDateString()}</span>

        <hr id="separator">

        <slot />
    </div>
</div>

<style lang="scss">
    #content {
        flex-grow: 1;
        justify-content: center;
    }

    #content-inner {
        flex-grow: 1;
        max-width: 1000px;
    }

    #title {
        margin-top: 100px;

        font-weight: 600;
        font-size: 42px;
    }

    #author {
        font-style: italic;
        font-size: 24px;
    }

    #separator {
        width: 100%;

        margin: 25px 0;

        color: white;
    }
</style>