<template lang="html">
  <div id="">
    <main-header title='Films' />
  </div>

</template>

<script>
import MainHeader from '@/components/MainHeader'
import FilmList from '@/components/FilmList.vue'
// import FilmDetail from '.components/FilmDetail.vue'

export default {
  name: 'film-view',
  props: ['films'],
  components: {
    'main-header': MainHeader,
    'film-list': FilmList,
    // 'film-detail': FilmDetail
  },
  mounted(){
    fetch('https://ghibliapi.herokuapp.com/films/')
    .then(res => res.json())
    .then(films => this.films = films)
  }
}
</script>

<style lang="css" scoped>
</style>
