<template>
    <div>
       <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-heylin">
            <a class="navbar-brand" href="#"><i class="fas fa-democrat"></i> L.T.K.F </a>
            <button class="navbar-toggler" type="button" 
                    data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <router-link class="nav-link" to="/" > 
                         首頁
                  </router-link>
                </li>
                <!-- <li class="nav-item">
                 <a class="nav-link" href="#">            
                  <router-link to="/" > 
                         陣容師資
                  </router-link>
                </a>  
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">            
                    <router-link to="/" > 
                          提供內容
                    </router-link>
                  </a>                
                </li>                                
                -->
                <li class="nav-item">
                  <a class="nav-link" href="#">            
                    <router-link to="/membercart" > 
                          項目購買
                    </router-link>
                  </a>    
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">            
                    <router-link to="/contactus" > 
                          聯絡我們
                    </router-link>
                  </a>    
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">            
                    <router-link to="/calendar" > 
                          行事曆
                    </router-link>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <router-link to="/fcart" > 
                          <i class="fas fa-cart-arrow-down"></i>
                    </router-link>
                  </a>      
                </li>
            </ul>
            <!-- 
              <form class="form-inline mt-2 mt-md-0">
                <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form> 
            -->
            </div>
        </nav>
    </div>
</template>
<script>
export default {
  name: 'FrontHeader',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    signout(){      
          const api = `${process.env.APIPATH}/logout`;
          const vm = this;
          this.$http.post(api).then((response) => {
            //console.log(response.data);
            if(response.data.success)
            {
              vm.$router.push('/login');
            }
          });
    }
  }
}
</script>
<style scoped>
  #navbarCollapse > ul > li > a > a {
    color:white;
  }
</style>