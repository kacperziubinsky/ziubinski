<template>
    <div class="grid">
      <div class="contact">
        <h3>Skontaktuj się ze mną!</h3>
        <h4><Strong>Dane firmy</Strong></h4>
        <p><strong>Nazwa: </strong> Kacper Ziubiński</p>
        <p><strong>NIP: </strong>5322109030</p>
        <p><strong>REGON: </strong>527302492</p>
        <p><strong>Adres: </strong>ul. 3 Maja 85, 05-340 Rudzienko        </p>
        <div class="social-media">
          <h4>Kontakt</h4>
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
        <h3>Formularz kontaktowy</h3>
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="name">Imię i nazwisko*</label>
            <input type="text" id="name" required />
          </div>
          <div class="form-group">
            <label for="email">Email*</label>
            <input type="email" id="email" required />
          </div>
          <div class="form-group">
            <label for="phone">Telefon</label>
            <input type="tel" id="phone" />
          </div>
          <div class="form-group">
            <label for="message">Wiadomość*</label>
            <textarea id="message" rows="5" required></textarea>
          </div>
          <button type="submit">Wyślij</button>
        </form>
      </div>
    </div>
  </template>

<script>
export default {
  name: 'ContactForm',
  methods: {
    handleSubmit() {
      alert('Form submitted');
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
}

.contact h3 {
  margin-bottom: 15px;
}

.contact h4{
  font-size: 1.25rem
}

.contact p {
  margin: 10px 0;
}

.contact a {
  color: #007bff;
  text-decoration: none;
}

.contact a:hover {
  text-decoration: underline;
}

.social-media h4 {
  margin-top: 20px;
}

.form {
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background: white;
}

.form h3 {
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
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.contact-info a{
  color: black;
  text-decoration: none;
  font-size: 21px;
}

.contact-info .fa{
  border: 1px solid black;
  padding: 10px;
  border-radius: 20px;
}

.contact-info p{
  transition: all 500ms;
}

.contact-info p:hover{
  transform: translateY(-1px);
}

</style>
