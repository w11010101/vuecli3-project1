<template>
  <div class="login">
    {{msg}}
    <router-view name='loginView' />
    <!-- <router-view name="layoutView" v-if="isRouterAlive"/> -->
  </div>
</template>
<script type="text/javascript">
  // import route from './router';
  
  export default{
    data(){
      return {
        msg:'OAuth2',

      }
    },
    mounted(){
      console.log(this.msg);
    },
    methods:{
      
    },
  }
</script>
<style>

</style>
