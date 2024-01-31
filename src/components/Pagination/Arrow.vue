<template>
  <div class="arrow">
    <span></span>
    <span></span>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.arrow {
  position: relative;
  display: inline-block;

  span {
    display: block;
    width: 2px;
    height: 10px;
    position: absolute;

    background-color: var(--font-color);
    border-radius: 8px;

    &:first-child {
      transform: rotate(45deg) translate(-1px, -1px);
    }
    &:last-child {
      transform: rotate(135deg) translate(-6px, 5px);
    }
  }
}
</style>
