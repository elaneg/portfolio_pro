<template>
    <div class="cv">
        <header>
          à propos
        </header>

        <section class="download">
            <a :href="cvLink" download="cv_elane_grandmougin.pdf">
                <button>Télécharger mon CV</button>
            </a>
        </section>

    </div>
</template>

<script>
export default {
    name: 'Apropos',
    data() {
        return {
            cvLink: '/cv_elane_grandmougin.pdf',
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
