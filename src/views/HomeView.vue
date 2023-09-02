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
    <div v-for="(item, index) in todoStore.items" :key="index">
      <SingleTodo :item="item"></SingleTodo>
    </div>
  </div>
</template>

<script>
import { mapStores } from 'pinia'
import { useStoreTodo } from '@/stores/storeTodo.js'
import SingleTodo from '@/components/SingleTodo.vue'
export default {
  data() {
    return {
      newItem: '',
      items: [],
    }
  },
  components: {
    SingleTodo,
  },

  mounted() {
    this.todoStore.getTodos()
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
