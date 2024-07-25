<template>

    <HeroSection></HeroSection>
        <section class="services container">
        <h2 class="subtitle centered">Agencja Interaktywna Ziubiński</h2>
        <p class="title centered">Poznaj moje usługi!</p>
        <div class="grid" data-aos="fade-up">
            <service title="Landing Page" subtitle="Czyli wizytówka" content="Potrzebujesz prostej strony Internetowej, która zachęci użytkownika do interakcji? Rozwiązanie cechuj się niskimi kosztami realizaji!" link="/tworzenie-landing-page"/>
            <service title="Strona Internetowa" subtitle="Pełnoprawna witryna" content="Strona Internetowa pozwoli na skuteczne przedstawienie Twoich usług, witryna może posiadać wiele zakładek szczegółowo przedstawiając temat." link="/tworzenie-stron-internetowych"/>
            <service title="Sklep Internetowy" subtitle="Rozwiązanie E-commerce" content="Chcesz zacząć sprzedaż przez Internet? Prowadzisz już biznes online? W gammie moich usług zawarte jest Tworzenie Sklepów Internetowych, w ramach których to skonfiguruję i uruchomię twoją witrynę sprzedażową!" link="/tworzenie-sklepow-internetowych" />
            <service title="Aplikacje webowe" subtitle="Dedykowane oprogramowanie" content="Potrzebujesz nietypowego rozwiązania? Nieszablonowe funkcjonalności? Dzięki naszej współpracy pozyskasz spersonalizowaną aplikację, które będą wspierać rozwój Twojego biznesu!" link="/tworzenie-aplikacji-webowych" />
        </div>
    </section>

    <section class="about container rounded" data-aos="fade-up">
        <div class="quality">
            <h2 class="subtitle">Strony Ziubiński</h2>
            <p class="title">Poznajmy się lepiej!</p>
            <p>Specjalizuję się w <strong>profesjonalnym tworzeniu stron internetowych</strong> od kilku lat, zawsze dbając o najwyższą jakość na każdym etapie procesu, aby spełnić oczekiwania klienta.</p>
<p><strong>Stawiam na nieustanny rozwój</strong>, co skłania mnie do poszerzania horyzontów i podejmowania nowych wyzwań. Prywatnie interesuję się rynkiem <strong>e-commerce oraz szeroko pojętym marketingiem</strong>.</p>
<p>Moje portfolio obejmuje różnorodne projekty o zróżnicowanej specyfice. Posiadam bogaty stack technologiczny, w tym <strong>WordPress, Vue.JS, Node.JS, PHP, React</strong> oraz oczywiście <strong>HTML, CSS i JavaScript</strong>. To szerokie zaplecze technologiczne pozwala mi kompleksowo realizować powierzone projekty.</p>
<p><strong>Edukacja jest dla mnie kluczowa</strong>. Wierzę, że <i><strong>człowiek, który się nie rozwija, zaczyna się cofać</strong></i>. Dlatego obecnie jestem studentem <strong>Uniwersytetu w Siedlcach</strong>, gdzie nieustannie poszerzam swoje umiejętności, studiując <strong>informatykę</strong>.</p>
        </div>
        <div>
            <circleImage />
        </div>
    </section>
    
    
  <section class="services container">
    <h2 class="subtitle centered">Kacper Ziubiński Strony Internetowe</h2>
    <p class="title centered">Zrealizowane projekty</p>
    <div class="projects">
      <SingleProject 
        v-for="project in firstThreeProjects"
        :key="project.name"
        :name="project.name"
        :desktop="project.desktop"
        :mobile="project.mobile"
        :description="project.description"
      />
    </div>
  </section>
    
        <section class="about container rounded" data-aos="fade-up">
            <div class="quality" >
                <h2 class="subtitle">Tworzenie Stron Internetowych</h2>
                <h4 class="title">Komunikacja to podstawa!</h4>            
                <p>Wyznaje zasadę, iż kluczem do odniesienia sukcesu, <strong>jest określenie potrzeb danego projektu.</strong> Z tej właśnie racji, na każdym etapie realizacji projektu mogą Państwo liczyć na kompetente wsparcie.</p>
                <p><Strong><i>Prowadzisz sprzedaż hurtową telefoniczne?</i></Strong></p>
                <p>Prawdopodobnie <strong>nie musisz odrazu zakładać sklepu Internetowego,</strong> twoje potrzeby zostaną zaspokojone dedykowaną stroną, która kompleksowo przedstawi katalog produktów.</p>
                <p><Strong><i>Chcesz zbierać maile od klientów do swojego newslletera?</i></Strong></p>
                <p>Nie musisz od razu budować stronę Internetową zawierającą 5 zakładek - <strong>wystarczy Ci estetyczny landing page, </strong>stanowiący wizytówkę z zachętą do pozostawienia swojego adresu e-mail.</p>
            </div>
            <div class="process">
                <step step="01 / Brief" content="Przed rozpoczęciem realizacji należy określić zakres działań, oczekiwania co do projektu. Stworzenie briefu jest możliwe dzięki autorskiemu narzędziu <a href='#''>wycena</a>!" status=true data-aos="fade-up" data-aos-duration="1000" />
                <step step="02 / Konsultacja" content="Po otrzymaniu briefu niezwłocznie skontkatuję się z Państwem w celu dopięcia wszelkich szczegółów oraz formalności." data-aos="fade-up"  data-aos-duration="1500"/>
                <step step="03 / Realizacja" content="Przystępujemy do realizacji projektu zgodnie z ustalonym planem, na bieżąco informując o postępach prac." data-aos="fade-up"  data-aos-duration="2000"/>
            </div>
        </section>
    
    
    <section class="services container">
        <h2 class="subtitle centered">Ziubiński Marketing</h2>
        <p class="title centered">Opinie</p>
        <div class="projects">
            <SingleReview title="Best Of Cars" content="Polecam serdecznie!"  data-aos="fade-up" data-aos-anchor-placement="top-bottom" />
            <SingleReview title="Webintegro" content="Współpracujemy od lat!" data-aos="fade-up" data-aos-anchor-placement="top-bottom" />
            <SingleReview title="AmitieButik" content="Profejsonalizm na każdym kroku!" data-aos="fade-up" data-aos-anchor-placement="top-bottom" />
        </div>
    </section>

    <section class="container">
        <Form />
    </section>
  </template>



<script>
import service from '~/components/elements/service.vue';
import step from '~/components/elements/step.vue';
import circleImage from '~/components/elements/circleImage.vue';
import SingleProject from '~/components/elements/singleProject.vue';
import Form from '~/components/elements/Form.vue';
import SingleReview from '~/components/elements/singleReview.vue';
import HeroSection from '~/components/elements/heroSection.vue';
export default {
  components: {
    service,
    step,
    circleImage,
    SingleProject,
    Form,
    SingleReview,
    HeroSection
  },
  setup() {
    const projects = ref([]);

    onMounted(async () => {
      const response = await fetch('/projects.json');
      const data = await response.json();
      projects.value = data;
    });

    // Get the first three projects
    const firstThreeProjects = computed(() => projects.value.slice(0, 3));

    return { firstThreeProjects };
  }
};

useSeoMeta({
  title: 'Agencja Interaktywna',
  description: 'Profejsonalne usługi związane z tworzeniem stron internetowych, sklepów, pozycjonowaniem seo, jak i również tworzeniem dedykowanych aplikacji ',
  keywords: ['Kacper Ziubiński', 'Projektowanie stron internetowych', 'Strony Ziubiński', 'Administracja stronami internetowymi'],
  image: 'https://ziubinski.pl/socialmedia-image.jpg',
  url: 'https://ziubinski.pl/'
})


definePageMeta({
  path: '/',
  schema: {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Agnecja Interaktywna',
    description: 'Profesjonalne usługi związane z tworzeniem stron Internetowych, Rozwiązań E-commerce. Skontaktuj się z nami, aby dowiedzieć się więcej!',
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
      { property: 'og:title', content: 'Agnecja Interaktywna' },
      { property: 'og:description', content: 'Profesjonalne usługi związane z tworzeniem stron Internetowych, Rozwiązań E-commerce. Skontaktuj się z nami, aby dowiedzieć się więcej!' },
      { property: 'og:image', content: 'https://ziubinski.pl/socialmedia-image.jpg' },
      { property: 'og:url', content: 'https://ziubinski.pl/' },
      { property: 'og:site_name', content: 'Kacper Ziubiński' },
      { name: 'robots', content: 'index, follow' }

    ]
  }
});
</script>

<style scoped>

.title{
    font-size: 2rem;
    font-weight: 800;
}
.subtitle{
    font-size: 1rem;
    font-weight: 600;
}
.centered{
    text-align: center;
}
p{
    line-height: 1.5;
    margin-top: 1rem;
}
</style>