import Vue from 'vue';
import VueRouter from 'vue-router';
//官方文件

import FrontIndex from '@/components/FrontIndex';
import FrontNavbar from '@/components/FrontNavbar';
import Page from '@/components/pages/Page';
import Menu  from '@/components/pages/Menu';
import CHild1 from '@/components/pages/Child';
import CHild2 from '@/components/pages/Child2';
import CHild3 from '@/components/pages/Child3';

import BackLogin from '@/components/pages/BackLogin';
import BackDashboard from '@/components/BackDashboard';
import BackProducts from '@/components/BackProducts';

Vue.use(VueRouter);

export default new VueRouter({
    routes:[
        {            
            path:'*',//沒註冊過該路徑的皆為*號
            redirect:'index',//導向路由位置
        },
        {
            name:'首頁',//呈現的名稱
            path:'/',//對應的虛擬路徑
            component:FrontIndex,//對應元件
            meta:{requiresAuth : true},
        },
        {
            name:'首頁',//呈現的名稱
            path:'/index',//對應的虛擬路徑
            component:FrontIndex,//對應元件            
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
                },        
                {
                    name:'卡片2',//呈現的名稱
                    path:'child2',//對應的虛擬路徑
                    component:CHild2,//對應元件
                },
                {
                    name:'卡片3',//呈現的名稱
                    path:'child/:id',//對應的虛擬路徑
                    component:CHild3,//對應元件
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
            ],
        },
    ],
});