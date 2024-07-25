<template>
  <section class="hero">
    <Breadcrumbs :breadcrumbs="breadcrumbs" />
    <h1>Kontakt</h1>
    <p>Nie zwlekaj! Skorzystaj z darmowej wyceny!</p>
  </section>

  <section class="container">
    <Form />
  </section>

</template>

<script setup>
import Breadcrumbs from '~/components/elements/hero/Breadcrumbs.vue';
import Form from '~/components/elements/Form.vue';


// Breadcrumbs
const breadcrumbs = [
  { text: 'Strona główna', url: '/' },
  { text: 'Kontakt', url: '/kontakt' }
];


// SEO meta
useSeoMeta({
  title: 'Kontakt - Kacper Ziubiński',
  description: 'Skontaktuj się z Kacprem Ziubińskim. Skorzystaj z darmowej wyceny i optymalizuj sprzedaż dzięki Baselinker. Integracja z popularnymi CMS i platformami sprzedażowymi, łatwe zarządzanie przesyłkami oraz intuicyjny panel użytkownika.',
  keywords: ['kontakt', 'Kacper Ziubiński', 'strony internetowe', 'SEO', 'Baselinker'],
  image: 'https://ziubinski.hostline.net.pl/nowa/img/400x300.png',
  url: 'https://twojastrona.com/kontakt'
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
.container {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}


.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.hero p {
  font-size: 1.25rem;
  margin-bottom: 20px;
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
