<template>
  <div class="card mt-5">
    <div class="card-content">
      <div class="content">
        {{ item.name }}
      </div>
    </div>
    <footer class="card-footer">
      <button class="card-footer-item button" @click="editTodo">Edit</button>
      <button class="card-footer-item button is-warning" @click="deleteTodo">
        Delete <box-icon name="x"></box-icon>
      </button>
    </footer>
  </div>
</template>

<script>
import { mapStores } from 'pinia'
import { useStoreTodo } from '@/stores/storeTodo.js'
export default {
  props: ['item'],
  methods: {
    editTodo() {
      const itemToEdit = this.todoStore.items.find(
        (item) => item.id === this.item.id
      )

      if (itemToEdit) {
        itemToEdit.edit = true
      }
    },
    deleteTodo() {
      const itemToDelete = this.todoStore.items.find(
        (item) => item.id === this.item.id
      )

      if (itemToDelete) {
        itemToDelete.deleted = true
      }
    },
  },
  computed: {
    ...mapStores(useStoreTodo),
  },
}
</script>
