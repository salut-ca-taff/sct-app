<script>
    import { title } from '../../app';

    import arrow from '../../assets/images/subject_arrow.svg?raw';

    import subjects from '$lib/subjects';
</script>

<svelte:head>
    <title>{title('Parcourir')}</title>
</svelte:head>

<div id="subjects" class="column">
    {#each subjects as { id, label, color }}
        <a class={'subject ' + color} href={'/browse/' + id}>
            <span class="label">{label}</span>
            <div class="arrow">{@html arrow}</div>
        </a>
    {/each}
</div>

<div id="subject" class="column">
    <slot />
</div>

<style lang="scss">
    @import 'src/styles/vars';

    $colors: (
        red: #FA2C2C,
        orange: #FA5F1C,
        yellow: #FFC700,
        green: #92D920,
        blue: #1F9DE4,
        purple: #DA28E9
    );

    #subjects, #subject {
        flex: 0.5;
    }

    #subjects {
        justify-content: center;
        align-items: center;

        .subject {
            display: grid;

            margin-bottom: 25px;

            cursor: pointer;

            .label, .arrow {
                grid-column: 1;
                grid-row: 1;
            }

            .label {
                z-index: 2;

                align-self: center;

                margin-left: 17px;
                margin-bottom: -3px;

                color: white;

                font-weight: 500;
                font-size: 28px;
            }

            .arrow {
                :global(svg) {
                    width: 318px;
                    height: 55px;
                }

                :global(svg path) {
                    transition: fill .2s;
                }
            }

            @each $color, $value in $colors {
                &.#{"" + $color} {
                    .arrow :global(svg path) {
                        fill: $value;
                    }

                    &:hover .arrow :global(svg path) {
                        fill: darken($value, 10);
                    }

                    &:active .arrow :global(svg path) {
                        fill: darken($value, 15);
                    }
                }
            }
        }
    }

    #subject {
        padding: 75px 175px;
    }

    @media (max-width: 1500px) {
        #subject {
            padding: 75px 75px;
        }
    }

    @media (max-width: 1250px) {
        #subject {
            padding: 75px 50px;
        }
    }
</style>