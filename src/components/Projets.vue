<template>
    <div class="projets" aria-labelledby="projects-title">
        <section>
            <h2 id="projects-title">Mes projets<br/><br/></h2>
            <div class="projects-grid" aria-label="Liste des projets">
                <div
                        v-for="project in projects"
                        :key="project.id"
                        class="project-card"
                        :aria-labelledby="'project-title-' + project.id"
                        :aria-describedby="'project-desc-' + project.id"
                        @click="redirectToProject(project.url)"
                        role="link"
                        tabindex="0">
                    <img :src="project.image" :alt="project.name" class="project-image"/>
                    <h3 :id="'project-title-' + project.id">{{ project.name }}</h3>
                    <p :id="'project-desc-' + project.id">{{ project.description }}</p>
                    <div class="tags">
                        <span v-for="(tag, index) in project.tags" :key="index" class="tag">{{ tag }}</span>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>


<script>
export default {
    name: 'Projets',
    data() {
        return {
            projects: [
                {
                    id: 1,
                    name: 'Lunetterie de Villeroy',
                    description: 'Ce projet consistait à modéliser les bâtiments de la lunetterie en 3D' +
                        ' et de l\'intégrer à un site, à réaliser en groupe. Avec mes deux camarades, nous avons' +
                        ' choisi de coder le site en ThreeJs afin d\'intégrer le modèle 3D et de pouvoir intéragir avec.' +
                        ' ThreeJs n\'étant pas vue en cours à l\'IUT, il a fallu nous documenter nous-mêmes sur cette technologie' +
                        ' et sa mise en production, ce qui a consisté tout le défi de ce projet. En premier lieu il a fallu créer' +
                        ' le modèle avec Blender, puis développer le site. En parallèle nous avons créé un site type kickstarter' +
                        ' afin d\'avoir un suivi du développement du projet. En groupe, nous avons créé une agence fictive,' +
                        ' Format3D, et avons écrit un pitch autour de l\'agence et du site pour simuler' +
                        ' la demande d\'investissements dans le projet.',
                    url: 'https://mmi21b07.mmi-troyes.fr/ws501/',
                    image: './public/lunetterie.jpg',
                    tags: ['ThreeJs', 'Blender']
                },
                {
                    id: 2,
                    name: 'Portfolio universitaire',
                    description: 'Dans le cadre de la fin du BUT MMI, nous devions réaliser un portfolio au format libre qui reprend' +
                        'chaque compétence à valider ; Ce site one-page montre quelques projets réalisés en cours et à quelles' +
                        ' compétences (AC, Apprentissages Critiques) ils correspondent. J\'ai réalisé ce site avec VueJs pour un' +
                        ' rendu plus dynamique et pour pouvoir gérer les thèmes sombres et clairs.',
                    url: 'https://mmi21b07.mmi-troyes.fr/portfolio_univ/',
                    image: './public/portfolio_univ.jpg',
                    tags: ['VueJs', 'Front-end']
                },
                {
                    id: 3,
                    name: 'Portfolio professionnel',
                    description: 'J\'ai créé ce portfolio dans le cadre de ma dernière année de formation. ' +
                        'Il avait donc un objectif à la fois professionnel, universitaire et un peu personnel. ' +
                        'Ayant plus d\'expérience en back-end, j\'ai voulu faire quelque chose visuellement simple et minimaliste,' +
                        ' et qui soit par-dessus tout accessible et facile à utiliser. Le développement s\'est réalisé étape' +
                        ' par étape, à commencer par la création des branches DEV et MASTER sur github, l\'intégration,' +
                        ' l\'ajout des styles et enfin, la mise en production. Cette dernière a été un défi' +
                        ' car c\'était la première que je la faisais entièrement seule, sans enseignant ou chef de projet,' +
                        ' et ne s\'est pas déroulée sans encombre. D\'un point de vue plus technique, j\'ai choisi de développer' +
                        ' ce portfolio en utilisant VueJs car je souhaitais le rendre dynamique,' +
                        ' sans temps de recharge entre les onglets. J\'ai également pris soin de le rendre accessible ' +
                        'aux lecteurs d\'écran via des balises ARIA dans la structure HTML, et ai effectué ' +
                        'des recherches dessus de mon côté afin de les mettre correctement en place.',
                    url: 'https://mmi21b07.mmi-troyes.fr/portfolio_univ/',
                    image: './public/protfolio_pro.jpg',
                    tags: ['VueJs', 'Front-end']
                },
            ]
        };
    },
    methods: {
        redirectToProject(url) {
            window.location.href = url;
        }
    }
};

</script>

<style scoped>
#projects-title {
    font-size: 2.0rem;
}

.projets {
    font-family: "Mate", serif;
}

.projects-grid {
    display: grid;
    grid-template-columns: auto auto auto auto;
    gap: 70px;
}

.project-card {
    background-color: rgba(137, 167, 220, 0.59);
    width: 60vh;
    height: 120vh;
    border-radius: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    display: flex;
    flex-direction: column;
    text-align: left;
    position: relative;
}

.project-card:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
}

.project-card img.project-image {
    width: 100%;
    border-radius: 20px 20px 0 0;
    margin-bottom: 1em;
}

.project-card h3, .project-card p {
    margin-top: 0.3rem;
    margin-bottom: 0.5em;
    padding-left: 2vh;
}

.project-card h3 {
    font-size: 1.7rem;
}

.project-card p {
    font-size: 1.1rem;
    padding: 2vh;
}

.tags {
    position: absolute;
    display: flex;
    gap: 10px;
    padding-left: 2vh;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    bottom: 0;
    left: 0;
}

.tag {
    background-color: rgb(227, 151, 162);
    padding: 0.3em 0.6em;
    border-radius: 15px;
    font-size: 1.1rem;
    border: solid 0.5px;
}

@media (max-width: 1024px) {

    .projects-grid {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 2vh;
    }

    .project-card {
        width: 70vh;
    }
}


</style>
