<template>
    <section id="content">
         <article>
            <aside><img src="./img/art05.jpg" alt="art05"></aside>
            <aside>
                <figure class="one">
                    <span class="name">老师·好</span>
                    <span class="item">2D</span>
                </figure>
                <figure class="two">
                    <span class="label">观众评分</span>
                    <span class="grade">7</span>
                </figure>
                <figure>
                    <span class="label">主演：于谦  汤梦佳 秦鸣悦  王广源  孙艺杨 </span>
                </figure>
                <figure>
                    <span class="label">中国大陆 | 100分钟</span>
                </figure>
            </aside>
            <aside class="shop">预约</aside>
        </article>
    </section>
</template>

<style>
    #content {
  width: 100%;
  height: auto;
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
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
}

#content article aside .one .name {
  color: #191a1b;
  font-size: .16rem;
  height: .22rem;
  line-height: .22rem;
  margin-right: .05rem;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
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

#content article aside .two .label {
  font-size: .13rem;
  margin-top: .04rem;
  color: #797d82;
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

</style>
