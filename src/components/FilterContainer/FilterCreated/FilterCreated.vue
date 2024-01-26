<template>
  <div class="created__container">
    <div class="form">
      <div class="inputs">
        <field-input class="inp" name="from" type="number" />
        <span class="dash"></span>
        <field-input class="inp" name="before" type="number" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'drop-down-created'
});
</script>

<style lang="scss" scoped src="./FilterCreated.scss"></style>
