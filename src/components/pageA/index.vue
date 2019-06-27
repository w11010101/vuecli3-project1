<template>
  <div id="index">
    {{msg}}
  </div>
</template>
<script>
  export default {
    data(){
      return {
        name:'index',
        msg:'this is pageA/index.vue'
      }
    },
    mounted(){
      console.log('this is pageA/index.vue ');
    },
    methods:{
    }
  }
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
