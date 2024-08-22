<template>
    <div class="accueil" aria-labelledby="accueil-title">
        <div class="taglines">
            <p class="tagline">
                Bonjour, je suis <strong>Elane Grandmougin</strong>, développeuse <strong>full-stack</strong>.
            </p>
            <p class="tagline2">Je développe des applications en plaçant l'expérience utilisateur et l'inclusivité au
                cœur de mes projets.</p>
        </div>
        <div class="photo-container" aria-label="Photo de Elane Grandmougin">
            <img :src="photoUrl" alt="Photo de Elane Grandmougin" class="photo"/>
        </div>
    </div>
    <img src="../../public/illustration_accueil.svg" alt="Illustration d'accueil" class="illu"/>
</template>

<script>
export default {
    name: 'Accueil',
    data() {
        return {
            photoUrl: ('./public/photo.jpg')
        };
    }
};
</script>

<style scoped>
template {
    font-family: "Mate", serif;
}

.accueil {
    text-align: center;
    display: flex;
    justify-content: center;
    margin: 20vh auto;
    align-items: center;
}

.taglines {
    display: flex;
    flex-direction: column;
    margin-left: 10vh;
}

.tagline {
    font-size: 3.2em;
    margin: 1vh 20vh 0 0;
    text-align: left;
    z-index: 2;
}

.tagline strong {
    font-weight: bold;
}

.tagline2 {
    font-size: 1.5em;
    margin: 1vh 20vh 0 0;
    text-align: left;
    z-index: 2;
}

.photo {
    max-width: 400px;
    border-radius: 50%;
    display: block;
    margin-top: 20px;
    margin-right: 18vh;
    transition: transform 0.5s ease;
}

.photo:hover {
    transform: scale(1.5);
    transition: transform 0.7s ease;
}

.illu {
    position: absolute;
    top: 15%;
    left: 0;
    z-index: 1;
}

@media (max-width: 1024px) {

    .accueil {
        display: flex;
        flex-direction: column;
        margin-left: 5vh;
    }

    .taglines {
        margin-left: 0;
    }

    .illu {
        top: 8%;
        left: 5%;
    }

    .tagline, .tagline2{
        margin: 1vh 0 0 0;
        text-align: center;
    }

    .photo {
        margin-right: 0;
    }

    .illu {
        margin-left: 0;
        width: 90%;
    }

}

</style>
