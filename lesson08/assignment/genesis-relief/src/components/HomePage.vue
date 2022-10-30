<template>
  <div>
    <b-jumbotron bg-variant="info" text-variant="white" border-variant="dark">
      <template #header>Genesis Relief</template>
      <img src="../assets/logo2.png" alt="my logo">

      <template #lead>
        Humanitarian Resources During Global Disasters and Crisis
      </template>
    <hr class="my-4">
      <p>
        <button @click="show = !show">Explore!</button>
      </p>
    </b-jumbotron>
  </div>
</template>


<script>
export default {
  name: 'HomePage',
  data () {
    return {
      msg: 'idk how to make this work',
      show: true
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
