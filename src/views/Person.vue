<template>
  <div class="main-continer">
    <div class="person-info">
      <div class="person-avatar">
        <img :src=userinfo.avatar alt="" />
      </div>
      <div class="person-infos">
        <div><span class="username">{{userinfo.name}}</span></div>
        <div><span>关注 4</span> <span>粉丝 5</span></div>
      </div>

      <div class="settings-btn iconfont"></div>
    </div>

    <div class="navbar">
      <div class="navbar-top">
        <span class="iconfont">店铺收藏 5</span>
        <span class="iconfont">店铺关注 12</span>
        <span class="iconfont">浏览记录 78</span>
      </div>
      <div class="navbar-buttom">
        <span class="iconfont">待付款</span>
        <span class="iconfont">待收货</span>
        <span class="iconfont">待评价</span>
        <span class="iconfont">退换/售后</span>
        <span class="iconfont">我的订单</span>
      </div>

    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';
import { useStore } from 'vuex';
export default {
  name: "person",
  setup() {
    let userinfo = reactive({
      name:"",
      avatar:""
    });
    let store = useStore();

    onMounted(()=>{
      userinfo.name = store.state.userinfo.nickName
      userinfo.avatar = store.state.userinfo.avatar
    })
    return{
      userinfo
    }
  },
};
</script>

<style scoped>
.main-continer {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  position: relative;
}

.person-info div {
  display: inline-block;
}

.person-info {
  height: 150px;
  width: 100%;
   background-image: linear-gradient(180deg,rgba(243, 195, 195, 0.4), rgba(255,255,255,0.2));
  display: flex;
  box-sizing: border-box;
}

.person-avatar {
  width: 70px;
  border-radius: 50%;
  height: 70px;
  overflow: hidden;
  margin-top: 25px;
  margin-left: 10px;
}

.person-avatar img {
  height: 100%;
  width: 100%;
}
.person-info .person-infos {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}

.person-infos{
  height: 100px;
  width: 70%;
  margin-top: 30px;
  margin-left: 15px;
}

.username{
  font-weight: 600;
  font-size: 20px;
}

.person-infos div:nth-child(2){
  margin-top: 10px;
}

.person-infos div:nth-child(2) span{
  margin-right: 20px;
}

.settings-btn::after{
  content: "\e7d1";
  font-size: 25px;
}
.settings-btn{
  margin: 15px 8px;
}

.navbar{
  width: 94%;
  background-color: #fff;
  margin: 0 auto;
  height: 150px;
  border-radius: 5%;
  box-sizing: border-box;
}

.navbar div{
  display: flex;
  justify-content: space-around;
}


.navbar-top span{
  color: #000;
  font-size: 14px;
  margin:10px 0;
}

.navbar-top span:nth-child(1)::before{
  font-size: 18px;
  margin-right: 5px;
  content: "\e651";
  font-weight: 600;
}

.navbar-top span:nth-child(2)::before{
  font-size: 18px;
  margin-right: 5px;
  content: "\e64f";
  font-weight: 600;
}

.navbar-top span:nth-child(3)::before{
  font-weight: 600;
  font-size: 16px;
  margin-right: 5px;
  content: "\e68a";
}

.navbar-buttom span {
  font-size: 12px;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 20px;
  font-weight: 600;
}
.navbar-buttom span:nth-child(n)::before{
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 10px;
}


.navbar-buttom span:nth-child(1)::before{
  content: "\e681";
}

.navbar-buttom span:nth-child(2)::before{
  content: "\e686";
  font-weight: 500;
}

.navbar-buttom span:nth-child(3)::before{
  content: "\e772";
  font-weight: 500;
}

.navbar-buttom span:nth-child(4)::before{
  content: "\e654";
  font-weight: 500;
}

.navbar-buttom span:nth-child(5)::before{
  content: "\e684";
  color: rgb(240, 128, 128);
}


</style>
