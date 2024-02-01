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

const getFormatPaintings = async (paintings: IPaintingWithId[]) => {
  if (paintings && paintings?.length > 0) {
    const authors = await useAuthorStore().authors;
    const locaitons = await useLocationStore().locations;

    const formatedPaintings = await paintings.map((el: IPaintingWithId): IPaintingWithoutId => {
      return {
        id: el.id,
        imageUrl: baseURL + el.imageUrl,
        name: el.name,
        created: el.created,
        author: authors.find((item) => item.id === el.authorId)?.name || '',
        location: locaitons.find((item) => item.id === el.locationId)?.location || ''
      };
    });

    return formatedPaintings;
  }
  return [];
};

export const usePaintingsStore = defineStore('paintings', {
  state: (): State => {
    return {
      paintings: [],
      limit: 12,
      totalCount: 0
    };
  },
  actions: {
    setTotalCount(paintings: IPaintingWithId[] | IPaintingWithoutId[]) {
      this.totalCount = paintings ? paintings.length : 0;
    },
    async setAllPaintings() {
      const paintingsAll = await paintingApi.getPaintings({});
      this.setTotalCount(paintingsAll);

      const paintings = await paintingApi.getPaintings({ limit: this.limit });

      this.paintings = await getFormatPaintings(paintings);
    },
    async setPaintings(par: {
      page?: number;
      authorId?: number;
      locationId?: number;
      name?: string;
      createdFrom?: number;
      createdBefore?: number;
    }) {
      const params = {
        limit: this.limit,
        page: par.page,
        name: par.name === '' ? undefined : par.name,
        authorId: par.authorId,
        locationId: par.locationId,
        createdFrom: par.createdFrom,
        createdBefore: par.createdBefore
      };
      const paintings = await paintingApi.getPaintings(params);
      this.setTotalCount(paintings);

      this.paintings = await getFormatPaintings(paintings);
    }
  }
});
