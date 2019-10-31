<template>
  <div id="app">
      <!-- <router-view name="menu"></router-view> --> 
      <div>     
        <!-- <img src="./assets/logo.png"> -->
        <!-- <FrontIndex/> -->
     <router-view></router-view>
     </div>
  </div>
</template>

<script>
import FrontIndex from './components/frontend/FrontIndex'

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
