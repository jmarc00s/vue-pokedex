import { defineStore } from 'pinia';

type MainState = {
  _filter: string;
};

export const useStore = defineStore('main', {
  state: (): MainState => ({ _filter: '' }),
  getters: {
    filter: (state): string => state._filter,
  },
  actions: {
    setFilter(filter: string): void {
      this._filter = filter;
    },
  },
});
