<template>
    <div>
        <header id="idheader">
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
    <aside class="checkbtn">
      <router-link to='/city'> 深圳<i class="iconfont icon-xiajiantou"></i></router-link>
    </aside>
    </div>
</template>

<script>
// const Swiper=window.Swiper;
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
  name:'Banner',
  props: {
    tags: {
      type: Array
    }
  },
  data () {
    return {
      swipers: null
    }
  },
  updated() {
    this.changeitem()
  },
  activated () {
    // this.swipers = null
    this.changeitem()
  },
  methods: {
    changeitem () {
      this.swipers = new Swiper('.swiper-container', {
        loop: true, // 循环模式选项

        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination'
        },
        // 滑动间隔
        speed: 800,
        autoplay: {
          // delay: 1000,
          // 用户操作后不停止
          disableOnInteraction: false
        },
        // 设置只能拖动结束再滑动
        preventInteractionOnTransition: true,
        // 如果需要滚动条
        scrollbar: {
          el: '.swiper-scrollbar'
        }
      })
    }
  }
}
</script>

<style>
#idheader {
  width: 100%;
  min-height: 2.1rem;
  position: relative;
}

#idheader .swiper-container {
  width: 100%;
  height: 100%;
}
#idheader .swiper-container .swiper-wrapper img {
  width: 100%;
  height: 2.1rem;
}
.checkbtn {
  position: fixed;
  top: .18rem;
  left: .07rem;
  z-index: 2;
  font-size: 13px;
  background: rgba(0, 0, 0, 0.2);
  height: 30px;
  line-height: 30px;
  border-radius: 15px;
  text-align: center;
  padding: 0 5px;
}

.checkbtn a {
  color: #fff;
  display: block;
}

</style>
