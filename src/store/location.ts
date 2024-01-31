import { defineStore } from 'pinia';
import { locationApi } from '@/API/api';
import { type ILocation } from '@/models/ILocation';

interface State {
  locations: ILocation[];
}

export const useLocationStore = defineStore('location', {
  state: (): State => {
    return {
      locations: []
    };
  },
  actions: {
    async setAllLocations() {
      const locations = await locationApi.getAllLocations();
      this.locations = locations;
    }
  }
});
