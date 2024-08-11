<template>
    <div class="cv" aria-labelledby="cv-title">

        <section class="description" aria-labelledby="about-title">
            <h2 id="about-title">À propos de moi</h2>
            <p class="resume" aria-label="Résumé de carrière">{{ careerSummary }}</p>
        </section>

        <!-- Section pour le bouton de téléchargement fixé en bas à droite -->
        <section class="download" aria-label="Section de téléchargement du CV">
            <a :href="cvLink" download="cv_elane_grandmougin.pdf">
                <button role="button" aria-label="Télécharger mon CV en PDF" style="font-family: 'PT Serif', serif">
                    Télécharger mon CV
                </button>
            </a>
        </section>
    </div>
</template>

<script>
export default {
    name: 'Cv',
    data() {
        return {
            cvLink: '/cv_elane_grandmougin.pdf',
            careerSummary: `
        Ayant grandi avec un ordinateur dans les mains, j'ai toujours baigné dans l'informatique et le multimédia.
        J'arrive actuellement à la fin de ma dernière année de bachelor en Métiers du Multimédia et de l'Internet (MMI),
        avec une spécialisation en développement web. Forte de deux années d'alternance dans ce domaine,
        j'ai acquis une solide expérience en POO, conception et gestion de bases de données, gestion d'API,
        utilisation de Symfony, et plus globalement, une expérience en back-end. Mon parcours m'a permis de maîtriser
        les langages tels que PHP, JS, CSS et SQL, tout en développant un sens aigu de la rigueur et de la résolution
        de problèmes techniques complexes. Aujourd'hui, je suis prête à mettre mes compétences au service de projets
        innovants, et à continuer à apprendre de nouvelles compétences tout en m'adaptant aux nouvelles technologies
        et différents langages.
      `,
        };
    }
};
</script>

<style scoped>
.cv {
    font-family: "PT Serif", serif;
    padding: 20px;
    max-width: 800px;
    margin: auto;
    position: relative;
    display: flex;
    flex-direction: column;
}

header {
    text-align: center;
    margin-bottom: 20px;
}

header h1 {
    margin: 0;
}

.apropos {
    color: var(--secondary-color);
}

.description h2 {
    font-size: 6vh;
}

.resume {
    text-align: left;
    font-size: 1.2em;
}

section {
    margin-bottom: 20px;
}

section h2 {
    border-bottom: 1px solid #ccc;
    padding-bottom: 5px;
}

/* Section pour le bouton de téléchargement */
section.download {
    top: 75vh;
    right: 20px;
    text-align: center;
    margin-top: 2vh;
}

section.download button {
    background-color: var(--secondary-color);
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 20px;
    font-size: 16px;
    transition: background-color 0.2s ease, transform 0.2s ease;
}

section.download button:hover {
    background-color: var(--primary-color);
    transform: scale(1.2);
    transition: transform 0.7s ease;
}

ul {
    list-style: none;
    padding: 0;
}

ul li {
    margin-bottom: 10px;
}
</style>
