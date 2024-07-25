<template>
  <section class="hero">
    <Breadcrumbs :breadcrumbs="breadcrumbs" />
    <h1>Kacper Ziubiński</h1>
    <p><strong>Poznajmy się lepiej</strong> i rozpocznijmy owocną współpracę!</p>
  </section>

  <section class="grid container">
    <div class="text">
      <h2>Poznajmy się lepiej!</h2>
      <p>Specjalizuję się w <strong>profesjonalnym tworzeniu stron internetowych</strong> od kilku lat, zawsze dbając o najwyższą jakość na każdym etapie procesu, aby spełnić oczekiwania klienta.</p>
      <p><strong>Stawiam na nieustanny rozwój</strong>, co skłania mnie do poszerzania horyzontów i podejmowania nowych wyzwań. Prywatnie interesuję się rynkiem <strong>e-commerce oraz szeroko pojętym marketingiem</strong>.</p>
      <p>Moje portfolio obejmuje różnorodne projekty o zróżnicowanej specyfice. Posiadam bogaty stack technologiczny, w tym <strong>WordPress, Vue.JS, Node.JS, PHP, React</strong> oraz oczywiście <strong>HTML, CSS i JavaScript</strong>. To szerokie zaplecze technologiczne pozwala mi kompleksowo realizować powierzone projekty.</p>
      <p><strong>Edukacja jest dla mnie kluczowa</strong>. Wierzę, że <i><strong>człowiek, który się nie rozwija, zaczyna się cofać</strong></i>. Dlatego obecnie jestem studentem <strong>Uniwersytetu w Siedlcach</strong>, gdzie nieustannie poszerzam swoje umiejętności, studiując <strong>informatykę</strong>.</p>
    </div>
    <div class="img">
      <img src="~/assets/img/photo.png" alt="Kacper Ziubiński" title="Kacper Ziubiński" class="page-image circle" />
    </div>
  </section>

  <section class="grid container">
    <div class="img">
      <img src="../assets/img/ziub.png" alt="Ziubiński Logo" title="Ziubiński LOGO" class="page-image">
    </div>
    <div class="text">
      <h2>Profesjonalne Tworzenie Stron</h2>
      <p>Od kilku lat współpracuję z wieloma klientami indywidualnymi oraz agencjami marketingowymi, uczestnicząc w licznych ambitnych projektach. <strong>Kluczem do sukcesu jest komunikacja</strong>. Dlatego podczas współpracy skupiam się na dokładnym poznaniu potrzeb klienta oraz jego celów biznesowych. Dzięki temu mogę dostarczać rozwiązania, które nie tylko spełniają, ale często przewyższają oczekiwania. <strong>Stawiam na kompleksowość,</strong> z tej racji mogą Państwo liczyć na wsparcie na każdym etapie realizacji projektu.</p>
    </div>
  </section>

  <section class="container rounded">
    <div class="grid">
      <service title="Landing Page" subtitle="Czyli wizytówka" content="Potrzebujesz prostej strony Internetowej, która zachęci użytkownika do interakcji? Rozwiązanie cechuj się niskimi kosztami realizaji!" />
      <service title="Strona Internetowa" subtitle="Pełnoprawna witryna" content="Strona Internetowa pozwoli na skuteczne przedstawienie Twoich usług, witryna może posiadać wiele zakładek szczegółowo przedstawiając temat." />
      <service title="Sklep Internetowy" subtitle="Rozwiązanie E-commerce" content="Chcesz zacząć sprzedaż przez Internet? Prowadzisz już biznes online? W gammie moich usług zawarte jest Tworzenie Sklepów Internetowych, w ramach których to skonfiguruję i uruchomię twoją witrynę sprzedażową!" />
      <service title="Aplikacje webowe" subtitle="Dedykowane oprogramowanie" content="Potrzebujesz nietypowego rozwiązania? Nieszablonowe funkcjonalności? Dzięki naszej współpracy pozyskasz spersonalizowaną aplikację, które będą wspierać rozwój Twojego biznesu!" />
    </div>
  </section>
</template>

<script setup>
import Breadcrumbs from '~/components/elements/hero/Breadcrumbs.vue';
import service from '~/components/elements/service.vue';

const breadcrumbs = [
  { text: 'Strona główna', url: '/' },
  { text: 'Tworzenie Stron Internetowych', url: '/tworzenie-stron-internetowych' }
];

useSeoMeta({
  title: 'Tworzenie Stron Internetowych - Profesjonalne Usługi',
  description: 'Profesjonalne tworzenie stron internetowych, które pomogą Ci dotrzeć do nowych klientów i zwiększyć widoczność Twojego biznesu online. Skontaktuj się z nami, aby dowiedzieć się więcej!',
  keywords: ['tworzenie stron internetowych', 'profesjonalne usługi webowe', 'Kacper Ziubiński'],
  image: 'https://twojastrona.com/your-image-url.png',
  url: 'https://twojastrona.com/tworzenie-stron-internetowych'
});

definePageMeta({
  path: '/o-mnie',
  schema: {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Kacper Ziubiński',
    description: 'Specjalizuję się w profesjonalnym tworzeniu stron internetowych od kilku lat, zawsze dbając o najwyższą jakość na każdym etapie procesu, aby spełnić oczekiwania klienta.',
    image: 'https://twojastrona.com/your-image-url.png',
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Uniwersytet w Siedlcach'
    },
    knowsAbout: ['WordPress', 'Vue.JS', 'Node.JS', 'PHP', 'React', 'HTML', 'CSS', 'JavaScript'],
    url: 'https://twojastrona.com/o-mnie'
  },
  head: {
    meta: [
      { property: 'og:title', content: 'Tworzenie Stron Internetowych - Profesjonalne Usługi' },
      { property: 'og:description', content: 'Profesjonalne tworzenie stron internetowych, które pomogą Ci dotrzeć do nowych klientów i zwiększyć widoczność Twojego biznesu online. Skontaktuj się z nami, aby dowiedzieć się więcej!' },
      { property: 'og:image', content: 'https://twojastrona.com/your-image-url.png' },
      { property: 'og:url', content: 'https://twojastrona.com/tworzenie-stron-internetowych' },
      { property: 'og:site_name', content: 'Kacper Ziubiński' },
      { name: 'robots', content: 'index, follow' }
    ]
  }
});
</script>

<style scoped>
.circle {
  border-radius: 50%;
}


</style>