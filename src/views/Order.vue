<template>
  <div class="container">
    <!-- 顶部导航 -->
    <div class="titlenav">
      <span class="iconfont" @click="toreturn"></span>
      <span class="order-title">填写订单</span>
    </div>

    <!-- 地址信息 -->
    <div class="address">
      <div class="all-address">
        <div class="address-tag-main">
          <span>默认</span>
          <span>家</span>
          <span>四川眉山市彭山区锦江大道一号</span>
        </div>

        <div class="address-details">
          <span>四川大学锦江学院</span>
          <span class="iconfont"></span>
        </div>
        <div class="address-contact">
          <span>徐家淋</span>
          <span>182****8414</span>
        </div>
      </div>

      <div class="buttom-border">
        <span class="buttom-item" v-for="item in 13" :key="item"></span>
      </div>
    </div>

    <!-- 货物信息 -->
    <div class="goodsalldetalis">
      <div class="store-name"><span class="iconfont">京东自营旗舰店</span></div>
      <div class="goodsinfo">
        <div class="goodsinfo-img">
          <img src="../assets/img/good02.webp" alt="" />
        </div>
        <div class="goodsinfo-content">
          <span class="goods-info"
            >联想YOGA 14s高性能商务轻薄本 14英寸全面屏办公笔记本电脑(i5-11300H
            16G 512G MX450 2.8K 90Hz护眼屏)灰</span
          >

          <div class="goods-info-price">
            <p>¥</p>
            <p>23</p>
            <p>.90</p>
          </div>

          <span class="fontcolor tobuyprice">每件到手价¥23.90</span>
          <span class="fontcolor pricetag">支持7天无理由退货</span>
        </div>
        <div class="counter">
          <el-input-number
            v-model="num"
            @change="handleChange"
            :min="1"
            :max="10"
            label="描述文字"
            size='mini'
            class="counterstyle"
          ></el-input-number>
        </div>
      </div>

      <div class="express-info express-info-box">
        <span>配送</span>
        <div>
          <span class="iconfont express-icon">快递运算</span>
          <span>预计9月14日24:00前送达 &nbsp;&nbsp;&nbsp;</span>
        </div>
      </div>

      <div class="express-info express-info-box">
        <span>退换无忧</span>
        <div>
          <span>商家赠送</span>
          <span>享运费补贴或免费取件服务</span>
        </div>
      </div>

      <div class="message express-info-box">
        <span>留言</span>
        <input type="text" placeholder="建议留言前与商家沟通确认" />
      </div>
    </div>
  </div>
  <order-tabbar :orderinfo="orderinfo"/>
</template>

<script>
import { reactive, ref } from '@vue/reactivity';
import { useRouter } from 'vue-router';
import OrderTabbar from '../components/OrderTabbar.vue';

export default {
  name: "Order",
  components:{
    OrderTabbar
  },
  setup(){
    const router = useRouter();
    const toreturn = (()=>{
      router.back(-1)
    })
    let num = ref(1);
    let orderinfo = reactive({
      userid:"bsh464awd44ds",
      goodsid:"adhuew154879jiawfw",
      address:"四川省眉山市",
    })
    return{
      num,
      toreturn,
      orderinfo
    }
  }
};
</script>

<style scoped>
/* 顶部 */
.titlenav {
  width: 100%;
  height: 3rem;
  background-color: #fff;
  line-height: 3rem;
}

.titlenav span:nth-child(1)::before {
  content: "\e646";
  color: rgb(37, 36, 36);
  font-size: 20px;
  font-weight: bolder;
  margin-left: 20px;
}

.order-title {
  display: inline-block;
  width: 80%;
  height: 3rem;
  text-align: center;
  font-weight: bold;
  font-size: 16px;
}

/* 地址拦 */
.address {
  position: relative;
  width: 100%;
  background-color: #fff;
  border-radius: 0 0 10px 10px;
  overflow: hidden;
}

.all-address {
  padding: 15px;
}

.buttom-border {
  display: flex;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 3px;
  justify-content: space-between;
  border-radius: 50%;
}

.buttom-item {
  width: 5%;
  height: 3px;
}
.buttom-border span:nth-child(odd) {
  background-color: #ff2600;
}

.buttom-border span:nth-child(even) {
  background-color: #4f60c4;
}

.plh {
  width: 100%;
  height: 10px;
}

.address-tag-main span {
  font-size: 14px;
  margin-right: 5px;
}

.address-tag-main span:nth-child(-n + 2) {
  height: 14px;
  line-height: 14px;
  text-align: center;
  padding: 0px 5px;
  color: rgb(245, 243, 243);
  font-size: 10px;
  border-radius: 5px;
}
.address-tag-main span:nth-child(1) {
  background-color: #ff2600;
}

.address-tag-main span:nth-child(2) {
  background-color: #6ea1ff;
  padding: 0 10px;
}

.address-tag-main span:nth-child(3) {
  font-weight: bold;
}
.address-details {
  padding: 10px 0;
}
.address-details span:nth-child(1) {
  margin-top: 15px;
  font-size: 18px;
  font-weight: 800;
}

.address-details span:nth-child(2) {
  float: right;
}

.address-details span:nth-child(2)::after {
  content: "\e648";
}
.address-contact {
  padding-bottom: 10px;
}
.address-contact span {
  font-size: 15px;
  font-weight: 600;
  margin-right: 10px;
}

/* 商品信息 */
.goodsalldetalis {
  box-sizing: border-box;
  background-color: #fff;
  width: 100%;
  padding: 15px;
  margin-top: 15px;
  border-radius: 10px;
}

.store-name {
  margin: 10px 0;
  height: 15px;
  line-height: 15px;
}

.store-name span {
  font-weight: 600;
  font-size: 14px;
}

.store-name span::before {
  content: "\e64f";
  font-size: 18px;
  margin-right: 5px;
}
/*  */
.goodsinfo {
  display: inline-block;
  width: 100%;
  margin-top: 25px;
}

.goodsinfo-img {
  float: left;
  width: 25%;
  height: 20%;
  border-radius: 5px;
  overflow: hidden;
}

.goodsinfo-img img {
  width: 100%;
}

.goodsinfo-content {
  display: inline-block;
  width: 75%;
  height: 20%;
  box-sizing: border-box;
  padding: 3px 10px;
}

.goodsinfo-content .goods-info {
  height: 14px;
  width: 100%;
  font-size: 13px;
  line-height: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  display: -webkit-box;
  font-weight: 600;
}

.goods-info-price {
  height: 20px;
  line-height: 20px;
  margin-top: 15px;
}
.goodsinfo-content .goods-info-price p {
  float: left;
  vertical-align: bottom;
}
.goods-info-price p:nth-child(n) {
  color: #ff2600;
  font-weight: 600;
  font-size: 12px;
}
.goods-info-price p:nth-child(even) {
  font-size: 18px;
  margin-top: -2px;
}

.fontcolor {
  color: #ff2600;
  padding: 5px 0px;
}

.tobuyprice {
  font-size: 14px;
  font-weight: 600;
}

.pricetag {
  margin-top: 5px;
  display: block;
  border: 1px #ff2600 solid;
  font-size: 10px;
  width: 105px;
  height: 13px;
  line-height: 13px;
  padding: 1px 2px;
  border-radius: 5px;
}

.express-info-box {
  width: 100%;
  background-color: #fff;
  height: 60px;
  line-height: 60px;
  font-size: 14px;
  font-weight: 600;
}

.express-info {
  margin-top: 10px;
}

.express-info span {
  height: 15px;
  font-size: 14px;
  font-weight: 600;
}

.express-info div {
  height: 50px;
  line-height: 50px;
  margin-right: 10px;
}
.express-info div:nth-child(2) {
  float: right;
}

.express-info div span {
  display: block;
  padding: 2px 0px;
}

.express-info div span:nth-child(1) {
  width: 100%;
  text-align: right;
}

.express-icon::after {
  content: "\e648";
  margin-left: 4px;
}

.message {
  box-sizing: border-box;
}
.message input {
  margin-top: 20px;
  float: right;
  border: none;
  outline: none;
  margin-right: 15px;
  text-align: right;
  height: 20px;
  font-size: 15px;
}

.message input::placeholder {
  color: darkgray;
}

.counter{
  position: absolute;
  width: 100px;
  height: 20px;
  right: 30px;
  top: 290px;
}

.counterstyle{
  width: 100px;
}

>>>.el-input-number__decrease, >>>.el-input-number__increase{
  background-color: #fff;
  border: none;
}


</style>
