<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <!-- 
    <a class="navbar-brand" href="#">Navbar</a>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <router-link class="nav-link" :to="{ name:'首頁' }">Home </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="./page">Page </router-link>
      </li>      
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>    
    </ul>
  </div> -->
</nav>
<!-- <router-view name="menu"></router-view> --> 
  <div class="container">     
    <!-- <img src="./assets/logo.png"> -->
    <!-- <FrontIndex/> -->
     <router-view></router-view>
     </div>
  </div>
</template>

<script>
import FrontIndex from './components/FrontIndex'

export default {
  name: 'App',
  components: {
    FrontIndex
  }
}
</script>

<style lang="scss">
@import "./assets/all";

</style>
