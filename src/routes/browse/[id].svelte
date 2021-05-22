<script context="module">
    export function load({ page }) {
        const { id } = page.params;

        return {
            props: { id }
        };
    }
</script>

<script>
    import description from '@material-icons/svg/svg/description/round.svg?raw';
    import task from '@material-icons/svg/svg/task/round.svg?raw';
    import done from '@material-icons/svg/svg/done_all/round.svg?raw';
    import question from '@material-icons/svg/svg/question_answer/round.svg?raw';

    import SearchBar from '$lib/components/SearchBar.svelte';

    import subjects from '$lib/subjects';

    export let id;
    $: subject = subjects.find(s => s.id === id);

    let search = '';

    const properties = [
        { key: 'lessons', label: 'cours / fiche', icon: description },
        { key: 'subjects', label: 'sujet', icon: task },
        { key: 'exercices', label: 'exercice', icon: done },
        { key: 'questions', label: 'question', icon: question }
    ];
</script>

{#if subject}
    <h1 id="title">{subject.label}</h1>

    <SearchBar bind:value={search} />

    <div id="chapters" class="column smooth-scroll">
        {#each subject.chapters.filter(c => c.title.toLowerCase().includes(search.toLowerCase())) as chapter}
            <div class="chapter card clickable column">
                <div class="title">{chapter.title}</div>
                <div class="properties column">
                    {#each properties as { key, label, icon }}
                        <div class="property">
                            <div class="icon">{@html icon}</div>
                            <div class="label">{chapter[key]} {label}{chapter[key] > 1 ? 's' : ''}</div>
                        </div>
                    {/each}
                </div>
            </div>
        {/each}
    </div>
{/if}

<style lang="scss">
    #title {
        margin-bottom: 20px;
    }

    #chapters {
        margin-top: 50px;
    }

    .chapter {
        margin-bottom: 35px;
        padding: 15px 22px;

        .title {
            font-weight: 500;
            font-size: 26px;
        }

        .properties {
            margin-top: 15px;
            margin-left: 25px;

            .property {
                align-items: center;
                margin-bottom: 2px;

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
            }
        }
    }
</style>