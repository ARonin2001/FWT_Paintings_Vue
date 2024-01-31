<template>
  <input
    @input="updateValue"
    :value="value"
    :type="type"
    :id="name"
    :placeholder="name"
    :name="name"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'field-input'
});
</script>

<script setup lang="ts">
interface Props {
  type: string;
  name: string;
  value: string | number;
}

const props = defineProps<Props>();
const emit = defineEmits(['update:value']);

const updateValue = (e: Event) => {
  const target = e.target as HTMLInputElement;
  emit('update:value', target.value);
};
</script>
