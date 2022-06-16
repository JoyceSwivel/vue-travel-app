<template>
<div>
<section class="destinations">
    <h1>{{destination.name}}</h1>
    <div class="destination-details">
        <img
        :src="require(`@/assets/${destination.image}`)"
        :alt="destination.name"
         />
        <p>{{destination.description}}</p>
    </div>
</section>
<section class="experiences">
  <h2>Top Experiences in {{destination.name}}</h2>
  <div class="cards">
    <div v-for="experience in destination.experiences"
    :key="experience.slug"
    class="card">
    <!-- there are more than one image. therefore, v-for(looping) is needed-->
    <router-link
    :to="{
      name: 'experienceDetails',
      params: { experienceSlug: experience.slug }
      }"
      > <!--let the url show the slug-->
        <img
        :src="require(`@/assets/${experience.image}`)"
          :alt="experience.name"
        />
        <span class="card-text">
          {{experience.name}}
        </span>
      </router-link>
    </div>
  </div>
  <router-view :key="$route.path" />
</section>
</div>  <!-- this div is used to store two or above sections in template-->

  <!-- <p>The destination is: {{this.$route.params.id}}</p> -->
  <!-- show the id of destination -->
</template>
<script>
import store from '@/store.js'

export default{
  data () {
    return {
      // destinationId: this.$route.params.id（show the id in the url）
      // slug: this.$route.params.slug (can be deleted if there is props:slug)
    }
  },
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  computed: {
    destination () {
      return store.destinations.find(
        // destination => destination.id === this.destinationId （show the id in the url）
        destination => destination.slug === this.slug
      )
    }
  }
}
</script>
<style scoped>
img {
    max-width: 600px;
    height: auto;
    width: 100%;
    max-height: 400px;
}
.destination-details {
    display: flex;
    justify-content: space-between;
}
p {
    margin: 0 40px;
    font-size: 20px;
    text-align: left;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif
}
.cards {
    display: flex;
    }
.card img {
  max-height: 200px;
}
.card {
  padding: 0 20px;
  position: relative;
}
.card-text {
  position: absolute;
  top:48%;
  left: 30%;
  transform: tranlate(-50%, -50%);
  color: white;
  font-size: 25px;
  font-weight: bold;
  text-decoration: none;
}
</style>
