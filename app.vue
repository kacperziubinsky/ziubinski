<template>
  <NuxtLayout>
    <transition name="page" mode="out-in">
      <div :key="$route.path">
        <NuxtPage />
      </div>
    </transition>
  </NuxtLayout>
</template>


<script setup>

useHead({
  titleTemplate: '%s - Kacper Ziubiński'
});
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(0.5rem);
}
</style>


