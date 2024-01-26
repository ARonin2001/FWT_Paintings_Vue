<template>
  <div class="mainContainer">
    <div class="container">
      <app-filter>
        <field-input type="text" name="name" v-model:value="paintingName" class="input__name" />
      </app-filter>
      <app-filter>
        <FilterList title="Authors">
          <template v-slot:default="slotProps">
            <FilterSelect :lists="lists" :handleClick="slotProps.changeTitle" />
          </template>
        </FilterList>
      </app-filter>
      <app-filter>
        <FilterList title="Locations">
          <template v-slot:default="slotProps">
            <FilterSelect :lists="lists" :handleClick="slotProps.changeTitle" />
          </template>
        </FilterList>
      </app-filter>
      <app-filter>
        <FilterList title="Created">
          <FilterCreated />
        </FilterList>
      </app-filter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FilterList from '@/components/FilterContainer/FilterList/FilterList.vue';
import FilterSelect from '@/components/FilterContainer/FilterSelect/FilterSelect.vue';
import FilterCreated from '@/components/FilterContainer/FilterCreated/FilterCreated.vue';

interface State {
  paintingName: string;
  lists: { id: number; title: string }[];
}

export default defineComponent({
  components: {
    FilterList,
    FilterSelect,
    FilterCreated
  },
  data(): State {
    return {
      paintingName: '',
      lists: [
        { id: 1, title: 'sdf' },
        { id: 2, title: 'tittittt' },
        { id: 3, title: 'Yehu' }
      ]
    };
  }
});
</script>

<style scoped lang="scss">
.container {
  display: grid;
  gap: 15px 20px;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  grid-template-rows: repeat(auto-fit, 45px);
  width: 100%;
  height: 100%;

  @for $i from 1 through 4 {
    & > *:nth-child(#{$i}) {
      z-index: 100 - $i;
    }
  }

  .input__name {
    color: var(--input-name-color);
    width: 100%;
    max-height: 45px;
  }
}
</style>
