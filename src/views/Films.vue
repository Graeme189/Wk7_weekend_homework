<template>
  <div id="">
    <main-header title='Films'></main-header>
    <div class="main-container">
    <film-list :films="films">Films</film-list>
    <film-detail :film="selectedFilm"></film-detail>
  </div>
  </div>
</template>

<script>
import { eventBus } from '../main.js'
import MainHeader from '@/components/MainHeader'
import FilmList from '@/components/FilmList.vue'
import FilmDetail from '@/components/FilmDetail.vue'

export default {
  name: 'film-view',
  data(){
    return {
      films: [],
      selectedFilm: null
     }
    },
    components: {
        "film-list": FilmList,
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
.main-container {
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin: 0 auto;
  }
</style>
