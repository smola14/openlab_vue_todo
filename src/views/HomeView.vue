<template>
  <div>
    <div>
      <input
        class="input"
        type="text"
        placeholder="Enter new TODO"
        v-model="newItem"
        @keyup.enter="newItem && addItemToList()"
      />
      <button
        class="button is-success"
        @click="addItemToList()"
        :disabled="!newItem"
      >
        +
      </button>
    </div>
    <h1 class="title mt-5">Active tasks</h1>
    <div v-for="(item, index) in todoItems" :key="index">
      <SingleTodo v-if="!item.edit" :item="item" />
      <EditTodo v-else :item="item" />
    </div>
  </div>
</template>

<script>
import { mapStores } from 'pinia'
import { useStoreTodo } from '@/stores/storeTodo.js'
import SingleTodo from '@/components/SingleTodo.vue'
import EditTodo from '@/components/EditTodo.vue'

export default {
  data() {
    return {
      newItem: '',
      items: [],
    }
  },
  components: {
    SingleTodo,
    EditTodo,
  },

  methods: {
    addItemToList() {
      this.todoStore.addTodo({
        name: this.newItem,
        deleted: false,
        id: new Date().getTime(),
      })
      this.newItem = ''
    },
  },
  computed: {
    ...mapStores(useStoreTodo),
    todoItems() {
      return this.todoStore.items.filter((todo) => todo.deleted === false)
    },
  },
}
</script>

<style lang="scss" scoped>
.input {
  width: 10rem;
}
</style>
