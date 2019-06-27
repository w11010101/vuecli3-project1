<template>
  <div class="home">
    <img alt="Vue logo" :src="logo">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  computed:{
  	logo(){
  		return require('@/assets/logo.png')
  	}
  }
}
</script>
