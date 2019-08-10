<template>
  <div v-if='film'>
    <h3>{{film.title}}</h3>
    <p>Description: {{film.description}}</p>
  </div>
</template>

<script>
export default {
  name: 'film-detail',
  props: ['film']
}
</script>

<style lang="css" scoped>
</style>
