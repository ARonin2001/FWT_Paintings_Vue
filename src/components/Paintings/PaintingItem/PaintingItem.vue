<template>
  <div class="item">
    <div class="container">
      <a class="link" :href="imageUrl" @click.prevent="">
        <img class="img" :src="imageUrl" />

        <div class="info">
          <div class="infoContainer">
            <h3 class="title">{{ name }}</h3>

            <div class="descriptionContainer">
              <Description title="Author:" :body="author" />
              <Description title="Created:" :body="created" />
              <Description title="Location:" :body="location" />
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import Description from './DescriptionItem.vue';
import type { IPaintingWithoutId } from '@/models/IPainting';

interface Props {
  painting: IPaintingWithoutId;
}
const props = defineProps<Props>();

const { imageUrl, name, author, created, location } = reactive({ ...props.painting });
</script>

<style scoped lang="scss" src="./PaintingItem.scss"></style>
