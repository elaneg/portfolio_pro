<template>
    <div class="cv">
        <header>
          A propos
        </header>

        <section class="download">
            <a :href="cvLink" download="cv_elane_grandmougin.pdf">
                <button>Télécharger mon CV</button>
            </a>
        </section>

        <section class="description">
            <h2>À propos de moi</h2>
            <p>{{ careerSummary }}</p>
        </section>

    </div>
</template>

<script>
export default {
    name: 'Apropos',
    data() {
        return {
            cvLink: '/cv_elane_grandmougin.pdf',
            careerSummary: `
        Ayant grandi avec un ordinateur dans les mains, j'ai toujours baigné dans l'informatique et le multimédia.
        J'arrive actuellement à la fin de ma dernière année de bachelor en Métiers du
         Multimédia et de l'Internet (MMI), avec une spécialisation en développement web.
         Forte de deux années d'alternance dans ce domaine, j'ai acquis une solide expérience en POO,
         conception et gestion de bases de données, gestion d'API, utilisation de Symfony, et plus globalement, une expérience
         en back-end.
          Mon parcours m'a permis de maîtriser les langages tels que PHP, JS, CSS et SQL, tout en développant
          un sens aigu de la rigueur et de la résolution de problèmes techniques complexes.
          Aujourd'hui, je suis prête à mettre mes compétences au service de projets innovants,
          et à continuer à apprendre de nouvelles compétences tout en m'adaptant aux nouvelles technologies et différents langages.
      `,
        };
    }
};
</script>

<style scoped>
.cv {
    font-family: Arial, sans-serif;
    padding: 20px;
    max-width: 800px;
    margin: auto;
}
header {
    text-align: center;
    margin-bottom: 20px;
}
header h1 {
    margin: 0;
}
section {
    margin-bottom: 20px;

    section.download {
        text-align: center;
        margin-bottom: 20px;
    }

    section.download button {
        background-color: #42b983;
        color: white;
        border: none;
        padding: 10px 20px;
        cursor: pointer;
        border-radius: 5px;
        font-size: 16px;
    }

    section.download button:hover {
        background-color: #369f70;
    }
}
section h2 {
    border-bottom: 1px solid #ccc;
    padding-bottom: 5px;
}
ul {
    list-style: none;
    padding: 0;
}
ul li {
    margin-bottom: 10px;
}
</style>
