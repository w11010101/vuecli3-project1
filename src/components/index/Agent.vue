<template>
  <div class="agent">
    {{msg}}
  </div>
</template>
<script type="text/javascript">
  export default {
    data(){
      return {
        msg:'agent',

      }
    },
    // beforeRouteUpdate(to,from ,next){
    //   console.log(to);
    //   next()
    // },
    mounted(){
      console.log(this.msg);
    },
    methods:{
      
    },
  }
</script>
<style>

</style>
