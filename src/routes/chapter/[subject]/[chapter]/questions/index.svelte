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
    import { title } from '/src/app';

    export let chapter;
</script>

<svelte:head>
    <title>{title(chapter.title + ' (Questions)')}</title>
</svelte:head>

<h1>{chapter.title} - Questions</h1>
