<script context="module">
    import subjects from '$lib/subjects';

    export function load({ page })
    {
        const { id } = page.params;

        return {
            props: {
                subject: subjects.find(s => s.id === id)
            }
        };
    }
</script>

<script>
    import description from '@material-icons/svg/svg/description/round.svg?raw';
    import task from '@material-icons/svg/svg/task/round.svg?raw';
    import done from '@material-icons/svg/svg/done_all/round.svg?raw';
    import question from '@material-icons/svg/svg/question_answer/round.svg?raw';

    import SearchBar from '$lib/components/SearchBar.svelte';
    import Property from '$lib/components/Property.svelte';

    export let subject;
    let search = '';

    const properties = [
        { key: 'lessons', label: 'cours / fiche', icon: description },
        { key: 'subjects', label: 'sujet', icon: task },
        { key: 'exercises', label: 'exercice', icon: done },
        { key: 'questions', label: 'question', icon: question }
    ];
</script>

<h1 id="title">{subject.label}</h1>

<SearchBar bind:value={search} />

<div id="chapters" class="column smooth-scroll">
    {#each subject.chapters.filter(c => c.title.toLowerCase().includes(search.toLowerCase())) as chapter}
        <a class="chapter card column" href={`/chapter/${subject.id}/${chapter.id}`} sveltekit:prefetch>
            <div class="title">{chapter.title}</div>
            <div class="properties column">
                {#each properties as { key, label, icon }}
                    <Property {icon} value={chapter[key]} {label} />
                {/each}
            </div>
        </a>
    {/each}
</div>

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
        }
    }
</style>