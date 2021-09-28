<template>
  <div class="container-body">
    <div class="container">
      <div><span class="iconfont shop">店铺</span></div>
      <div><span class="iconfont cusserver">客服</span></div>
      <div><span class="iconfont cart">购物车</span></div>
        <div class="btn tocart"><span>加入购物车</span></div>
        <div class="btn buybtn" @click="buytoOrder"><span>立即购买</span></div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
export default {
  name: "ProductDetailsTabbar",
  setup(){
    let router = useRouter();
    const buytoOrder = (()=>{
      router.push("/Order")
    })
    return{
      buytoOrder
    }
  }
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 3rem;
  position: fixed;
  left: 0;
  bottom: 0;
  background-color: white;
  border-radius: 5% 5% 0 0;
  margin: 0;
  padding: 0;
}
.container {
  display: flex;
  box-sizing: border-box;
  justify-content: space-around;
}
.container div:nth-child(-n + 3) {
  width: 58px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-content: center;
}
.container div:nth-child(-n + 3) span {
  display: flex;
  flex-direction: column;
  font-size: 12px;
  margin: 10%;
}
.shop::before {
  content: "\e64f";
  font-size: 24px;
  color: rgb(177, 11, 11);
}

.cusserver::before {
  content: "\e650";
  font-size: 24px;
}

.cart::before {
  content: "\e7dc";
  font-size: 24px;
}
.btn{
    display: flex;
    width: 30%;
    height: 38px;
    line-height: 38px;
    justify-content: center;
    border-radius: 21px;
    margin: 5px;
}
.btn span{
    font-size: 14px;
    color: white;
}

.tocart{
    background-color:#f2140c
}

.buybtn{
    background-color:#ffcf0d
}

</style>
