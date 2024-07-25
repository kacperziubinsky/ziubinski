<template>
  <section class="hero">
    <Breadcrumbs :breadcrumbs="breadcrumbs" />
    <h1>Tworzenie Landing Page</h1>
    <p>Stwórz swoją wizytówkę w Internecie!</p>
  </section>

  <section class="grid container">
    <div class="img">
      <img src="../assets/img/e-commerce_3.png" alt="Baselinker" class="page-image">

    </div>

    <div class="text">
      <h2>Co to Landing Page?</h2>
      <p><strong>Landing Page <i>lub one page</i></strong> to strona, która witryna składajaca się z jednej strony. Strony tego typu zawierają najczęściej najpotrzebniejsze streszczone informację. Witryny tego typu często wykorzystuej się do <strong>przekierowania ruchu, lub krótkim przedstawieniu wachlarzu usług przedsiębiorstwa.</strong> Jedną z zalet wybrania landing page'a jest cena, witryna ta zawiera o wiele mniej elementów niż tradycyjna strona Internetowa, z tej racji one page jest idealnym rozwiązaniem dla osób stawiających na ekonomiczne rozwiązanie.</p>
    </div>
  </section>

  <section class="grid container">
  <div class="text">
    <h2>Jak wykorzystać Landing Page?</h2>
    <p>Witryny tego typu często przedstawiają jedną z usług danej firmy, zachęcając tym samym do bezpośredniego kontaktu lub innej interakcji. Landing page są idealne do prowadzenia kampanii marketingowych, takich jak promocje, oferty specjalne czy premiery nowych produktów. Dzięki swojej prostocie i ukierunkowanemu przekazowi, landing page mogą skutecznie przyciągać uwagę i przekonywać odwiedzających do podjęcia konkretnej akcji, takiej jak zapisanie się na newsletter, pobranie e-booka, wypełnienie formularza kontaktowego czy dokonanie zakupu.</p>
  </div>
  <div class="img">
    <img src="../assets/img/seo.png" alt="Baselinker" class="page-image">

  </div>
</section>


  <div class="rounded">
    <section class="grid container">
      <div class="img">
        <img src="../assets/img/economic.png" alt="Baselinker" class="page-image">
      </div>

      <div class="text">
        <h2>Pozycjonowanie Landing Page</h2>
        <p>Landing page, mimo że są prostsze i krótsze niż tradycyjne strony internetowe, mogą znacząco przyczynić się do poprawy wyników SEO (optymalizacji dla wyszukiwarek internetowych). Dzięki skoncentrowaniu się na jednym konkretnym temacie lub produkcie, landing page mogą być zoptymalizowane pod kątem specyficznych słów kluczowych, co zwiększa ich widoczność w wynikach wyszukiwania. Dodatkowo, szybkość ładowania strony, jednoznaczność przekazu oraz użycie responsywnego designu pozytywnie wpływają na pozycjonowanie w wyszukiwarkach.</p>
      </div>
    </section>

    <section class="grid container">
      <div class="text">
        <h2>Landing Page to dobry start!</h2>
        <p>Stworzenie strony wizytówki może okazać się dobrym startem w kontekście promocji marki w sieci. Wybór tego rozwiązania pozwoli na prostsze pozycjonowanie w szybszym tempie, a także z racji mniejszej złożoności strony jest ekonomiczniejsza od tradycyjnej strony internetowej. Landing page są również łatwiejsze do aktualizacji i modyfikacji, co pozwala na szybkie dostosowanie treści do zmieniających się potrzeb rynku i strategii marketingowych.</p>
      </div>
      <div class="img">
        <img src="../assets/img/e-commerce_4.png" alt="Baselinker" class="page-image">

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
  title: 'Tworzenie Sklepów Internetowych - Profesjonalne Usługi',
  description: 'Profesjonalne tworzenie sklepów internetowych, które pomogą Ci zwiększyć sprzedaż i dotrzeć do nowych klientów online. Skontaktuj się z nami, aby dowiedzieć się więcej!'
})

definePageMeta({
  path: '/tworzenie-landing-page' 
})
</script>


