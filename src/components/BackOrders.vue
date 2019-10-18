<template>
    <div>
        <loading :active.sync="isLoading"></loading>
        <div class="text-right">
        </div>
        <table class="table mt-4">
            <thead>
                <tr>
                    <th>建立日期</th>
                    <th>買家信箱</th>
                    <th>買家</th>
                    <th>總價</th>
                    <th>買家訊息</th>     
                    <th>是否付款</th>
                    <th>功能</th>    
                </tr>                                                                                     
            </thead>
            <tbody>
                <tr v-for="(item) in Orders" :key="item.id">
                    <td>{{ item.create_at }}</td>
                    <td>{{ item.user.email }}</td>
                    <td>{{ item.user.name }}</td>
                    <td>{{ item.total }}</td>
                    <td>{{ item.message }}</td>
                    <td>{{ item.is_paid }}</td>
                    <td>
                        <button class="btn btn-outline-primary btn-sm" @click="openModal(item)">編輯</button>
                    </td>
                </tr>
            </tbody>
        </table>

        <!-- 

        未元件化的分頁

        <nav aria-label="...">
            <ul class="pagination">
                <li class="page-item" 
                    :class="{'disabled':!pagination.has_pre}"
                >
                    <a class="page-link" href="#"
                    @click.prevent="getOrders(pagination.current_page-1)"
                    >Previous</a>
                </li>
                <li class="page-item" 
                    :class="{'active': pagination.current_page === page}"
                    v-for="(page) in pagination.total_pages" :key="page"
                    >
                    <a class="page-link" href="#"
                        @click.prevent="getOrders(page)"
                    >
                        {{page}}
                    </a>
                </li>                
                <li class="page-item"
                    :class="{'disabled':!pagination.has_next}"
                    >
                    <a class="page-link" href="#"
                     @click.prevent="getOrders(pagination.current_page+1)"
                    >Next</a>
                </li>
            </ul>
        </nav> 

        -->
        
        <Pagin @postPage="getOrders" :getpagin="pagination"></Pagin>

        <!-- OrdersModal -->
        <div class="modal fade" id="OrdersModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-sm-4">
                    </div>
                    <div class="col-sm-8">
                                <!-- <div class="form-group">
                                        <label for="title">建立日期</label>
                                        <input type="text" class="form-control" id="title"
                                            v-model="tempOrder.title"
                                            placeholder="請輸入標題">
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="category">分類</label>
                                        <input type="text" class="form-control" id="category"
                                        v-model="tempOrder.category"
                                        placeholder="請輸入分類">
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="price">單位</label>
                                        <input type="unit" class="form-control" id="unit"
                                        v-model="tempOrder.unit"
                                        placeholder="請輸入單位">
                                    </div>
                                </div>
                                <div class="form-row">
                                <div class="form-group col-md-6">
                                        <label for="origin_price">原價</label>
                                        <input type="number" class="form-control" id="origin_price"
                                        v-model="tempProduct.origin_price"
                                        placeholder="請輸入原價">
                                </div>
                                <div class="form-group col-md-6">
                                        <label for="price">售價</label>
                                        <input type="number" class="form-control" id="price"
                                        v-model="tempProduct.price"
                                        placeholder="請輸入售價">
                                </div>
                                </div>
                                <hr>
                                <div class="form-group">
                                        <label for="description">產品描述</label>
                                        <textarea type="text" class="form-control" id="description"
                                            v-model="tempProduct.description"
                                            placeholder="請輸入產品描述"></textarea>
                                </div>
                                <div class="form-group">
                                        <label for="content">說明內容</label>
                                        <textarea type="text" class="form-control" id="content"
                                            v-model="tempProduct.content"
                                            placeholder="請輸入產品說明內容"></textarea>
                                </div>
                                <div class="form-group">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox"
                                            v-model="tempProduct.is_enabled"
                                            :true-value="1"
                                            :false-value="0"
                                            id="is_enabled">
                                            <label class="form-check-label" for="is_enabled">
                                            是否啟用
                                            </label>
                                        </div>
                                </div> -->
                     </div>
                </div>                
            </div>
            <div class="modal-footer">            
                <button type="button" class="btn btn-primary"
                @click="updateOrder">
                Save changes
                </button>
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
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
            Orders:[],
            tempOrder:{},
            pagination:{},
            isLoading:false,
        }
    },
    methods:{
        getOrders(pagenum =1){
          const api = 'https://vue-course-api.hexschool.io/api/heylin/orders?page='+pagenum;
          const vm = this;

          vm.isLoading=true;
          this.$http.get(api).then((response) => {
            console.log('=========');
            console.log(response.data);
            console.log('=========');

            vm.isLoading=false;
            vm.Orders=response.data.orders;
            vm.pagination=response.data.pagination;
          });
        },
        openModal(item){

            //用vue的方式開啟modal
            //傳入參數判斷新增還是修改            
            //Object.assign這寫法要估狗一下
            this.tempOrder=Object.assign({},item);
            this.isNew=false;
            
            $('#OrdersModal').modal('show');
        },
        updateOrder(oid){
          let api = `https://vue-course-api.hexschool.io/api/heylin/admin/order/${oid}`;
          let httpMethod ='put';
          const vm = this;


          this.$http[httpMethod](api,{data:vm.tempOrder}).then((response) => {
            console.log('=========');
            console.log(response.data);
            console.log('=========');

            if(response.data.success){
                $('#OrdersModal').modal('hide');
                vm.getOrders();
            }
            else{
                vm.getOrders();
                console.log('修改失敗');
            }
          });
        }
    },
    created() {
        this.getOrders();
        //測試警告視窗
        //this.$bus.$emit('message:push','測試','success');
    },
}
</script>