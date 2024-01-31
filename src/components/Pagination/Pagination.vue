<template>
  <div class="pagination">
    <div class="container">
      <div class="pages btnsPrev">
        <PaginationButton>
          <Arrow />
          <Arrow />
        </PaginationButton>
        <PaginationButton>
          <Arrow />
        </PaginationButton>
      </div>

      <div class="pages">
        <PaginationButton>1</PaginationButton>
        <PaginationButton>2</PaginationButton>
        <PaginationButton>3</PaginationButton>
      </div>

      <div class="pages btnsNext">
        <PaginationButton>
          <Arrow />
        </PaginationButton>
        <PaginationButton>
          <Arrow />
          <Arrow />
        </PaginationButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Arrow from './Arrow.vue';
import PaginationButton from './PaginationButton.vue';

export default defineComponent({
  components: {
    Arrow,
    PaginationButton
  }
});
</script>

<style scoped lang="scss" src="./Pagination.scss"></style>
