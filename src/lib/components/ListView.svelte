<script>
    import { page } from '$app/stores';

    import SearchBar from '$lib/components/SearchBar.svelte';

    export let content;

    let search = '';
</script>

<div class="list-view">
    <div class="inner column">
        <SearchBar bind:value={search} />

        <div class="list column">
            {#each content.filter(r => r.title.toLowerCase().includes(search.toLowerCase())) as resource}
                <a class="resource card" href={`${$page.path}/${resource.id}`} sveltekit:prefetch>
                    <div class="left column">
                        <div class="title">{resource.title}</div>
                        <div class="properties">
                            <slot {resource} />
                        </div>
                    </div>
                    <div class="right column">
                        <span>Posté par {resource.author}</span>
                        <span>Le {resource.posted.toLocaleDateString()}</span>

                        <span class="views">{resource.views.toLocaleString()} vue{resource.views > 1 ? 's' : ''}</span>
                    </div>
                </a>
            {/each}
        </div>
    </div>
</div>

<style lang="scss">
    .list-view {
        flex-grow: 1;
        justify-content: center;

        padding: 100px 50px;
    }

    .inner {
        flex-grow: 1;
        max-width: 800px;
    }

    .list {
        margin-top: 75px;

        .resource {
            padding: 20px 30px;

            .left {
                flex-grow: 1;

                .title {
                    font-weight: 500;
                    font-size: 26px;
                }

                .properties {
                    justify-content: space-between;

                    margin-top: 10px;
                    margin-left: 25px;
                    margin-right: 35px;

                    :global(.property) {
                        margin-top: 5px;
                    }
                }
            }

            .right {
                text-align: right;

                font-style: italic;
                font-size: 16px;

                color: #3D4242;

                .views {
                    margin-top: 15px;
                }
            }
        }
    }
</style>