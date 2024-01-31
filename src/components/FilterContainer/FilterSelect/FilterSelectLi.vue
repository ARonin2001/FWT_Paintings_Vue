<template>
  <li class="li" tabindex="0" @click="onClick">
    <div class="content">{{ title }}</div>
  </li>
</template>

<script setup lang="ts">
interface Props {
  id: number;
  title: string;
}

const props = defineProps<Props>();

const emit = defineEmits(['handleClick']);

const onClick = () => {
  emit('handleClick', props.id, props.title);
};
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
