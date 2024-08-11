<template>
    <div class="contact-container">
        <h1>Me contacter <br /><br /></h1>
        <div class="contact-details">
            Par mail :
            <a href="mailto:elane.grandmougin@gmail.com" class="mailto">elane.grandmougin@gmail.com </a><br /><br />
            <div class="social-links">
                <p><strong>Et retrouvez-moi sur :</strong></p>
                <a href="https://github.com/elaneg" target="_blank" rel="noopener noreferrer">
                    GitHub
                </a> |
                <a href="https://www.linkedin.com/in/elane-grandmougin-1128a4224/" target="_blank" rel="noopener noreferrer">
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
    /*box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);*/
    text-align: center;
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
    box-shadow: 0 2px 4px rgba(0, 0, 0,100);
}

.social-links a {
    color: var(--secondary-color);
    text-decoration: none;
    margin: 0 5px;
}

.social-links a:hover {
    text-decoration: underline;
}
</style>
