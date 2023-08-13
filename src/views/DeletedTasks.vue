<template>
  <div>
    <ul>
      <button @click="$router.push('/')" class="button">
        <box-icon name="chevron-left"></box-icon> active tasks
      </button>
      <h1 class="title">Deleted tasks</h1>

      <li v-for="(item, index) in todoStore.items" :key="index" class="mt-2">
        <div v-if="item.deleted">
          <span>
            {{ item.name }}
          </span>
          <button class="button is-small is-info" @click="item.deleted = false">
            <box-icon name="refresh"></box-icon>
          </button>
          <button
            class="button is-small is-danger"
            @click="deleteItemPermanently(index)"
          >
            <box-icon name="trash"></box-icon>
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapStores } from 'pinia'
import { useStoreTodo } from '@/stores/storeTodo.js'
export default {
  computed: {
    ...mapStores(useStoreTodo),
  },
  methods: {
    deleteItemPermanently(index) {
      this.todoStore.items.splice(index, 1)
    },
  },
}
</script>
