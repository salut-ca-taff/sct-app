<script context="module">
    import chapters from '$lib/chapters';

    export function load({ page })
    {
        const { subject, chapter, id } = page.params;

        return {
            props: {
                subject: chapters
                    .find(c => c.subject === subject && c.id === ~~chapter).subjects
                    .find(l => l.id === ~~id)
            }
        };
    }
</script>

<script>
    import ContentView from '$lib/components/ContentView.svelte';

    export let subject;
</script>

<ContentView resource={subject}>
    <iframe id="content" src={subject.content[0]}></iframe>
</ContentView>

<style lang="scss">
    #content {
        border: none;
        outline: none;

        flex-grow: 1;

        margin-bottom: 50px;
    }
</style>