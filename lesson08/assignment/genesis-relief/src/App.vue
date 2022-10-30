<template>
  <div id="app">
    <ul>
      <li class="nav-item">
        <router-link class="nav-link" to="/">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/About">About</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/Disasters">Disasters</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/Newsletter">Newsletter</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/Updates">Updates</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/Resources">Resources</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/ReliefWeb">ReliefWeb</router-link>
      </li>
    </ul>
    <router-view> </router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>



<style>
#app {

}
.nav-item {

  display: flex;
  justify-content: space-between;
}



</style>
