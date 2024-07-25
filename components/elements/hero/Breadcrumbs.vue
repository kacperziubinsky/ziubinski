<template>
    <ul class="breadcrumbs">
      <li v-for="(breadcrumb, index) in breadcrumbs" :key="index">
        <NuxtLink :to="breadcrumb.url">{{ breadcrumb.text }}</NuxtLink>
        <span v-if="index < breadcrumbs.length - 1"> / </span>
      </li>
    </ul>
  </template>
  
  <script setup>
  const props = defineProps({
    breadcrumbs: {
      type: Array,
      required: true
    }
  });
  </script>
  
  <style scoped>
  .breadcrumbs {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .breadcrumbs li {
    margin-right: 5px;
  }
  .breadcrumbs li a{
    text-decoration: none;
    color: black;
  }
  
  </style>
  