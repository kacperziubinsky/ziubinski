<template>
        <section class="services container">
        <h2 class="text-centered">Poznaj moje usługi!</h2>
        <div class="grid">
            <service title="Landing Page" subtitle="Czyli wizytówka" content="Potrzebujesz prostej strony Internetowej, która zachęci użytkownika do interakcji? Rozwiązanie cechuj się niskimi kosztami realizaji!"/>
            <service title="Strona Internetowa" subtitle="Pełnoprawna witryna" content="Strona Internetowa pozwoli na skuteczne przedstawienie Twoich usług, witryna może posiadać wiele zakładek szczegółowo przedstawiając temat." />
            <service title="Sklep Internetowy" subtitle="Rozwiązanie E-commerce" content="Chcesz zacząć sprzedaż przez Internet? Prowadzisz już biznes online? W gammie moich usług zawarte jest Tworzenie Sklepów Internetowych, w ramach których to skonfiguruję i uruchomię twoją witrynę sprzedażową!" />
            <service title="Aplikacje webowe" subtitle="Dedykowane oprogramowanie" content="Potrzebujesz nietypowego rozwiązania? Nieszablonowe funkcjonalności? Dzięki naszej współpracy pozyskasz spersonalizowaną aplikację, które będą wspierać rozwój Twojego biznesu!" />
        </div>
    </section>


    <section class="about container">
        <div class="quality">
            <h2>Zależy mi na Twojej satysfakcji!</h2>
            <p>Na każdym etapie współpracy stawiam na komunikacje. Wyznaje zasadę, iż prawidłowe zrozumienie potrzeb klienta jest kluczem do sukcesu!</p>
            <br>
            <p>Po zrealizwaniu, każdego z projektu klient otrzymuje odemnie materiały szkoleniowe w formie wideo z możliwością dodatkowej konsultacjii wideo!</p>
        </div>
        <div class="process">
            <step step="01 / Brief" content="Przed rozpoczęciem realizacji należy określić zakres działań, oczekiwania co do projektu. Stworzenie briefu jest możliwe dzięki autorskiemu narzędziu <a href='#''>wycena</a>!" status=true />
            <step step="02 / Konsultacja" content="Po otrzymaniu briefu niezwłocznie skontkatuję się z Państwem w celu dopięcia wszelkich szczegółów oraz formalności." />
            <step step="03 / Realizacja" content="Przystępujemy do realizacji projektu zgodnie z ustalonym planem, na bieżąco informując o postępach prac." />
        </div>
    </section>



    <section class="about container">
        <div class="quality">
            <h2>Zależy mi na Twojej satysfakcji!</h2>
            <p>Na każdym etapie współpracy stawiam na komunikacje. Wyznaje zasadę, iż prawidłowe zrozumienie potrzeb klienta jest kluczem do sukcesu!</p>
            <br>
            <p>Po zrealizwaniu, każdego z projektu klient otrzymuje odemnie materiały szkoleniowe w formie wideo z możliwością dodatkowej konsultacjii wideo!</p>
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
                desktop="https://via.placeholder.com/400x300?text=Desktop+Image"
                mobile="https://via.placeholder.com/300x400?text=Mobile+Image"
                description="To jest opis projektu 1." 
            />
            <SingleProject 
                name="Projekt 1"
                desktop="https://via.placeholder.com/400x300?text=Desktop+Image"
                mobile="https://via.placeholder.com/300x400?text=Mobile+Image"
                description="To jest opis projektu 1." 
            />
            <SingleProject 
                name="Projekt 1"
                desktop="https://via.placeholder.com/400x300?text=Desktop+Image"
                mobile="https://via.placeholder.com/300x400?text=Mobile+Image"
                description="To jest opis projektu 1." 
            />
        </div>
    </section>


    <section class="services container">
    </section>
  </template>



<script>
import service from '~/components/elements/service.vue';
import step from '~/components/elements/step.vue';
import circleImage from '~/components/elements/circleImage.vue';
import SingleProject from '~/components/elements/singleProject.vue';
import Form from '~/components/elements/Form.vue';
export default{
    components:{
        service,
        step,
        circleImage,
        SingleProject,
        Form
    }
}
</script>