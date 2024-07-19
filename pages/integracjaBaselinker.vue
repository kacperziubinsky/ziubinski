<template>
  <section class="hero">
    <Breadcrumbs :breadcrumbs="breadcrumbs" />
    <h1>Integracja Baselinker</h1>
    <p>Gotowe rozwiązanie do optymalizacji sprzedaży</p>
  </section>

  <section class="grid container">
    <div class="img"></div>

    <div class="text">
      <h2>Czym jest Baselinker?</h2>
      <p><strong>Baselinker to narzędzie do integracji e-commerce i zarządzania sprzedażą</strong>. Jest to jedno z najpopularniejszych systemów, które pozwala na zarządzanie wszystkimi miejscami sprzedaży z pozycji jednego panelu. Baselinker umożliwia integrację z popularnymi CMS, takimi jak <strong>WooCommerce, PrestaShop</strong>, oraz z aplikacjami SaaS, m.in.: <strong>Shoplo, Shoper, SkyShop.</strong> Oprócz obsługi sklepów internetowych, Baselinker pozwala na integrację z platformami sprzedażowymi, takimi jak <strong>Allegro, OLX, Amazon, eBay.</strong></p>
    </div>
  </section>

  <section class="grid container">
    <div class="text">
      <h2>Integracja przesyłek Baselinker</h2>
      <p>Poza możliwością obsługi zamówień, Baselinker umożliwia integrację z firmami kurierskimi, co sprawia, że generowanie etykiet oraz zarządzanie statusami przesyłek jest jeszcze prostsze. <strong>Wygeneruj list przewozowy jednym kliknięciem!</strong> Baselinker w swojej ofercie posiada szeroką gamę firm kurierskich, takich jak: <strong>InPost, UPS, FedEx, Orlen Paczka</strong> oraz integrację z <strong>wysyłkami Allegro.</strong></p>
    </div>
    <div class="img"></div>
  </section>

  <div class="rounded">
    <section class="grid container">
      <div class="img"></div>

      <div class="text">
        <h2>Intuicyjny panel</h2>
        <p>Baselinker oferuje intuicyjny panel użytkownika, który znacząco upraszcza zarządzanie sprzedażą i integracją różnych kanałów. Dzięki przyjaznemu interfejsowi i łatwej nawigacji, możesz szybko i efektywnie zarządzać zamówieniami, integracjami i przesyłkami bez konieczności skomplikowanych konfiguracji.</p>
      </div>
    </section>

    <section class="grid container">
      <div class="text">
        <h2>Możliwość integracji z hurtowniami</h2>
        <p>Baselinker umożliwia także integrację z hurtowniami, co pozwala na automatyzację procesów zamówień i synchronizację stanów magazynowych. Dzięki tej funkcji możesz bez trudu zarządzać produktami, zamówieniami i dostawami, co przyspiesza procesy logistyczne i zwiększa efektywność operacyjną Twojego biznesu.</p>
      </div>
      <div class="img"></div>
    </section>
  </div>
</template>

<script setup>
import Breadcrumbs from '~/components/elements/hero/Breadcrumbs.vue';

const breadcrumbs = [
  { text: 'Strona główna', url: '/' },
  { text: 'Integracja Baselinker', url: '/integracja-baselinker' }
];

useSeoMeta({
  title: 'Integracja Baselinker - Rozwiązania E-commerce',
  description: 'Optymalizuj sprzedaż i zarządzaj zamówieniami dzięki Baselinker. Integracja z popularnymi CMS i platformami sprzedażowymi, łatwe zarządzanie przesyłkami oraz intuicyjny panel użytkownika. Skontaktuj się z nami, aby dowiedzieć się więcej!'
})

definePageMeta({
  path: '/integracja-baselinker'
})
</script>
