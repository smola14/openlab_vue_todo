<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://academy.openlab.sk/homepage">
        <img
          src="https://academy.openlab.sk/img/openacademy.bf0f5a12.svg"
          width="112"
          height="28"
        />
      </a>
    </div>
    <router-link
      class="navbar-item is-active"
      :class="{ 'is-tab': $route.path === '/' }"
      to="/"
    >
      <box-icon class="menu-icon" name="home"></box-icon> Home
    </router-link>

    <router-link
      class="navbar-item is-active"
      :class="{ 'is-tab': $route.path === '/deleted' }"
      to="/deleted"
    >
      <box-icon class="menu-icon" name="folder-minus"></box-icon>Deleted tasks
    </router-link>
  </nav>
  <div class="container mt-6 is-flex is-justify-content-center">
    <RouterView />
  </div>
</template>

<style lang="scss" scoped>
.menu-icon {
  margin-right: 5px;
}
</style>

<script>
import { mapStores } from 'pinia'
import { useStoreTodo } from '@/stores/storeTodo.js'

export default {
  mounted() {
    this.todoStore.getTodos()
  },

  computed: {
    ...mapStores(useStoreTodo),
  },
}
</script>
