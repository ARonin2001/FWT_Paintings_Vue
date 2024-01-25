<template>
  <div className="main">
    <div className="container">
      <Header />
      <Content />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/Header.vue';
import Content from '@/components/Content.vue';

export default defineComponent({
  components: {
    Header,
    Content
  }
});
</script>

<style scoped src="@/App.scss"></style>
