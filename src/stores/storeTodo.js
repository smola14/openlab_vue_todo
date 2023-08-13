import { defineStore } from 'pinia'

export const useStoreTodo = defineStore('todo', {
  state: () => ({
    items: [],
  }),
  actions: {},
})
