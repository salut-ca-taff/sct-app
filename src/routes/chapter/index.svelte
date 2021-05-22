<script context="module">
    export function load({ page })
    {
        const { subject } = page.params;

        return {
            status: 301,
            redirect: `/browse/${subject}`
        };
    }
</script>