<template>
        <header id="header">
            <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide"
                        v-for="(item,index) in tags"
                        :key="index"
                        >
                          <router-link to=""> <img :src="item.imgUrl" :alt="item.bannerId"></router-link>
                        </div>
                        <!-- <div class="swiper-slide"><a href="javascript:;"><img src="./img/ban02.jpg" alt="ban02" class="banner02"></a></div>
                        <div class="swiper-slide"><a href="javascript:;"><img src="./img/ban03.jpg" alt="ban03" class="banner03"></a></div>
                        <div class="swiper-slide"><a href="javascript:;"><img src="./img/ban04.jpg" alt="ban04" class="banner04"></a></div>
                        <div class="swiper-slide"><a href="javascript:;"><img src="./img/ban05.jpg" alt="ban05" class="banner05"></a></div>
                        <div class="swiper-slide"><a href="javascript:;"><img src="./img/ban06.jpg" alt="ban06" class="banner06"></a></div> -->
                    </div>
                    <!-- 如果需要分页器 -->
                    <div class="swiper-pagination"></div>
            </div>
    </header>
</template>

<script>
  export default{
    props:{
      tags:{
        type:Array
      }
    },
    data() {
      return {
        swipers:null
      }
    },
        updated() {
          if(!this.swipers){
              new Swiper ('.swiper-container', {
                  loop: true, // 循环模式选项
            
            // 如果需要分页器
              pagination: {
                el: '.swiper-pagination'
              },
            //滑动间隔
              speed:800,
              autoplay : {
                  delay:1000,
                  //用户操作后不停止
                  disableOnInteraction: false,
              },
            //设置只能拖动结束再滑动
              preventInteractionOnTransition : true,
            // 如果需要滚动条
              scrollbar: {
                el: '.swiper-scrollbar'
              },
            })
      }
          }
            
    }
</script>

<style>
#header {
  width: 100%;
  min-height: 2.1rem;
  position: relative;
}

#header .swiper-container {
  width: 100%;
  height: 100%;
}
#header .swiper-container .swiper-wrapper img {
  width: 100%;
  height: 2.1rem;
}
</style>

