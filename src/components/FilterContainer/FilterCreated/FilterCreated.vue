<template>
  <div class="created__container">
    <div class="form">
      <div class="inputs">
        <field-input class="inp" v-model:value="valueFrom" name="from" type="number" />
        <span class="dash"></span>
        <field-input class="inp" v-model:value="valueBefore" name="before" type="number" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const valueFrom = ref<number | string>('');
const valueBefore = ref<number | string>('');

const emit = defineEmits(['changeValues']);

watch(
  () => [valueFrom.value, valueBefore.value],
  () => {
    emit('changeValues', Number(valueFrom.value), Number(valueBefore.value));
  }
);
</script>

<style lang="scss" scoped src="./FilterCreated.scss"></style>
