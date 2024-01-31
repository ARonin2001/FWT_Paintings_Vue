<template>
  <div class="container">
    <Paintings class="painting-container__paintings" :paintings="paintingStore.paintings" />
    <PaginationContainer />
  </div>
</template>

<script setup lang="ts">
import Paintings from './Paintings.vue';
import PaginationContainer from '@/components/Pagination/PaginationContainer.vue';
import { usePaintingsStore } from '@/store/paintings';
import { onMounted } from 'vue';

const paintingStore = usePaintingsStore();

onMounted(async () => {
  await paintingStore.setAllPaintings();
});
</script>

<style scoped lang="scss">
.container {
  margin-top: 45px;
}
.painting-container__paintings {
  margin-bottom: 40px;
}
</style>
