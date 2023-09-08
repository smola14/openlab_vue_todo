<template>
  <div class="card mt-5" v-if="!item.deleted">
    <div class="card-content">
      <input type="text" class="input" v-model="editedName" />
    </div>
    <footer class="card-footer">
      <button class="card-footer-item button" @click="saveEdit">Save</button>
      <button class="card-footer-item button is-warning" @click="cancelEditing">
        Cancel
      </button>
    </footer>
  </div>
</template>

<script>
import { mapStores } from 'pinia'
import { useStoreTodo } from '@/stores/storeTodo.js'

export default {
  data() {
    return {
      editedName: this.item.name,
    }
  },
  props: ['item'],
  methods: {
    saveEdit() {
      this.item.edit = false
      this.todoStore.editTodo({
        name: this.editedName,
        id: this.item.id,
        deleted: false,
        edit: false,
      })
    },
    cancelEditing() {
      this.editedName = this.item.name
      this.item.edit = false
    },
  },
  computed: {
    ...mapStores(useStoreTodo),
  },
}
</script>
