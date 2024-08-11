import { createRouter, createWebHistory } from 'vue-router'
import Projets from "@/components/Projets.vue";
import Cv from "@/components/Cv.vue";
import Accueil from "@/components/Accueil.vue";
import Contact from "@/components/Contact.vue";

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
        {
            path: '/contact',
            name: 'Contact',
            component: Contact
        },
    ]
})

export default router;
