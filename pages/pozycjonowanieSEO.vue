<template>
  <section class="hero">
    <Breadcrumbs :breadcrumbs="breadcrumbs" />
    <h1>Pozycjonowanie SEO</h1>
    <p>Daj się zauważyć w sieci!</p>
  </section>

  <section class="grid container">
    <div class="img">
      <img src="../assets/img/e-commerce_4.webp" alt="Co to seo?" title="Co to SEO?" class="page-image">

    </div>

    <div class="text">
      <h2>Co to SEO?</h2>
      <p><strong>SEO <i>(Search Engine Optimization)</i></strong> to zbiór działań mających na celu osiągnięcie przez stronę jak najwyższych pozycji w organicznych (bezpłatnych) wynikach wyszukiwania na kluczowe frazy związane z ofertą. Obejmuje to optymalizację treści, struktury strony oraz technicznych aspektów, takich jak szybkość ładowania i dostosowanie do urządzeń mobilnych. Działania SEO pomagają zwiększyć widoczność strony w wynikach wyszukiwania, przyciągając więcej ruchu i potencjalnych klientów.</p>
    </div>
  </section>

  <section class="grid container">
    <div class="text">
      <h2>Na czym polega pozycjonowanie stron Internetowych?</h2>
      <p>Proces pozycjonowania stron internetowych jest kompleksowy i składa się z wielu elementów. Obejmuje on zarówno optymalizację on-page, jak i off-page. Optymalizacja on-page to działania wykonywane bezpośrednio na stronie, takie jak tworzenie wartościowych treści, poprawa struktury strony, dodawanie meta tagów, nagłówków oraz linków wewnętrznych. Z kolei optymalizacja off-page to działania poza stroną, mające na celu zwiększenie jej autorytetu w oczach wyszukiwarek. Obejmuje to zdobywanie linków zewnętrznych, udzielanie się w mediach społecznościowych oraz tworzenie kampanii content marketingowych. Obie te strategie razem pomagają w osiągnięciu lepszych pozycji w wynikach wyszukiwania i przyciąganiu większej liczby odwiedzających.</p>
    </div>
    <div class="img">
      <img src="../assets/img/seo.webp" alt="Na czym polega pozycjonowanie?" title="Na czym polega pozycjonowanie?" class="page-image">

    </div>
  </section>

  <div class="rounded">
    <section class="grid container">
      <div class="img">
        <img src="../assets/img/e-commerce_3.webp" alt="Pozycjonowanie Stron Internetowych" title="Pozycjonowanie Stron Internetowych" class="page-image">

      </div>

      <div class="text">
        <h2>Czy pozycjonowanie jest ważne?</h2>
        <p>Pozycjonowanie jest kluczowym elementem strategii marketingu cyfrowego. Dzięki skutecznemu SEO, Twoja strona może uzyskać wyższą widoczność w wynikach wyszukiwania, co przekłada się na większą liczbę odwiedzin i potencjalnych klientów. Wysoka pozycja w wynikach wyszukiwania buduje także zaufanie do marki, ponieważ użytkownicy często uważają czołowe wyniki za bardziej wiarygodne i odpowiednie. Długoterminowe inwestowanie w SEO może prowadzić do stałego napływu organicznego ruchu na stronę, co jest bardziej opłacalne niż płatne kampanie reklamowe.</p>
      </div>
    </section>

    <section class="grid container">
      <div class="text">
        <h2>Ile kosztuje pozycjonowanie SEO?</h2>
        <p>Koszt pozycjonowania SEO może znacznie się różnić w zależności od wielu czynników, takich jak konkurencyjność branży, zakres usług, a także konkretne potrzeby i cele Twojej firmy. W zależności od agencji SEO i wybranych usług, koszty mogą wynosić od kilkuset do kilku tysięcy złotych miesięcznie. Ważne jest jednak pamiętanie, że SEO to inwestycja długoterminowa, której efekty nie są natychmiastowe, ale mogą przynieść znaczne korzyści w postaci zwiększonego ruchu i wyższych przychodów z organicznego ruchu na stronie.</p>
      </div>
      <div class="img">
        <img src="../assets/img/e-commerce_1.webp" alt="Ile kosztuje pozycjonowanie?" title="Ile kosztuje pozycjonowanie?" class="page-image">

      </div>
    </section>
  </div>
</template>

<script setup>
import Breadcrumbs from '~/components/elements/hero/Breadcrumbs.vue';

const breadcrumbs = [
  { text: 'Strona główna', url: '/' },
  { text: 'Pozycjonowanie SEO', url: '/pozycjonowanie-seo' }
];

useSeoMeta({
  title: 'Pozycjonowanie SEO',
  description: 'Profesjonalne pozycjonowanie SEO, które pomoże Twojej stronie internetowej osiągnąć wyższe pozycje w wynikach wyszukiwania i przyciągnąć więcej klientów. Skontaktuj się z nami, aby dowiedzieć się więcej!',
  keywords: ['Pozycjonownaie SEO', 'Pozycjonowanie Stron Internetowych'],
  image: 'https://ziubinski.pl/socialmedia-image.jpg',
  url: 'https://ziubinski.pl/pozycjonowanie-seo'
})

definePageMeta({
  path: '/pozycjonowanie-seo',
  schema: {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Pozycjonowanie SEO',
    description: 'Profesjonalne pozycjonowanie SEO, które pomoże Twojej stronie internetowej osiągnąć wyższe pozycje w wynikach wyszukiwania i przyciągnąć więcej klientów. Skontaktuj się z nami, aby dowiedzieć się więcej!',
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
      { property: 'og:title', content: 'Pozycjonowanie SEO' },
      { property: 'og:description', content: 'Profesjonalne pozycjonowanie SEO, które pomoże Twojej stronie internetowej osiągnąć wyższe pozycje w wynikach wyszukiwania i przyciągnąć więcej klientów. Skontaktuj się z nami, aby dowiedzieć się więcej!' },
      { property: 'og:image', content: 'https://ziubinski.pl/socialmedia-image.jpg' },
      { property: 'og:url', content: 'https://ziubinski.pl/pozycjonowanie-seo' },
      { property: 'og:site_name', content: 'Kacper Ziubiński' },
      { name: 'robots', content: 'index, follow' }

    ]
  }
});
</script>
