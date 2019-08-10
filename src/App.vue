<template>
  <div id="app">
    <nav>
    <router-link to="home">Home</router-link>
    <router-link to="films">Films</router-link>
    </nav>
    <router-view id="view"></router-view>
  </div>
</template>

<script>
import { eventBus } from './main.js'
import FilmList from '@/components/FilmList.vue'
import FilmDetail from '@/components/FilmDetail.vue'
import MainHeader from '@/components/MainHeader.vue'

export default {
  name: 'app',
    components: {
        "main-header": MainHeader
  }
};
</script>

<style lang="css" scoped>
a {
  margin: 5px;
  text-align: center;
}
nav {
  text-align: center;
}


</style>
