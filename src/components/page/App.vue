<template>
  <div id="app">
    <div id="nav">
      <Button @click='changeFn' >{{urlName}}</Button>
      <!-- <router-link :to="url" @click='changeFn'>{{urlName}}</router-link> -->
    </div>
    <router-view/>
  </div>
</template>
<script type="text/javascript">
  import route from './router'
  export default{
    data(){
      return {
        url:'/page',
        urlName:"Page.vue",
        changeStatus:true,
      }
    },
    watch:{

      '$route'(to,from){
        console.log(arguments)
      }
    },
    methods:{
      changeFn(){

        this.changeStatus = !this.changeStatus;
        console.log(this.$data)
        // this.$nextTick(function(){
          this.url = this.changeStatus?'/':'/page';
          this.urlName = this.changeStatus?'Index.vue':'Page.vue';
        // });
        route.push(this.url)
      }
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
