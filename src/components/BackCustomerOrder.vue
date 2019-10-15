<template>
    <div>
        <loading :active.sync="isLoading"></loading>

         <Pagin @postPage="getProducts" :getpagin="pagination"></Pagin>

        <div class="row mt-4">
            <div class="col-md-4 mb-4" v-for="(item) in products" :key="item.id">
            <div class="card border-0 shadow-sm">
                <div style="height: 150px; background-size: cover; background-position: center"
                :style="{backgroundImage:`url(${item.imageUrl})`}"
                >
                </div>
                <div class="card-body">
                <span class="badge badge-secondary float-right ml-2">{{ item.category }}</span>
                <h5 class="card-title">
                    <a href="#" class="text-dark">{{ item.title }}</a>
                </h5>
                <p class="card-text">{{ item.description }}</p>
                <div class="d-flex justify-content-between align-items-baseline">
                    <!-- <div class="h5">2,800 元</div> -->
                    <del class="h6">原價 {{ item.origin_price | currency }} 元</del>
                    <div class="h5">現在只要 {{ item.price | currency }} 元</div>
                </div>
                </div>
                <div class="card-footer d-flex">
                <button type="button" 
                        class="btn btn-outline-secondary btn-sm"
                        @click="getProduct(item.id)">
                    <i class="fas fa-arrow-down"></i>
                    查看更多
                </button>
                <button type="button" class="btn btn-outline-danger btn-sm ml-auto">
                    <i class="fas fa-shopping-cart"></i>
                    加到購物車
                </button>
                </div>
            </div>
            </div>
        </div>       

         <div class="modal fade" id="productModal" tabindex="-1" role="dialog"
            aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">{{ product.title }}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <div class="modal-body">
                        <div style="height: 390px; background-size: cover; background-position: center"
                        :style="{backgroundImage:`url(${product.imageUrl})`}"></div>
                        <hr>                       
                        <div>
                            <div class="col-md-12">
                                {{product.description}}
                            </div>                    
                         </div> 
                        <hr>
                        <div>
                            <div class="col-md-12">
                                {{product.content}}
                            </div>                    
                         </div> 
                        <hr>
                        <div class="d-flex justify-content-between align-items-baseline">
                            <div class="h4" v-if="!product.price">{{ product.origin_price }} 元</div>
                            <del class="h6" v-if="product.price">原價 {{ product.origin_price }} 元</del>
                            <div class="h4" v-if="product.price">現在只要 {{ product.price }} 元</div>
                        </div>                       
                        <hr>                       
                        <div class="d-flex justify-content-between align-items-baseline">
                            <div class="col-md-4">
                                
                            </div>
                            <div class="col-md-3">
                                <span>購買時數</span>
                            </div>
                             <div class="col-md-3">
                               <input type="number" class="form-control" id="buynum"
                                v-model.number="buynum"             
                                placeholder="請輸入購買時數">
                               
                            </div> 
                            <div class="col-md-2">
                                 <span>{{product.unit}}</span>
                            </div>                          
                         </div>
                    </div>
                    <div class="modal-footer">
                        <div class="text-muted text-nowrap mr-3">
                            小計 <strong>{{ buynum * product.price }}</strong> 元
                        </div>
                        <button type="button" class="btn btn-primary"
                        @click="addtoCart(product.id, product.num)">
                            <i class="fas fa-spinner fa-spin" v-if="product.id === status.loadingItem"></i>
                            加到購物車
                        </button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">關閉</button>
                    </div>
                </div> 
            </div> 
        </div>
        
    </div>    
</template>

<script>
import $ from 'jquery';
import Pagin from './Pagin';

export default {
    components: {
        Pagin
    },
    data(){
        return {
            buynum:1,
            products:[],
            product:{},
            tempProduct:{},
            pagination:{},
            isNew:false,
            isLoading:false,
            status:{
                fileUploading:false,
            }
        }
    },
    methods:{
        getProducts(pagenum =1){
          const api = 'https://vue-course-api.hexschool.io/api/heylin/products?page='+pagenum;
          const vm = this;

          vm.isLoading=true;
          this.$http.get(api).then((response) => {
            console.log('=========');
            console.log(response.data);
            console.log('=========');

            vm.isLoading=false;
            vm.products=response.data.products;
            vm.pagination=response.data.pagination;
          });
        },
        getProduct(pid){
          const api = `https://vue-course-api.hexschool.io/api/heylin/product/${pid}`;
          const vm = this;

          vm.isLoading=true;
          this.$http.get(api).then((response) => {
            console.log('=========');
            console.log(response.data);
            console.log('=========');
             $('#productModal').modal('show');
            vm.isLoading=false;
            vm.product=response.data.product;            
          });
        },
        openModal(isNew,item){

            //用vue的方式開啟modal
            //傳入參數判斷新增還是修改            
            if(isNew){
                this.tempProduct={};
                this.isNew=true;
            }
            else{
                //Object.assign這寫法要估狗一下
                this.tempProduct=Object.assign({},item);
                this.isNew=false;
            }
            $('#productModal').modal('show');
        },        
    },
    created() {
        this.getProducts();
        //測試警告視窗
        //this.$bus.$emit('message:push','測試','success');
    },
}
</script>