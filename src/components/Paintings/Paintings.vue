<template>
  <div class="gallery">
    <div class="container">
      <PaintingItem v-for="paint in props.paintings" :painting="paint" />
    </div>
  </div>
</template>

<script setup lang="ts">
import PaintingItem from '@/components/Paintings/PaintingItem/PaintingItem.vue';
import type { IPaintingWithoutId } from '@/models/IPainting';

interface Props {
  paintings: IPaintingWithoutId[];
}

const props = defineProps<Props>();
</script>

<style scoped lang="scss">
.gallery {
  .container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
  }
}
</style>
