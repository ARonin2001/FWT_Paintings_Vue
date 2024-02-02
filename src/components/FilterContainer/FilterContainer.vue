<template>
  <div class="mainContainer">
    <div class="container">
      <app-filter>
        <field-input
          type="text"
          name="name"
          v-model:value="state.paintingName"
          class="input__name"
        />
      </app-filter>
      <app-filter>
        <FilterList :title="state.authorTitle" @handleClick="changeTitleAuthor">
          <FilterSelect :lists="authors" :handleClick="changeTitleAuthor" />
        </FilterList>
      </app-filter>
      <app-filter>
        <FilterList :title="state.locationTitle" @handleClick="changeTitleLocation">
          <FilterSelect :lists="locations" :handleClick="changeTitleLocation" />
        </FilterList>
      </app-filter>
      <app-filter>
        <FilterList title="Created">
          <FilterCreated @changeValues="changeCreatedValues" />
        </FilterList>
      </app-filter>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed, reactive, watch } from 'vue';
import FilterList from '@/components/FilterContainer/FilterList/FilterList.vue';
import FilterSelect from '@/components/FilterContainer/FilterSelect/FilterSelect.vue';
import FilterCreated from '@/components/FilterContainer/FilterCreated/FilterCreated.vue';
import { useAuthorStore } from '@/store/authors';
import { useLocationStore } from '@/store/location';
import { usePaintingsStore } from '@/store/paintings';

interface State {
  authorTitle: string;
  locationTitle: string;
  authorId?: number;
  locationId?: number;
  paintingName?: string;
  createdFrom?: number;
  createdBefore?: number;
}

const authorsStore = useAuthorStore();
const locationStore = useLocationStore();
const state = reactive<State>({
  authorTitle: 'Authors',
  locationTitle: 'Location',
  authorId: undefined,
  locationId: undefined,
  paintingName: '',
  createdFrom: undefined,
  createdBefore: undefined
});

const authors = computed(() => authorsStore.authors.map((el) => ({ id: el.id, title: el.name })));
const locations = computed(() =>
  locationStore.locations.map((el) => ({ id: el.id, title: el.location }))
);
onMounted(async () => {
  await authorsStore.setAllAuthors();
  await locationStore.setAllLocations();
});

const changeTitleAuthor = (id: number, title: string) => {
  state.authorId = id;
  state.authorTitle = title;
};
const changeTitleLocation = (id: number, title: string) => {
  state.locationId = id;
  state.locationTitle = title;
};
const changeCreatedValues = (from: number, before: number) => {
  state.createdBefore = before === 0 ? undefined : before;
  state.createdFrom = from === 0 ? undefined : from;
};

watch(
  () => [
    state.paintingName,
    state.authorId,
    state.locationId,
    state.createdFrom,
    state.createdBefore,
    usePaintingsStore().page
  ],
  async () => {
    await usePaintingsStore().setPaintings({
      name: state.paintingName,
      authorId: state.authorId,
      locationId: state.locationId,
      createdFrom: state.createdFrom,
      createdBefore: state.createdBefore
    });
  }
);
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
