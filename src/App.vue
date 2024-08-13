<template>
    <div class="app">
        <header :class=" isDarkMode ? 'header-dark' : 'header'" aria-label="Menu principal">
            <a href="/" class="logo-link">
                <img
                        :src=" isDarkMode ? '../public/logo_home_night.svg' : '../public/logo_home.svg' "
                        alt="Accueil"
                        :class=" isDarkMode ? 'logo-svg-dark' : 'logo-svg'"
                        aria-label="Retour à l'accueil"
                />
            </a>
            <div id="google_translate_element" class="translate-button"></div>
            <nav class="nav" aria-label="Navigation principale">
                <router-link
                        to="/projets"
                        :class="isDarkMode ? 'nav-link-dark' : 'nav-link'"
                        aria-label="Accéder à la page de mes projets"
                >
                    <img
                            :src="isDarkMode ? '../public/logo_projets_night.svg' : '../public/logo_projets.svg'"
                            alt="projets"
                            class="logo-svg-nav"
                            aria-hidden="true"
                    />
                    Mes projets
                </router-link>
                <router-link
                        to="/apropos"
                        :class="isDarkMode ? 'nav-link-dark' : 'nav-link'"
                        aria-label="Accéder à la page à propos de moi"
                >
                    <img
                            :src="isDarkMode ? '../public/logo_about_night.svg' : '../public/logo_about.svg'"
                            alt="à propos"
                            class="logo-svg-nav"
                            aria-hidden="true"
                    />
                    À propos
                </router-link>
                <img
                        :src="isDarkMode ? '../public/logo_light.svg' : '../public/logo_night.svg'"
                        alt="toggle theme"
                        class="logo-svg-theme"
                        @click="toggleTheme"
                        aria-label="Changer le thème"
                        role="button"
                />
            </nav>
        </header>

        <main class="main-content" aria-label="Contenu principal">
            <RouterView/>
        </main>

        <footer :class="isDarkMode ? 'footer_dark' : 'footer'" aria-label="Pied de page">
            <p>&copy; 2024 - Elane Grandmougin</p>

<!--            <div :class="isDarkMode ? 'contact-details-dark' :'contact-details'" aria-label="Détails de contact">-->

                <section class="reseaux" aria-label="Section des réseaux">
                    <a href="https://github.com/elaneg" target="_blank" rel="noopener noreferrer"
                       aria-label="Lien vers mon profil GitHub">
                        <img
                                :src=" isDarkMode ? '../public/github_dark.png' : '../public/github.png' "
                                alt="github"
                                class="logo-footer"
                                aria-hidden="true"
                        />

                    </a>
                    <a href="https://www.linkedin.com/in/elane-grandmougin-1128a4224/" target="_blank"
                       rel="noopener noreferrer" aria-label="Lien vers mon profil LinkedIn">
                        <img
                                :src=" isDarkMode ? '../public/linkedin_dark.png' : '../public/linkedin.png' "
                                alt="linkedin"
                                class="logo-footer"
                                aria-hidden="true"
                        />

                    </a>
                </section>

                <section class="contact" aria-label="Section de contact">

                    <a href="mailto:elane.grandmougin@gmail.com" class="mailto">
                        <button role="button" aria-label="Contacter Elane Grandmougin "
                                style="font-family: 'Mate Serif', serif">
                            <img
                                    src="../public/logo_contact_night.svg "
                                    alt="contact"
                                    class="logo-svg-nav"
                                    aria-hidden="true"
                            />
                            Me contacter
                        </button>
                    </a>
                </section>

<!--            </div>-->
        </footer>
    </div>
</template>

<script setup>
import {ref, watchEffect} from 'vue';
import {onMounted, onUpdated} from "vue";
import {useRouter} from "vue-router";

const isDarkMode = ref(false);
const router = useRouter();

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

//fonctions pr google trad
const initGoogleTranslate = () => {
    new google.translate.TranslateElement(
        {pageLanguage: "fr", autoDisplay: false},
        "google_translate_element"
    );
};

onMounted(() => {
    initGoogleTranslate();
});

onUpdated(() => {
    initGoogleTranslate();
});

router.afterEach(() => {
    initGoogleTranslate();
});

</script>

<style scoped>

/* Style général */
body {
    font-family: "Mate", serif;
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
    border-bottom: solid #cccccc 1px;
    background-color: var(--background-color-light);
    color: var(--text-color-light);
}

.header-dark {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1vh;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    border-bottom: solid #cccccc 1px;
    background-color: var(--background-color-dark);
    color: var(--text-color-dark);
}

#google_translate_element {
    margin-left: -100vh;
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
    font-size: 1.7em;
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
    font-size: 1.7em;
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
    margin: 12vh auto;
    z-index: 1;
}

/* Style du footer */
.footer, .footer_dark {
    width: 100%;
    text-align: left;
    padding: 1vh 2vh;
    position: relative;
    bottom: 0;
    left: 0;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.footer p {
    margin: 0;
    font-size: 1.2rem;
}

.mailto {
    text-align: center;
    padding: 2vh;
}

.logo-footer {
    width: 6vh;
}

.footer_dark {
    color: var(--text-color-dark);
}

.footer, .footer_dark a {
    text-decoration: none;
}

section.contact button {
    background-color: var(--secondary-color);
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 20px;
    font-size: 1.2rem;
    transition: background-color 0.2s ease, transform 0.2s ease;
    display: flex;
}

section.contact button:hover {
    background-color: var(--primary-color);
    transition: background-color 0.7s ease;
}

.contact-details, .contact-details-dark {
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.reseaux {
    margin-right: 3vh;

}

.reseaux a, section.contact a {
    text-decoration: none;
}

img.logo-footer {
    margin-right: 3vh;
}


.logo-svg-theme {
    cursor: pointer;
    transition: filter 0.3s ease;
}

.logo-svg-theme:hover {
    filter: brightness(1.2);
}

@media (max-width: 1024px) {

    .reseaux {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin-right: 0;
    }

    .footer {
        padding: 0;
        display: flex;
        justify-content: space-around;
    }

    .footer p {
        font-size: 0.9rem;
    }

    img.logo-footer {
        margin-right: 2vh;
    }

    .mailto button{
        width: 30vh;
    }

}

</style>
