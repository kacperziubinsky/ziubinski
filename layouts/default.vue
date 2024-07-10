<template>
    <div>
      <Header />
      <slot />
    </div>
  </template>
  
  <script>
  import Header from '~/components/struct/header.vue';
  
  export default {
    components: {
      Header
    }
  }
  </script>
  