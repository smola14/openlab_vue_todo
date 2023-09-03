<template>
  <div class="card mt-5" v-if="!item.deleted">
    <div class="card-content">
      <input type="text" class="input" v-model="item.name" />
    </div>
    <footer class="card-footer">
      <button class="card-footer-item button" @click="item.edit = false">
        Save
      </button>
      <button
        class="card-footer-item button is-warning"
        @click="item.edit = false"
      >
        Cancel
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
    editTodoItem() {
      this.$emit('open-edit')
      const itemToEdit = this.todoStore.items.find(
        (item) => item.id === this.item.id
      )

      // Check if the item was found and update its 'edit' property to true
      if (itemToEdit) {
        itemToEdit.edit = true
      }
    },
  },

  computed: {
    ...mapStores(useStoreTodo),
  },
}
</script>
