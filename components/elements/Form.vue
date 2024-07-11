<template>
    <div class="grided">
      <div class="contact">
        <h3>Skontaktuj się ze mną!</h3>
        <p><strong>Telefon:</strong> <a href="tel:+48123456789">+48 123 456 789</a></p>
        <p><strong>Email:</strong> <a href="mailto:example@example.com">example@example.com</a></p>
        <div class="social-media">
          <h4>Follow me on:</h4>
          <p>
            <a href="https://facebook.com/yourprofile" target="_blank">Facebook</a> | 
            <a href="https://tiktok.com/@yourprofile" target="_blank">TikTok</a> | 
            <a href="https://messenger.com/yourprofile" target="_blank">Messenger</a>
          </p>
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
.grided {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.contact {
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.contact h3 {
  margin-bottom: 15px;
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
</style>
