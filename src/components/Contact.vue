<template>
    <div class="contact-container">
        <h1>Me contacter</h1>
        <div class="contact-details">
            <p><strong>Email :</strong> elane.grandmougin@gmail.com</p>
            <p><strong>Téléphone :</strong> +33 6 12 34 56 78</p>
            <div class="social-links">
                <p><strong>Retrouvez-moi sur :</strong></p>
                <a href="https://github.com/elaneg" target="_blank" rel="noopener noreferrer">
                    GitHub
                </a> |
                <a href="https://www.linkedin.com/in/elanegrandmougin" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Contact',
};
</script>

<style scoped>
.contact-container {
    /*max-width: 600px;*/
    width: 100%;
    margin: 0 auto;
    padding: 20px;
    background-color: #f4f4f9;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-align: center;
}

.contact-details {
    font-size: 1.1em;
    color: #2c3e50;
}

.contact-details p {
    margin: 10px 0;
}

.social-links a {
    color: #42b983;
    text-decoration: none;
    margin: 0 5px;
}

.social-links a:hover {
    text-decoration: underline;
}
</style>
