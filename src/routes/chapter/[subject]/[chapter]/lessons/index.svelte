<script context="module">
    import chapters from '$lib/chapters';

    export function load({ page })
    {
        const { subject, chapter } = page.params;

        return {
            props: {
                chapter: chapters.find(c => c.subject === subject && c.id === ~~chapter)
            }
        };
    }
</script>

<script>
    import description from '@material-icons/svg/svg/description/round.svg?raw';
    import trending from '@material-icons/svg/svg/trending_up/round.svg?raw';
    import copy from '@material-icons/svg/svg/file_copy/round.svg?raw';
    import questions from '@material-icons/svg/svg/question_answer/round.svg?raw';

    import { title } from '/src/app';

    import { page } from '$app/stores';

    import SearchBar from '$lib/components/SearchBar.svelte';
    import Property from '$lib/components/Property.svelte';

    export let chapter;

    let search = '';
</script>

<svelte:head>
    <title>{title(chapter.title + ' (Cours / fiches)')}</title>
</svelte:head>

<div id="lessons">
    <div id="lessons-inner" class="column">
        <SearchBar bind:value={search} />

        <div id="lessons-list" class="column">
            {#each chapter.lessons.filter(l => l.title.toLowerCase().includes(search.toLowerCase())) as lesson}
                <a class="lesson card" href={`${$page.path}/${lesson.id}`} sveltekit:prefetch>
                    <div class="left column">
                        <div class="title">{lesson.title}</div>
                        <div class="properties">
                            <div class="column">
                                <Property type="label" icon={description} label={lesson.type === 'lesson' ? 'Cours' : 'Fiche'} />
                                <Property type="label" icon={trending} label={'Niveau ' + (lesson.level === 'prepa' ? 'prepa' : 'classique')} />
                            </div>
                            <div class="column">
                                <Property icon={copy} label="page" value={lesson.pages.length} />
                                <Property icon={questions} label="commentaire" value={lesson.comments.length} />
                            </div>
                        </div>
                    </div>
                    <div class="right column">
                        <span>Posté par {lesson.author}</span>
                        <span>Le {lesson.posted.toLocaleDateString()}</span>

                        <span class="views">{lesson.views} vue{lesson.views > 1 ? 's' : ''}</span>
                    </div>
                </a>
            {/each}
        </div>
    </div>
</div>

<style lang="scss">
    #lessons {
        flex-grow: 1;
        justify-content: center;

        padding: 100px 50px;
    }

    #lessons-inner {
        flex-grow: 1;
        max-width: 800px;
    }

    #lessons-list {
        margin-top: 75px;
    }

    .lesson {
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
</style>