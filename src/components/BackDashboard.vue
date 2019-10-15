<template>
    
<div>

<BackNavbar/>
<Alert></Alert>
<div class="container-fluid">
  <div class="row">  
    <BackSidebar/>
    <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
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

export default {
    components:{
        BackNavbar,BackSidebar,Alert
    }
}
</script>