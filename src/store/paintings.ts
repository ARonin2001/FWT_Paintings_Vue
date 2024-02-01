import { defineStore } from 'pinia';
import { baseURL, paintingApi } from '@/API/api';
import { useAuthorStore } from './authors';
import { useLocationStore } from './location';
import type { IPaintingWithoutId, IPaintingWithId } from '@/models/IPainting';

interface State {
  paintings: IPaintingWithoutId[];
  limit: number;
  page: number;
  totalCount: number;
  isLoading: boolean;
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
      page: 1,
      totalCount: 0,
      isLoading: false
    };
  },
  actions: {
    setTotalCount(paintings: IPaintingWithId[] | IPaintingWithoutId[]) {
      this.totalCount = paintings ? paintings.length : 0;
    },
    async setAllPaintings() {
      this.isLoading = true;
      const paintingsAll = await paintingApi.getPaintings({});
      this.setTotalCount(paintingsAll);

      const paintings = await paintingApi.getPaintings({ limit: this.limit });

      this.paintings = await getFormatPaintings(paintings);
      this.isLoading = false;
    },
    async setPaintings(par: {
      authorId?: number;
      locationId?: number;
      name?: string;
      createdFrom?: number;
      createdBefore?: number;
    }) {
      this.isLoading = true;

      const params = {
        limit: this.limit,
        page: this.page,
        name: par.name === '' ? undefined : par.name,
        authorId: par.authorId,
        locationId: par.locationId,
        createdFrom: par.createdFrom,
        createdBefore: par.createdBefore
      };
      const paintingsPages = await paintingApi.getPaintings({
        name: par.name === '' ? undefined : par.name,
        authorId: par.authorId,
        locationId: par.locationId,
        createdFrom: par.createdFrom,
        createdBefore: par.createdBefore
      });
      this.setTotalCount(paintingsPages);

      const paintings = await paintingApi.getPaintings(params);

      this.paintings = await getFormatPaintings(paintings);

      this.isLoading = false;
    },

    setPage(page: number) {
      this.page = page;
    }
  }
});
