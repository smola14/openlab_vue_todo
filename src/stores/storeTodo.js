import { defineStore } from 'pinia'
import axios from 'axios'

export const useStoreTodo = defineStore('todo', {
  state: () => ({
    items: [],
    loading: false,
  }),
  actions: {
    getTodos() {
      const todosFromLocalStorage = this.getTodosFromLocalStorage()
      this.items = Array.isArray(todosFromLocalStorage)
        ? todosFromLocalStorage
        : []
    },
    addTodo(todo) {
      axios
        .post('todos', todo)
        .then(() => {
          this.items.push(todo)
          this.saveTodosToLocalStorage()
        })
        .catch((error) => {
          console.error('Axios Error:', error)
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
          this.saveTodosToLocalStorage()
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
            (todo) => todo.id === todoId
          )

          if (todoToRemove !== -1) {
            this.items.splice(todoToRemove, 1)
            this.saveTodosToLocalStorage()
          }
        })
        .catch((error) => {
          console.error('Moxios Error:', error)
        })
    },
    getTodosFromLocalStorage() {
      const todoItemsJSON = localStorage.getItem('items')
      return todoItemsJSON ? JSON.parse(todoItemsJSON) : []
    },
    saveTodosToLocalStorage() {
     
      localStorage.setItem('items', JSON.stringify(this.items))
    },
  },
})
