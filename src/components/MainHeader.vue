<template>
  <h2>{{ title }}</h2>
</template>

<script>
export default {
  name: 'main-header',
  props: ['title']
}
</script>

<style scoped>
h2 {
  text-align: center;
}
</style>
