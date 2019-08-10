<template>
  <div id="app">
    <navbar/>
    <main-header title='Films'></main-header>
      <film-list :films="films"></film-list>
      <film-detail :film='selectedFilm'></film-detail>
    <router-view :films="films" id="view"></router-view>
  </div>
</template>

<script>
import { eventBus } from './main.js'
import FilmList from '@/components/FilmList.vue'
import FilmDetail from '@/components/FilmDetail.vue'
import Navbar from '@/components/Navbar.vue'
import MainHeader from '@/components/MainHeader.vue'

export default {
  name: 'app',
  data(){
    return {
      films: [],
      selectedFilm: null
     }
    },
    components: {
        "film-list": FilmList,
        "navbar": Navbar,
        "main-header": MainHeader,
        "film-detail": FilmDetail
    },
  mounted(){
    fetch('https://ghibliapi.herokuapp.com/films/')
    .then(res => res.json())
    .then(films => this.films = films)

    eventBus.$on('selected-film', (film) => {
      console.log('within $on', film);
      this.selectedFilm = film
    })
  }
};
</script>

<style lang="css" scoped>
a {
  margin: 5px;
}
</style>
