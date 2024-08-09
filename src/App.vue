<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderType from "@/components/HeaderType.vue";
</script>

<template>
  <header>
      <HeaderType msg="Elane Grandmougin - mon portfolio" />
      <nav>
          <router-link :to="{name: 'Projets'}" >Mes projets</router-link>
          <router-link to="/apropos">A propos</router-link>
      </nav>
  </header>

  <main>
      <RouterView />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
