<template>
  <button class="btn" @click="toggleThemeIcon">
    <img :src="state.currentIcon" alt="Theme Paintings page" class=".themeIcon" />
  </button>
</template>

<script setup lang="ts">
import { onMounted, reactive } from 'vue';

interface State {
  currentIcon: string;
  toggleTheme: boolean;
  bodyThemeAttribute: 'light' | 'dark';
}

const state = reactive<State>({
  currentIcon: '',
  toggleTheme: true,
  bodyThemeAttribute: 'light'
});

const props = defineProps<{ images: string[] }>();

const toggleThemeIcon = () => {
  state.bodyThemeAttribute = state.toggleTheme ? 'dark' : 'light';

  state.toggleTheme = !state.toggleTheme;
  state.currentIcon = state.toggleTheme ? props.images[0] : props.images[1];

  document.body.setAttribute('data-theme', state.bodyThemeAttribute);
};
onMounted(() => {
  state.currentIcon = props.images[0];
});
</script>

<style lang="scss">
.btn {
  background-color: transparent;
}
</style>
