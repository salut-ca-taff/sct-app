<script context="module">
    import chapters from '$lib/chapters';

    export function load({ page })
    {
        if (page.path.startsWith('/chapter/')) {
            const { subject, chapter } = page.params;

            return {
                props: {
                    base: `/chapter/${subject}/${chapter}`,
                    chapter: chapters.find(c => c.subject === subject && c.id === ~~chapter)
                }
            };
        }

        return {};
    }
</script>

<script>
    import '../app.scss';

    import home from '@material-icons/svg/svg/home/round.svg?raw';
    import sort from '@material-icons/svg/svg/sort/round.svg?raw';
    import person from '@material-icons/svg/svg/person/round.svg?raw';
    import logout from '@material-icons/svg/svg/logout/round.svg?raw';
    import info from '@material-icons/svg/svg/info/round.svg?raw';
    import description from '@material-icons/svg/svg/description/round.svg?raw';
    import task from '@material-icons/svg/svg/task/round.svg?raw';
    import done from '@material-icons/svg/svg/done_all/round.svg?raw';
    import question from '@material-icons/svg/svg/question_answer/round.svg?raw';
    import back from '@material-icons/svg/svg/arrow_back/round.svg?raw';

    import Navigation from '$lib/components/Navigation.svelte';

    export let base;
    export let chapter;

    $: nav = chapter ? {
        title: chapter.title,
        topRoutes: [
            { label: 'Cours / fiches', icon: description, href: base + '/lessons' },
            { label: 'Sujets', icon: task, href: base + '/subjects' },
            { label: 'Exercices', icon: done, href: base + '/exercises' },
            { label: 'Questions', icon: question, href: base + '/questions' }
        ],
        bottomRoutes: [
            { label: 'Retour', icon: back, href: '/browse' }
        ]
    } : {
        title: '¿ Salut ça taff ?',
        topRoutes: [
            { label: 'Accueil', icon: home, href: '/' },
            { label: 'Parcourir', icon: sort, href: '/browse' },
            { label: 'Profil', icon: person, href: '/profile' }
        ],
        bottomRoutes: [
            { label: 'Se déconnecter', icon: logout, href: '/logout' },
            { label: 'A Propos', icon: info, href: '/about' }
        ]
    };
</script>

<div id="sidenav" class="column">
    <h1 id="title">{nav.title}</h1>

    <Navigation routes={nav.topRoutes} />
    <Navigation routes={nav.bottomRoutes} />

    <div id="user">
        <img id="avatar" alt="Photo de profil" src="https://avatars.githubusercontent.com/u/8712146?v=4" />
        <div class="column">
            <span class="name">Adrien Navratil</span>
            <span class="school">EPITA</span>
        </div>
    </div>
</div>

<div id="content">
    <slot />
</div>

<style lang="scss">
    @import '../styles/vars';

    #sidenav {
        justify-content: space-between;

        width: 275px;
        margin: 65px 55px;

        #title {
            font-size: 32px;

            white-space: nowrap;
        }

        #user {
            align-items: center;

            #avatar {
                $size: 50px;

                border-radius: 50%;

                width: $size;
                height: $size;

                margin-right: 25px;
            }

            .name {
                font-weight: 500;
                font-size: 20px;

                margin-bottom: 5px;
            }

            .school {
                font-size: 16px;

                color: $color-school;
            }
        }
    }

    #content {
        flex-grow: 1;
    }
</style>