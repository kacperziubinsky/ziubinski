<template>
  <div class="service" @mouseover="rotateArrow(true)" @mouseleave="rotateArrow(false)">
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
      arrowTransform: 'rotate(30deg)' // Initial transform value
    };
  },
  methods: {
    rotateArrow(isHovered) {
      if (isHovered) {
        this.arrowTransform = 'rotate(0)'; // Change to 0 degrees on mouseover
      } else {
        this.arrowTransform = 'rotate(30deg)'; // Back to 30 degrees on mouseleave
      }
    }
  }
};
</script>

<style scoped>
.service {
  border: 1px solid black;
  padding: 20px;
  border-radius: 20px;
  overflow: hidden;
}

.sub-title {
  font-weight: 700;
}

.arrow {
  margin-top: 20px;
  height: 20px;
  float: right;
}
</style>
