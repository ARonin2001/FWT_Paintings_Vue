<template>
  <div className="logo">
    <a href="#">
      <img src="@/assets/Logo.svg" alt="Logo Framework Team" className="icon" />
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<style scoped lang="scss">
.logo {
  .icon {
    max-width: 64px;
    max-height: 64px;
  }
}
</style>
