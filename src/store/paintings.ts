import { defineStore } from 'pinia';
import { baseURL, paintingApi } from '@/API/api';
import { useAuthorStore } from './authors';
import { useLocationStore } from './location';
import type { IPaintingWithoutId, IPaintingWithId } from '@/models/IPainting';

interface State {
  paintings: IPaintingWithoutId[];
  limit: number;
  totalCount?: number;
}

export const usePaintingsStore = defineStore('paintings', {
  state: (): State => {
    return {
      paintings: [],
      limit: 9,
      totalCount: undefined
    };
  },
  actions: {
    async setAllPaintings() {
      const paintings = await paintingApi.getAllPaintings();
      if (paintings && paintings?.length > 0) {
        const authors = useAuthorStore().authors;
        const locaitons = useLocationStore().locations;

        this.paintings = await paintings.map((el: IPaintingWithId) => {
          return {
            id: el.id,
            imageUrl: baseURL + el.imageUrl,
            name: el.name,
            created: el.created,
            author: authors.find((item) => item.id === el.authorId)?.name,
            location: locaitons.find((item) => item.id === el.locationId)?.location
          };
        });

        this.totalCount = paintings.length;
      }
    }
  }
});
