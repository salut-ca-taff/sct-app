<script context="module">
    export function load({ page })
    {
        const { subject, chapter } = page.params;

        return {
            status: 301,
            redirect: `/chapter/${subject}/${chapter}/lessons`
        };
    }
</script>