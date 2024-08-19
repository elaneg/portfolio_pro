import {createRouter, createWebHistory} from 'vue-router'
import Projets from "@/components/Projets.vue";
import Cv from "@/components/About.vue";
import Accueil from "@/components/Accueil.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/portfolio_pro_elane/dist/projets',
            name: 'Projets',
            component: Projets
        },
        {
            path: '/portfolio_pro_elane/dist/apropos',
            name: 'Apropos',
            component: Cv
        },
        {
            path: '/portfolio_pro_elane/dist/',
            name: 'Accueil',
            component: Accueil,
        },
    ]
})

export default router;
