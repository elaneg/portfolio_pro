<script setup>
import {RouterLink, RouterView, useRoute} from 'vue-router'
import HeaderType from "@/components/HeaderType.vue";

const route = useRoute();
</script>

<template>
    <div class="app">
        <header class="header">
            <a href="/" class="logo-link">
                <img src="../public/logo_home.svg" alt="Accueil" class="logo-svg"/>
            </a>
            <nav class="nav">
                <router-link to="/projets" class="nav-link">
                    <img src="../public/logo_projets.svg" alt="projets" class="logo-svg-nav"/>
                    Mes projets</router-link>
                <router-link to="/apropos" class="nav-link">
                    <img src="../public/logo_about.svg" alt="à propos" class="logo-svg-nav"/>
                    À propos</router-link>
                <router-link to="/contact" class="nav-link">
                    <img src="../public/logo_contact.svg" alt="contact" class="logo-svg-nav"/>
                    Me contacter</router-link>
            </nav>
        </header>


        <main class="main-content">
            <RouterView/>
        </main>

        <footer class="footer">
            <p>&copy; 2024 - Elane Grandmougin</p>
        </footer>
    </div>
</template>

<style scoped>
:root {
    --primary-color: #453de1; /* Vert pour les éléments principaux */
    --secondary-color: #34495e; /* Bleu foncé pour le texte */
    --background-color: #f4f4f9; /* Fond clair pour une meilleure lisibilité */
    --text-color: #393c41; /* Couleur du texte principal */
    --link-hover-color: #352fa2; /* Couleur au survol des liens */
}

/* Style général */
body {
    font-family: 'Roboto', sans-serif;
    background-color: var(--background-color);
    color: var(--text-color);
    margin: 0;
    padding: 0;
}

/*.app {*/
/*    display: flex;*/
/*    min-height: 100vh;*/
/*    width: 100%;*/
/*    align-items: center;*/
/*    justify-content: center;*/
/*}*/

/* Style du header */
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1vh;
    background-color: white;
    /*box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);*/
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
}

.logo-svg {
    width: 10vh;
    height: auto;
    display: block;
    color: #42b983;
    border-radius: 5px;
    transition: background-color 0.3s ease, color 0.3s ease, background-size .5s;
    background: linear-gradient(to top, rgba(69, 61, 225, 100) 0%, rgba(69, 61, 225, 100) 10%, transparent 10.01%) no-repeat left bottom / 0 100%;
}

.logo-svg:hover {
    background-color: var(--primary-color);
    color: #453de1;
    background-size: 100% 100%;
}

.logo-link {
    text-decoration: none;
}

.nav {
    display: flex;
    gap: 20px;
}

.logo-svg-nav {
    margin-right: 1vh;
}

.nav-link {
    display: flex;
    text-decoration: none;
    color: var(--secondary-color);
    font-size: 1.1em;
    font-weight: 500;
    padding: 10px 15px;
    border-radius: 5px;
    transition: background-color 0.3s ease, color 0.3s ease, background-size .5s;
    background: linear-gradient(to top, rgba(69, 61, 225, 100) 0%, rgba(69, 61, 225, 100) 10%, transparent 10.01%) no-repeat left bottom / 0 100%;
}

.nav-link:hover {
    background-color: var(--primary-color);
    background-size: 100% 100%;
}

/*!* Style du contenu principal *!*/
/*.main-content {*/
/*    padding-bottom: 60px;*/
/*    padding-top: 15vh;*/
/*    margin: 0 auto;*/
/*    flex: 1;*/
/*}*/

/* Style du footer */
.footer {
    background-color: #ffffff;
    color: #1b0742;
    text-align: left;
    margin-left: 2vh;
    padding: 1vh;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
}

.footer p {
    margin: 10px 0;
}

.footer a {
    color: var(--primary-color);
    text-decoration: none;
}

</style>
