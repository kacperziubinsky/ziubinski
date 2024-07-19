<template>
  <div>
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<script setup>
import Footer from '~/components/struct/footer.vue';
import Header from '~/components/struct/header.vue';
</script>
