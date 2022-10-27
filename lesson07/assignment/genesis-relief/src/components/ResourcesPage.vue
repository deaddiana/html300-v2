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
          companyId: 1,
          //link:'https://reliefweb.int/'

        },
        {
          companyName: "DirectRelief",
          companyID: 2,
          //link:'https://reliefweb.int/'

        },
        {
          companyName: "Doctors Without Borders",
          companyId: 3,
          //link:'https://reliefweb.int/'

        },
        {
          companyName: "Project Hope",
          companyId: 4,
          //link:'https://reliefweb.int/'

        },
        {
          companyName: "Americares",
          companyId: 5,
          //link:'https://reliefweb.int/'

        },
        {
          companyName: "MAP International",
          companyId: 6,
          //link:'https://reliefweb.int/'

        }
      ]
    }
  }
}
</script>


<style scoped>

</style>
