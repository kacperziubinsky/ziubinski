<template>
    <div class="container">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="image"
        :style="getStyle(index)"
      >
        <img :src="image" alt="rotating graphic" />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        images: [
          'https://via.placeholder.com/300x400',
          'https://via.placeholder.com/300x400',
          'https://via.placeholder.com/300x400',
          'https://via.placeholder.com/300x400',
          'https://via.placeholder.com/300x400',
          'https://via.placeholder.com/300x400',
        ],
        radius: 100, 
        centerX: 150,
        centerY: 150, 
        angle: 0, 
      };
    },
    mounted() {
      this.startRotation();
    },
    methods: {
      getStyle(index) {
        const angle = (this.angle + index * 60) * (Math.PI / 180);
        const x = this.centerX + this.radius * Math.cos(angle);
        const y = this.centerY + this.radius * Math.sin(angle);
        return {
          position: 'absolute',
          top: `${y}px`,
          left: `${x}px`,
          transform: 'translate(-50%, -50%)',
        };
      },
      startRotation() {
        setInterval(() => {
          this.angle += 0.1; // Prędkość obracania
        }, 16); // Częstotliwość odświeżania (około 60 klatek na sekundę)
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    position: relative;
    width: 300px;
    height: 300px;
  }
  .image img {
    width: 50px;
    height: 50px;
  }
  </style>
  