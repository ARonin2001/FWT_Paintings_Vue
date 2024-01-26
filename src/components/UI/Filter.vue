<template>
  <div
    class="filter"
    :class="{ active: isActive }"
    tabindex="1"
    @focusin="toggleIsActive"
    @focusout="toggleIsActive"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface State {
  isActive: boolean;
}

export default defineComponent({
  name: 'app-filter',
  data(): State {
    return {
      isActive: false
    };
  },
  methods: {
    toggleIsActive() {
      this.isActive = !this.isActive;
    }
  }
});
</script>

<style scoped lang="scss">
.filter {
  position: relative;
  font-family: 'Roboto-Regular';
  font-size: 13px;
  width: 100%;
  min-height: 45px;
  height: 100%;
}
</style>

<style lang="scss">
.filter {
  & > * {
    border: 1px solid var(--primary-border-color);
    border-radius: 8px;
    padding: 15px;
    width: 100%;
    background: var(--filter-background);
    color: var(--font-color);
  }
  &.active > * {
    border-color: var(--active-filter-border);
  }
}
</style>
