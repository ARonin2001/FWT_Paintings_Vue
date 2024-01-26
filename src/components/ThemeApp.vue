<template>
  <button class="btn" @click="toggleThemeIcon">
    <img :src="currentIcon" alt="Theme Paintings page" class=".themeIcon" />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';

interface State {
  currentIcon: string;
  toggleTheme: boolean;
  bodyThemeAttribute: 'light' | 'dark';
}

export default defineComponent({
  data(): State {
    return {
      currentIcon: '',
      toggleTheme: true,
      bodyThemeAttribute: 'light'
    };
  },
  props: {
    images: {
      type: Object as PropType<string[]>,
      required: true
    }
  },
  methods: {
    toggleThemeIcon() {
      this.bodyThemeAttribute = this.toggleTheme ? 'dark' : 'light';

      this.toggleTheme = !this.toggleTheme;
      this.currentIcon = this.toggleTheme ? this.$props.images[0] : this.$props.images[1];

      document.body.setAttribute('data-theme', this.bodyThemeAttribute);
    }
  },
  mounted() {
    this.currentIcon = this.$props.images[0];
  }
});
</script>

<style lang="scss">
.btn {
  background-color: transparent;
}
</style>
