<template>
    <div class="contact-container" aria-labelledby="contact-title">
        <h1 id="contact-title">Me contacter <br /><br /></h1>
        <div class="contact-details" aria-label="Détails de contact">
            Par mail :
            <a href="mailto:elane.grandmougin@gmail.com" class="mailto" aria-label="Envoyer un mail à Elane Grandmougin">elane.grandmougin@gmail.com</a><br /><br />
            <div class="social-links" aria-label="Liens vers mes réseaux sociaux">
                <p><strong>Et retrouvez-moi sur :</strong></p>
                <a href="https://github.com/elaneg" target="_blank" rel="noopener noreferrer" aria-label="Lien vers mon profil GitHub">
                    GitHub
                </a> |
                <a href="https://www.linkedin.com/in/elane-grandmougin-1128a4224/" target="_blank" rel="noopener noreferrer" aria-label="Lien vers mon profil LinkedIn">
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
    font-family: "PT Serif", serif;
    width: 100%;
    margin: 0 auto;
    padding: 10vh;
    border-radius: 10px;
    text-align: center;
}

.mailto {
    color: #6565d0;
}

.contact-container h1 {
    font-size: 3.2em;
}

.contact-details {
    font-size: 1.4em;
}

.contact-details p {
    margin: 10px 0;
}

.social-links {
    box-shadow: 0 2px 4px #cccccc;
}

.social-links a {
    color: #6565d0;
    text-decoration: none;
    margin: 0 5px;
}

.social-links a:hover {
    text-decoration: underline;
}
</style>
