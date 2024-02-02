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

interface PaintingsWithParams {
  authorId?: number;
  locationId?: number;
  name?: string;
  createdFrom?: number;
  createdBefore?: number;
}

const getFormatPaintings = (paintings: IPaintingWithId[]) => {
  if (paintings && paintings?.length > 0) {
    const authors = useAuthorStore().authors;
    const locaitons = useLocationStore().locations;

    const formatedPaintings = paintings.map((el: IPaintingWithId): IPaintingWithoutId => {
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
    async setPaintings(par: PaintingsWithParams) {
      this.isLoading = true;

      const { name, authorId, locationId, createdFrom, createdBefore } = par;

      const params = {
        name: name === '' ? undefined : name,
        authorId,
        locationId,
        createdFrom,
        createdBefore
      };

      // get paintings without limit and page to set TotalCount;
      const paintingsPages = await paintingApi.getPaintings(params);
      this.setTotalCount(paintingsPages);

      // get paintings with limit and page to set paintings
      const paintings = await paintingApi.getPaintings({
        ...params,
        limit: this.limit,
        page: this.page
      });

      this.paintings = getFormatPaintings(paintings);

      this.isLoading = false;
    },
    setPage(page: number) {
      this.page = page;
    }
  }
});
