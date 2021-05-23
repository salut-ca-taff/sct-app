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

    import Property from '$lib/components/Property.svelte';
    import ListView from '$lib/components/ListView.svelte';

    import levels from '$lib/levels';

    export let chapter;
</script>

<svelte:head>
    <title>{title(chapter.title + ' (Cours / fiches)')}</title>
</svelte:head>

<ListView content={chapter.lessons} let:resource>
    <div class="column">
        <Property type="label" icon={description} label={resource.small ? 'Fiche' : 'Cours'} />
        <Property type="label" icon={trending} label={'Niveau ' + levels[resource.level]} />
    </div>
    <div class="column">
        <Property icon={copy} label="page" value={resource.pages.length} />
        <Property icon={questions} label="commentaire" value={resource.comments.length} />
    </div>
</ListView>