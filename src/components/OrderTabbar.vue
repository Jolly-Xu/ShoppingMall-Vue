<template>
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
      <div class="buybtn"><span @click="SubOrder">提交订单</span></div>
    </div>

    <!-- 弹出框 -->
    <el-drawer v-model="isdrawer" direction="btt" destroy-on-close :size="300" :before-close="beforeclose">
      <div class="price">
        <span>¥</span>
        <span>23</span>
        <span>.90</span>
      </div>
      <div class="Payment">
        <div>
          <span>支付账号</span>
          <span>182****8414</span>
        </div>
        <div>
          <span>付款方式</span>
          <span class="iconfont">余额</span>
        </div>
        <div @click="Pay" class="Paybtn">
          <span>立即付款</span>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import { ElLoading, ElMessage } from "element-plus";
import { order } from "../api/order";
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { pay } from "../api/pay";
export default {
  name: "OrderTabbar",
  setup(props, context) {
    let isdrawer = ref(false);

    let router = useRouter();

    let orderinfo = context.attrs.orderinfo;

    let Orderid = ref("");
    // 下单
    const SubOrder = () => {
      console.log(isdrawer);
      let loadingInstance = ElLoading.service({
        fullscreen: true,
        text: "创建订单中,马上就好",
        spinner: "el-icon-loading",
      });
      isdrawer.value = true;
      loadingInstance.close();
      order(orderinfo.userid, orderinfo.goodsid, orderinfo.address).then(
        (res) => {
          if (res.data.state === true) {
            Orderid = res.data.data;
            console.log("下单成功");
          }
          else if(res.data.state === false && res.data.code ==="403"){
            router.push("/Login")
          }
           else {
             console.log(res);
            ElMessage.warning({
              message: "下单失败，商品以售完",
              type: "warning",
            });
          }
        }
      );
    };

    // 付款
    const Pay = () => {
      pay(Orderid).then((res) => {
        console.log(res);
      });
      router.push("/Success");
      console.log("付款");
    };

    // 取消付款
    const beforeclose = (done) =>{
      console.log("关闭");
      done();
      router.push("/pause");
    }

    return {
      SubOrder,
      isdrawer,
      Pay,
      beforeclose
    };
  },
};
</script>

<style scoped>
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

/* 弹出框 */
.price {
  height: 30%;
  width: 100%;
  line-height: 30%;
  text-align: center;
}

.price span {
  font-weight: 500;
  font-size: 3rem;
  color: black;
}

.price span:nth-child(1) {
  font-size: 2rem;
  font-weight: normal;
}

.Payment {
  padding: 0 5%;
  height: 100%;
}

.Payment div {
  height: 20%;
}

.Payment div span:nth-child(2) {
  color: black;
  font-weight: 500;
  float: right;
}

.Payment div:nth-child(2) span:nth-child(2)::after {
  content: "\e648";
}

.Paybtn {
  height: 10%;
  width: 100%;
  border-radius: 3%;
  background-color: #f54020;
}

.Paybtn span {
  display: inline-block;
  height: 100%;
  width: 100%;
  color: #fff;
  text-align: center;
  font-size: 1.2rem;
  margin-top: 10px;
}
</style>
