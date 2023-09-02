import { defineStore } from 'pinia'
import axios from 'axios'

export const useStoreTodo = defineStore('todo', {
  state: () => ({
    items: [],
  }),
  actions: {
    fetchData() {
      axios
        .get('todos')
        .then((response) => {
          console.log('Moxios Response:', response.data)
        })
        .catch((error) => {
          console.error('Moxios Error:', error)
        })
    },
  },
})
