<template>
<div>
    <img :src="image" class="img-fluid" :alt="alt">
    <h3>{{articleTitle}}</h3>
</div>

</template>

<script>
import toggleBorder from "../mixins/toggle"
export default {
  name: 'ArticlesCom',

  props: {
    articleTitle:{
      type: String,
    },
    alt:{
      type: String,

    },
    image :{
      type: String,

    },
    articleId: String,
  },
  mixins: [toggleBorder],

}


</script>


<style>

</style>
