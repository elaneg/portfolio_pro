<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderType from "@/components/HeaderType.vue";
</script>

<template>
    <header class="header">
        <a href="/" class="logo-link">
            <HeaderType msg="Elane Grandmougin - mon portfolio" />
        </a>
        <nav class="nav">
            <router-link :to="{name: 'Projets'}" class="nav-link">Mes projets</router-link>
            <router-link to="/apropos" class="nav-link">À propos</router-link>
        </nav>
    </header>

    <main class="main-content">
        <RouterView />
    </main>
</template>

<style scoped>
/* Variables de couleurs pour une personnalisation facile */
:root {
    --primary-color: #42b983; /* Vert pour les éléments principaux */
    --secondary-color: #34495e; /* Bleu foncé pour le texte */
    --background-color: #f4f4f9; /* Fond clair pour une meilleure lisibilité */
    --text-color: #2c3e50; /* Couleur du texte principal */
    --link-hover-color: #369f70; /* Couleur au survol des liens */
}

/* Style général */
body {
    font-family: 'Roboto', sans-serif;
    background-color: var(--background-color);
    color: var(--text-color);
    margin: 0;
    padding: 0;
}

/* Style du header */
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    position: fixed; /* Fixe le header en haut */
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000; /* Assure que le header est au-dessus du contenu */
}

.logo-link {
    text-decoration: none;
}

.nav {
    display: flex;
    gap: 20px;
}

.nav-link {
    text-decoration: none;
    color: var(--secondary-color);
    font-size: 1.1em;
    font-weight: 500;
    padding: 10px 15px;
    border-radius: 5px;
    transition: background-color 0.3s ease, color 0.3s ease;
}

.nav-link:hover {
    background-color: var(--primary-color);
    color: white;
}

/* Style du contenu principal */
.main-content {
    padding: 80px 20px 20px; /* Ajoute un padding supérieur pour éviter que le contenu ne soit caché sous le header fixe */
    max-width: 1200px;
    margin: 0 auto;
}

/* Style pour écrans larges */
@media (min-width: 1024px) {
    .header {
        padding: 20px 40px;
    }

    .nav-link {
        font-size: 1.2em;
    }

    .main-content {
        padding: 100px 20px 20px; /* Augmente le padding supérieur pour les écrans larges */
    }
}
</style>
