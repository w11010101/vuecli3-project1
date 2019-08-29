
let pageList = {
    // index:{
    //   entry:'./src/main.js',
    //   template: './public/index.html',
    //   filename: 'index.html',
    //   // title: 'Index',
    //   // chunks: ['chunk-vendors', 'chunk-common', 'index']
    // },
  	index:{
  		entry:'./src/components/index/main.js',
  		template: './src/components/index/public/index.html',
  		filename: 'index.html',
  		title: 'Index',
  		chunks: ['chunk-vendors', 'chunk-common', 'index']
  	},
    page:{
      entry:'./src/components/page/main.js',
      template: './src/components/page/public/index.html',
      filename: 'page.html',
      title: 'Page',
      chunks: ['chunk-vendors', 'chunk-common','page']
    },
  	pageA:{
  		entry:'./src/components/pageA/main.js',
  		template: './src/components/pageA/public/pageA.html',
  		filename: 'pageA.html',
  		// title: 'PageA',
  		chunks: ['chunk-vendors', 'chunk-common','pageA']
  	},
    pageB:{
      entry:'./src/components/pageB/main.js',
      template: './src/components/pageB/public/index.html',
      filename: 'pageB.html',
      // title: 'PageB',
      chunks: ['chunk-vendors', 'chunk-common','pageB']
    }
}
let activePage = {};
console.log(process.argv)
let pageVal = process.argv[3];
console.log('pageVal = ' ,pageVal);
let buildFileName = pageVal?pageVal.includes('--mode')?'index':pageVal:'dist/test';
if(process.env.NODE_ENV === 'production'){
  activePage[buildFileName] = pageList[buildFileName];
}else{
  if(buildFileName == 'index'){
    activePage[buildFileName] = pageList[buildFileName];
  }else{
    activePage = pageList;
  }
  
}
module.exports = {
	publicPath: './',
	assetsDir:'./',
	productionSourceMap:false,
	pages:activePage,
  configureWebpack: config => {
    // config.externals = {
    //   'vue': 'Vue',
    //   'vue-router': 'VueRouter',
    //   'vuex': 'Vuex',
    //   // 'axios': 'axios'
    // }
  },
  outputDir:buildFileName != 'index'?'dist/'+pageVal:'dist/index',
  // pwa:{
  //   name:"pwa-test12",
  //   themeColor:'#abcdef',

  // }

}