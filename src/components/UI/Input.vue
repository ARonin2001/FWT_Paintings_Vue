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
  name: 'field-input',
  props: {
    type: { type: String, required: true },
    name: { type: String, required: true },
    value: [String, Number]
  },
  methods: {
    updateValue(e: Event) {
      const target = e.target as HTMLInputElement;
      this.$emit('update:value', target.value);
    }
  }
});
</script>
