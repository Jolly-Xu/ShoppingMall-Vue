<template>
  <div class="top-tabbar">
    <span class="iconfont" @click="tohome"></span>
    <span class="top-title">待付款</span>
  </div>
  <div class="timer-continer">
    <span>请在</span>
    <span class="time-color">{{ min1 }}</span>
    <span class="time-color">{{ min2 }}</span>
    <span class="time-color">:</span>
    <span class="time-color">{{ sec1 }}</span>
    <span class="time-color">{{ sec2 }}</span>
    <span>内付款,逾期将自动取消</span>
  </div>
  <div class="address-continer">
    <span class="iconfont icon01"></span>
    <div class="address-content">
      <span>徐家淋</span>
      <span>18281828414</span>
      <span>四川省达州市通川区北翎路3号</span>
      <span>达州市国土资源局</span>
    </div>
    <div class="changebtn"><span>修改</span></div>
  </div>


   <div class="container">
    <div class="titlenav">
      <div class="ordernav-info">
        <div class="order-info-total">
          <span>¥</span>
          <span>23</span>
          <span>.90</span>
        </div>

        <div class="ordernav-info-detalis">
          <span>已包邮</span>
          <span>,共计优惠</span>
          <span>¥6.00</span>
        </div>
      </div>
      <div class="buybtn"><span @click="SubOrder">立即付款</span></div>
    </div>
    </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import { useRouter } from "vue-router";
export default {
  name: "pause",
  setup() {
    const router = useRouter();
    let min1 = ref(2);
    let min2 = ref(9);
    let sec1 = ref(5);
    let sec2 = ref(9);

    const timer = () => {
      sec2.value--;
      if (sec2.value < 0) {
        sec2.value = 9;
        sec1.value--;
      }
      if (sec1.value < 0) {
        min2.value--;
        sec1.value = 5;
        sec2.value = 9;
      }
      if (min2.value < 0) {
        min1.value--;
        min2.value = 9;
      }
      if (min1 == 0 && min2 == 0 && sec1 == 0 && sec2 == 0) {
        console.log("结束了");
      }
    };

    onMounted(() => {
      setInterval(() => {
        timer();
      }, 1000);
    });

    const tohome = () => {
      router.push("/Home");
    };

    return {
      tohome,
      min1,
      min2,
      sec1,
      sec2,
    };
  },
};
</script>

<style scoped>
.top-tabbar {
  position: relative;
  width: 100%;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
}
.top-tabbar span:nth-child(1) {
  position: absolute;
  left: 3%;
}

.top-tabbar span:nth-child(1)::before {
  content: "\e646";
  font-weight: 600;
  font-size: 18px;
}

.top-title {
  float: left;
  width: 100%;
  font-weight: 600;
  font-size: 20px;
  text-align: center;
}

.timer-continer {
  height: 30px;
  line-height: 20px;
  width: 100%;
  background-color: #fff;
  text-align: center;
  border-bottom: 1px solid #e9e7e7;
  box-sizing: border-box;
  padding-bottom: 25px;
}

.time-color {
  color: #ff2600;
}

.timer-continer span {
  padding-left: 1px;
}

.address-continer {
  width: 100%;
  height: 80px;
  background-color: #fff;
  display: flex;
  box-sizing: border-box;
}

.icon01::before {
  content: "\e7d2";
  font-size: 35px;
  margin-left: 10px;
}

.address-continer div {
  display: inline;
}

.icon01 {
  height: 80px;
  width: 15%;
  line-height: 70px;
}

.changebtn {
  width: 15%;
  margin-top: 22px;
}

.changebtn span{
  margin-left: 5px;
  display: inline-block;
   border: 1px solid #ff2600;
   border-radius: 5px;
   width: 50px;
   height: 30px;
   line-height: 30px;
   text-align: center;
}

.address-content {
  width: 70%;
  margin-top: 15px;
  box-sizing: border-box;
}
.address-content span:nth-child(n+2) {
  margin-left: 8px;
}

.container {
  width: 100%;
  box-sizing: border-box;
}
.titlenav {
  width: 100%;
  height: 3.5rem;
  position: fixed;
  bottom: 0;
  background-color: #fff;
}
.ordernav-info {
  margin-left: 20px;
  float: left;
}
.ordernav-info .order-info-total span {
  color: #ff2600;
  font-weight: 600;
}
.order-info-total span:nth-child(even) {
  font-size: 25px;
}
.ordernav-info-detalis span:nth-child(odd) {
  color: #fd300b;
}
.ordernav-info-detalis span {
  font-size: 12px;
  font-weight: 600;
}
.ordernav-info-detalis {
  position: absolute;
  bottom: 4px;
}
.buybtn {
  float: right;
  width: 120px;
  height: 40px;
  background-color: #f54020;
  margin-top: 10px;
  border-radius: 21px;
  margin-right: 10px;
}
.buybtn span {
  display: inline-block;
  line-height: 40px;
  width: 120px;
  color: #fff;
  text-align: center;
  font-size: 15px;
}
</style>
