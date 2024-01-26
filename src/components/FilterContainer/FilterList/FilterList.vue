<template>
  <ul
    class="list"
    :class="{ active: isActive }"
    data-select
    tabindex="1"
    @focusin="handleFocusUl"
    @blur="toggleActive"
  >
    <li class="title" data-select>{{ selectedTitle }}</li>

    <div class="children">
      <slot :changeTitle="changeTitle" :title="selectedTitle"></slot>
      <!-- <Child
        setTitle="{changeTitle}"
        list="{list}"
        setYearCreatedFrom="{setYearCreatedFrom}"
        setYearCreatedBefore="{setYearCreatedBefore}"
        createdFrom="{createdFrom}"
        createdBefore="{createdBefore}"
        tabindex="0"
      /> -->
    </div>

    <div class="arrow"></div>
    <div v-if="isDeleteTitle" data-btn-delete class="delete" tabindex="0" @click="toTitleDefault">
      <span></span>
      <span></span>
    </div>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface State {
  selectedTitle: string;
  isActive: boolean;
  isDeleteTitle: boolean;
}

export default defineComponent({
  name: 'drop-down-list',
  props: {
    title: { type: String, required: true }
  },
  data(): State {
    return {
      selectedTitle: '',
      isActive: false,
      isDeleteTitle: false
    };
  },
  methods: {
    toggleActive() {
      this.isActive = !this.isActive;
    },
    changeTitle(title: string, itemId: number) {
      this.selectedTitle = title;
      // setItemValueId(itemId);
      this.toggleActive();
      this.isDeleteTitle = true;
    },
    toTitleDefault() {
      const title = this.$props.title;
      this.selectedTitle = title ? title : '';
      this.isDeleteTitle = false;
    },
    handleFocusUl(e: Event) {
      if (!('data-btn-delete' in (e.target as any).attributes)) this.isActive = true;
    }
  },
  mounted() {
    this.toTitleDefault();
  }
});
</script>

<style scoped lang="scss" src="./FilterList.scss"></style>
