<template>
    <div>
        <header id="headercenter">
       <section class="walk">
            <section class="head"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIYAAACGCAMAAAAvpwKjAAAAQlBMVEXt7e3v7+/r6+v7+/v9/f309PT8/Pzq6ur////+/v729vbu7u7x8fH5+fnz8/P6+vr4+Pjs7Ozy8vL19fXw8PD39/c1tMDaAAAD/0lEQVR42u2a6ZKkKhCFARFZFBf0/V91eubebhGxSjKTmIoJz88uw/4kMw9LwtijR48ePXr06NGjR48ePfpH5XrfBrttNrTLevnUGkZljBpaXgGht6PUscxoF5d5rtkfGVZaBj8YnZNRNvnk6fi7pWNYpzzD96As+6O8SX8eqIIx6neS39/M1flHEo71PcQfEH9FoTU+Lm4z+qaa9YJCG2yeLlLfl5nUxS/IsGyaSBj/OCc9WC0iNzMBUVvbOzaL+ctO203dxoBHpT9RDAvrjmLLcA9DgSmSCjHt3OU0t3dKyUAjcny58aK7kvCmFgY/RsTO3SvNtlJQDsknefdO/I2/jCCKwyTZsO692OviDhCKNn7DJLo7EtMrDIib8zjl2u6u2hfTDWQwRhDFK44ess6KI9KV6CouE2QwoqRvRBGGaOhCEqJKzdQI/1oXGyNHm6tilqtbxZGDwc+GGRmKytg7p6KI8sym/ySd7cxy4rA0FJF/mvm9M5xMZTYkFP3+Bp/8g+zqQqWB8RQUkY0bcacKTsUkDAEFM1fG9bO+GXonBOt/NnHjtYlJKMWyv+M42uFnqvwpziGfyTN2Xv3SnujD8eX/10jIfLfsLsYNvOaKpuslhxFy468SjAU3sf7eo+2pkRjon6BsWZdIZz+G3hfs5Zp+YhekDGf39k3jT39U2H3BnuVbB9cWTUrIzWKLwIhKFoaxJ3mPwOixOboXikNguB1jQc5rDIERlYpnuLWGQGAIbMWafwljxmLIz8iND6mU8TN8Y6B2UY5cAtLMKdqBMML1DFsghZ3aoqgyikKBHgCaq9VXgRbk6cqhYgcwxoA7UEhOp2e8hxoHxPAaXbIt8kQhWRMb2LQS79qgqXE4A/QgjGg8DbxvEKW5gWRHvKMHb9qOpywWgBGfb3gERvweXkzBCY7r0yTNnn29NlBJ1uizmuYkUDoUhpM056KB4RQ0xSmxYlgpTXBm7tEYx/4WrINA0RC3GttPQeZnpocA6S6ZnoIibbUV99qo7mwsafuzqPM4MiqdXl3Qh6WjyHDc7kpTUjCW7Tb/16MXQlz36BtGK3/7AslhLBwxRuaywHttjF5uLIQwnlWRLQqMWlklrfdvtJjAKsrfzJDJsbqa7lz76itDMH5rOEJtCvVXi+S7aO9eZzI1w+IKKmWth1FyA03yWhRlNtpUqtmhdF77CArghREC26o/w8JuaVLbmAVRUNtYgF4NJbWxFn5FVdLZGGwd+r36obKPBUNBtjhHUhDZWI+lILGxFU9BsJlepaZQi6PgNBTaLCgKpYmEsTFHRoFZBTm66/4YGyOlANvYqIkFsrFBk2v6CAqAjU26igptbKtDUWhjVtfS1WbuF/MY5z0qnakpAAAAAElFTkSuQmCC" alt="asd"></section>
            <section class="nick-name">立即登录</section>
       </section>
    </header>
    <!-- 导航 -->
    <nav id="nav">
        <ul>
            <li><i class="iconfont icon-hui"></i><span class="films">电影订单</span></li>
            <li><i class="iconfont icon-dingdan"></i><span class="forsale">商品订单</span></li>
        </ul>
    </nav>
    <!-- 内容 -->
    <section id="footers">
        <article>
            <aside><i class="iconfont icon-dingdan"></i><router-link to="/cart">卖座卡</router-link></aside>
            <aside><i class="iconfont icon-xiajiantou"></i></aside>
        </article>
    </section>
     </div>
</template>
<style>
@import '../style/iconfont/iconfont.css';
#headercenter {
  width: 100%;
  min-height: 2rem;
  background: url(../components/img/headers.png) no-repeat;
  background-size: cover;
  padding-left: 22px;
  padding-top: 64px;
  box-sizing: border-box;
  text-align: center;
  margin-top: -44px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

#headercenter .walk {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

#headercenter .walk .head img {
  width: .67rem;
  height: .67rem;
  border-radius: .35rem;
  margin-right: .20rem;
  border: .02rem solid #fff;
  box-sizing: border-box;
}

#headercenter .walk .nick-name {
  font-size: .16rem;
  color: #fff;
}

#nav {
  display: flex;
  text-align: center;
  font-size: 13px;
  padding: 0;
  min-height: 79px;
  width: 100%;
  background: #fff;
  margin-bottom: 10px;
  flex-direction: column;
  justify-content: center;
}

#nav ul {
  display: flex;
  justify-content: space-around;
}

#nav ul li {
  display: flex;
  flex-direction: column;
}

#nav ul li .icon-hui {
  font-size: .24rem;
  color: orange;
}

#nav ul li .films {
  color: #797d82;
  margin-top: .04rem;
  font-size: .14rem;
}

#nav ul li .icon-dingdan {
  font-size: .24rem;
  color: green;
}

#nav ul li .forsale {
  color: #797d82;
  margin-top: .04rem;
  font-size: .14rem;
}

#footers {
  background: #fff;
  padding: 0 15px;
  height: 49px;
}

#footers article {
  display: flex;
  justify-content: space-between;
}

#footers article aside {
  display: flex;
  align-items: center;
}

#footers article .icon-dingdan {
  font-size: .2rem;
  color: red;
}

</style>
