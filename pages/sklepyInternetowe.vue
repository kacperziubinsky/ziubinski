<template>
  <section class="hero">
    <Breadcrumbs :breadcrumbs="breadcrumbs" />
    <h1>Tworzenie Sklepów Internetowych</h1>
    <p>Zwiększ sprzedaż dzięki profesjonalnemu sklepowi internetowemu!</p>
  </section>

  <section class="grid container">
    <div class="img"></div>

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
    <div class="img"></div>
  </section>

  <div class="rounded">
    <section class="grid container">
      <div class="img"></div>

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
      <div class="img"></div>
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
  path: '/tworzenie-sklepow-internetowych' 
})
</script>


