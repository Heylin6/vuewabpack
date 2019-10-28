<template>
    
<div>

<BackNavbar :getuser="user"/>
<Alert></Alert>
<div class="container-fluid">
  <div class="row">  
    <BackSidebar :getmodules="modules" 
                 :getsimulations="simulations"/>
    <main role="main" 
          class="col-md-9 ml-sm-auto col-lg-10 px-4">
        <router-view></router-view>
    </main>

  </div>
</div>
</div>

</template>

<script>

import BackNavbar from './BackNavbar';
import BackSidebar from './BackSidebar';
import Alert from './AlertMessage';

import BackUser from '../json/backenduser.json';

export default {
    components:{
        BackNavbar,BackSidebar,Alert
    },
    data(){
        return {
            user:{},
            modules:{},
            simulations:{}
        }
    },
    methods:{
        getuser(){
            this.user=BackUser.data.user;
            this.modules=BackUser.data.modules;
            this.simulations=BackUser.data.simulations;
            console.log('user : ',this.user);
            console.log('modules : ',this.modules);
            console.log('simulations : ',this.simulations);
        }
    },
    create(){
        this.getuser();       
    }
}
</script>