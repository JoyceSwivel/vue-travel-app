<template>
    <nav id="nav">
      <!-- <router-link to="/">Home</router-link>
      <router-link to="/brazil">Brazil</router-link>
      <router-link to="/panama">Panama</router-link>
      <router-link to="/hawaii">Hawaii</router-link>
      <router-link to="/jamaica">Jamaica</router-link> -->
      <p class="logo">Travel App</p>
      <ul class="nav-links">
        <li class="links">
          <router-link to="/">
            Home
          </router-link>
        </li>
        <li v-for="destination in destinations"
        :key="destination.name"
        class="links">
          <router-link :to="{
            name: 'DestinationDetails',
            params: {slug: destination.slug/*id: destination.id*/}
          }">
          {{destination.name}}
        </router-link>
        </li>
      </ul>

    </nav>
</template>

<script>
import store from '@/store'
export default {
  data () {
    return {
      // destinationId: this.$route.params.id, (if using slug in stead of id in the url, this can be deleted )
      destinations: store.destinations
    }
  }
}
</script>

<style scoped>
/* #nav {
    display: flex;
    justify-content: center;
    padding: 30px;
}
#nav a {
  font-weight:bold;
  color:#2c3e50;
  padding: 0 10px;
} */
/* #nav a.router-link-exact-active { */
/* active-color = router-link-exact-active.
However, it is renamed in router(linkExactActiveClass) */
#nav {
    display: flex;
    padding: 30px;
}
#nav a {
  font-weight:bold;
  color:#2c3e50;
text-decoration: none;
}
#nav a.active-color {
  color:rgb(99, 155, 99);
}
.nav-links {
  display: flex;
}
.links {
  padding-right: 20px;
  list-style: none;
}
.links:hover {
  text-decoration: underline;
}
.logo {
  font-size: 20px;
  color:blueviolet;
  font-weight: bold;
}
</style>
