import { defineStore } from 'pinia';
import { authorApi } from '@/API/api';
import { type IAuthor } from '@/models/IAuthor';

interface State {
  authors: IAuthor[];
}

export const useAuthorStore = defineStore('authors', {
  state: (): State => {
    return {
      authors: []
    };
  },
  actions: {
    async setAllAuthors() {
      const authors = await authorApi.getAllAuthors();
      this.authors = authors;
    }
  }
});
