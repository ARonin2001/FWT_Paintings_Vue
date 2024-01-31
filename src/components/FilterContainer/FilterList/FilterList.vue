<template>
  <ul
    class="list"
    :class="{ active: state.isActive }"
    data-select
    tabindex="1"
    @focusin="handleFocusUl"
    @focusout="isActiveToFalse"
  >
    <li class="title" data-select>{{ title }}</li>

    <div class="children">
      <slot></slot>
    </div>

    <div class="arrow"></div>
    <div
      v-if="state.isDeleteTitle"
      data-btn-delete
      class="delete"
      tabindex="0"
      @click="toTitleDefault"
    >
      <span></span>
      <span></span>
    </div>
  </ul>
</template>

<script setup lang="ts">
import { reactive, watch } from 'vue';

interface State {
  defaultTitle: string;
  isActive: boolean;
  isDeleteTitle: boolean;
}
interface Props {
  title: string;
}
const props = defineProps<Props>();
const state: State = reactive({
  defaultTitle: props.title,
  isActive: false,
  isDeleteTitle: false
});
const emit = defineEmits(['handleClick']);

const isActiveToFalse = () => {
  state.isActive = false;
};
const toTitleDefault = () => {
  emit('handleClick', undefined, state.defaultTitle);
  state.isDeleteTitle = false;
};
const handleFocusUl = (e: Event) => {
  if (!('data-btn-delete' in (e.target as any).attributes)) {
    state.isActive = true;
  }
};
watch(
  () => props.title,
  (currentValue) => {
    if (currentValue !== state.defaultTitle) {
      state.isDeleteTitle = true;
      state.isActive = false;
    }
  }
);
</script>

<style scoped lang="scss" src="./FilterList.scss"></style>
