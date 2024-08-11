<template>
    <div class="accueil">
        <p class="tagline">
            Bonjour, je suis Elane Grandmougin, développeuse full-stack.
        </p>
        <div class="photo-container">
            <img :src="photoUrl" alt="Photo" class="photo"/>
        </div>
    </div>
<!--    <img src="../../public/illustration_accueil.svg" alt="illustration" class="illu"/>-->
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
    font-size: 3.2em;
    margin: 1vh 20vh 0 0;
    text-align: left;
    z-index: 2;
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

/*.illu {*/
/*    position: absolute;*/
/*    top: 30%;*/
/*    left: 10%;*/
/*    z-index: 1;*/
/*}*/

</style>
