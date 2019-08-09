<template lang="html">
  <li>{{ film.title }}</li>

</template>

<script>
export default {
  name: 'list-component',
  props: ['film']
}
</script>

<style lang="css" scoped>
</style>
