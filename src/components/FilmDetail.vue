<template>
  <div v-if='film' id="filmDetail">
    <div id="detailWrapper">
    <h3>{{film.title}}</h3>
    <div id="flexWrapper">
      <!-- <div id="left"> -->
        <p>Description: {{film.description}}</p>
        <p>Director: {{film.director}}</p>
        <p>Release date: {{film.release_date}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'film-detail',
  props: ['film']
}
</script>

<style lang="css" scoped>
#filmDetail {
  box-sizing: border-box;
  height: 400px;
  width: 60%;
  background: #eee;
  color: #222;
  padding: 10px;
  border: 1px solid #ccc;
}

  #detailWrapper {
    box-sizing: border-box;
    background: #fff;
    padding: 10px;
    height: 100%;
    border-radius: 3px;
  }

  #flexWrapper {
    display: block;
    justify-content: space-between;
  }

  #left, #right {
    width: 45%;
  }

  #right img {
    width: 100%;
  }

  #left p:first-child {
    margin-top: 0;
  }

  h2 {
    margin: 10px 0 20px;
    padding: 0;
  }

  p span {
    font-weight: bold;
  }
</style>
