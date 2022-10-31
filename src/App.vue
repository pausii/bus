<template>
  <div>
    <Navbar></Navbar>
  <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar.vue'
export default {
  name: 'App',
  components: {
    // HelloWorld
    Navbar
  }
}
</script>