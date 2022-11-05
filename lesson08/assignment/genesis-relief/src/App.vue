<template>
  <div id="app">
    <div class="header" v-for="(data,index) in header" :key="index">
      <HeaderCom
      :image="data.image"
      :alt="data.alt"

      />
    </div>
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
import HeaderCom from "./components/HeaderCom"
export default {
  name: 'app',
  components: {
    HeaderCom
  },
  data() {
    return {
      header: [{
        image: require('./assets/logo2.png'),
        alt: "Genesis Relief Logo"
      }]
    }
  }
}
</script>



<style>
#app {

}
.nav-item {

  display: flex;
  justify-content: space-between;
}
nav {
  padding: 1em;
}



</style>
