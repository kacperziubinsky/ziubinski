<template>
  <div class="service" 
       @mouseover="rotateArrow(true)" 
       @mouseleave="rotateArrow(false)" 
       @click="navigateTo"
       :data-aos="dataAos"
       style="cursor: pointer;">
    <h2>{{ title }}</h2>
    <span class="sub-title">{{ subtitle }}</span>
    <p>{{ content }}</p>
    <img src="~/assets/img/right-arrow.svg" class="arrow" :style="{ transform: arrowTransform }">
  </div>
</template>

<script>
export default {
  name: 'Service',
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: false
    },
    content: {
      type: String,
      required: false
    },
    link: {
      type: String,
      required: true
    },
    dataAos: {
      type: String,
      default: 'zoom-in'
    }
  },
  data() {
    return {
      arrowTransform: 'rotate(30deg)' 
    };
  },
  methods: {
    rotateArrow(isHovered) {
      this.arrowTransform = isHovered ? 'rotate(0)' : 'rotate(30deg)';
    },
    navigateTo() {
      window.location.href = this.link; 
    }
  }
};
</script>

<style scoped>
.service {
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
  background-color: white;
}

.service:hover {
  border: 1px solid black;
}

.sub-title {
  font-weight: 700;
}

.arrow {
  margin-top: 20px;
  height: 20px;
  float: right;
  transition: all 300ms;
}
</style>
