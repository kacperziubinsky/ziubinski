<template>
  <section class="hero">
    <Breadcrumbs :breadcrumbs="breadcrumbs" />
    <h1>Generator Briefu</h1>
    <p>Przedstaw swoje potrzeby, z pomocą dedykowanego narzędzia!</p>
  </section>

  <section class="container">
    <transition name="slide-fade" mode="out-in">
      <div :key="step" class="step-content">
        <div class="step" v-show="step === 0">
          <p class="title">Wybierz usługę</p>
          <p class="sub-title">Określ jaką usługą jesteś zainteresowany</p>
          <select name="service" id="service" v-model="type">
            <option value="Strona">Strona Internetowa</option>
            <option value="Sklep Internetowy">Sklep Internetowy</option>
            <option value="Landing">Landing Page / One Page</option>
            <option value="Pozycjonowanie">Pozycjonowanie</option>
            <option value="Dedykowana Aplikacja">Dedykowana Aplikacja</option>
            <option value="Integracja BaseLinker">Integracja BaseLinker</option>
            <option value="inne">Inne</option>
          </select>
          <div class="other">
            <input type="text" placeholder="Podaj temat" v-show="type === 'inne'" v-model="otherType">
          </div>
          <div v-if="errors.type" class="error">{{ errors.type }}</div>
        </div>

        <div class="step" v-show="step === 1">
          <p class="title">Kilka pytań</p>
          <p class="sub-title">Odpowiedz na podstawowę pytania dotyczące realizacji</p>
          <div class="question">
            <p class="question_title">Posiadasz już stronę?</p>
            <div class="answears">
              <div class="answear">
                <input type="radio" id="have_yes" name="have_page" value="Tak" v-model="have_page">
                <label for="have_yes">Tak</label>
              </div>
              <div class="answear">
                <input type="radio" id="have_no" name="have_page" value="Nie" v-model="have_page">
                <label for="have_no">Nie</label>
              </div>
            </div>
          </div>

          <div class="question">
            <p class="question_title">Posiadasz hosting i domenę?</p>
            <div class="answears">
              <div class="answear">
                <input type="radio" id="hosting_yes" name="have_hosting" value="Tak" v-model="have_hosting">
                <label for="hosting_yes">Tak</label>
                </div>
                <div class="answear">
                  <input type="radio" id="hosting_no" name="have_hosting" value="Nie" v-model="have_hosting">
                  <label for="hosting_no">Nie</label>
                </div>
              </div>
          </div>

          <div class="question">
            <p class="question_title">Jesteś zainteresowany stałą współpracą / utrzymaniem strony?</p>
            <div class="answears">
              <div class="answear">
                <input type="radio" id="regular_yes" name="regular_job" value="Tak" v-model="regular_job">
                <label for="regular_yes">Tak</label>
              </div>
              <div class="answear">
                <input type="radio" id="regular_no" name="regular_job" value="Nie" v-model="regular_job">
                <label for="regular_no">Nie</label>
              </div>
            </div>
          </div>
        </div>

        <div class="step" v-show="step === 2">
          <p class="title">Zakładany budżet</p>
          <p class="sub-title">Czy masz już jasno określoną kwotę na rzecz projektu?</p>
          <select name="budżet" id="budżet" v-model="money">
            <option value="Pomóż mi wybrać">Pomóż mi wybrać</option>
            <option value="<1500"><1500 zł</option>
            <option value="2000 - 3500">2 000 zł - 3 500 zł</option>
            <option value="3500 - 5000">3 500 zł - 5 000 zł</option>
            <option value="5000+">5 000+ zł </option>
          </select>
        </div>

        <div class="step" v-show="step === 3">
          <p class="title">Szczegóły</p>
          <p class="sub-title">Szczegółowe informacje dotyczące realizacji</p>
          <div class="question" v-if="type === 'Sklep Internetowy' || type === 'Strona'">
            <p class="question_title">Jaką ilość zakładek przewidujesz?</p>
            <input type="text" name="pages" id="pages" v-model="pages" placeholder="Podaj liczbę zakładek">
          </div>

          <div class="question">
            <p class="question_title">Na jaką skalę działa firma?</p>
            <input type="text" name="reach" id="reach" v-model="reach" placeholder="Lokalny mały biznes? Czy zasięg globalny?">
          </div>

          <div class="question">
            <p class="question_title">Posiadasz jakieś inspiracje?</p>
            <textarea name="inspiration" id="inspiration" v-model="inspiration" placeholder="Kolory? Funkcjonalności? Strony? Załącz je tutaj!"></textarea>
          </div>

          <div class="question" v-if="type === 'Sklep Internetowy'">
            <p class="question_title">Ilość produktów?</p>
            <input type="text" name="products" id="products" v-model="products" placeholder="Jaką ilość produktów przewidujesz?">
          </div>
        </div>

        <div class="step" v-show="step === 4">
          <div class="form">
            <p class="title">Dane kontaktowe</p>
            <p class="sub-title">Pozostaw swoje dane do kontaktu!</p>
          <label for="name">Imię i Nazwisko / Nazwa firmy</label>
          <input type="text" name="name" id="name" v-model="name">
          <div v-if="errors.name" class="error">{{ errors.name }}</div>

          <label for="mail">Adres E-mail</label>
          <input type="email" name="mail" id="mail" v-model="mail">
          <div v-if="errors.mail" class="error">{{ errors.mail }}</div>

          <label for="phone">Telefon</label>
          <input type="tel" name="phone" id="phone" v-model="phone">
          <div v-if="errors.phone" class="error">{{ errors.phone }}</div>

          <div class="accept">
            <input type="checkbox" name="booking" id="booking" v-model="booking">
            <label for="booking">Umówić na rozmowę</label>
          </div>
          </div>
        </div>
      </div>
    </transition>

    <button @click="nextStep" v-if="step < 4">Dalej</button>
    <button @click="submitForm" v-if="step === 4">Zatwierdź</button>
  </section>
</template>


<script setup>
import { ref } from 'vue';
import Breadcrumbs from '~/components/elements/hero/Breadcrumbs.vue';

const step = ref(0);
const type = ref("");
const otherType = ref("");
const have_page = ref("Nie");
const have_hosting = ref("Nie");
const regular_job = ref("Nie");
const money = ref("Pomóż mi wybrać");
const pages = ref("");
const reach = ref("");
const inspiration = ref("");
const products = ref("");
const name = ref("");
const mail = ref("");
const phone = ref("");
const booking = ref(false);

const errors = ref({
  type: null,
  name: null,
  mail: null,
  phone: null,
});

const breadcrumbs = [
  { text: 'Strona główna', url: '/' },
  { text: 'briefTool', url: '/briefTool' }
];

const validateStep = (step) => {
  let valid = true;
  errors.value = { type: null, name: null, mail: null, phone: null };

  if (step === 0 && !type.value || step === 0 && type.value === 'inne' && !otherType.value) {
    errors.value.type = "Proszę określić usługę.";
    valid = false;
  }
  
  if (step === 4) {
    if (!name.value) {
      errors.value.name = "Proszę podać imię i nazwisko lub nazwę firmy.";
      valid = false;
    }
    if (!mail.value || !/\S+@\S+\.\S+/.test(mail.value)) {
      errors.value.mail = "Proszę podać prawidłowy adres e-mail.";
      valid = false;
    }
    if (!phone.value || !/^\d{9,15}$/.test(phone.value)) {
      errors.value.phone = "Proszę podać prawidłowy numer telefonu.";
      valid = false;
    }
  }

  return valid;
};

const nextStep = () => {
  if (validateStep(step.value)) {
    step.value++;
  }
};

const submitForm = () => {
  if (validateStep(4)) {
     
  }
};
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
  text-align: center;
}

.step {
  margin: 1rem 0;
}

.title{
  font-size: 2rem;
  font-weight: 800;
}

.sub-title {
  font-weight: 700;
  margin-bottom: 1rem;
}


.step input:not([type = "radio"]), 
.step select{
  margin-top: 0.5rem;
  width: 350px;
  padding: 0.5rem;
  font-size: 1rem;
}
textarea{
  margin-top: 0.5rem;
  width: 350px;
  height: 125px;
  font-size: 1rem;
  padding: 0.5rem;
}


button {
  margin-top: 1rem;
  border: 1px solid black;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  text-decoration: none;
  color: black;
  font-size: 1.75rem;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.5s ease;
}

.slide-fade-enter,
.slide-fade-leave-to /* .slide-fade-leave-active in <2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

.question_title{
  font-weight: 600;
}

.question{
  margin-top: 1rem;
}

.answears{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.error {
  color: red;
  font-size: 0.875rem;
  margin-top: 0.25rem;
}

.form{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.form label{
  font-weight: 700;
}
.accept input[type="checkbox"]{
  width: 20px;
}


</style>
