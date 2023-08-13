<template>
  <div>
    <div>
      <div>
        <input
          class="input"
          type="text"
          placeholder="Text input"
          v-model="newItem"
        />
        <button
          class="button is-black"
          @click="addItemToList()"
          :disabled="!newItem"
        >
          +
        </button>
      </div>

      <ul class="mt-5">
        <h1 class="title">Tasks</h1>
        <li v-for="(item, index) in todoStore.items" :key="index" class="mt-2">
          <div v-if="!item.deleted">
            <span>
              {{ item.name }}
            </span>
            <button class="button is-danger" @click="item.deleted = true">
              <box-icon name="x"></box-icon>
            </button>
          </div>
        </li>
      </ul>
      <button @click="$router.push('/deleted')">Deleted tasks</button>
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
