<template>
  <div class="grid">
    <div class="contact">
      <p class="title">Skontaktuj się ze mną!</p>
      <p><strong>Nazwa: </strong> Kacper Ziubiński</p>
      <p><strong>NIP: </strong>5322109030</p>
      <p><strong>REGON: </strong>527302492</p>
      <p><strong>Adres: </strong>ul. 3 Maja 85, 05-340 Rudzienko</p>
      <div class="social-media">
        <p class="main-title">Kontakt</p>
        <div class="contact-info">
          <p>
            <a href="tel:+48535558333">
              <i class="fa fa-phone"></i> +48 535 558 333
            </a>
          </p>
          <p>
            <a href="mailto:kontakt@ziubinski.pl">
              <i class="fa fa-envelope"></i> kontakt@ziubinski.pl
            </a>
          </p>
        </div>
      </div>
    </div>
    <div class="form">
      <p class="title">Formularz kontaktowy</p>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="name">Imię i nazwisko*</label>
          <input type="text" v-model="form.name" id="name" required />
        </div>
        <div class="form-group">
          <label for="email">Email*</label>
          <input type="email" v-model="form.email" id="email" required />
        </div>
        <div class="form-group">
          <label for="phone">Telefon</label>
          <input type="tel" v-model="form.phone" id="phone" />
        </div>
        <div class="form-group">
          <label for="message">Wiadomość*</label>
          <textarea v-model="form.message" id="message" rows="5" required></textarea>
        </div>
        <button type="submit">Wyślij</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactForm',
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        message: ''
      }
    };
  },
  methods: {
    async handleSubmit() {
      try {
        const response = await fetch('contact_form.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams(this.form)
        });
        const result = await response.text();
        alert(result);
      } catch (error) {
        alert('Błąd: ' + error.message);
      }
    }
  }
};
</script>

<style scoped>
.contact {
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background: white;
  height: 100%;
}

.contact .title {
  margin-bottom: 15px;
}

.contact .main-title {
  font-size: 1.25rem
}

.contact p {
  margin: 10px 0;
}

.contact a {
  color: #007bff;
  text-decoration: none;
}

.social-media .main-title {
  margin-top: 20px;
}

.form {
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background: white;
}

.form .title {
  margin-bottom: 15px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  background-color: rgb(161, 196, 253);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 500ms;
}

button:hover {
  background-color: #0056b3;
}

.contact-info a {
  color: black;
  text-decoration: none;
  font-size: 21px;
}

.contact-info .fa {
  border: 1px solid black;
  padding: 10px;
  border-radius: 20px;
}

.contact-info p {
  transition: all 500ms;
}

.contact-info p:hover {
  transform: translateY(-1px);
}

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

p {
  line-height: 1.5;
  margin-top: 1rem;
}
</style>
