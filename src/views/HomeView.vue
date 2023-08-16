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
      <div class="card mt-5" v-if="!item.deleted">
        <div class="card-content">
          <div class="content">
            {{ item.name }}
          </div>
        </div>
        <footer class="card-footer">
          <button class="card-footer-item button" disabled>Edit</button>
          <button
            class="card-footer-item button is-warning"
            @click="item.deleted = true"
          >
            Delete <box-icon name="x"></box-icon>
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
  data() {
    return {
      newItem: '',
      items: [],
    }
  },

  methods: {
    addItemToList() {
      this.todoStore.items.push({ name: this.newItem, deleted: false })
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
