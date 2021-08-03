<template>
  <Navbar />
  <HomeBody />
  <router-view/>
</template>

<script>
import Navbar from './components/Navbar.vue'
import HomeBody from './components/HomeBody.vue'

export default {
  components: { Navbar, HomeBody },
  setup() {
    
  },
}
</script>


<style>


#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
