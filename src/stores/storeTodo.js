import { defineStore } from 'pinia'

export const useStoreTodo = defineStore('todo', {
  state: () => ({
    items: [],
  }),
  actions: {
    fetchData() {
      console.log('fetching data')
    },
  },
})
