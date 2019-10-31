<template>
    <div class="row">                   
        <div v-for="(item) in getteachers" :key="item.id"
             class="col-lg-4">
                    <img class="rm-thumb" 
                        :src="item.imgurl" 
                        :alt="item.heading">
                  <h2>{{ item.heading }}</h2>
                  <p>{{ item.content }}</p>
                  <p>
                      <a class="btn btn-heylin" href="#" role="button">查看詳情 &raquo;</a>
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
