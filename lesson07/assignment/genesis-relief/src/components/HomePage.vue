<template>
  <div>
    <b-jumbotron bg-variant="info" text-variant="white" border-variant="dark">
      <template #header>Genesis Relief</template>

      <template #lead>
        Humanitarian Resources During Global Disasters and Crisis
      </template>
    <hr class="my-4">
      <p>
        <b-button variant="primary" href="#">EXPLORE!</b-button>
      </p>
    </b-jumbotron>
  </div>
</template>


<script>
export default {
  name: 'HomePage',
  data () {
    return {
      msg: 'Welcome to Genesis Relief'
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
