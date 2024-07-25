<template>
  <header>
    <img src="~/assets/img/ziub.png" alt="Kacper Ziubiński Logo" title="Kacper Ziubiński"@click="$router.push('/')" />
    <button class="menu-toggle" @click="toggleMenu">☰</button>
    <nav ref="menu" :class="{ 'menu': true, 'active': isMenuOpen }">
      <button class="close-menu" @click="toggleMenu">✖</button>
      <ul>
        <li class="menu-item">
          <NuxtLink to="/" @click="closeMenu">Strona Główna</NuxtLink>
        </li>
        <li class="menu-item">
          <a @click="toggleSubMenu('services')" class="services">Usługi</a>
          <transition name="fade" @before-enter="beforeEnter" @enter="enter" @leave="leave">
            <ul v-if="isSubMenuOpen.services" class="sub-menu">
              <li><NuxtLink to="/tworzenie-landing-page" @click="closeMenu">Landing Page</NuxtLink></li>
              <li><NuxtLink to="/tworzenie-stron-internetowych" @click="closeMenu">Strony Internetowe</NuxtLink></li>
              <li><NuxtLink to="/tworzenie-sklepow-internetowych" @click="closeMenu">Sklepy Internetowe</NuxtLink></li>
              <li><NuxtLink to="/tworzenie-aplikacji-webowych" @click="closeMenu">Aplikacje Webowe</NuxtLink></li>
              <li><NuxtLink to="/pozycjonowanie-seo" @click="closeMenu">Pozycjonowanie SEO</NuxtLink></li>
              <li><NuxtLink to="/integracja-baselinker" @click="closeMenu">Integracja Baselinker</NuxtLink></li>
            </ul>
          </transition>
        </li>
        <li class="menu-item">
          <NuxtLink to="/o-mnie" @click="closeMenu">O mnie</NuxtLink>
        </li>
        <li class="menu-item">
          <NuxtLink to="/realizacje" @click="closeMenu">Realizacje</NuxtLink>
        </li>
        <li class="menu-item">
          <NuxtLink to="/kontakt" @click="closeMenu">Kontakt</NuxtLink>
        </li>
      </ul>
    </nav>
    <div class="contact-button">
      <a href="tel:+48535558333">Zadzwoń</a>
    </div>
  </header>
</template>

  
  
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const isSubMenuOpen = ref({ services: false });
const isMenuOpen = ref(false);
const menuRef = ref(null);

function toggleSubMenu(menu) {
  isSubMenuOpen.value[menu] = !isSubMenuOpen.value[menu];
}

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function handleClickOutside(event) {
  if (menuRef.value && !menuRef.value.contains(event.target)) {
    isMenuOpen.value = false;
    isSubMenuOpen.value.services = false;
  }
}

function closeMenu() {
  isMenuOpen.value = false;
  isSubMenuOpen.value.services = false;
}

function beforeEnter(el) {
  el.style.opacity = 0;
  el.style.transform = 'translateY(-10px)';
}

function enter(el, done) {
  el.offsetHeight; // trigger reflow
  el.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
  el.style.opacity = 1;
  el.style.transform = 'translateY(0)';
  done();
}

function leave(el, done) {
  el.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
  el.style.opacity = 0;
  el.style.transform = 'translateY(-10px)';
  done();
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

  
<style scoped>
header {
  background-color: black;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1000;
  transition: background-color 0.3s ease;
}

img {
  max-height: 50px;
  filter: brightness(0) invert(1);
  cursor: pointer;
}

nav.menu {
  display: flex;
  flex-direction: row;
}

nav.menu ul {
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  padding: 0;
}

.menu-item {
  position: relative;
  margin: 0 1rem;
}

.menu-item a {
  color: white;
  text-decoration: none;
  font-weight: 700;
  font-size: 16px;
  display: block;
  padding: 0.5rem;
  transition: color 0.3s ease;
}

.menu-item a:hover {
  color: #ccc;
}

.sub-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: black;
  padding: 1rem !important;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  opacity: 0;
  transform: translateY(-10px);
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.sub-menu li {
  margin: 0;
}

.sub-menu a {
  color: white;
  text-decoration: none;
  display: block;
  padding: 0.5rem 0;
}

.contact-button a {
  border: 1px solid white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  text-decoration: none;
  color: white;
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
}

/* Close button styles */
.close-menu {
  display: none; /* Hidden by default, visible in mobile view */
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  position: absolute;
  top: 1rem;
  right: 1rem;
}

/* Styles for mobile devices */
@media (max-width: 897px) {
  nav.menu {
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    width: 0;
    background-color: #000000;
    overflow-x: hidden;
    transition: width 0.5s ease;
    padding-top: 60px; /* Adjust based on your header height */
    display: flex;
    flex-direction: column;
    z-index: 999;
    box-shadow: 20px 0px 1500px 0px rgba(0, 0, 0, 0.5);
  }

  nav.menu.active {
    width: 250px; /* Adjust the width as needed */
  }

  nav.menu ul {
    flex-direction: column;
    margin: 0;
    padding: 0;
  }

  .menu-item {
    margin: 0;
    border-bottom: 1px solid #000000; /* Optional: Adds a divider between items */
  }

  .menu-item a {
    padding: 1rem;
    font-size: 18px;
    text-align: center;
  }

  .sub-menu {
    position: static;
    display: block;
    opacity: 1;
    transform: translateY(0);
    background-color: #000000;
  }

  .menu-toggle {
    display: block;
  }

  .close-menu {
    display: block; /* Show close button on mobile */
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.services {
  cursor: pointer;
}
</style>
