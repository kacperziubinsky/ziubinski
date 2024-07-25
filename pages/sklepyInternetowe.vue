<template>
  <section class="hero">
    <Breadcrumbs :breadcrumbs="breadcrumbs" />
    <h1>Tworzenie Sklepów Internetowych</h1>
    <p>Zwiększ sprzedaż dzięki profesjonalnemu sklepowi internetowemu!</p>
  </section>

  <section class="grid container">
    <div class="img">
      <img src="../assets/img/e-commerce_1.webp" alt="Tworzenie Sklepów Internetowych" title="Tworzenie Sklepów Internetowych" class="page-image">
    </div>

    <div class="text">
      <h2>Dlaczego warto mieć sklep internetowy?</h2>
      <p>W dzisiejszych czasach posiadanie sklepu internetowego jest kluczowe dla sukcesu wielu firm. Internet to nie tylko miejsce, gdzie ludzie szukają informacji, ale także dokonują zakupów. <strong>Nie przegap tej szansy!</strong> Sklep internetowy umożliwia dotarcie do szerszej grupy klientów, zwiększając zasięg Twojej oferty i generując większe przychody.</p>
    </div>
  </section>

  <section class="grid container">
    <div class="text">
      <h2>Profesjonalne projektowanie sklepów internetowych</h2>
      <p>Każdy sklep internetowy, który tworzę, jest unikalny i dostosowany do specyficznych potrzeb klienta. Dzięki mojej wiedzy i doświadczeniu, mogę zagwarantować, że każdy projekt będzie wyróżniał się zarówno pod względem wyglądu, jak i funkcjonalności. <strong>Moje projekty są nie tylko estetyczne, ale także intuicyjne i łatwe w obsłudze</strong>, co przekłada się na wyższą satysfakcję klientów i lepsze wyniki sprzedaży.</p>
    </div>
    <div class="img">
      <img src="../assets/img/e-commerce_2.webp" alt="Jak sprzedawać online?" title="Jak sprzedawać online?" class="page-image">

    </div>
  </section>

  <div class="rounded">
    <section class="grid container">
      <div class="img">
        <img src="../assets/img/e-commerce_4.webp" alt="Zarządzanie sklepami Internetowymi" title="Zarządzanie sklepami Internetowymi" class="page-image">

      </div>

      <div class="text">
        <h2>Łatwa edycja i zarządzanie sklepem internetowym</h2>
        <p>Moje sklepy internetowe są oparte na nowoczesnych systemach CMS, które pozwalają na łatwe zarządzanie treścią i produktami. To oznacza, że będziesz mógł samodzielnie aktualizować informacje w swoim sklepie bez potrzeby specjalistycznej wiedzy. <strong>Otrzymasz również pełne wsparcie techniczne oraz instrukcje</strong>, które ułatwią Ci zarządzanie sklepem.</p>
      </div>
    </section>

    <section class="grid container">
      <div class="text">
        <h2>Kompleksowa administracja sklepami internetowymi</h2>
        <p>Oferuję również usługi abonamentowe związane z zarządzaniem sklepami internetowymi. Dzięki temu możesz skupić się na prowadzeniu swojego biznesu, a ja zadbam o aktualizacje, bezpieczeństwo i sprawne działanie Twojego sklepu. <strong>Powierzając mi zarządzanie swoim sklepem, zyskujesz pewność, że wszystko będzie działać bez zarzutu</strong>, a Ty będziesz mógł skoncentrować się na rozwijaniu swojej oferty.</p>
      </div>
      <div class="img">
        <img src="../assets/img/e-commerce_3.webp" alt="Zarządzanie sklepami Internetowymi" title="Zarządzanie sklepami Internetowymi" class="page-image">
      </div>
    </section>
  </div>
</template>

<script setup>
import Breadcrumbs from '~/components/elements/hero/Breadcrumbs.vue';

const breadcrumbs = [
  { text: 'Strona główna', url: '/' },
  { text: 'Tworzenie Sklepów Internetowych', url: '/tworzenie-sklepow-internetowych' }
];

useSeoMeta({
  title: 'Tworzenie Sklepów Internetowych',
  description: 'Profesjonalne tworzenie sklepów internetowych, które pomogą Ci zwiększyć sprzedaż i dotrzeć do nowych klientów online. Skontaktuj się z nami, aby dowiedzieć się więcej!',
  keywords: ['Tworzenie Sklepów Internetowych', 'Projektowanie Sklepów internetowych', 'Sklepy Internetowe', 'Administracja sklepami internetowymi'],
  image: 'https://ziubinski.pl/socialmedia-image.jpg',
  url: 'https://ziubinski.pl/tworzenie-sklepow-internetowych'
})

definePageMeta({
  path: '/tworzenie-sklepow-internetowych',
  schema: {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Tworzenie Sklepów Internetowych',
    description: 'Profesjonalne tworzenie sklepów internetowych, które pomogą Ci zwiększyć sprzedaż i dotrzeć do nowych klientów online. Skontaktuj się z nami, aby dowiedzieć się więcej!',
    image: 'https://ziubinski.pl/socialmedia-image.jpg',  
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.5',
      reviewCount: '10'
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      price: '0',  
      itemCondition: 'https://schema.org/NewCondition'
    }
  },
  head: {
    meta: [
      { property: 'og:title', content: 'Tworzenie Sklepów Internetowych' },
      { property: 'og:description', content: 'Profesjonalne tworzenie sklepów internetowych, które pomogą Ci zwiększyć sprzedaż i dotrzeć do nowych klientów online. Skontaktuj się z nami, aby dowiedzieć się więcej!' },
      { property: 'og:image', content: 'https://ziubinski.pl/socialmedia-image.jpg' },
      { property: 'og:url', content: 'https://ziubinski.pl/tworzenie-sklepow-internetowych' },
      { property: 'og:site_name', content: 'Kacper Ziubiński' },
      { name: 'robots', content: 'index, follow' }

    ]
  }
});
</script>


