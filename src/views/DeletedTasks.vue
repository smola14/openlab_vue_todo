<template>
  <div>
    <ul>
      <button @click="$router.push('/')">&lt; back to active tasks</button>
      <h1 class="title">Deleted tasks</h1>

      <li v-for="(item, index) in todoStore.items" :key="index" class="mt-2">
        <div v-if="item.deleted">
          <span>
            {{ item.name }}
          </span>
          <button class="button" @click="item.deleted = false">
            <box-icon name="refresh"></box-icon>
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
}
</script>
