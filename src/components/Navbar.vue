<template>
        <footer id="footer">
            <section class="footer-cade">
                <ul>
                    <li 
                    v-for="(item,index) in tabs"
                    :key="index"
                    >
                        <router-link :to="item.href" :class="['iconfont',item.icon]" active-class='active'><span>{{item.name}}</span></router-link>
                    </li>
                    <!-- <li><a href="javascript:;" class="iconfont icon-yingyuana"><span>影院</span></a></li>
                    <li><a href="javascript:;" class="iconfont icon-tehui"><span>特惠</span></a></li>
                    <li><a href="javascript:;" class="iconfont icon-shouye"><span>我的</span></a></li> -->
                </ul>
            </section>
        </footer>
</template>

<script>
export default {
    props:{
        tabs:{
            type:Array
        }
    }
}
</script>

<style>
  @import '../style/iconfont/iconfont.css'; 
  #footer {
  width: 100%;
  min-height: .48rem;
  border-top: 1px solid #ededed;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;
}

#footer ul {
  display: flex;
  justify-content: space-around;
}

#footer ul a {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #797d82;
  font-size: .21rem;
}

#footer ul a span {
  font-size: .1rem;
  margin-top: .04rem;
}
#footer ul li .active{
    color: #ff5f16;
}
</style>


