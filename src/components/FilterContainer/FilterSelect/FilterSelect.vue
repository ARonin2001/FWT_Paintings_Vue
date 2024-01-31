<template>
  <div class="select__container" data-simplebar>
    <simplebar :auto-hide="false" force-visible="y" style="max-height: 300px">
      <ul class="select">
        <FilterSelectLi
          v-for="list in props.lists"
          :key="list.id"
          :id="list.id"
          @handleClick="props.handleClick"
          :title="list.title"
        />
      </ul>
    </simplebar>
  </div>
</template>

<script setup lang="ts">
import simplebar from 'simplebar-vue';
import 'simplebar-vue/dist/simplebar.min.css';
import FilterSelectLi from '@/components/FilterContainer/FilterSelect/FilterSelectLi.vue';

interface List {
  id: number;
  title: string;
}
interface Props {
  lists: List[];
  handleClick: (id: number, title: string) => void;
}

const props = defineProps<Props>();
</script>

<style scoped lang="scss">
.select__container {
  max-height: 300px;
  height: 100%;
  padding: 10px 0;
  border-top: 1px solid var(--select-top-border);

  .select {
    font-family: 'Roboto-Medium';
    font-size: 16px;
    line-height: 20px;
    max-height: 280px;
  }
}
</style>

<style lang="scss">
.simplebar {
  &-track {
    right: 7px !important;
  }
  &-vertical {
    top: -10px !important;
    overflow: visible;
    max-height: 293px;
  }

  &-vertical &-scrollbar:before {
    background: #7b7b7b;
    border-radius: 10px;
    opacity: 1 !important;
    width: 9px;
  }
}
</style>
