<template>
    <div class="step">
      <div class="step-header" @click="toggle">
        <span class="step-number">{{ step }}</span>
        <span class="arrow" :class="{ 'open': isOpen }">▼</span>
      </div>
      <transition name="slide-fade">
        <div v-if="isOpen" class="step-content">
          <p v-html="content"></p>
        </div>
      </transition>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Step',
    props: {
      step: {
        type: String,
        required: true
      },
      content: {
        type: String,
        required: true
      },
      status:{
        type: Boolean,
        default: false,
      }
    },
    data() {
      return {
        isOpen: this.status
      };
    },
    methods: {
      toggle() {
        this.isOpen = !this.isOpen;
      }
    }
  }
  </script>
  
  <style scoped>
  .step {
    border: 1px solid black;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 20px;
    overflow: hidden;
  }
  
  .step-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    padding: 10px;
    border-radius: 10px;
  }
  
  .step-number {
    font-weight: bold;
  }
  
  .arrow {
    transition: transform 0.3s ease;
  }
  
  .arrow.open {
    transform: rotate(180deg);
  }
  
  .step-content {
    padding: 10px;
    border-top: 1px solid #000000;
  }
  
  .slide-fade-enter-active,
  .slide-fade-leave-active {
    transition: all 0.3s ease;
  }
  
  .slide-fade-enter,
  .slide-fade-leave-to {
    transform: translateY(-10px);
    opacity: 0;
  }
  p{
    line-height: 1.5;
    font-weight: 700
  }
  </style>
  