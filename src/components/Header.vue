<template>
  <header id="header">
    <div class="container">
      <Logo :imgSrc="imgSrc" :imgUrl="imgUrl" :alt="alt" />
      <ThemeApp
        :images="['/src/assets/Theme-black-icon.svg', '/src/assets/Theme-white-icon.svg']"
      />
    </div>
  </header>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import Logo from './Logo.vue';
import ThemeApp from './ThemeApp.vue';

const { imgUrl, imgSrc, alt } = reactive({
  imgUrl: '#',
  imgSrc: '/src/assets/Logo.svg',
  alt: 'Logo Framework Team'
});
</script>

<style scoped lang="scss">
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
