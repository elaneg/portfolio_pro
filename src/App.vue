<template>
    <div class="app">
        <header class="header">
            <a href="/" class="logo-link">
                <img :src=" isDarkMode ? '../public/logo_home_night.svg' : '../public/logo_home.svg' " alt="Accueil" :class=" isDarkMode ? 'logo-svg-dark' : 'logo-svg'"/>
            </a>
            <nav class="nav">
                <router-link to="/projets" :class="isDarkMode ? 'nav-link-dark' : 'nav-link'">
                    <img :src="isDarkMode ? '../public/logo_projets_night.svg' : '../public/logo_projets.svg'" alt="projets" class="logo-svg-nav"/>
                    Mes projets
                </router-link>
                <router-link to="/apropos" :class="isDarkMode ? 'nav-link-dark' : 'nav-link'">
                    <img :src="isDarkMode ? '../public/logo_about_night.svg' : '../public/logo_about.svg'" alt="à propos" class="logo-svg-nav"/>
                    À propos
                </router-link>
                <router-link to="/contact" :class="isDarkMode ? 'nav-link-dark' : 'nav-link'">
                    <img :src=" isDarkMode ? '../public/logo_contact_night.svg' : '../public/logo_contact.svg' " alt="contact" class="logo-svg-nav"/>
                    Me contacter
                </router-link>
                <img
                    :src="isDarkMode ? '../public/logo_light.svg' : '../public/logo_night.svg'"
                    alt="toggle theme"
                    class="logo-svg-theme"
                    @click="toggleTheme"
                />
            </nav>
        </header>

        <main class="main-content">
            <RouterView/>
        </main>

        <footer :class="isDarkMode ? 'footer_dark' : 'footer'">
            <p>&copy; 2024 - Elane Grandmougin</p>
        </footer>
    </div>
</template>

<script setup>
import {ref, watchEffect} from 'vue';

const isDarkMode = ref(false);

// Fonction pour basculer le thème
const toggleTheme = () => {
    isDarkMode.value = !isDarkMode.value;
    document.body.className = isDarkMode.value ? 'dark-mode' : 'light-mode';
};

// Applique le thème initial basé sur les préférences de l'utilisateur ou un état par défaut
if (localStorage.getItem('theme') === 'dark') {
    isDarkMode.value = true;
    document.body.className = 'dark-mode';
} else {
    document.body.className = 'light-mode';
}

// Enregistrez le thème choisi dans le stockage local
watchEffect(() => {
    localStorage.setItem('theme', isDarkMode.value ? 'dark' : 'light');
});
</script>

<style scoped>

/* Style général */
body {
    font-family: "PT Serif", serif;
    margin: 0;
    padding: 0;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1vh;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
}

.logo-svg {
    margin-left: 1vh;
    padding-bottom: 1vh;
    width: 7vh;
    height: auto;
    display: block;
    transition: background-color 0.3s ease, color 0.3s ease, background-size .5s;
    background: linear-gradient(to top, rgba(69, 61, 225, 100) 0%, rgba(69, 61, 225, 100) 10%, transparent 10.01%) no-repeat left bottom / 0 100%;
}

.logo-svg:hover {
    color: var(--primary-color);
    background-size: 100% 100%;
}

.logo-svg-dark {
    margin-left: 1vh;
    padding-bottom: 1vh;
    width: 7vh;
    height: auto;
    display: block;
    transition: background-color 0.3s ease, color 0.3s ease, background-size .5s;
    background: linear-gradient(to top, rgb(97, 92, 180, 100) 0%, rgb(97, 92, 180, 100) 10%, transparent 10.01%) no-repeat left bottom / 0 100%;
}

.logo-svg-dark:hover {
    background-size: 100% 100%;
}

.logo-link {
    text-decoration: none;
}

.nav {
    display: flex;
    gap: 20px;
    margin-right: 2vh;
}

.logo-svg-nav {
    margin-right: 1vh;
}

.nav-link {
    display: flex;
    text-decoration: none;
    font-size: 1.1em;
    font-weight: 500;
    padding: 10px 15px;
    border-radius: 5px;
    color: var(--text-color-light);
    transition: background-color 0.3s ease, color 0.3s ease, background-size .5s;
    background: linear-gradient(to top, rgba(69, 61, 225, 100) 0%, rgba(69, 61, 225, 100) 10%, transparent 10.01%) no-repeat left bottom / 0 100%;
}

.nav-link:hover {
    background-size: 100% 100%;
}

.nav-link-dark {
    display: flex;
    text-decoration: none;
    font-size: 1.1em;
    font-weight: 500;
    padding: 10px 15px;
    border-radius: 5px;
    color: var(--text-color-dark);
    transition: background-color 0.3s ease, color 0.3s ease, background-size .5s;
    background: linear-gradient(to top, rgb(97, 92, 180, 100) 0%, rgb(97, 92, 180, 100) 10%, transparent 10.01%) no-repeat left bottom / 0 100%;
}

.nav-link-dark:hover {
    background-size: 100% 100%;
}

.main-content {
    margin: 20vh auto;
}

/* Style du footer */
.footer, .footer_dark {
    text-align: left;
    margin-left: 2vh;
    padding: 1vh;
    position: absolute;
    bottom: 0;
    left: 0;
}

.footer_dark {
    color: var(--text-color-dark);
}

.footer, .footer_dark p {
    margin: 10px 0;
}

.footer, .footer_dark a {
    text-decoration: none;
}

.logo-svg-theme {
    cursor: pointer;
    transition: filter 0.3s ease;
}

.logo-svg-theme:hover {
    filter: brightness(1.2);
}
</style>
