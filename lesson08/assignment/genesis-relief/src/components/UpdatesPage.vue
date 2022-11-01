<template>
<div class="resources">
  <h1>{{title}}</h1>

  <div class="row">
    <div class="col-md-4 col-lg4" v-for="(data,index) in articles" :key="index">
      <ArticlesCom
      :articleTitle="data.articleTitle"
      :image="data.image"
      :alt="data.alt"
      />
    </div>
  </div>
</div>
</template>

<script>
import ArticlesCom from "../components/ArticlesCom"
export default {
  name: 'UpdatesPage',
  components: {
    ArticlesCom
  },
  data() {
    return {
      title: 'UpdatesPage',
      articles: [{
          articleTitle: "Article 1",
          alt: "article 1 alt",
          image: require('../assets/article1.jpg'),
          articleId: 1
        },
        {
          articleTitle: "Article 2",
          image: require('../assets/article2.jpg'),
          alt: "article 2 alt",
          articleId: 2
        },
        {
          articleTitle: "Article 3",
          image: require('../assets/article3.jpg'),
          alt: "article 3 alt",
          articleId: 3
        },
        {
          articleTitle: "Article 4",
          image: require('../assets/article4.jpg'),
          alt: "article 4 alt",
          articleId: 4
        },
        {
          articleTitle: "Article 5",
          image: require('../assets/article5.jpg'),
          alt: "article 5 alt",
          articleId: 5
        },
        {
          articleTitle: "Article 6",
          image: require('../assets/article6.jpg'),
          alt: "article 6 alt",
          articleId: 6
        }
      ]
    }
  }
}
</script>


<style scoped>

</style>
