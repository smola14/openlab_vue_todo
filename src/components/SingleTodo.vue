<template>
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
</template>

<script>
export default {
  data() {
    return {}
  },
  props: ['item'],
}
</script>

<style lang="scss" scoped></style>
