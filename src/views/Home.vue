<template>
  <div class="home">
    <h1>
        All Destinations
    </h1>
    <div class="destinations">
    <div v-for="destination in destinations"
     :key="destination.name">
    <router-link :to="{ name: 'DestinationDetails', params: {slug: destination.slug /*id: destination.id*/} }/* destination.slug */">
    <h2>{{destination.name}}</h2>
    </router-link>
    <figure>
        <router-link :to="{ name: 'DestinationDetails', params: { slug: destination.slug /*id: destination.id*/} } /* destination.name */">
        <img :src="require(`@/assets/${destination.image}`)"
         :alt="destination.name">
        </router-link>
    </figure>
    </div>
    </div>
   </div>
</template>

<script>

import store from '@/store.js'
export default {
  name: 'home',
  components: {},
  data () {
    return {
      destinations: store.destinations
    }
  }
}

</script>

<style scoped>
.home {
    max-width: 1400px;
    margin: 0 auto;
}
img {
    max-width: 200px;
}
.destinations {
    display: flex;
    justify-content: space-between;
}
a{
  color:lightgreen;
  text-decoration: none;
}
a:hover,
a:visited {
  text-decoration: underline;
}
</style>
