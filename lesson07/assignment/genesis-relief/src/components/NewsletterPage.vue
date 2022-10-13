<template>
<div>
  <header>
    <img alt="Vue logo" src="./assets/logo2.png" height="60">
    <p>Genesis Relief</p>
    <nav>
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/newsletter">Newsletter</router-link>
        </li>
        <li>
          <router-link to="/about">Disasters</router-link>
        </li>
        <li>
          <router-link to="/about">Resources</router-link>
        </li>
        <li>
          <router-link to="/about">Newsletter</router-link>
        </li>
      </ul>
    </nav>
  </header>
  <main>
  <p>add router view</p>
  </main>
</div>
</template>


<style lang="scss">
header {
    display: flex;
    border-bottom: 1px solid #ccc;
    padding: 0.5rem 1rem;

    p {
        margin-left: 1rem;
    }
}

nav {
    margin-left: auto;

    ul {
        list-style: none;
    }

    ul li {
        display: inline-flex;
        margin-left: 1rem;
    }
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
