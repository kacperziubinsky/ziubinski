<template>
  <section class="hero">
    <Breadcrumbs :breadcrumbs="breadcrumbs" />
    <h1>Tworzenie Stron Internetowych</h1>
    <p>Dotrzyj do nowych klientów, dzięki własnej stronie internetowej!</p>
  </section>

  <section class="grid container">
    <div class="img">
      <img src="../assets/img/economic.png" alt="Baselinker" class="page-image">

    </div>

    <div class="text">
      <h2>Czy warto założyć stronę internetową?</h2>
      <p>Każdego dnia wiele ludzi korzysta z Internetu, a smartfon jest naszym nieodłącznym urządzeniem. W dobie dzisiejszych czasów ludzie najczęściej sami szukają rozwiązania wielu problemów. <strong>Nie pozwól, aby Twój biznes był niewidoczny!</strong> Posiadanie strony internetowej niesie ze sobą wiele korzyści. Przede wszystkim, strona internetowa jest wizytówką Twojej firmy w sieci, umożliwiającą potencjalnym klientom znalezienie informacji o oferowanych przez Ciebie produktach lub usługach.</p>
    </div>
  </section>

  <section class="grid container">
    <div class="text">
      <h2>Projektowanie stron internetowych</h2>
      <p>Każdy projekt witryny, który podejmuję, jest dla mnie wyjątkowy. Dzięki bogatemu doświadczeniu i szerokim umiejętnościom, stawiam na indywidualne podejście do każdej realizacji. Wierzę, że każda strona internetowa powinna być niepowtarzalna i w pełni dopasowana do potrzeb klienta. Dlatego każdy projekt tworzę z pasją i dbałością o szczegóły, uwzględniając unikalne wymagania i oczekiwania. Moim celem jest stworzenie strony, która nie tylko wyróżnia się estetyką, ale także funkcjonalnością i intuicyjnością, zapewniając użytkownikom doskonałe wrażenia.</p>
    </div>
    <div class="img">
      <img src="../assets/img/e-commerce_3.png" alt="Baselinker" class="page-image">

    </div>
  </section>

  <div class="rounded">
    <section class="grid container">
      <div class="img">
        <img src="../assets/img/e-commerce_2.png" alt="Baselinker" class="page-image">

      </div>

      <div class="text">
        <h2>Jak edytować stronę internetową?</h2>
        <p>Podczas tworzenia witryny stawiam ogromny nacisk na funkcjonalność, to właśnie dzięki temu możliwa jest samodzielna edycja treści na stronie internetowej. Realizowane przeze mnie projekty najczęściej budowane są w oparciu o popularne systemy CMS, które to umożliwiają przystępną edycję oraz zarządzanie, a dodatkowo automatycznie się aktualizują, zapewniając tym samym maksymalne bezpieczeństwo i stabilność.</p>
        <p><strong>Decydując się na współpracę, otrzymają Państwo instrukcję obsługi dotyczącą edycji strony internetowej</strong> - w formacie wideo lub PDF.</p>
      </div>
    </section>

    <section class="grid container">
      <div class="text">
        <h2>Administracja stronami internetowymi</h2>
        <p>W mojej ofercie znajdą Państwo również abonamentową usługę zarządzania dotychczasowymi witrynami. W ramach tej usługi zadbam o stabilność, bezpieczeństwo i aktualizację treści na istniejącej witrynie. <strong>Wybierając to rozwiązanie, nie muszą Państwo samodzielnie zarządzać stroną,</strong> dzięki czemu oszczędzacie mnóstwo czasu.</p>
      </div>
      <div class="img">
        <img src="../assets/img/app2.png" alt="Baselinker" class="page-image">

      </div>
    </section>
  </div>
</template>

<script setup>
import Breadcrumbs from '~/components/elements/hero/Breadcrumbs.vue';

const breadcrumbs = [
  { text: 'Strona główna', url: '/' },
  { text: 'Tworzenie Stron Internetowych', url: '/tworzenie-stron-internetowych' }
];

useSeoMeta({
  title: 'Tworzenie Stron Internetowych - Profesjonalne Usługi',
  description: 'Profesjonalne tworzenie stron internetowych, które pomogą Ci dotrzeć do nowych klientów i zwiększyć widoczność Twojego biznesu online. Skontaktuj się z nami, aby dowiedzieć się więcej!'
})

definePageMeta({
  path: '/tworzenie-stron-internetowych' 
})

</script>

<style scoped>
</style>
