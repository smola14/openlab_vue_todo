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
    <h1 class="title mt-5">
      Active tasks - {{ todoStore.activeTasks.length }}
    </h1>
    <div>
      <div v-if="todoStore.loading">
        <progress class="progress is-small is-primary" max="100">15%</progress>
      </div>
      <div v-else>
        <div v-for="item in todoStore.activeTasks" :key="item.id">
          <SingleTodo v-if="!item.edit" :item="item" />
          <EditTodo v-else :item="item" />
        </div>
      </div>
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
  },
}
</script>

<style lang="scss" scoped>
.input {
  width: 10rem;
}
</style>
