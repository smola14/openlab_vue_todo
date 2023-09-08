<template>
  <div>
    <h1 class="title">Deleted tasks</h1>

    <div v-for="(item, index) in deletedTodoItems" :key="index">
      <div class="card mt-5">
        <div class="card-content">
          <div class="content">
            {{ item.name }}
          </div>
        </div>
        <footer class="card-footer">
          <button
            class="card-footer-item button is-info"
            @click="item.deleted = false"
          >
            Refresh<box-icon color="white" name="refresh"></box-icon>
          </button>
          <button
            class="card-footer-item button is-danger"
            @click="deleteItemPermanently(index)"
          >
            Delete perm. <box-icon color="white" name="trash"></box-icon>
          </button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import { mapStores } from 'pinia'
import { useStoreTodo } from '@/stores/storeTodo.js'
export default {
  computed: {
    ...mapStores(useStoreTodo),
    deletedTodoItems() {
      return this.todoStore.items.filter((todo) => todo.deleted === true)
    },
  },
  methods: {
    deleteItemPermanently(index) {
      this.todoStore.deleteTodo(index)
    },
  },
}
</script>
