<template>
  <div class="resources">
    <h1>{{title}}</h1>
      <div class="company-container" v-for="(data,index) in companies" :key="index">

        <div class="card">
          <div class="card-body">
            <h3>{{data.companyName}}</h3>
              <p>{{data.description}}</p>
                <p><a v-bind:href="data.website"></a></p>
          </div>
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
          companyName: 'ReliefWeb',
          website: "https://reliefweb.int/",
          description: 'ReliefWeb is a humanitarian information portal founded in 1996.',
          companyId: 1

        },
        {
          companyName: "DirectRelief",
          website: "https://reliefweb.int/",
          description: 'DirectRelief information needs to be added',
          companyId: 2

        },
        {
          companyName: "Doctors Without Borders",
          website: "https://reliefweb.int/",
          description: 'Doctors Without Borders information needs to be added',
          companyId: 3

        },
        {
          companyName: "Project Hope",
          website: "https://reliefweb.int/",
          description: 'Project Hope information needs to be added',

          companyId: 4

        },
        {
          companyName: 'Americares',
          website: "https://reliefweb.int/",
          description: 'Americares information needs to be added',

          companyId: 5

        },
        {
          companyName: "MAP International",
          website: "https://reliefweb.int/",
          description: 'MAP International information needs to be added',
          companyId: 6

        }
      ]
    }
  }
}
</script>


<style scoped>

</style>
