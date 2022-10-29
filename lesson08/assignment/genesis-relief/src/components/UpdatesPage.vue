<template>
<div class="resources">
  <h1>{{titles}}</h1>

  <div class="row">
    <div class="col-md-4 col-lg4" v-for="(data,index) in articles" :key="index">
      <img :src="data.image" class="img-fluid">
      <h3>{{data.articleTitle}}</h3>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'UpdatesPage',
  data() {
    return {
      title: 'UpdatesPage',
      articles: [{
          articleTitle: "Article 1",
          image: require('../assets/article1.jpg'),
          articleId: 1
        },
        {
          articleTitle: "Article 2",
          image: require('../assets/article2.jpg'),
          articleId: 2
        },
        {
          articleTitle: "Article 3",
          image: require('../assets/article3.jpg'),
          articleId: 3
        },
        {
          articleTitle: "Article 4",
          image: require('../assets/article4.jpg'),
          articleId: 4
        },
        {
          articleTitle: "Article 5",
          image: require('../assets/article5.jpg'),
          articleId: 5
        },
        {
          articleTitle: "Article 6",
          image: require('../assets/article6.jpg'),
          articleId: 6
        }
      ]
    }
  }
}
</script>


<style scoped>

</style>
