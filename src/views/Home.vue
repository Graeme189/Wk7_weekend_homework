<template>
  <div id="">
    <main-header title='Home' />
    <h1>Welcome to the Studio Ghibli api!</h1>
    <img src="../assets/logo.png" height="600px" class="center">
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader';

export default {
  components: {
    'main-header': MainHeader
  }

}
</script>

<style lang="css" scoped>
h1 {
 text-align: center;
}

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
}
</style>
