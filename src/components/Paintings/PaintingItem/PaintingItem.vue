<template>
  <div class="item">
    <div class="container">
      <a class="link" :href="props.painting.imageUrl">
        <img class="img" :src="props.painting.imageUrl" />

        <div class="info">
          <div class="infoContainer">
            <h3 class="title">{{ props.painting.name }}</h3>

            <div class="descriptionContainer">
              <Description title="Author:" :body="props.painting.author" />
              <Description title="Created:" :body="props.painting.created" />
              <Description title="Location:" :body="props.painting.location" />
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import Description from './DescriptionItem.vue';
import type { IPaintingWithoutId } from '@/models/IPainting';

interface Props {
  painting: IPaintingWithoutId;
}
const props = defineProps<Props>();
</script>

<style scoped lang="scss" src="./PaintingItem.scss"></style>
