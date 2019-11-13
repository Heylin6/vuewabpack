<template>  
  <div class="">    
      <FrontHeader v-model="navbaractive"
                  :getnavbaractive="navbaractive"
                  @navbaractiveChange="setnavbaractive"/>
      <main role="main">
          <router-view>
            
          </router-view>
          <FrontFooter>
            
          </FrontFooter>
      </main>
  </div>
</template>
<script>
import Alert          from '../tools/AlertMessage';
import FrontHeader    from './FrontHeader';
import FrontFooter    from './FrontFooter';
import FrontCarousel  from './FrontCarousel';
export default {  
  name: 'FrontIndex',
  components:{
        FrontHeader,
        FrontCarousel,
        FrontFooter,        
        Alert
  },
  data(){
      return {
          navbaractive:'',
      }
  },
  methods:{
        setnavbaractive(item){
            //console.log('setnavbaractive',item);
            let vm=this;
            this.navbaractive = item;
            //console.log('this.navbaractive',item);
        },
  },
  created(){
    //console.log('navbaractive',this.navbaractive);
  },
}
</script>
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
@media (min-width: 768px) {
  .bd-placeholder-img-lg {
      font-size: 3.5rem;
   }
}
</style>
