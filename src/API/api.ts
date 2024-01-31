import axios from 'axios';
export const baseURL = 'https://test-front.framework.team/';

const instance = axios.create({
  baseURL: baseURL
});

export const paintingApi = {
  getAllPaintings() {
    return instance.get('paintings').then((res) => res.data);
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
