import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: sveltePreprocess(),
    kit: {
        target: '#app'
    }
};

export default config;
