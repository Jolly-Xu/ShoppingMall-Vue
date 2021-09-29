<template>
  <div class="container">
    <header class="top">
      <div class="iconfont btn1"></div>
      <div class="search">
        <div class="search-inp">
          <div class="iconfont jd-icon"></div>
          <div class="iconfont searchbtn"></div>
          <span class="search-inp-content">联想笔记本 Y9000</span>
        </div>
      </div>
      <div class="iconfont scan"></div>

      <!-- 轮播图 -->
      <div class="carousel">
        <el-carousel height="150px" arrow="never">
          <el-carousel-item v-for="item in CarouselImg" :key="item.url">
            <img class="carousel-img" :src="item.url" alt="" />
          </el-carousel-item>
        </el-carousel>
      </div>
    </header>

    <!-- 品牌日 -->
    <div class="Brand-day">
      <div>
        <a href=""
          ><img class="Brand-day-img" src="../assets/img/brand.png" alt=""
        /></a>
      </div>
    </div>

    <!--导航栏-->
    <nav class="NavBar">
      <a class="nav-item" href="" v-for="item in NavBars" :key="item.id">
        <img class="nav-img" :src="item.url" alt="" />
        <span>{{ item.navname }}</span>
      </a>
    </nav>

    <!-- 秒杀 -->
    <div class="seckill">
      <div class="title-wrap">
        <span>京东秒杀</span>
        <span class="seckill-time">00</span>

        <div class="seckill-timer">
          <div class="seckill-timer-h">
            {{hours1}}{{hours2}}
          </div>
          <span>:</span>
          <div class="seckill-timer-m">
            {{mins1}}{{mins2}}
          </div>
          <span>:</span>
          <div class="seckill-timer-s">
            {{secs1}}{{secs2}}
          </div>
        </div>

        <a class="seckill-more-link">
          <span class="iconfont">更多秒杀</span>
        </a>
      </div>

      <!-- 秒杀推荐 -->
      <div class="seckill-slider">
        <ul class="seckill-sider-list">
          <li v-for="item in SeckillItem" :key="item.id">
            <a href="">
              <img :src="item.url" alt="" />
              <span>￥{{ item.seckillprice }}</span>
              <span class="">￥{{ item.price }}</span></a
            >
          </li>
        </ul>
      </div>
    </div>

    <!-- 好物推荐 -->
    <div class="floor-the-container">
      <div class="recommend">
        <ul class="recommend-list">
          <li class="recommend-item" v-for="item in goodsinfo" :key="item.id">
            <a @click.prevent="todetail"
              ><div>
                <img :src="item.commoditycoverimg" alt="" />
                <span class="recommend-item-content"
                  >{{item.commodityname}}</span
                >
                <p class="similar-product-info">
                  <span class="similar-product-info-price"
                    >¥ <span>{{item.discountprice}}</span>
                  </span>
                  <span class="similar-product-info-type">新品</span>
                  <a href="" class="similar-product-info-looklink"
                    ><span>看相似</span></a
                  >
                </p>
                <p
                  class="similar-product-info similar-product-info-floor"
                ></p></div
            ></a>
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
import { reactive, ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { onMounted } from '@vue/runtime-core';
import {HomeGoodsInfo} from '../api/goods'
export default {
  name: "Home",

  setup() {
    let CarouselImg = reactive([
      { id: 1, url: require("../assets/img/carouselimg01.jpg") },
      { id: 2, url: require("../assets/img/carouselimg02.jpg") },
      { id: 3, url: require("../assets/img/carouselimg03.jpg") },
      { id: 3, url: require("../assets/img/carouselimg04.jpg") },
      { id: 3, url: require("../assets/img/carouselimg05.jpg") },
    ]);
    let NavBars = reactive([
      { id: 1, url: require("../assets/img/ch.png"), navname: "美食" },
      { id: 2, url: require("../assets/img/cz.png"), navname: "充值" },
      { id: 3, url: require("../assets/img/food.png"), navname: "水果" },
      { id: 4, url: require("../assets/img/fz.png"), navname: "飞猪旅行" },
      {
        id: 5,
        url: require("../assets/img/international.png"),
        navname: "京东国际",
      },
      { id: 6, url: require("../assets/img/jhs.png"), navname: "聚划算" },
      { id: 7, url: require("../assets/img/jk.png"), navname: "京东健康" },
      { id: 8, url: require("../assets/img/kb.png"), navname: "口碑" },
      { id: 9, url: require("../assets/img/markte.png"), navname: "京东超市" },
      { id: 10, url: require("../assets/img/pm.png"), navname: "拍卖" },
    ]);
    let SeckillItem = reactive([
      {
        id: 1,
        url: require("../assets/img/seckill01.jpg"),
        seckillprice: 144,
        price: 549,
      },
      {
        id: 1,
        url: require("../assets/img/seckill02.webp"),
        seckillprice: 344,
        price: 999,
      },
      {
        id: 1,
        url: require("../assets/img/seckill03.webp"),
        seckillprice: 144,
        price: 899,
      },
      {
        id: 1,
        url: require("../assets/img/seckill04.webp"),
        seckillprice: 192,
        price: 628,
      },
      {
        id: 1,
        url: require("../assets/img/seckill05.webp"),
        seckillprice: 258,
        price: 398,
      },
      {
        id: 1,
        url: require("../assets/img/seckill06.webp"),
        seckillprice: 799,
        price: 1999,
      },
    ]);


    let start = ref(0)
    // 时间变量
    let hours1 = ref(0)
    let hours2 = ref(0)
    let mins1 = ref(0)
    let mins2 = ref(0)
    let secs1 = ref(0)
    let secs2 = ref(0)
    let goodsinfo = reactive([])

    const timer = (t) => {
      secs2.value--;
      if (secs2.value < 0) {
        secs2.value = 9;
        secs1.value--;
      }
      if (secs1.value < 0) {
        mins2.value--;
        secs1.value = 5;
        secs2.value = 9;
      }
      if (mins2.value < 0) {
        mins1.value--;
        mins2.value = 9;
      }
      if(mins1.value < 0)
      {
        hours2.value --;
        mins1.value = 5
      }
      if(hours2.value < 0){
        hours1.value --;
        hours2.value = 9
      }
      if (mins1.value == 0 && mins2.value == 0 && secs1.value == 0 && secs2.value == 0&&hours2.value ==0 && hours1.value == 0) {
        clearInterval(t)
      }
    };

    onMounted(()=>{
      let date = new Date();
      
      let m = Math.abs(date.getMinutes() - 60)
      let s = Math.abs(date.getSeconds() - 60)
      let h = Math.abs(date.getHours()-24);
      h--;
      m--;
      s--;
      mins1.value = parseInt( m/10<1 ? 0: m/10)
      mins2.value = parseInt( m % 10)
      
      secs1.value = parseInt( s/10<1 ? 0: s/10)
      secs2.value = parseInt( s % 10)
      
      hours1.value = parseInt( h/10<1 ? 0: h/10)
      hours2.value = parseInt( h % 10)

      const timer1 = setInterval(()=>{
          timer(timer1)
      },1000)

    })

    
    // 跳转
    let router = useRouter();
    const todetail = (()=>{
        router.push("/ProductDetails");
    })

    // 页面加载
    onMounted(()=>{
      HomeGoodsInfo(start.value,10).then(res =>{
        goodsinfo.push(...res.data.data)
        console.log(res.data.data);
      })
    })


   return {
      CarouselImg,
      NavBars,
      SeckillItem,
      todetail,
      hours1,
      mins1,
      secs1,
      hours2,
      mins2,
      secs2,
      goodsinfo    
      };
  },
};
</script>

<style scope>
/*顶部*/
.top {
  position: relative;
  background-color: #e22b0b;
  width: 100%;
  height: 170px;
  border-radius: 0 0 20% 20%;
}
/* 搜索框 */
.search {
  position: absolute;
  height: 35px;
  background-color: white;
  margin: 0 13%;
  border-radius: 20px;
  top: 10px;
  width: 74%;
}

/* 搜索内容 */
.search-inp-content {
  line-height: 35px;
  margin-left: 80px;
}

/* 京东图标 */
.jd-icon::before {
  content: "\e812";
  font-size: 20px;
  color: #c7260a;
  position: absolute;
  top: 7.5px;
  left: 14px;
  font-weight: 600;
}

.jd-icon::after {
  position: absolute;
  content: "";
  width: 1.2px;
  height: 15px;
  background-color: #ccc;
  display: block;
  top: 10px;
  left: 40px;
}
/* 搜索按钮 */
.searchbtn::before {
  content: "\e679";
  position: absolute;
  top: 10px;
  left: 48px;
  font-weight: 600;
  color: rgb(182, 182, 182);
}

/* 展开框 */
.btn1 {
  position: absolute;
  top: 8px;
  left: 7px;
}

.btn1::before {
  content: "\e6f8";
  font-size: 38px;
  color: white;
}

/*扫一扫*/
.scan {
  position: absolute;
  top: 12px;
  right: 12px;
}

.scan::before {
  content: "\e7db";
  color: white;
  font-size: 30px;
}

/* 轮播图 */
.carousel {
  height: 150px;
  width: 92%;
  position: absolute;
  top: 55px;
  margin-left: 50%;
  transform: translateX(-50%);
  border-radius: 5%;
  overflow: hidden;
}

.carousel-img {
  width: 100%;
  height: 150px;
}

/* 品牌日 */
.Brand-day {
  position: absolute;
  margin-top: 50px;
  width: 100%;
  height: 150px;
  margin-left: -5px;
}

.Brand-day-img {
  width: 100%;
  height: 100%;
}

/* 导航栏 */
.NavBar {
  position: absolute;
  width: 100%;
  height: 120px;
  margin-top: 190px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.nav-img {
  width: 70px;
  height: 60px;
}

.nav-item {
  display: flex;
  flex-direction: column;
}

.nav-item span {
  margin-left: 50%;
  transform: translateX(-50%);
  width: 70px;
}

.NavBar a:nth-child(-n + 3) span {
  width: auto;
}

.NavBar a:nth-child(6) span {
  width: 50px;
}

.NavBar a:nth-child(8) span {
  width: auto;
}

.NavBar a:nth-child(10) span {
  width: auto;
}

/* 秒杀栏 */
.seckill {
  position: absolute;
  margin-top: 370px;
  background-color: #fff;
  width: 94%;
  border-radius: 4%;
  margin-left: 50%;
  transform: translateX(-50.5%);
  overflow: hidden;
}

.title-wrap {
  width: 100%;
  height: 37px;
  background: url("../assets/img/wrap.png") no-repeat;
  background-size: contain;
}

.title-wrap span {
  margin-left: 12px;
  line-height: 33px;
  color: #333;
}

.title-wrap .seckill-time {
  font-size: 15px;
  margin-left: 6px;
  color: #ff2727;
}

.title-wrap .seckill-time::after {
  position: absolute;
  height: 34px;
  width: 22px;
  content: "";
  display: inline-block;
  background-image: url("../assets/img/seckill-time.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 50%;
}
/* 秒杀倒计时框 */
.seckill-timer {
  box-sizing: border-box;
  display: inline-block;
  height: 33px;
  margin-top: 0;
  margin-left: 35px;
}

.seckill-timer span {
  margin: 0;
  color: #f2270c;
}

.seckill-timer div {
  color: white;
  font-size: 14px;
  width: 17px;
  height: 22px;
  background-color: #fa2c19;
  display: inline-block;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 1px;
}

/* 秒杀更多链接 */
.seckill-more-link {
  text-decoration: none;
}

.seckill-more-link span {
  margin-left: 0;
  font-size: 14px;
  color: #f23030;
  margin-left: 115px;
}

.seckill-more-link span::after {
  background-color: #f23030;
  color: white;
  height: 12px;
  width: 12px;
  content: "\e648";
  border-radius: 50%;
  margin-left: 2px;
}

/* 秒杀推荐 */
.seckill-slider {
  width: 100%;
  height: 100%;
}

.seckill-slider ul {
  width: 100%;
  display: flex;
  justify-content: space-around;
}

.seckill-slider ul li {
  height: 114px;
  width: 63px;
  background-color: #fff;
}

.seckill-sider-list img {
  width: 63px;
  height: 60px;
}

.seckill-sider-list a {
  display: inline-block;
  text-decoration: none;
}

.seckill-sider-list li {
  display: flex;
  flex-direction: column;
}

.seckill-sider-list li span {
  display: block;
  margin-left: 8px;
  padding: 0;
}
.seckill-sider-list li span:nth-child(2) {
  font-size: 15px;
  color: #f2270c;
}

.seckill-sider-list li span:nth-child(3) {
  font-size: 13px;
  color: #999;
  text-decoration: line-through;
}

/* 好物推荐 */
.floor-the-container {
  position: relative;
  width: 100%;
  margin-top: 530px;
}
.recommend {
  width: 96%;
  height: 100%;
  margin: 0 auto;
}
.recommend-list li:nth-child(odd){
  box-sizing: border-box;
  margin-right: 13px;
}

.recommend-item {
  border-radius: 3%;
  float: left;
  width: 48%;
  box-sizing: border-box;
  padding-bottom: 0.5rem;
  position: relative;
  background-color: #fff;
  margin-top: 10px;
}

.recommend-item img {
  width: 100%;
  height: 191px;
}

.recommend-item .recommend-item-content {
  display: block;
  box-sizing: border-box;
  height: 31px;
  font-size: 13px;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #1a1a1a;
  line-height: 16px;
  margin-top: 3px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  padding: 0 4px;
}

.similar-product-info {
  box-sizing: border-box;
  width: 100%;
  height: 28.7px;
  font-size: 14px;
  margin-top: 8px;
  padding: 0 4px;
}

.similar-product-info-price {
  font-weight: 550;
}

.similar-product-info span:nth-child(-n + 2) {
  color: #fa2c19;
}

.similar-product-info-type {
  margin-left: 8px;
  border: 1px #fa2c19 solid;
  font-size: 12px;
  border-radius: 3px;
  padding: 0 3px;
  height: 14px;
  line-height: 14px;
}

.similar-product-info-looklink {
  background-color: #f0f2f5;
  position: absolute;
  font-size: 13px;
  height: 24px;
  line-height: 24px;
  right: 0;
  border-radius: 25% 0 25% 25%;
  padding: 0 4px;
}

.recommend-item .similar-product-info .similar-product-info-looklink span {
  color: grey;
}

.similar-product-info-floor {
  height: 14px;
}

.recommend-list li:last-child::after{
  content: "";
  width: 100%;
  height: 100px;
  display: block;
  position:absolute;
}

/* 轮播图样式 */
.el-carousel{
  --el-carousel-indicator-width:2px !important;
}
</style>
