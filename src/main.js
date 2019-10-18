// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

import './bus';
//語系
import VueI18n from 'vue-i18n';
import currencyFilter from './filters/currency.js';
//驗證工具
import VeeValidate, { Validator } from 'vee-validate';
//驗證工具(中文化))
import zhTW_VeeValidate from 'vee-validate/dist/locale/zh_TW';
//抓API
import axios from 'axios'
import VueAxios from 'vue-axios';
//Loading效果套件
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import 'bootstrap';

//自動帶入session
axios.defaults.withCredentials=true;


Vue.config.productionTip = false;



Vue.use(VueAxios, axios);
//所有組件自動載入
Vue.component('Loading',Loading);
Vue.filter('currency',currencyFilter);

Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: 'zhTW'
});

Vue.use(VeeValidate, {
  i18n,
  dictionary: {
    zhTW_VeeValidate
  }
});
Validator.localize('zh-TW', zhTW_VeeValidate);

/* eslint-disable no-new */
new Vue({
  i18n,
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
});

router.beforeEach((to,from,next)=>{

    //console.log('to',to,'from',from,'next',next);
   
    //查看要過去的頁面是否需要驗證
    //假設沒有可直接造訪
    if(to.meta.requiresAuth){
      console.log('這裡需要驗證');

      const api = 'https://vue-course-api.hexschool.io/api/user/check';
      const vm = this;
      axios.post(api).then((response) => {
        console.log(response.data);

        //假設成功 跳下個頁面
        if(response.data.success)
        {
          next();
        }
        else
        {
          //假設成功 跳回燈入頁
          next({
            path:'/login',
          });
        }
      });

    }
    else{
      next();
    }
});
