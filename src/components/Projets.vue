<template>
    <div class="projets" aria-labelledby="projects-title">
        <section>
            <h2 id="projects-title">Mes projets<br /><br /></h2>
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
                    <h3 :id="'project-title-' + project.id">{{ project.name }}</h3>
                    <p :id="'project-desc-' + project.id">{{ project.description }}</p>
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
                {id: 1, name: 'Projet 1', description: 'Description du projet 1', url: '/projet1'},
                {id: 2, name: 'Projet 2', description: 'Description du projet 2', url: '/projet2'},
                {id: 3, name: 'Projet 3', description: 'Description du projet 3', url: '/projet3'}
            ]
        };
    },
    methods: {
        redirectToProject(url) {
            this.$router.push(url);
        }
    }
};
</script>

<style scoped>

#projects-title {
    font-size: 2.0rem;
}

.projets {
    font-family: "PT Serif", serif;
    padding: 2em;
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    /*grid-template-columns: auto auto auto auto;*/
    gap: 180px;
}

.project-card {
    background-color: #f5f5f5;
    padding: 1em;
    width: 50vh;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.project-card:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.project-card h3 {
    margin-top: 0;
    margin-bottom: 0.5em;
}

.project-card p {
    margin: 0;
}
</style>
