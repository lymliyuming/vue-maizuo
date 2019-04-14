<template>
    <section id="content">
        <router-link
        v-for="item in flimslist"
        :key="item.filmId"
        :to="{name:'detail',params:{id:item.filmId}}"
        tag="article"
        >
            <aside><img :src="item.poster" :alt="item.id"></aside>
            <aside>
                <figure class="one">
                    <span class="name">{{item.name}}</span>
                    <span class="item">{{item.filmType.name}}</span>
                </figure>
                <figure class="two">
                    <span class="label">观众评分</span>
                    <span class="grade">{{item.grade}}</span>
                </figure>
                <figure>
                    <span class="label">主演：{{athorsget(item.actors)}} </span>
                </figure>
                <figure>
                    <span class="label">{{item.nation}} | {{item.runtime}}分钟</span>
                </figure>
            </aside>
            <aside class="shop">购票</aside>
        </router-link>
         <section class="loadmore" @click="moreloads" v-if="pageNum < page">点击加载更多...</section>
         <section class="loadno" v-else>我也是有底线的...</section>
    </section>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      flimslist: [],
      pageNum: 1,
      pageSize: 20,
      tatol: 10
    }
  },
  computed: {
    page () {
      return Math.ceil(this.tatol / this.pageSize)
    }
  },
  methods: {
    // axios偷来卖座网的信息
    getdataba () {
      axios.get('https://m.maizuo.com/gateway', {
        params: {
          cityId: 440300,
          pageNum: this.pageNum,
          pageSize: this.pageSize,
          type: 1,
          k: 7213451
        },
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"1.0.0","e":"15546287901881195678781"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res => {
        let ress = res.data
        if (ress.msg === 'ok') {
          //    this.flimslist=ress.data.films;
          // console.log(this.page)
          this.tatol = ress.data.total
          this.flimslist = this.flimslist.concat(ress.data.films)
        } else {
          alert(ress.msg)
        }
      })
    },
    moreloads () {
      this.pageNum++
      this.getdataba()
    },
    athorsget (athors) {
      athors = athors || []
      let athname = athors.map(element => {
        return element.name
      })
      return athname.join('')
    }
  },
  created () {
    this.getdataba()
  }
}
</script>

<style>
#content {
  width: 100%;
  height: auto;
  margin-bottom: .5rem;
}

#content article {
  width: 100%;
  min-height: 1.24rem;
  border-bottom: 1px solid #ededed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .15rem;
  box-sizing: border-box;
}

#content article figure {
  margin: 0;
  padding: 0;
}

#content article aside .one .name {
  color: #191a1b;
  font-size: .16rem;
  height: .22rem;
  line-height: .22rem;
  margin-right: .05rem;
}

#content article aside .one .item {
  font-size: .09rem;
  color: #fff;
  background-color: #d2d6dc;
  height: .14rem;
  line-height: .14rem;
  padding: 0 .02rem;
  border-radius: .02rem;
}

#content article aside figure .label {
  font-size: .13rem;
  margin-top: .04rem;
  color: #797d82;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 2.2rem;
  display: block;
}

#content article aside .two .grade {
  color: #ffb232;
  font-size: .14rem;
}

#content article aside img {
  width: .62rem;
  height: .91rem;
}

#content article .shop {
  line-height: .25rem;
  height: .23rem;
  width: .48rem;
  color: #ff5f16;
  font-size: .13rem;
  text-align: center;
  border-radius: .02rem;
  border: .01rem solid #ff5f16;
}
#content .loadmore{
    width: 100%;
    height: .5rem;
    text-align: center;
    line-height: .5rem;
}
#content .loadno{
    width: 100%;
    height: .5rem;
    text-align: center;
    line-height: .5rem;
}
</style>
