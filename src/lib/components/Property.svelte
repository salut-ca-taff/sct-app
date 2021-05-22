<script>
    export let icon;
    export let type = 'scalar';
    export let value = 0;
    export let label;
</script>

<div class="property">
    <div class="icon">{@html icon}</div>
    {#if type === 'scalar'}
        <div class="label">{value} {label}{value > 1 ? 's' : ''}</div>
    {:else}
        <div class="label">{label}</div>
    {/if}
</div>

<style lang="scss">
    .property {
        align-items: center;
        margin-bottom: 2px;
    }

    .icon {
        $size: 32px;

        width: $size;
        height: $size;

        :global(svg path) {
            fill: #949C9C;
        }
    }

    .label {
        margin-left: 2px;
        margin-bottom: 5px;

        color: #515555;

        font-weight: 500;
        font-size: 18px;
    }
</style>