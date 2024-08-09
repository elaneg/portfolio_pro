import { createRouter, createWebHistory } from 'vue-router'
import Projets from "@/components/Projets.vue";
import Cv from "@/components/Cv.vue";
import Accueil from "@/components/Accueil.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/projets',
            name: 'Projets',
            component: Projets
        },
        {
            path: '/apropos',
            name: 'Apropos',
            component: Cv
        },
        {
            path: '/',
            name: 'Accueil',
            component: Accueil,
        },
        // {
        //     path: '/ficheEpisode/:id',
        //     name: 'ficheEpisode',
        //     component: FicheEpisode
        // }
    ]
})

export default router;
