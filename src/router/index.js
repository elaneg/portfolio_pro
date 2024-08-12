import { createRouter, createWebHistory } from 'vue-router'
import Projets from "@/components/Projets.vue";
import Cv from "@/components/About.vue";
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
    ]
})

export default router;
