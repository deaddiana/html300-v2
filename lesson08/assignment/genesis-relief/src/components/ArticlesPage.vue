<div class="card" style="width: 18rem;">
  <img class="card-img-top" v-bind:src="'image/' + articleimg" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">{{articletitle}}</h5>
      <p class="card-text">{{articlebody}}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
</div>

<script>
Vue.component('ArticlesCom', {
  template: `


  `,
  props: ['articletitle', 'articlebody', 'artcileimg', 'articlealt']

})



</script>


<style>

</style>

<template>
  <div class="container">
    <div id="app2">
      <ArticlesCom v-for="article in articles"
      v-bind:article.title
      v-bind:article.body
      v-bind:article.imgsrc
      />

    </div>
  </div>
</div>

<template>
