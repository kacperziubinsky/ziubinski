<template>
  <div class="service" @mouseover="rotateArrow(true)" @mouseleave="rotateArrow(false)" data-aos="zoom-in">
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
    }
  },
  data() {
    return {
      arrowTransform: 'rotate(30deg)' 
    };
  },
  methods: {
    rotateArrow(isHovered) {
      if (isHovered) {
        this.arrowTransform = 'rotate(0)'; 
      } else {
        this.arrowTransform = 'rotate(30deg)'; 
      }
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

.service:hover{
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
