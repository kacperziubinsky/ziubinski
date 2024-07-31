<template>
  <section class="hero container" @mousemove="handleMouseMove">
    <div class="text">
      <h1>Tworzenie Stron WWW i Sklepów Internetowych </h1>
      <h2 class="animate-text">Tworzenie Stron Internetowych</h2>
      <h2 class="animate-text">Sklepy Internetowe</h2>
      <h2 class="animate-text">Usługi programistyczne</h2>
      <h2 class="animate-text">Pozycjonowanie SEO</h2>
    </div>
    <LoopIcon />
  </section>
</template>

<script>
import LoopIcon from './hero/loopIcon.vue';

export default {
  name: "heroSection",
  components: {
    LoopIcon
  },
  data() {
    return {
      mouseX: 0,
      mouseY: 0
    };
  },
  methods: {
    handleMouseMove(event) {
      this.mouseX = event.clientX / window.innerWidth;
      this.mouseY = event.clientY / window.innerHeight;
      this.updateBackground();
    },
    updateBackground() {
      const gradientX = this.mouseX * 100;
      const gradientY = this.mouseY * 100;
      document.querySelector('.hero').style.background = `
        radial-gradient(circle at ${gradientX}% ${gradientY}%, #a1c4fd, #c2e9fb)
      `;
    }
  }
};
</script>

<style scoped>
.hero {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 450px;
  background: radial-gradient(circle at center, #a1c4fd, #c2e9fb);
  transition: background 1s ease;
  padding: 20px;
}

.text {
  text-align: center;
}

h1 {
  font-weight: 800;
  font-size: 2rem;
}

h2 {
  font-weight: 600;
  font-size: 1.5rem;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 1s forwards;
  animation-delay: calc(var(--i) * 0.5s);
}

.animate-text:nth-of-type(1) {
  --i: 1;
}

.animate-text:nth-of-type(2) {
  --i: 2;
}

.animate-text:nth-of-type(3) {
  --i: 3;
}

.animate-text:nth-of-type(4) {
  --i: 4;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 897px) {
  .hero {
    flex-direction: column;
    height: auto;
  }
}

@media (max-width: 600px) {
  h1 {
    font-size: 1.5rem;
  }

  h2 {
    font-size: 1.2rem;
  }
}
</style>
