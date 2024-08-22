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
                    description: 'Description du projet 1',
                    url: 'https://mmi21b07.mmi-troyes.fr/ws501/',
                    image: './public/lunetterie.jpg',
                    tags: ['ThreeJs', 'Blender']
                },
                {
                    id: 2,
                    name: 'Portfolio universitaire',
                    description: 'Description du projet 2',
                    url: 'https://mmi21b07.mmi-troyes.fr/portfolio_univ/',
                    image: './public/portfolio_univ.jpg',
                    tags: ['VueJs', 'Front-end']
                },
            ]
        };
    },
    methods: {
        redirectToProject(url) {
            window.location.href=url;
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
    border-radius: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    display: flex;
    flex-direction: column;
    text-align: left;
}

.project-card:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
}

.project-card img.project-image {
    max-width: 100%;
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
    font-size: 1.2rem;
}

.tags {
    display: flex;
    gap: 10px;
    padding-left: 2vh;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
}

.tag {
    background-color: rgb(227, 151, 162);
    padding: 0.3em 0.6em;
    border-radius: 15px;
    font-size: 1.1rem;
}

@media (max-width: 1024px) {

    .projects-grid {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .project-card{
        width: 70vh;
    }
}


</style>
