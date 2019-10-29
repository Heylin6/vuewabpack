<template>
    <div class="row">                   
        <div v-for="(item) in getteachers" :key="item.id"
             class="col-lg-4">
                    <img class="rm-thumb" 
                        :src="item.imgurl" 
                        :alt="item.heading">
                  <!-- <svg class="bd-placeholder-img rounded-circle" 
                        width="140" height="140" 
                        xmlns="http://www.w3.org/2000/svg" 
                        preserveAspectRatio="xMidYMid slice" focusable="false" 
                        role="img" aria-label="Placeholder: 140x140">
                          <title>{{ item.placeholder }}</title>
                          <rect width="100%" height="100%" fill="#777"/>
                          <text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg> -->
                  <h2>{{ item.heading }}</h2>
                  <p>{{ item.content }}</p>
                  <p>
                      <a class="btn btn-secondary" href="#" role="button">View details &raquo;</a>
                  </p>
         </div>

    </div>
</template>
<script>
export default {
    name:'TeacherRect',
    props:['getteachers'],
    data(){
        return {

        }
    },
}
</script>
