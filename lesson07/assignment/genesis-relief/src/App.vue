<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">GENESIS RELIEF</a>
      <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
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
        </ul>
      </div>
    </div>
  </nav>
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
