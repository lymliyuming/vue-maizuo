<template>

  <div id='app'>
    <keep-alive exclude="Banner,myDetail">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>

export default {
  name: 'app'

}
</script>

<style>
 @import './style/commom/reset.css';
</style>
