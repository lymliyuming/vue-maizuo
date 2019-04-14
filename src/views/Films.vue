<template>
    <div>
        <Banner
        :tags='tags'></Banner>
         <nav id="nav"
         :class="{fixeds:isfixed}"
         >
            <ul>
                <li
                v-for="item in filmType"
                :key="item.id"
                ><a
                :class="{active:curtype===item.id}"
                @click="onchange(item)"
                >{{item.name}}</a></li>
            </ul>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>
import Banner from '../components/Banner'
import axios from 'axios'
export default {
  components: {
    Banner
  },
  data () {
    return {
      tags: [],
      filmType: [
        { id: 'nowPlaying', name: '正在热映', href: '/film/nowPlaying' },
        { id: 'comingSoon', name: '即将上映', href: '/film/comingSoon' }
      ],
      curtype: this.$route.path.substring(6),
      isfixed: false
    }
  },
  methods: {
    onchange (item) {
      this.curtype = item.id
      this.$router.push(item.href)
    },
    // 获取轮播图数据
    getdata () {
      axios.get('https://m.maizuo.com/gateway?type=2&cityId=440300&k=4106710',
        {
          headers: {
            'X-Client-Info': '{"a":"3000","ch":"1002","v":"1.0.0","e":"15546287901881195678781"}',
            'X-Host': 'mall.cfg.common-banner'
          }
        }).then(res => {
        let ress = res.data
        if (ress.status === 0) {
          this.tags = ress.data
        } else {
          alert(res.msg)
        }
      })
    },
    myscoll () {
      let scolltop = document.documentElement.scrollTop
      // console.log(scolltop)
      if (scolltop > 210) {
        this.isfixed = true
        //  console.log(111)
      } else {
        this.isfixed = false
      }
    }
  },
  // 创建完钩子函数内执行方法
  created () {
    this.getdata()
  },
  // mounted() {
  //     window.addEventListener('scroll',this.myscoll);
  // },
  deactivated () {
    window.removeEventListener('scroll', this.myscoll)
  },
  activated () {
    window.addEventListener('scroll', this.myscoll)
  }
}
</script>

<style>
#nav {
  width: 100%;
  min-height: .48rem;
  border-bottom: 1px solid #ededed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;
  /* 粘性定位 */
  /* position: sticky;
  top: 0; */
}

#nav ul {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
}

#nav ul a {
  font-size: .14rem;
  color: #191a1b;
  text-align: center;
}
#nav ul li .active{
    color: #ff5f16;
}
.fixeds{
    position: fixed;
    top: 0;
    z-index: 888;
}
</style>
