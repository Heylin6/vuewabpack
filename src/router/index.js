import Vue from 'vue';
import VueRouter from 'vue-router';
//官方文件



import Page from '@/components/pages/Page';
import Menu  from '@/components/pages/Menu';
import CHild1 from '@/components/pages/Child';
import CHild2 from '@/components/pages/Child2';
import CHild3 from '@/components/pages/Child3';

import BackLogin from '@/components/pages/BackLogin';
import BackDashboard from '@/components/BackDashboard';
import BackProducts from '@/components/BackProducts';
import BackOrders from '@/components/BackOrders';
import BackCoupons from '@/components/BackCoupons';
import BackCustomerOrder from '@/components/BackCustomerOrder';
import BackCustomerCheckOut from '@/components/BackCustomerCheckOut';

import FrontIndex from '@/components/frontend/FrontIndex';
import FrontMarketing from '@/components/frontend/FrontMarketing';
import FrontMemberCart from '@/components/frontend/FrontMemberCart';
import FrontMemberCheckOut from '@/components/frontend/FrontMemberCheckOut';
import FrontCart from '@/components/frontend/FrontCart';


Vue.use(VueRouter);

export default new VueRouter({
    routes:[
        {            
            path:'*',//沒註冊過該路徑的皆為*號
            redirect:'index',//導向路由位置
        },
        {
            name:'首頁',//呈現的名稱
            path:'/index',//對應的虛擬路徑
            component:FrontIndex,//對應元件
            children:[
                {
                    name:'首頁',//呈現的名稱
                    path:'',//對應的虛擬路徑
                    component:FrontMarketing,//對應元件      
                },
                // {
                //     name:'陣容師資',//呈現的名稱
                //     path:'/trainer',//對應的虛擬路徑
                //     component:FrontTeacher,//對應元件      
                // },
                // {
                //     name:'提供內容',//呈現的名稱
                //     path:'/divider',//對應的虛擬路徑
                //     component:FrontDivider,//對應元件      
                // },
                {
                    name:'前台會員購物車',//呈現的名稱
                    path:'fcart',//對應的虛擬路徑
                    component:FrontCart,//對應元件      
                },
                {
                    name:'前台會員購物車',//呈現的名稱
                    path:'membercart',//對應的虛擬路徑
                    component:FrontMemberCart,//對應元件      
                },
                {
                    name:'前台會員購物細項',//呈現的名稱
                    path:'membercart/:productid',//對應的虛擬路徑
                    component:FrontMarketing,//對應元件      
                },
                {
                    name:'前台會員結帳',//呈現的名稱
                    path:'membercheckout/:orderId',//對應的虛擬路徑
                    component:FrontMemberCheckOut,//對應元件      
                },
            ],            
        },
        {
            name:'首頁',//呈現的名稱
            path:'',//對應的虛擬路徑
            component:FrontIndex,//對應元件
            children:[
                {
                    name:'首頁',//呈現的名稱
                    path:'',//對應的虛擬路徑
                    component:FrontMarketing,//對應元件       
                },
                // {
                //     name:'陣容師資',//呈現的名稱
                //     path:'/trainer',//對應的虛擬路徑
                //     component:FrontTeacher,//對應元件      
                // },
                // {
                //     name:'提供內容',//呈現的名稱
                //     path:'/divider',//對應的虛擬路徑
                //     component:FrontDivider,//對應元件      
                // },
                {
                    name:'前台會員購物車',//呈現的名稱
                    path:'fcart',//對應的虛擬路徑
                    component:FrontCart,//對應元件      
                },               
                {
                    name:'前台會員購物車',//呈現的名稱
                    path:'membercart',//對應的虛擬路徑
                    component:FrontMemberCart,//對應元件      
                },
                {
                    name:'前台會員購物細項',//呈現的名稱
                    path:'membercart/:productid',//對應的虛擬路徑
                    component:FrontMarketing,//對應元件      
                },
                {
                    name:'前台會員結帳',//呈現的名稱
                    path:'membercheckout/:orderId',//對應的虛擬路徑
                    component:FrontMemberCheckOut,//對應元件      
                },
            ],            
        },
        {
            name:'login',//呈現的名稱
            path:'/login',//對應的虛擬路徑
            component:BackLogin,//對應元件
        },
        {
            path:'/page',//對應的虛擬路徑
            //component:Page,//對應元件
            components:{
                default:Page,
                menu:Menu,
                meta:{requiresAuth : true},
            },
            children:[
                {
                    name:'卡片1',//呈現的名稱
                    path:'',//對應的虛擬路徑
                    component:CHild1,//對應元件
                    meta:{requiresAuth : true},
                },        
                {
                    name:'卡片2',//呈現的名稱
                    path:'child2',//對應的虛擬路徑
                    component:CHild2,//對應元件
                    meta:{requiresAuth : true},
                },
                {
                    name:'卡片3',//呈現的名稱
                    path:'child/:id',//對應的虛擬路徑
                    component:CHild3,//對應元件
                    meta:{requiresAuth : true},
                },
            ],
        },
        {
            name:'dashboard',//呈現的名稱
            path:'/admin',//對應的虛擬路徑
            component:BackDashboard,//對應元件
            meta:{requiresAuth : true},            
            children:[
                {
                    name:'productsdefault',//呈現的名稱
                    path:'',//對應的虛擬路徑
                    component:BackProducts,//對應元件
                    meta:{requiresAuth : true},
                }, 
                {
                    name:'products',//呈現的名稱
                    path:'products',//對應的虛擬路徑
                    component:BackProducts,//對應元件
                    meta:{requiresAuth : true},
                },
                {
                    name:'orders',//呈現的名稱
                    path:'orders',//對應的虛擬路徑
                    component:BackOrders,//對應元件
                    meta:{requiresAuth : true},
                },
                {
                    name:'coupons',//呈現的名稱
                    path:'coupons',//對應的虛擬路徑
                    component:BackCoupons,//對應元件
                    meta:{requiresAuth : true},
                },

            ],
        },
        {
            name:'dashboard',//呈現的名稱
            path:'/',//對應的虛擬路徑
            component:BackDashboard,//對應元件
            meta:{requiresAuth : true},            
            children:[
                {
                    name:'customerorder',//呈現的名稱
                    path:'customerorder',//對應的虛擬路徑
                    component:BackCustomerOrder,//對應元件       
                },  
                {
                    name:'customercheckout',//呈現的名稱
                    path:'customercheckout/:orderId',//對應的虛擬路徑
                    component:BackCustomerCheckOut,//對應元件       
                }, 
            ],
        },

   
    ],
});