import axios from 'axios';
export const baseURL = 'https://test-front.framework.team/';

const instance = axios.create({
  baseURL: baseURL
});

export interface PaintingsParams {
  limit?: number;
  page?: number;
  name?: string;
  authorId?: number;
  locationId?: number;
  createdFrom?: number;
  createdBefore?: number;
}

export const paintingApi = {
  getAllPaintings() {
    return instance.get('paintings').then((res) => res.data);
  },
  getPaintings({
    limit,
    page,
    name,
    authorId,
    locationId,
    createdFrom,
    createdBefore
  }: PaintingsParams) {
    return instance
      .get('paintings?q=', {
        params: {
          _limit: limit,
          _page: page,
          authorId,
          locationId,
          name,
          created_gte: createdFrom,
          created_lte: createdBefore
        }
      })
      .then((res) => res.data);
  }
};

export const authorApi = {
  getAllAuthors() {
    return instance.get('authors').then((res) => res.data);
  }
};

export const locationApi = {
  getAllLocations() {
    return instance.get('locations').then((res) => res.data);
  }
};
