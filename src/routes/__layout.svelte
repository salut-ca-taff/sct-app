<script>
    import '../app.scss';

    import home from '@material-icons/svg/svg/home/round.svg?raw';
    import sort from '@material-icons/svg/svg/sort/round.svg?raw';
    import person from '@material-icons/svg/svg/person/round.svg?raw';
    import logout from '@material-icons/svg/svg/logout/round.svg?raw';
    import info from '@material-icons/svg/svg/info/round.svg?raw';

    import { chapter } from '$lib/stores';

    import Navigation from '$lib/components/Navigation.svelte';

    $: nav = $chapter ? {} : {
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