<template>
  <li class="li" tabindex="0" @click="handleClick(title, id)">
    <div class="content">{{ title }}</div>
  </li>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';

interface handleClickProp {
  (title: string, itemId: number): void;
}

export default defineComponent({
  props: {
    id: { type: Number, required: true },
    title: { type: String, required: true },
    handleClick: { type: Function as PropType<handleClickProp>, required: true }
  }
});
</script>

<style scoped lang="scss">
.li {
  padding: 10px 0 10px 30px;
  overflow: hidden;

  &:hover {
    background: var(--li-hover-background);
    color: var(--li-hover-color);
  }

  .content {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: calc(100% - 39px);
  }
}
</style>
