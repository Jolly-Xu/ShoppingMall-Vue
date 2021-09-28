<template>
  <div class="tabbar">
    <ul>
      <li @click="toPage('/Home',1)" :class="activeindex==1?'active':''" class="iconfont home">首页</li>
      <li @click="toPage('/List',2)" :class="activeindex==2?'active':''" class="iconfont classify">分类</li>
      <li @click="toPage('/Message',3)" :class="activeindex==3?'active':''" class="iconfont messge">消息</li>
      <li @click="toPage('/Cart',4)" :class="activeindex==4?'active':''" class="iconfont cart">购物车</li>
      <li @click="toPage('/Person',5)" :class="activeindex==5?'active':''" class="iconfont person_center">个人</li>
    </ul>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import {ref} from 'vue'
export default {
    name:"tabbar",
    setup(){
        const router = useRouter();
        let activeindex = ref(1);
        const toPage = ((url,index)=>{
            router.push(url)
            activeindex.value=index
        })
        return {
            toPage,
            activeindex
        }
    }
};
</script>

<style scope>
.tabbar {
  width: 100%;
  height: 3rem;
  position: fixed;
  left: 0;
  bottom: 0;
  background-color: white;
}
.tabbar ul{
    margin-top: 3px;
    display: flex;
    justify-content:space-around
}
.tabbar ul li{
    display: flex;
    flex-direction: column;
    font-size: 12px;
    align-content: center;
    justify-content: center;
}
.active{
    color: #f63515;
}
.home::before{
    content: "\e6b6";
    font-size: 20px;
    margin-left: 2px;
}
.classify::before{
    content: "\e6c8";
    font-size: 20px;
    margin-left: 2px;
}
.messge::before{
    content: "\e64b";
    font-size: 20px;
    margin-left: 2px;
}
.cart::before{
    content: "\e64c";
    font-size: 20px;
    margin-left: 7px;
}
.person_center::before{
    content: "\e624";
    font-size:20px;
    margin-left: 2px;
}
</style>
