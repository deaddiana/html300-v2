<template>
  <div id="app">
    <nav>
      <router-link to="/">HomePage</router-link>
      <router-link to="/AboutPage">About</router-link>
        <router-link to="/DisastersPage">About</router-link>
          <router-link to="/NewsletterPage">About</router-link>
            <router-link to="/NewsletterPage">About</router-link>

      <router-view></router-view>
    </nav>

  </div>
</template>

<script>
export default {
name: 'app',
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
