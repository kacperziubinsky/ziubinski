<template>
  <section class="hero container" @mousemove="handleMouseMove">
    <div class="text">
      <h1>Kacper Ziubiński</h1>
      <h2>Tworzenie Stron Internetowych</h2>
      <h2>Tworzenie Sklepów Internetowych</h2>
      <h2>Marketing SEO</h2>
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
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;
  justify-items: center;
  height: 450px;
  background: radial-gradient(circle at center, #a1c4fd, #c2e9fb);
  transition: background 1s ease;
}
h1{
  font-weight: 800;
  font-size: 2rem;
}
</style>
