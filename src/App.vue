<template>
  <div id="app">
    <router-view></router-view>
    <Navbar
    :tabs="tabs"
    ></Navbar>
  </div>
  
</template>

<script>
import Navbar from './components/Navbar';

export default {
  name: 'app',
  data(){
    return{
      tabs:[
        {name:'电影',href:'/film',icon:'icon-dianyingzhiye-dianyingbang'},
        {name:'影院',href:'/cinemas',icon:'icon-yingyuana'},
        {name:'特惠',href:'/tehui',icon:'icon-tehui'},
        {name:'我的',href:'/center',icon:'icon-shouye'},
      ]
    }
  },
  components:{
    Navbar
  }
 
}
</script>

<style>
 @import './style/commom/reset.css';  
</style>

