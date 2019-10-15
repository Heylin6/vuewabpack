<template>
  <div>
   
        <div class="card-body">
          <h5 class="card-title">Card title 33333</h5>
          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      
    };
  }, 
  created(){
    console.log('id');
    console.log(this.$route.params.id);

    const id = this.$route.params.id;
    //隨機 = https://randomuser.me/api
    //固定 = https://randomuser.me/api/?seed=${id}
    this.$http.get('https://randomuser.me/api/?seed=${id}').then((response) => {
        console.log(response);
    });
  }
}
</script>


