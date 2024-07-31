<template>
    <section class="hero">
      <Breadcrumbs :breadcrumbs="breadcrumbs" />
      <h1>Generator Briefu</h1>
      <p>Przedstaw swoje potrzeby, z pomocą dedykowanego narzędzia!</p>
    </section>
  
    <section class="container">
      <div class="step" v-show="step === 0 ">
        <p class="title">Wybierz usługę</p>
        <select name="service" id="service" v-model="type">
          <option value="Strona">Strona Internetowa</option>
          <option value="Sklep Internetowy">Sklep Internetowy</option>
          <option value="Pozycjonowanie">Pozycjonowanie</option>
          <option value="Dedykowana Aplikacja">Dedykowana Aplikacja</option>
          <option value="Integracja BaseLinker">Integracja BaseLinker</option>
          <option value="inne">Inne</option>
        </select>

        <div class="other">
            <input type="text" placeholder="Podaj temat" v-show="type == 'inne'">
        </div>
      </div>


      <div class="step" v-show="step === 1 ">
        <p class="title">Kilka pytań</p>
        <div class="question">
            <p class="question_title">Posiadasz już stronę?</p>
            <input type="radio" name="have" value="Tak" checked v-model="have_page">Tak</input>
            <input type="radio" name="have" value="Nie" v-model="have_page">Nie</input>
        </div>

        <div class="question">
            <p class="question_title">Posiadasz hosing i domenę?</p>
            <input type="radio" name="hosting" value="Tak" checked v-model="have_hosting">Tak</input>
            <input type="radio" name="hosting" value="Nie" v-model="have_hosting">Nie</input>
        </div>

        <div class="question">
            <p class="question_title">Jesteś zainteresowany stałą współpracą / utrzymaniem strony?</p>
            <input type="radio" name="regular" value="Tak" checked v-model="regular_job">Tak</input>
            <input type="radio" name="regular" value="Nie" v-model="regular_job">Nie</input>
        </div>
      </div>


      
      <div class="step" v-show="step === 2 ">
        <p class="title">Zakładany budżet</p>
        <select name="budżet" id="budżet" v-model="money">
          <option value="Pomóż mi wybrać">Pomóż mi wybrać</option>
          <option value="<1500 "> <1500 </option>
          <option value="2000 - 3500">2000 - 3500</option>
          <option value="3500 - 5000">3500 - 5000</option>
          <option value="5000+">5000 +</option>
        </select>
        </div>

      
        <div class="step" v-show="step === 3 ">
            <p class="title">Szczegóły</p>
            <div class="question">
                <p class="question_title" v-if="type === 'Sklep Internetowy' || type === 'Strona'">Jaką ilość zakładek przewidujesz?</p>
                <input type="text" name="pages" id="pages" v-model="pages" placeholder="Podaj liczbę zakładek">
            </div>

            <div class="question">
                <p class="question_title">Na jaką skalę działa firma?</p>
                <input type="text" name="reach" id="reach" v-model="reach" placeholder="Lokalny mały biznes? Czy zasięg globalny?">
            </div>

            <div class="question">
                <p class="question_title">Posiadasz jakieś inspiracje?</p>
                <input type="text" name="inspiration" id="inspiration" v-model="inspiration" placeholder="Kolory? Funkcjonalności? Strony? Załącz je tutaj!">
            </div>


            <div class="question" v-if="type === 'Sklep Internetowy'">
                <p class="question_title">Ilość produktów?</p>
                <input type="text" name="products" id="products" v-model="products" placeholder="Jaką ilość produktów przewidujesz?">
            </div>

        </div>


        <div class="step" v-show="step === 4 ">
            <p class="title">Dane kontaktowe</p>
            <label for="Name">Imię i Nazwisko / Nazwa firmy</label>
            <input type="text" name="name" id="name" v-model="name">

            <label for="mail">Adres E-mail</label>
            <input type="mail" name="mail" id="mail" v-model="mail">

            <label for="Phone">Telefon</label>
            <input type="tel" name="phone" id="phone" v-model="phone" >

            <label for="Phone">Umówić na rozmowę</label>
            <input type="checkbox" name="booking" id="booking" v-model="booking">
        </div>

      <button @click="step++" v-if="step < 4">Dalej</button>
    </section>



    
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import Breadcrumbs from '~/components/elements/hero/Breadcrumbs.vue';
  
  const step = ref(0);
  const type = ref("");
  const have_page = ref("tak");
  const have_hosting = ref("tak");
  const regular_job = ref("tak");
  const money = ref("Pomóż mi wybrać");
  const pages = ref("");
  const reach = ref("");
  const inspiration = ref("");
  const products = ref("");
  const name = ref("");
  const mail = ref("");
  const phone = ref("");
  const booking = ref("");

  const breadcrumbs = [
    { text: 'Strona główna', url: '/' },
    { text: 'briefTool', url: '/briefTool' }
  ];
  
  useSeoMeta({
    title: 'Kontakt - Kacper Ziubiński',
    description: 'Skontaktuj się ze mną. Skorzystaj z darmowej wyceny.',
    keywords: ['kontakt', 'Kacper Ziubiński', 'strony internetowe', 'SEO', 'Baselinker'],
    image: 'https://ziubinski.pl/socialmedia-image.jpg',
    url: 'https://ziubinski.pl/kontakt'
  });
  
  definePageMeta({
    path: '/briefTool',
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
  .hero {
    text-align: center;
    padding: 2rem 1rem;
  }
  
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
  }
  
  .step {
    margin: 1rem 0;
  }
  
  .title {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  
  select {
    padding: 0.5rem;
    font-size: 1rem;
  }
  
  button {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    cursor: pointer;
  }
  </style>
  