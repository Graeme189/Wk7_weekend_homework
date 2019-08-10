<template lang="html">
  <div id="filmList">
    <ul>
      <list-item v-for="(film, index) in films" :film="film" :key="index"></list-item>
    </ul>
  </div>
</template>

<script>
import ListItem from './ListItem.vue'
export default {
  name: 'film-list',
  props: ['films'],
  components: {
    "list-item": ListItem
  }
}
</script>

<style lang="css" scoped>
</style>
