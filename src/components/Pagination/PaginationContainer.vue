<template>
  <Pagination
    :curPage="pagStore.page"
    :countPages="countPages"
    :numberPagesArr="visiblePages"
    :changePage="onChangeCurrentPage"
    :toPrevPage="toPrevPage"
    :toStartPage="toStartPage"
    :toNextPage="toNextPage"
    :toEndPage="toEndPage"
  />
</template>

<script setup lang="ts">
import { computed, reactive, watch } from 'vue';
import { usePaintingsStore } from '@/store/paintings';
import Pagination from './Pagination.vue';

const pagStore = usePaintingsStore();

const defaultPages: number[] = [1, 2, 3];

let { visiblePages } = reactive({ visiblePages: defaultPages });

// общее количество страниц
let countPages = computed(() => Math.ceil(pagStore.totalCount / pagStore.limit));

const fillVisiblePages = () => {
  let pages: number[] = [];

  if (countPages.value < visiblePages.length && countPages.value !== 0) {
    for (let i = 1; i < countPages.value + 1; i++) pages.push(i);

    visiblePages = pages;
  } else {
    visiblePages = defaultPages;
  }
};

watch(
  () => countPages.value,
  () => {
    fillVisiblePages();
  }
);

const incrementPage = (selectedPage: number): number[] => {
  // get last element from visiblePages
  let lastElNumberPages = visiblePages[visiblePages.length - 1];

  if (selectedPage === lastElNumberPages && lastElNumberPages !== countPages.value) {
    return visiblePages.map((el) => el + 1);
  }

  return visiblePages;
};

const decrementPage = (selectedPage: number): number[] => {
  if (selectedPage === visiblePages[0]) return visiblePages.map((el) => el - 1);

  return visiblePages;
};

const onChangeCurrentPage = (selectedPage: number): void => {
  let pages: number[] = visiblePages;

  if (pagStore.page - selectedPage < 0) pages = incrementPage(selectedPage);

  if (pagStore.page - selectedPage > 0 && visiblePages[0] != 1) pages = decrementPage(selectedPage);

  visiblePages = pages;
  pagStore.setPage(selectedPage);
};

const toPrevPage = (): void => {
  if (pagStore.page !== 1) onChangeCurrentPage(pagStore.page - 1);
};

const setNumberPagesArrToStart = (): void => {
  fillVisiblePages();
  pagStore.setPage(1);
};

const toStartPage = (): void => {
  if (pagStore.page != 1) {
    setNumberPagesArrToStart();
  }
};

const setNumberPagesArrToEnd = (): void => {
  let pages: number[] = [];

  if (countPages.value > defaultPages.length) {
    for (let i = countPages.value - 2; i <= countPages.value; i++) pages.push(i);

    visiblePages = pages;
  }

  pagStore.setPage(countPages.value);
};

const toEndPage = (): void => {
  if (pagStore.page != countPages.value) {
    setNumberPagesArrToEnd();
  }
};

const toNextPage = (): void => {
  if (pagStore.page != countPages.value) onChangeCurrentPage(pagStore.page + 1);
};
</script>
