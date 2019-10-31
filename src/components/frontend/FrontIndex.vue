<template>  
  <div class="">    
      <FrontHeader/>
      <main role="main">
        <FrontCarousel></FrontCarousel>
        <router-view>
          
        </router-view>
        <FrontFooter></FrontFooter>
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
  data () {
    return {
     
    }
  },
  methods:{
    signout(){
        const api = 'https://vue-course-api.hexschool.io/logout';
        const vm = this;
        this.$http.post(api).then((response) => {
            //console.log(response.data);
            if(response.data.success){
                vm.$router.push('/login');
            }
        });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
