<template>
    <div>
      <Header />
      <slot />
      <Footer />
    </div>
  </template>
  
  <script>
  import Footer from '~/components/struct/footer.vue';
import Header from '~/components/struct/header.vue';
  
  export default {
    components: {
      Header,
      Footer
    }
  }
  </script>
  