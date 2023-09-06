import { defineStore } from 'pinia'
import axios from 'axios'

export const useStoreTodo = defineStore('todo', {
  state: () => ({
    items: [],
    loading: false,
  }),
  actions: {
    getTodos() {
      this.loading = true
      axios
        .get('todos')
        .then((response) => {
          this.items = response.data
        })
        .catch((error) => {
          console.error('Moxios Error:', error)
        })
        .finally(() => {
          this.loading = false
        })
    },
    addTodo(todo) {
      axios
        .post('todos', todo)
        .then(() => {
          alert('Todo added!')
          this.items.push(todo)
        })
        .catch((error) => {
          console.error('Moxios Error:', error)
        })
    },
  },
})
