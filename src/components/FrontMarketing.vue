<template>
    <div class="container marketing">
           <FrontTeacher></FrontTeacher>
           <!-- START THE FEATURETTES -->
           <hr class="featurette-divider">
           <FrontDivider></FrontDivider>
    </div>
</template>
<script>
import FrontTeacher from './FrontTeacher';
import FrontDivider from './FrontDivider';

export default {
      name: 'FrontMarketing',
      components:{
        FrontTeacher,
        FrontDivider,
  },
}
</script>