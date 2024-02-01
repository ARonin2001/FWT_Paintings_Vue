<template>
  <div class="pagination">
    <div class="container">
      <div class="pages btnsPrev" :class="{ disabled: props.curPage === 1 }">
        <PaginationButton @handleClick="toStartPage">
          <Arrow />
          <Arrow />
        </PaginationButton>
        <PaginationButton @handleClick="toPrevPage">
          <Arrow />
        </PaginationButton>
      </div>

      <div class="pages">
        <PaginationButton
          v-for="page in numberPagesArr"
          :key="page"
          :content="page"
          @handleClick="changePage"
          :class="{ current: page === curPage }"
          >{{ page }}</PaginationButton
        >
      </div>

      <div class="pages btnsNext" :class="{ disabled: curPage === countPages }">
        <PaginationButton @handleClick="toNextPage">
          <Arrow />
        </PaginationButton>
        <PaginationButton @handleClick="toEndPage">
          <Arrow />
          <Arrow />
        </PaginationButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Arrow from './Arrow.vue';
import PaginationButton from './PaginationButton.vue';

interface Props {
  curPage: number;
  countPages: number;
  numberPagesArr: number[];
  changePage: (selectedPage: number) => void;
  toPrevPage: () => void;
  toStartPage: () => void;
  toNextPage: () => void;
  toEndPage: () => void;
}

const props = defineProps<Props>();
</script>

<style lang="scss" src="./Pagination.scss"></style>
