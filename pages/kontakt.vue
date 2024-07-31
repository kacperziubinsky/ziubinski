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

const breadcrumbs = [
  { text: 'Strona główna', url: '/' },
  { text: 'Kontakt', url: '/kontakt' }
];

useSeoMeta({
  title: 'Kontakt - Kacper Ziubiński',
  description: 'Skontaktuj się ze mną. Skorzystaj z darmowej wyceny.',
  keywords: ['kontakt', 'Kacper Ziubiński', 'strony internetowe', 'SEO', 'Baselinker'],
  image: 'https://ziubinski.pl/socialmedia-image.jpg',
  url: 'https://ziubinski.pl/kontakt'
  });

  definePageMeta({
  path: '/kontakt',
  schema: {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Kontakt - Kacper Ziubiński',
    description: 'Skontaktuj się ze mną. Skorzystaj z darmowej wyceny.',
    image: 'https://ziubinski.pl/socialmedia-image.jpg',  
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '15'
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'PLN',
      price: '0',  
      itemCondition: 'https://schema.org/NewCondition'
    }
  },
  head: {
    meta: [
      { property: 'og:title', content: 'Kontakt - Kacper Ziubiński' },
      { property: 'og:description', content: 'Skontaktuj się ze mną. Skorzystaj z darmowej wyceny.' },
      { property: 'og:image', content: 'https://ziubinski.pl/socialmedia-image.jpg' },
      { property: 'og:url', content: 'https://ziubinski.pl/kontakt' },
      { property: 'og:site_name', content: 'Kacper Ziubiński' },
      { name: 'robots', content: 'index, follow' }
    ]
  }
});
</script>

<style scoped>


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
