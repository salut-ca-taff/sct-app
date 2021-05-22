<script>
    import search from '@material-icons/svg/svg/search/round.svg?raw';

    export let value = '';
</script>

<div class="search">
    <input class="field" placeholder="Rechercher..." bind:value />
    <div class="icon">{@html search}</div>
</div>

<style lang="scss">
    $icon-size: 35px;
    $icon-margin: 10px;

    .search {
        display: grid;
        justify-items: end;
        align-content: center;

        flex-shrink: 0;

        height: 50px;

        background-color: #EEF4F8;

        border-radius: 5px;
    }

    .field, .icon {
        grid-column: 1;
        grid-row: 1;
    }

    .field {
        $icon-spacing: $icon-size + $icon-margin + 15px;

        box-sizing: border-box;

        width: calc(100% - #{$icon-spacing});

        margin-right: $icon-spacing;
        padding-left: 15px;

        border: none;
        outline: none;

        background: none;

        font-size: 18px;
    }

    .icon {
        margin-right: $icon-margin;

        :global(svg) {
            width: $icon-size;
            height: $icon-size;
        }

        :global(svg path) {
            fill: #797D81;
        }
    }
</style>