<template>
  <section class="hero">
    <Breadcrumbs :breadcrumbs="breadcrumbs" />
    <h1>Portfolio</h1>
    <p>Poznaj ostatnio zrealizowane projekty!</p>
  </section>

  <section class="container">
    <h2 class="subtitle centered">Strony Ziubiński</h2>
    <p class="title centered">Różnorodność</p>

    <div class="grid-portfolio">
      <singleProject 
        v-for="project in projects"
        :key="project.name"
        :name="project.name"
        :desktop="project.desktop"
        :mobile="project.mobile"
        :description="project.description"
      />
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Breadcrumbs from '~/components/elements/hero/Breadcrumbs.vue';
import singleProject from '~/components/elements/singleProject.vue';

// Breadcrumbs
const breadcrumbs = [
  { text: 'Strona główna', url: '/' },
  { text: 'Portfolio', url: '/realizacje' }
];

// SEO meta
useSeoMeta({
  title: 'Portfolio - Kacper Ziubiński',
  description: 'Poznaj ostatnio zrealizowane projekty. Skontaktuj się ze mną, aby dowiedzieć się więcej!',
  keywords: ['portfolio', 'projekty', 'ziubiński', 'strony internetowe'],
  image: 'https://ziubinski.pl/socialmedia-image.jpg',
  url: 'https://ziubinski.pl/realizacje'
});

// Wczytywanie danych z JSON
const projects = ref([]);

onMounted(async () => {
  const response = await fetch('/projects.json');
  projects.value = await response.json();
});
</script>

<style scoped>
.title {
  font-size: 2rem;
  font-weight: 800;
}
.subtitle {
  font-size: 1rem;
  font-weight: 600;
}
.centered {
  text-align: center;
}
.grid-portfolio {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
}

@media (max-width: 897px) {
  .grid-portfolio {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 558px) {
  .grid-portfolio {
    grid-template-columns: 1fr;
  }
}
</style>
