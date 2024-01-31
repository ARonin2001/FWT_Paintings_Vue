<template>
  <div className="main">
    <div className="main__container">
      <div class="header__container">
        <Header />
      </div>
      <Main />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/Header.vue';
import Main from '@/components/Main.vue';

export default defineComponent({
  components: {
    Header,
    Main
  }
});
</script>

<style src="@/App.scss"></style>
