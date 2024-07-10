<template>
  <div class="container">
    <div class="main-circle">
      <img src="~/assets/img/photo.png" alt="Photo" class="circle-image" />
    </div>

    <div class="circle-1 circle"></div>
    <div class="circle-2 circle"></div>
    <div class="circle-3 circle"></div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      shows: false,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollY = window.scrollY;
      console.log(scrollY)
      const minScrollY = 200;
      const maxScrollY = 1100;
      const maxOffset = 200;

      const circle1 = document.querySelector('.circle-1');
      const circle2 = document.querySelector('.circle-2');
      const circle3 = document.querySelector('.circle-3');

      if (scrollY > minScrollY && scrollY < maxScrollY) {
        const offset = Math.min(maxOffset, (scrollY - minScrollY) * 0.1);

        circle1.style.transform = `translateY(${offset}px)`;
        circle2.style.transform = `translateX(${offset}px)`;
        circle3.style.transform = `translateX(${offset}px)`;
      } else {
        circle1.style.transform = `translateX(0px)`;
        circle2.style.transform = `translateX(0px)`;
        circle3.style.transform = `translateX(0px)`;
      }
    },
  },
};
</script>

<style scoped>
.container {
  position: relative;
  height: 500px; 
  overflow: hidden; 
}

.main-circle {
  width: 400px;
  height: 400px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  position: relative;
  z-index: 2; 
}

.circle-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.circle-1 {
  width: 50px;
  height: 50px;
  background-color: black;
  top: 40%;
  right: 0;
  z-index: 1; 
}

.circle-2 {
  width: 40px;
  height: 40px;
  background-color: black;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1; 
}

.circle-3 {
  width: 70px;
  height: 70px;
  background-color: black;
  top: 80%;
  left: 0;
  z-index: 1; 
}

.circle {
  border-radius: 50%;
  position: absolute;
  transition: transform 0.2s;
}
</style>
