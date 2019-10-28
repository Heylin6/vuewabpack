<template>
    <div>
       <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
            <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Company name</a>
            <!-- <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search"> -->
            <span class="navbar-brand col-sm-9 text-right">{{getuser}} , 您好!</span>
            <ul class="navbar-nav px-3">               
                <li class="nav-item text-nowrap">
                    <a class="nav-link"
                    href="#" 
                    @click.prevent="signout">登出
                    </a>                
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
  name: 'BackSidebar',
  props:['getuser'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    signout(){
          const api = 'https://vue-course-api.hexschool.io/logout';
          const vm = this;
          this.$http.post(api).then((response) => {
            console.log(response.data);

            if(response.data.success)
            {
              vm.$router.push('/login');
            }
          });
    }
  }
}
</script>