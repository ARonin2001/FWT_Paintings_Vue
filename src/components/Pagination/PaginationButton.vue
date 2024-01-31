<template>
  <button class="page"><slot></slot></button>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.page {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;
  font-family: 'Roboto-Medium';
  font-size: 18px;
  line-height: 20px;

  border: 1px solid var(--font-color);

  background-color: var(--body-background);
  color: var(--font-color);

  &:hover {
    background: var(--pag-hover);
  }
}
</style>
