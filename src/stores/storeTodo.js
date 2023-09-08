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
          this.items.push(todo)
        })
        .catch((error) => {
          console.error('Moxios Error:', error)
        })
    },
    editTodo(editedTodo) {
      axios
        .post('todos/' + editedTodo.id, editedTodo)
        .then(() => {
          const todoToEdit = this.items.findIndex(
            (todo) => todo.id === editedTodo.id
          )

          this.items[todoToEdit] = editedTodo
        })
        .catch((error) => {
          console.error('Moxios Error:', error)
        })
    },
    deleteTodo(todoId) {
      axios
        .post('todos/' + todoId)
        .then(() => {
          const todoToRemove = this.items.findIndex(
            (todo) => todo.id === todoId.id
          )
          this.items.splice(todoToRemove, 1)
        })
        .catch((error) => {
          console.error('Moxios Error:', error)
        })
    },
  },
})
