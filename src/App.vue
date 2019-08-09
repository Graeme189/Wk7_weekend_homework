<template lang="html">
  <div>
    <nav>
      <router-link to="">Studio Ghibli</router-link>
    </nav>
    <div class="">
      <film-list :films="films"></film-list>
    <router-view id="view"></router-view>
    </div>
  </div>
</template>

<script>
import FilmList from './components/FilmList.vue'

export default {
  name: 'app',
  data(){
    return {
      films: []
     }
    },
    components: {
        "film-list": FilmList
    },
  mounted(){
    fetch('https://ghibliapi.herokuapp.com/films/')
    .then(res => res.json())
    .then(films => this.films = films)
  }
};
</script>

<style lang="css" scoped>
</style>
