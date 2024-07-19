<template>

    <HeroSection></HeroSection>
        <section class="services container">
        <h2 class="subtitle centered">Agencja Marketingowa Ziubiński</h2>
        <h4 class="title centered">Poznaj moje usługi!</h4>
        <div class="grid">
            <service title="Landing Page" subtitle="Czyli wizytówka" content="Potrzebujesz prostej strony Internetowej, która zachęci użytkownika do interakcji? Rozwiązanie cechuj się niskimi kosztami realizaji!"/>
            <service title="Strona Internetowa" subtitle="Pełnoprawna witryna" content="Strona Internetowa pozwoli na skuteczne przedstawienie Twoich usług, witryna może posiadać wiele zakładek szczegółowo przedstawiając temat." />
            <service title="Sklep Internetowy" subtitle="Rozwiązanie E-commerce" content="Chcesz zacząć sprzedaż przez Internet? Prowadzisz już biznes online? W gammie moich usług zawarte jest Tworzenie Sklepów Internetowych, w ramach których to skonfiguruję i uruchomię twoją witrynę sprzedażową!" />
            <service title="Aplikacje webowe" subtitle="Dedykowane oprogramowanie" content="Potrzebujesz nietypowego rozwiązania? Nieszablonowe funkcjonalności? Dzięki naszej współpracy pozyskasz spersonalizowaną aplikację, które będą wspierać rozwój Twojego biznesu!" />
        </div>
    </section>

    <section class="about container rounded">
        <div class="quality">
            <h2 class="subtitle">Strony Ziubiński</h2>
            <h4 class="title">Poznajmy się lepiej!</h4>
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
        <h2 class="text-centered">Zrealizowane projekty</h2>
        <div class="projects">
            <SingleProject 
            name="Projekt 1"
            desktop="https://ziubinski.hostline.net.pl/nowa/img/400x300.png"
            mobile="https://ziubinski.hostline.net.pl/nowa/img/300x400.png"
            description="To jest opis projektu 1." 
            />
            <SingleProject 
            name="Projekt 1"
            desktop="https://ziubinski.hostline.net.pl/nowa/img/400x300.png"
            mobile="https://ziubinski.hostline.net.pl/nowa/img/300x400.png"
            description="To jest opis projektu 1." 
            />
            <SingleProject 
            name="Projekt 1"
            desktop="https://ziubinski.hostline.net.pl/nowa/img/400x300.png"
            mobile="https://ziubinski.hostline.net.pl/nowa/img/300x400.png"
            description="To jest opis projektu 1." 
            />
        </div>
    </section>
    
        <section class="about container rounded">
            <div class="quality">
                <h2 class="subtitle">Tworzenie Stron Internetowych</h2>
                <h4 class="title">Komunikacja to podstawa!</h4>            
                <p>Wyznaje zasadę, iż kluczem do odniesienia sukcesu, <strong>jest określenie potrzeb danego projektu.</strong> Z tej właśnie racji, na każdym etapie realizacji projektu mogą Państwo liczyć na kompetente wsparcie.</p>
                <p><Strong><i>Prowadzisz sprzedaż hurtową telefoniczne?</i></Strong></p>
                <p>Prawdopodobnie <strong>nie musisz odrazu zakładać sklepu Internetowego,</strong> twoje potrzeby zostaną zaspokojone dedykowaną stroną, która kompleksowo przedstawi katalog produktów.</p>
                <p><Strong><i>Chcesz zbierać maile od klientów do swojego newslletera?</i></Strong></p>
                <p>Nie musisz od razu budować stronę Internetową zawierającą 5 zakładek - <strong>wystarczy Ci estetyczny landing page, </strong>stanowiący wizytówkę z zachętą do pozostawienia swojego adresu e-mail.</p>
            </div>
            <div class="process">
                <step step="01 / Brief" content="Przed rozpoczęciem realizacji należy określić zakres działań, oczekiwania co do projektu. Stworzenie briefu jest możliwe dzięki autorskiemu narzędziu <a href='#''>wycena</a>!" status=true />
                <step step="02 / Konsultacja" content="Po otrzymaniu briefu niezwłocznie skontkatuję się z Państwem w celu dopięcia wszelkich szczegółów oraz formalności." />
                <step step="03 / Realizacja" content="Przystępujemy do realizacji projektu zgodnie z ustalonym planem, na bieżąco informując o postępach prac." />
            </div>
        </section>
    
    
    <section class="services container">
        <h2 class="text-centered">Opinie</h2>
        <div class="projects">
            <SingleReview title="Best Of Cars" content="Polecam serdecznie!" />
            <SingleReview title="Webintegro" content="Współpracujemy od lat!" />
            <SingleReview title="AmitieButik" content="Profejsonalizm na każdym kroku!" />
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
export default{
    components:{
        service,
        step,
        circleImage,
        SingleProject,
        Form,
        SingleReview,
        HeroSection
    }
}

useSeoMeta({
  title: 'Agnecja Marketingowa',
  description: 'Profesjonalne tworzenie stron Internetowych',
})
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