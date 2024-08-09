<template>
    <div class="accueil">
        <p class="tagline">
            Bienvenue sur mon portfolio où vous pourrez découvrir mes différents projets.
        </p>
        <div class="photo-container">
            <img :src="photoUrl" alt="Photo" class="photo"/>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Accueil',
    data() {
        return {
            photoUrl: ('/photo.jpg')
        };
    }
};
</script>

<style scoped>
.accueil {
    text-align: center;
    display: flex;
    justify-content: center;
    margin: 20vh auto;
    align-items: center;
    background-color: var(--background-color);
}

.accueil-header h1 {
    font-size: 2.5em;
    color: var(--primary-color);
    margin-bottom: 20px;
}

.tagline {
    font-size: 1.2em;
    color: var(--text-color);
    font-style: italic;
    margin: 1vh 20vh 0 0;
}

.photo {
    max-width: 300px;
    border-radius: 50%;
    display: block;
    margin-top: 20px;
}

@media (min-width: 1024px) {
    .accueil-header h1 {
        font-size: 3em;
    }

    .tagline {
        font-size: 1.5em;
    }
}
</style>
