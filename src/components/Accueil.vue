<template>
    <div class="accueil">
        <p class="tagline">
            Bonjour, je suis Elane Grandmougin, développeuse full-stack.
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

template{
    font-family: "PT Serif", serif;
}
.accueil {
    text-align: center;
    display: flex;
    justify-content: center;
    margin: 20vh auto;
    align-items: center;
}

.tagline {
    font-size: 1.2em;
    margin: 1vh 20vh 0 0;
}

.photo {
    max-width: 300px;
    border-radius: 50%;
    display: block;
    margin-top: 20px;
    transition: transform 0.5s ease;
}

.photo:hover {
    transform: scale(1.5);
    transition: transform 0.7s ease;
}

</style>
