<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/dogs">Dogs</router-link> |
    <router-link to="/cats">Cats</router-link>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 80%;
  margin: auto;
}

#nav {
  padding: 30px;

}

#nav a {
  font-weight: bold;
  color: deepskyblue;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
