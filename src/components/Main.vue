<template>
  <div>
    <div class="paintings__container">
      <FilterContainer />
      <PaintingsContainer />
    </div>
  </div>
</template>

<script setup lang="ts">
import FilterContainer from './FilterContainer/FilterContainer.vue';
import PaintingsContainer from '@/components/Paintings/PaintingsContainer.vue';
</script>

<style scoped lang="scss">
.paintings__container {
  margin-bottom: 45px;
}
</style>
