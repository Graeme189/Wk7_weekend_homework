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

#filmList {
  background: #eee;
  height: 400px;
  overflow-y: scroll;
  border: 1px solid #ccc;
}

#filmList ul {
  margin: 10px;
  padding: 0;
}

::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 7px;
}

::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color: rgba(0,0,0,.5);
  -webkit-box-shadow: 0 0 1px rgba(255,255,255,.5);
}
</style>
