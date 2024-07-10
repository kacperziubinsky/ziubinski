<template>
    <div class="service" @mouseover="rotateArrow(true)" @mouseleave="rotateArrow(false)">
      <span class="sub-title" :style="{ transform: arrowTransform }">
        &bigstar;
      </span>
      <p>{{ content }}</p>
      <h4>{{ title }}</h4>
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
          this.arrowTransform = 'rotate(180deg)'; // Rotate 180 degrees on mouseleave
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .service {
    border: 1px solid #ddd;
    padding: 20px;
    border-radius: 20px;
    overflow: hidden;
    transition: transform 0.3s, box-shadow 0.3s;
    position: relative;
    background: #f9f9f9;
    text-align: center;
  }
  
  .service:hover {
    transform: translateY(-10px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .sub-title {
    font-weight: 700;
    font-size: 24px;
    color: #333;
    transition: transform 0.3s;
  }
  
  p {
    font-size: 16px;
    color: #666;
  }
  
  h4 {
    font-size: 20px;
    color: #444;
    margin-top: 10px;
  }
  
  .arrow {
    position: absolute;
    top: 20px;
    right: 20px;
    height: 20px;
    transition: transform 0.3s;
  }
  </style>
  