<template>
    <div class="accueil">
        <header>
            <h1>Mon Portfolio</h1>
            <p>Bienvenue sur mon portfolio</p>
        </header>
        <section>
            <h2>Projets</h2>
            <ul>
                <li v-for="project in projects" :key="project.id">
                    <h3>{{ project.name }}</h3>
                    <p>{{ project.description }}</p>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
export default {
    name: 'Accueil',
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
.home {
    text-align: center;
}
header {
    background: #f5f5f5;
    padding: 2em;
}
section {
    margin: 2em;
}
</style>
