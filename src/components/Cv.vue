<template>
    <div class="cv">
        <header>
          CV
        </header>

    </div>
</template>

<script>
export default {
    name: 'Cv',
    data() {
        return {
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
