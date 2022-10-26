<template>
<div class="resources">
  <h1>{{title}}</h1>

  <div class="row">
    <div class="col-md-4 col-lg4" v-for="(data,index) in companies" :key="index">

      <h3>{{data.companyName}}</h3>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'ResourcesPage',
  data() {
    return {
      title: 'Resources',
      companies: [{
          companyName: "ReliefWeb",
          articleId: 1

        },
        {
          companyName: "DirectRelief",
          articleId: 2
        },
        {
          companyName: "Doctors Without Borders",
          articleId: 3
        },
        {
          companyName: "Project Hope",
          articleId: 4
        },
        {
          companyName: "Americares",
          articleId: 5
        },
        {
          companyName: "MAP International",
          articleId: 6
        }
      ]
    }
  }
}
</script>


<style scoped>

</style>
