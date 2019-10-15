<template>
  <div class="hello my-3">
    <ul class="nav">
      <li class="nav-item">
          <router-link class="nav-link" to="/page/" >卡1</router-link>
      </li>
      <li class="nav-item">
          <router-link class="nav-link" to="/page/child2" >卡2</router-link>
      </li>
      <li class="nav-item">
          <router-link class="nav-link" to="/page/child3" >卡3</router-link>
      </li>      
      <li class="nav-item">
          <a href="#" class="nav-link" @click.prevent="updatePath">切換到指定頁面</a>
      </li> 
      <li class="nav-item">
          <a href="#" class="nav-link" @click.prevent="beforePath">回到前一頁面</a>
      </li> 
   </ul> 
   
    
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  methods:{
    updatePath(){
        this.$router.push('/page/child2');
    },
    beforePath(){
        this.$router.back();
        //this.$router.go(-1) 也是回上一頁
    },
  }
}
</script>


