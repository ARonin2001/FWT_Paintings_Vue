<template>
  <Pagination
    :curPage="pagStore.page"
    :countPages="countPages"
    :numberPagesArr="arrPages.visiblePages"
    :changePage="onChangeCurrentPage"
    :toPrevPage="toPrevPage"
    :toStartPage="toStartPage"
    :toNextPage="toNextPage"
    :toEndPage="toEndPage"
  />
</template>

<script setup lang="ts">
import { computed, reactive } from 'vue';
import { usePaintingsStore } from '@/store/paintings';
import Pagination from './Pagination.vue';

const pagStore = usePaintingsStore();

const visiblePages: number[] = [1, 2, 3];

let arrPages = reactive({ visiblePages });

let countPages = computed(() => Math.ceil(pagStore.totalCount / pagStore.limit));

const incrementPage = (selectedPage: number): number[] => {
  let lastElNumberPages = arrPages.visiblePages[arrPages.visiblePages.length - 1];

  if (selectedPage >= lastElNumberPages && lastElNumberPages !== countPages.value) {
    return arrPages.visiblePages.map((el) => el + 1);
  }

  return arrPages.visiblePages;
};

const decrementPage = (selectedPage: number): number[] => {
  if (selectedPage === arrPages.visiblePages[0]) return arrPages.visiblePages.map((el) => el - 1);

  return arrPages.visiblePages;
};

const onChangeCurrentPage = (selectedPage: number): void => {
  let pages: number[] = arrPages.visiblePages;

  if (pagStore.page - selectedPage < 0) pages = incrementPage(selectedPage);

  if (pagStore.page - selectedPage > 0 && arrPages.visiblePages[0] != 1)
    pages = decrementPage(selectedPage);

  arrPages.visiblePages = pages;
  pagStore.setPage(selectedPage);
};

const toPrevPage = (): void => {
  if (pagStore.page != 1) onChangeCurrentPage(pagStore.page - 1);
};

const setNumberPagesArrToStart = (): void => {
  let pages: number[] = [];

  if (countPages.value >= visiblePages.length) {
    arrPages.visiblePages = visiblePages;
  }

  if (countPages.value < visiblePages.length && countPages.value !== 0) {
    for (let i = 1; i < countPages.value + 1; i++) pages.push(i);

    arrPages.visiblePages = pages;
  }
};

const toStartPage = (): void => {
  if (pagStore.page != 1) {
    setNumberPagesArrToStart();
    pagStore.setPage(1);
  }
};

const setNumberPagesArrToEnd = (): void => {
  let pages: number[] = [];

  if (countPages.value > 3) {
    for (let i = countPages.value - 2; i <= countPages.value; i++) pages.push(i);

    arrPages.visiblePages = pages;
  }
};

const toEndPage = (): void => {
  if (pagStore.page != countPages.value) {
    setNumberPagesArrToEnd();
    pagStore.setPage(countPages.value);
  }
};

const toNextPage = (): void => {
  if (pagStore.page != countPages.value) onChangeCurrentPage(pagStore.page + 1);
};
</script>
