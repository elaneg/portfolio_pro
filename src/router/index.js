import { createRouter, createWebHistory } from 'vue-router'
import Projets from "@/components/Projets.vue";
import Cv from "@/components/Cv.vue";

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
        // {
        //     path: '/character/:id',
        //     component: FichePersos,
        // },
        // {
        //     path: '/ficheEpisode/:id',
        //     name: 'ficheEpisode',
        //     component: FicheEpisode
        // }
    ]
})

export default router;
