<template>
  <header id="header">
    <div class="container">
      <Logo :imgSrc="logoImg" :imgUrl="imgUrl" :alt="alt" />
      <ThemeApp :images="[themeBlackIcon, themeWhiteIcon]" />
    </div>
  </header>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import Logo from './Logo.vue';
import ThemeApp from './ThemeApp.vue';
import logoImg from '@/assets/img/Logo.svg';
import themeBlackIcon from '@/assets/img/Theme-black-icon.svg';
import themeWhiteIcon from '@/assets/img/Theme-white-icon.svg';

const { imgUrl, imgSrc, alt } = reactive({
  imgUrl: '#',
  imgSrc: '@/assets/img/Logo.svg',
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
