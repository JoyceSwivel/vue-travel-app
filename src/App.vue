<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/brazil">Brazil</router-link>
      <router-link to="/panama">Panama</router-link>
      <router-link to="/hawaii">Hawaii</router-link>
      <router-link to="/jamaica">Jamaica</router-link>
    </div> -->
    <!-- The above commands are stored in TheNavigation.vue -->
    <TheNavigation />
    <router-view :key="$route.path" />
    <!-- by adding :key="$route.path", changes in path will trigger a reload.
    so the page willl change while click router link -->
  </div>
</template>

<script>
import TheNavigation from '@/components/TheNavigation'

export default {
  components: {
    TheNavigation
  }
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
/* #nav {
  padding: 30px;
}
#nav a {
  font-weight:bold;
  color:#2c3e50;
  padding: 0 10px;
}
#nav a.router-link-exact-active {
  color:rgb(99, 155, 99);
} (save in TheNavigation.vue)*/
</style>
