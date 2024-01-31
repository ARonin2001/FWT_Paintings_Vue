<template>
  <div class="description">
    <span class="title">{{ title }}</span>
    <span class="body">{{ body }}</span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ title: string; body?: string }>();
</script>

<style scoped lang="scss">
.description {
  font-size: 13px;

  .title {
    font-family: 'Roboto-Medium';
    margin-right: 4px;
  }
  .body {
    font-family: 'Roboto-Light';
  }
}
</style>
