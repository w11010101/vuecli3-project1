<template>
  <div id="pageA">
    <div id="nav">
      <Button @click='changeFn' >{{urlName}}</Button> | 
      <router-link to='/hello'>helloWorld</router-link>
      <!-- <router-link :to="url" @click='changeFn'>{{urlName}}</router-link> -->
    </div>
    <router-view/>
  </div>
</template>
<script type="text/javascript">
  import route from './router';
  console.log('pageA App.vue')
  export default{
    data(){
      return {
        url:'/page',
        urlName:"Page.vue",
        changeStatus:true,
        promiseState:true,
      }
    },
    watch:{

      '$route'(to,from){
        console.log(arguments)
      }
    },
    mounted(){
      this.runPromise();
      this.runPromise();
    },
    methods:{
      changeFn(){

        this.changeStatus = !this.changeStatus;
        console.log(this.$data)
        // this.$nextTick(function(){
          this.url = this.changeStatus?'/':'/page';
          this.urlName = this.changeStatus?'Index.vue':'Page.vue';
        // });
        route.push(this.url);

      },
      runPromise(){
        this.promiseFn().then(res=>{
        console.log('res = ',res);
        }).catch(err=>{
          console.log('err = ' ,err);
        });
      },
      promiseFn(){
        let that = this;
        return new Promise((resolve,reject) =>{
          setTimeout(function(){
            if(that.promiseState){
              resolve({name:'resolve',a:1});
              that.promiseState = !that.promiseState;
            }else{
              reject({name:'reject',b:2})
            }
            
          },2000);
        })
      }
    }
  }
</script>
<style>
/*#pageA {
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
}*/
#pageA {
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
