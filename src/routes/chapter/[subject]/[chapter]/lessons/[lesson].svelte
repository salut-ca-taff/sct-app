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
    import ContentView from '$lib/components/ContentView.svelte';

    export let lesson;
</script>

<ContentView resource={lesson}>
    <iframe id="content" src={lesson.content}></iframe>
</ContentView>

<style lang="scss">
    #content {
        border: none;
        outline: none;

        flex-grow: 1;

        margin-bottom: 50px;
    }
</style>