<template>
  <div class="container-body">
    <div class="navtop">
      <span @click="toreturn" class="iconfont return-btn"></span> 
      <span class="iconfont morebtn"></span>
    </div>

    <!-- 商品图片页 -->
    <div class="goods-img">
      <img src="../assets/img/good01.webp" alt="" />
    </div>

    <!-- 图片切换 -->
    <div class="switch-goods-img">
      
    </div>

    <!-- 商品详情页横幅展览 -->
    <div class="banner">
      <img src="../assets/img/goodsdetailsbanner.png" alt="">
    </div>

    <div class="goods-info-content">
      <!-- 价格栏 -->
      <div class="goods-price-wrap">
        <div class="goods-price-info">
          <span>¥</span>
          <span>199</span>
          <span>.00</span>
        </div>

        <div class="goods-info-opt">
          <span class="iconfont">降价<br/>提醒</span>    
          <span class="iconfont">收藏</span>
        </div>

      </div>

      <!-- 商品标签栏 -->
      <div class="goods-info-tag">
        <span class="tag-icon">
            京东超市
        </span>
        <span>一站式囤生活好物</span>
      </div>

      <!-- 标题栏 -->
      <div class="goods-info-title">
          <span class="tag-icon01">
            自营
        </span>
        <span class="title-style">intercrew春秋韩版女装棉质圆领字母印花潮ins学生休闲长袖外套卫衣女 ITS1TM32W 白色 85/S</span>
      </div>
      <div class="Pc2"></div>
    </div>

    <div class="Pcl"></div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
export default {
  name: "ProductDetails",
  setup(){
    let router = useRouter();
    const toreturn = (()=>{
      router.back(-1) 
    })
    return{
      toreturn
    }
  }
};
</script>

<style scoped>
/* 总容器 */
.container-body {
  width: 100%;
  position: relative;
  box-sizing: border-box;
}
/* 商品图片 */
.goods-img {
  width: 100%;
  height: 414px;
}
.goods-img img {
  width: 100%;
  height: 100%;
}
/* 顶部导航栏图片 */

.navtop{
  position: fixed;
  width: 100%;
  height: 45px;
}

 .return-btn{
  margin-top:10px;
  margin-left: 5px;
  height: 25px;
  width: 25px;
  background-color: rgba(71, 69, 69, 0.5);
  border-radius: 50%;
  float: left;
  padding: 2px;
}
.return-btn::before{
  content: "\e646";
  color: #fff;
  line-height: 25px;
  font-size: 18px;
  font-weight: 600;
}
.morebtn{
  float: right;
  margin-top:10px;
  margin-right: 5px;
  background-color: rgba(71, 69, 69, 0.5);
  border-radius: 50%;
  width: 25px;
  height: 25px;
  padding: 2px;
}
.morebtn::before{
  content: "\e67a";
  color:#fff;
  line-height: 25px;
  font-size: 18px;
  margin-left: 4px;
}
/* 图片切换 */
.switch-goods-img{
  width: 100%;
  height: 60px;
  background-color: pink;
}
/* 图片横幅 */
.banner{
  width: 100%;
  height: 55.2px;
}
.banner img{
  width: 100%;
  height: 55.2px;
}
/* 商品内容 */
.goods-info-content{
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  background-color: #fff;
  border-radius: 0 0 7% 7%;
}

.goods-price-wrap{
  width: 100%;
  height: 35px;
  margin-top: 15px;
}

.goods-price-info{
  display: inline-block;
  width: 77px;
  height: 35px;
  margin-left: 20px;
}
.goods-price-info span{
  color: #f2270c;
  font-weight: 550;
  line-height: 35px;
}
.goods-price-info span:nth-child(2){
  font-size: 25px;
}

.goods-info-opt{
  display: flex;
  height: 45px;
  width: 90px;
   float: right;
   padding: 0;
   justify-content: space-around;
}

.goods-info-opt span:nth-child(1)::before
{
  font-weight: 600;
  font-size: 20px;
  content: '\e639';
}

.goods-info-opt span:nth-child(2)::before
{
  font-weight: 600;
  font-size: 20px;
  content: '\e651';
}

.goods-info-opt span{
  font-size: 14px;
  flex-direction: column;
  padding: 0;
  display: flex;
  text-align: center;
  padding: 0;
}

.goods-info-tag{
  width: 100%;
  height: 17.6px;
  margin-top: 15px;
  line-height: 17.6px;
  font-size: 12px;
}

.tag-icon{
  margin-left: 20px;
  color: rgb(214, 214, 214);
  font-size: 12px;
  width: 80px;
  height: 24px;
  background-color: #f2270c;
  border-radius: 3px;
  margin-right: 5px;
} 


/* 商品标题 */
.goods-info-title{
  width: 90%;
  margin: 20px auto;
}
.title-style{
  color: #000;
  font-weight: 600;
}
.tag-icon01{
  color: rgb(214, 214, 214);
  font-size: 12px;
  width: 80px;
  height: 24px;
  background-color: #f2270c;
  border-radius: 3px;
  margin-right: 5px;
}
/* 占位 */
.Pcl{
  height: 300px;
}
.Pc2{
  height: 10px;
}
</style>
