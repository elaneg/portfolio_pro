<template>
    <div class="projets" aria-labelledby="projects-title">
        <section>
            <h2 id="projects-title">Projets</h2>
            <ul aria-label="Liste des projets">
                <li v-for="project in projects" :key="project.id" :aria-labelledby="'project-title-' + project.id" :aria-describedby="'project-desc-' + project.id">
                    <h3 :id="'project-title-' + project.id">{{ project.name }}</h3>
                    <p :id="'project-desc-' + project.id">{{ project.description }}</p>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
export default {
    name: 'Projets',
    data() {
        return {
            projects: [
                { id: 1, name: 'Projet 1', description: 'Description du projet 1' },
                { id: 2, name: 'Projet 2', description: 'Description du projet 2' },
                { id: 3, name: 'Projet 3', description: 'Description du projet 3' }
            ]
        };
    }
};
</script>

<style scoped>
.projets {
    font-family: "PT Serif", serif;
}

header {
    background: #f5f5f5;
    padding: 2em;
}

section {
    margin: 2em;
}
</style>
