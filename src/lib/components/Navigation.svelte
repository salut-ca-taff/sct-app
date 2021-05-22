<script>
    import { page } from '$app/stores';

    export let routes = [];

    $: path = $page.path;
</script>

<div class="column">
    {#each routes as { href, icon, label }}
        <a class="route opaque" class:active={path === href || (href !== '/' && path.startsWith(href))} {href} sveltekit:prefetch>
            <span class="icon">{@html icon}</span>
            <span class="label">{label}</span>
        </a>
    {/each}
</div>

<style lang="scss">
    @import '../../styles/vars';

    .route {
        $color: $color-secondary;
        $transition-duration: .2s;

        display: flex;
        align-items: center;

        font-weight: 500;
        font-size: 20px;

        padding: 3px 10px 1px;
        margin-bottom: 15px;

        color: $color;

        border-radius: 8px;

        cursor: pointer;

        transition: background-color $transition-duration, color $transition-duration;

        :global(svg) {
            $size: 38px;

            width: $size;
            height: $size;
        }

        :global(svg path) {
            fill: $color;
        }

        &:hover {
            background-color: rgba(0, 0, 0, .075);
        }

        &.active {
            background-color: $color-primary;
            color: white;

            :global(svg path) {
                fill: white;
            }
        }
    }

    .icon {
        margin-top: 3px;
    }

    .label {
        margin-left: 20px;
    }
</style>