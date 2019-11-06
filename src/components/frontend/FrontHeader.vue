<template>
    <div>
       <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-heylin">
            <a class="navbar-brand" href="#">♣︎ L.T.K.F </a>
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
                    <div class="dropdown">
                          <i class="fas fa-cart-arrow-down"></i>
                          <div class="shopping-cart active dropdown-content" style="transition-delay: 50ms;">
                              <div class="shopping-cart-header">
                                  <i class="fa fa-shopping-cart cart-icon"></i><span class="badge">{{ cart.carts.length }}</span>
                                  <div class="shopping-cart-total" v-if="cart.final_total !== cart.total">
                                      <span class="lighter-text">優惠價 : </span>
                                      <span class="main-color-text total"> $ {{ cart.final_total }}</span>
                                  </div>
                                  <div class="shopping-cart-total" v-else>
                                      <span class="lighter-text">總價 : </span>
                                      <span class="main-color-text total"> $ {{ cart.total }}</span>
                                  </div>
                              </div> 
                              <ul class="shopping-cart-items">
                                <li class="clearfix" v-for="(item,index) in cart.carts" :key="index">
                                    <img :src="item.product.imageUrl" :alt="item.product.title">
                                    <span class="item-name">{{ item.product.title }}</span>
                                    <span class="item-detail"></span>
                                    <span class="item-price">${{ item.final_total }}</span>
                                    <span class="item-quantity">Quantity: {{ item.qty }}</span>
                                    <hr>
                                </li>
                              </ul>                          
                          </div>
                    </div>
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
        //購物車
        cart: {},
    }
  },
  methods:{
      getCart(){
              const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
              const vm = this;            
              this.$http.get(api).then((response) => {             
                  vm.cart = response.data.data;
                  console.log(response.data);
              });
              
      }
  },
  created() {
      this.getCart();
  }
}
</script>
<style scoped>
  #navbarCollapse > ul > li > a > a {
    color:white;
  }

  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-content {
    display: none;
    background-color: #f9f9f9;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    padding: 12px 16px;
    z-index: 1;
    margin: 12px 0 0 0px;
    color:black
  }

  .dropdown:hover .dropdown-content {
    display: block;
    transition: all .2s ease;
    -webkit-transition: all .2s ease;
    background-color: #f5f4f4;
  }

  .shopping-cart .shopping-cart-items img {
      float: left;
      margin-right: 12px;
      max-width: 70px;
      max-height: 70px;
  }
  ul {
    list-style: none;
  }
</style>