<template>
    <div class="grided">
        <div class="contact">
            <h3>Skontaktuj się ze mną!</h3>
            
        </div>
        <div class="form">
            <h3>Formularz kontaktowy</h3>

            <form @submit.prevent="" >
                <div class="form-group">
        <label for="name">Imię i nazwisko*</label>
        <input type="text" id="name"  required />
      </div>
            </form>
        </div>
    </div>
</template>

<style scoped>
.grided{
    display: grid;
    grid-template-columns: 50% 50%;
}
</style>