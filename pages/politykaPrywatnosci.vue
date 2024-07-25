<template>
  <section class="hero">
    <Breadcrumbs :breadcrumbs="breadcrumbs" />
    <h1>Kontakt</h1>
    <p>Nie zwlekaj! Skorzystaj z darmowej wyceny!</p>
  </section>

  <section class="container">
    <h1>Polityka Prywatności</h1>
    
    <h2>§1 Postanowienia Ogólne</h2>
    <p>1. Administratorem danych osobowych zbieranych za pośrednictwem Strony jest Kacper Ziubiński, prowadzący działalność gospodarczą pod nazwą Kacper Ziubiński, z siedzibą w Rudzienko ul. 3 Maja 85, NIP: 5322109030, REGON: 527302492.</p>
    <p>2. Dane osobowe zbierane przez Administratora przetwarzane są zgodnie z przepisami Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych (RODO) oraz Ustawą z dnia 10 maja 2018 r. o ochronie danych osobowych.</p>

    <h2>§2 Zakres Zbieranych Danych</h2>
    <p>1. Administrator zbiera dane osobowe dobrowolnie przekazywane przez użytkowników Strony, takie jak imię, nazwisko, adres e-mail, numer telefonu, a także dane dotyczące korzystania ze Strony, takie jak adres IP, rodzaj przeglądarki, oraz dane zbierane za pomocą plików cookies.</p>
    <p>2. Dane osobowe mogą być zbierane w celu realizacji usług, kontaktu z użytkownikiem, analizy ruchu na Stronie oraz prowadzenia działań marketingowych.</p>

    <h2>§3 Cel Przetwarzania Danych</h2>
    <p>1. Dane osobowe są przetwarzane w celu:</p>
    <ul>
        <li>Realizacji usług oferowanych przez Stronę,</li>
        <li>Kontaktowania się z użytkownikami,</li>
        <li>Analizy i poprawy działania Strony,</li>
        <li>Realizacji działań marketingowych, w tym wysyłania newsletterów.</li>
    </ul>

    <h2>§4 Udostępnianie Danych</h2>
    <p>1. Dane osobowe użytkowników nie będą udostępniane osobom trzecim, chyba że jest to konieczne do realizacji usług lub wynika z przepisów prawa.</p>
    <p>2. Dane osobowe mogą być udostępniane podmiotom przetwarzającym dane na zlecenie Administratora, takim jak firmy hostingowe czy dostawcy usług IT.</p>

    <h2>§5 Prawa Użytkowników</h2>
    <p>1. Użytkownicy mają prawo do dostępu do swoich danych osobowych, ich poprawiania, usunięcia oraz ograniczenia przetwarzania.</p>
    <p>2. Użytkownicy mają także prawo do wniesienia sprzeciwu wobec przetwarzania danych osobowych oraz prawo do przenoszenia danych.</p>
    <p>3. W celu skorzystania z powyższych praw, użytkownicy powinni skontaktować się z Administratorem za pośrednictwem podanych w Stronie danych kontaktowych.</p>

    <h2>§6 Pliki Cookies</h2>
    <p>1. Strona korzysta z plików cookies, które są małymi plikami tekstowymi zapisywanymi na urządzeniu użytkownika. Pliki cookies umożliwiają dostosowanie zawartości Strony do preferencji użytkownika oraz zbieranie informacji o sposobie korzystania ze Strony.</p>
    <p>2. Użytkownik ma możliwość zarządzania plikami cookies za pomocą ustawień swojej przeglądarki internetowej. Wyłączenie obsługi plików cookies może wpłynąć na funkcjonalność Strony.</p>

    <h2>§7 Bezpieczeństwo Danych</h2>
    <p>1. Administrator stosuje odpowiednie środki techniczne i organizacyjne w celu zapewnienia bezpieczeństwa danych osobowych i ochrony przed ich nieautoryzowanym dostępem, zmianą, ujawnieniem lub zniszczeniem.</p>

    <h2>§8 Zmiany w Polityce Prywatności</h2>
    <p>1. Administrator zastrzega sobie prawo do wprowadzania zmian w Polityce Prywatności. O wszelkich zmianach użytkownicy będą informowani poprzez opublikowanie aktualnej wersji Polityki Prywatności na Stronie.</p>

    <h2>§9 Kontakt</h2>
    <p>1. Wszelkie pytania dotyczące Polityki Prywatności oraz przetwarzania danych osobowych należy kierować na adres e-mail: kontakt@ziubinski.pl lub telefonicznie pod numerem: 535 558 333.</p>


  </section>
</template>

<script setup>
import Breadcrumbs from '~/components/elements/hero/Breadcrumbs.vue';
import Form from '~/components/elements/Form.vue';

const breadcrumbs = [
  { text: 'Strona główna', url: '/' },
  { text: 'Polityka prywatności', url: '/polityka-prywatnosci' }
];

useSeoMeta({
  title: 'Polityka Prywatności',
  url: 'https://ziubinski.pl/polityka-prywatnosci'
  });

  definePageMeta({
    path: '/polityka-prywatnosci',
  head: {
    meta: [
      { name: 'robots', content: 'noindex, nofollow' }
    ]
  }
});
</script>

<style scoped>
.title {
  font-size: 2rem;
  font-weight: 800;
}
.subtitle {
  font-size: 1rem;
  font-weight: 600;
}
.centered {
  text-align: center;
}
.container {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.hero p {
  font-size: 1.25rem;
  margin-bottom: 20px;
}

@media (max-width: 897px) {
  .grid-portfolio {
    grid-template-columns: 1fr 1fr;
}
}

@media (max-width: 558px) {
  .grid-portfolio {
    grid-template-columns: 1fr;
  }
}
</style>
