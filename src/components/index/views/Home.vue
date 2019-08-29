<template>
  <div class="home">
    <h1>package.json</h1>
    <code>{{package}}</code>
    <!-- <img alt="Vue logo" :src="logo"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data(){
    return{
      package:{
          "name": "hello-world",
          "version": "0.1.0",
          "private": true,
          "scripts": {
            "serve": "vue-cli-service serve",
            "build": "vue-cli-service build index --mode nodeEnv",
            "build-all": "npm run build && npm run build-page && npm run build-pagea && npm run build-pageb",
            "build-page": "vue-cli-service build page --mode nodeEnv",
            "build-pagea": "vue-cli-service build pageA --mode nodeEnv",
            "build-pageb": "vue-cli-service build pageB --mode nodeEnv",
            "test:unit": "vue-cli-service test:unit"
          },
          "dependencies": {
            "core-js": "^2.6.5",
            "vue": "^2.6.10",
            "vue-router": "^3.0.3",
            "vuex": "^3.0.1"
          },
          "devDependencies": {
            "@vue/cli-plugin-babel": "^3.8.0",
            "@vue/cli-plugin-pwa": "^3.8.0",
            "@vue/cli-plugin-unit-mocha": "^3.8.0",
            "@vue/cli-service": "^3.8.0",
            "@vue/test-utils": "1.0.0-beta.29",
            "chai": "^4.1.2",
            "vue-template-compiler": "^2.6.10"
          }
        }
    }
  },
  components: {
    // HelloWorld
  },
  computed:{
  	logo(){
  		return require('@/assets/logo.png')
  	}
  }
}
</script>
