<template>
  <header id="header">
    <div className="container">
      <Logo />
      <ThemeApp
        :images="['/src/assets/Theme-black-icon.svg', '/src/assets/Theme-white-icon.svg']"
      />
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Logo from './Logo.vue';
import ThemeApp from './ThemeApp.vue';

interface State {
  themeImg: string;
}

export default defineComponent({
  components: {
    Logo,
    ThemeApp
  },
  data(): State {
    return {
      themeImg: ''
    };
  }
});
</script>

<style scoped lang="scss">
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
