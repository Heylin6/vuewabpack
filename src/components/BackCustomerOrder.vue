<template>
    <div>
        <loading :active.sync="isLoading"></loading>
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
                <button type="button" class="btn btn-outline-secondary btn-sm">
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
            products:[],
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
        updateProduct(){
          let api = 'https://vue-course-api.hexschool.io/api/heylin/admin/product';
          let httpMethod ='post';
          const vm = this;
          
            if(!vm.isNew){
                //假設不是新增 則為修改
                api = 'https://vue-course-api.hexschool.io/api/heylin/admin/product/'+vm.tempProduct.id;
                httpMethod ='put';
            }

          this.$http[httpMethod](api,{data:vm.tempProduct}).then((response) => {
            console.log('=========');
            console.log(response.data);
            console.log('=========');

            if(response.data.success){
                $('#productModal').modal('hide');
                vm.getProducts();
            }
            else{
                vm.getProducts();
                console.log('新增失敗');
            }
          });
        },
        deleteProduct(item){

            const api = 'https://vue-course-api.hexschool.io/api/heylin/products';
            const vm = this;

            var del=confirm("確定刪除?");
            if(del){
                //  this.$http.delete(api).then((response) => {
                //  console.log('=========');
                //  console.log(response.data);
                //  console.log('=========');

                //  vm.products=response.data.products;
                // });
            }
            else{

            }

        },
        uploadFile(){
            //console.log(this);
            const uploadedfile = this.$refs.files.files[0];
            const vm = this;
            //模擬表單送出形式
            const formData = new FormData();
            //塞入檔案
            formData.append('file-to-upload',uploadedfile);
            const url ='https://vue-course-api.hexschool.io/api/heylin/admin/upload';

            //執行上傳時 開啟讀取icon
            vm.status.fileUploading=true;
            //傳遞時修正他的header
            this.$http.post(url,formData,{
                headers:{
                    'Content-Type':'multpart/form-data'
                }
            }).then((response) => {
                console.log('=========');
                console.log(response.data);
                console.log('=========');

                //上傳完畢時 關閉讀取icon
                vm.status.fileUploading=false;

                if(response.data.success){
                    //vm.tempProduct.imageUrl = response.data.imageUrl;
                    //強制寫入圖片名稱的欄位
                    vm.$set(vm.tempProduct,'imageUrl',response.data.imageUrl);
                }
                else{
                     this.$bus.$emit('message:push',response.data.message.message,'danger');
                }
            });
        }
    },
    created() {
        this.getProducts();
        //測試警告視窗
        //this.$bus.$emit('message:push','測試','success');
    },
}
</script>