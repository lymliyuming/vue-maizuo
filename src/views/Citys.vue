<template>
    <div>
         <header id="header">
        <h1>当前城市</h1>
        <article>
            <input type="text">
        </article>
    </header>
    <article class="mint-indexlist-nav">
        <ul>
            <li class="mint-indexlist-navitem"
            v-for="item in pys"
            :key="item"
            @click="cityclick(item)">{{ item }}</li>
        </ul>
    </article>
    <section id="contentcity">
        <ul class="mint-indexlist-content" id="indexlist-content">
            <article class="hot-city">
                <aside class="city-index-title">热门城市</aside>
                <ul class="city-index-detail cleanfix">
                    <li class="city-item-detail"
                    v-for="itemhot in hotcitys"
                    :key='itemhot.name'>{{ itemhot.name }}</li>
                </ul>
            </article>
            <li
            v-for='items in city'
            :key="items.py"
            :id="items.py">
                <p class="mint-indexsection-index">{{ items.py }}</p>
                <ul class="city-item-rel">
                    <li class="city-item-text"
                    v-for="cityted in items.list"
                    :key="cityted.cityId"
                    >{{ cityted.name }}</li>
                </ul>
            </li>
        </ul>
    </section>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      citysList: []
    }
  },
  methods: {
    getcitysData () {
      axios.get('https://m.maizuo.com/gateway?k=3603668', {
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"1.0.0","e":"15546287901881195678781"}',
          'X-Host': 'mall.film-ticket.city.list'
        }
      }).then(res => {
        let ress = res.data
        if (ress.msg === 'ok') {
          this.citysList = ress.data.cities
          // console.log(this.citysList)
        } else {
          alert(ress.msg)
        }
      })
    },
    cityclick (py) {
      let el = document.getElementById(py)
      var heighttop = el.offsetTop - 100
      document.documentElement.scrollTop = heighttop
    }
  },
  computed: {
    city () {
      let flag = {}
      let result = []
      let index = 0
      this.citysList.forEach(item => {
        let py = item.pinyin.substr(0, 1).toUpperCase()
        if (flag[py]) {
          result[flag[py] - 1].list.push(item)
        } else {
          var obj = {
            py: py,
            list: [item]
          }
          flag[py] = ++index
          result.push(obj)
        }
      })
      result.sort((a, b) => {
        return a.py.charCodeAt() - b.py.charCodeAt()
      })
      return result
    },
    hotcitys () {
      return this.citysList.filter(item => {
        return item.isHot
      })
    },
    pys () {
      return this.city.map(item => {
        return item.py
      })
    }
  },
  created () {
    this.getcitysData()
  }
}
</script>

<style>
    #header {
  width: 100%;
  min-height: 1rem;
  background: #fff;
  position: fixed;
  top: 0;
}

#header h1 {
  height: .5rem;
  text-align: center;
  font-size: 17px;
  line-height: .5rem;
  color: #191a1b;
}

#header article {
  z-index: 2000;
  height: .5rem;
  width: 100%;
  padding: .09rem .15rem;
  background-color: #f4f4f4;
  box-sizing: border-box;
}

#header article input {
  background-color: #fff;
  position: relative;
  display: inline-block;
  border-radius: .03rem;
  width: 100%;
  height: .3rem;
  border: 0;
  padding-left: .1rem;
}

#contentcity {
  width: 100%;
  height: auto;
  padding-top: 1.2rem;
  box-sizing: border-box;
  background: #fff;
}

#contentcity .mint-indexlist-content {
  background-color: #fff;
  padding-left: .15rem;
  padding-top: .15rem;
  margin-right: .17rem;
}

#contentcity .mint-indexlist-content .hot-city {
  font-size: .13rem;
  color: #797d82;
  margin-bottom: .10rem;
}

#contentcity .mint-indexlist-content .hot-city .city-index-detail {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}

#contentcity .mint-indexlist-content .hot-city .city-index-detail .city-item-detail {
  text-align: center;
  padding-bottom: .15rem;
  height: .3rem;
  background-color: #f4f4f4;
  line-height: .3rem;
  border-radius: .03rem;
  width: 1rem;
  box-sizing: border-box;
  margin: .1rem .07rem;
  font-size: .14rem;
  color: #191a1b;
}

#contentcity .mint-indexlist-content .mint-indexsection-index {
  background-color: #f4f4f4;
  color: #797d82;
  padding: 0 0 0 .15rem;
  height: .3rem;
  line-height: .3rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

#contentcity .mint-indexlist-content .city-item-rel {
  height: auto;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}

#contentcity .mint-indexlist-content .city-item-rel .city-item-text {
  background-color: #fff;
  height: 100%;
  line-height: .48rem;
  font-size: .14rem;
  box-sizing: border-box;
  height: .48rem;
  color: #191a1b;
  width: 1rem;
  text-align: center;
}

.mint-indexlist-nav {
  border: 0;
  position: fixed;
  right: 0;
  z-index: 999;
  width: .17rem;
  margin-top: 2rem;
}

.mint-indexlist-nav .mint-indexlist-navitem {
  font-size: .11rem;
  padding: 0 .06rem;
  color: #191a1b;
}

</style>
