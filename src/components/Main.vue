<template>
  <div>
    <div class="filter__container">
      <FilterContainer />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FilterContainer from './FilterContainer/FilterContainer.vue';

export default defineComponent({
  components: {
    FilterContainer
  }
});
</script>

<style lang="scss">
.filter__container {
  margin-bottom: 45px;
}
</style>
