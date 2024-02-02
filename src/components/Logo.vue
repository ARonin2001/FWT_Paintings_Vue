<template>
  <div class="logo">
    <a :href="imgUrl">
      <img :src="imgSrc" :alt="alt" class="icon" />
    </a>
  </div>
</template>

<script setup lang="ts">
interface Props {
  imgSrc: string;
  imgUrl?: string;
  alt?: string;
}

const props = defineProps<Props>();
</script>

<style scoped lang="scss">
.logo {
  .icon {
    max-width: 64px;
    max-height: 64px;
  }
}
</style>
