<script context="module">
    import chapters from '$lib/chapters';

    export function load({ page })
    {
        const { subject, chapter, lesson } = page.params;

        return {
            props: {
                lesson: chapters
                    .find(c => c.subject === subject && c.id === ~~chapter).lessons
                    .find(l => l.id === ~~lesson)
            }
        };
    }
</script>

<script>
    import { title } from '/src/app';

    export let lesson;
</script>

<svelte:head>
    <title>{title(lesson.title)}</title>
</svelte:head>

<h1>{lesson.title}</h1>