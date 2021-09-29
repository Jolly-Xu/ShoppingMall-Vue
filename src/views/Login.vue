<template>
  <div class="main-continer">
    <div class="topnav">
      <span @click="back_btn" class="topnav-btn iconfont"></span>
      <span class="help">帮助</span>
      <div class="icon-img"><span class="iconfont"></span></div>
    </div>

    <!-- 输入框 -->
    <div class="userinfo-inp">
      <div class="username ">
        <input
          ref="username_inp"
          v-model="username"
          class="username-inp"
          type="text"
          placeholder="请输入用户名"/><span
          v-show="showclose"
          @click="clearusername"
          class="iconfont"
        ></span>
      </div>

      <div class="password">
        <input
          ref="password_inp"
          v-model="password"
          class="password-inp "
          type="password"
          placeholder="请输入密码"
        />
        <span
          v-show="!showpwd"
          class="iconfont closeeye"
          @click="changestate"
        ></span>
        <span
          class="iconfont openeye"
          @click="changestate"
          v-show="showpwd"
        ></span>
      </div>
    </div>

    <!-- 消息提醒 -->
    <div class="error-msg" :class="[sharkFlag ?'my-shark' :'']">
        <span v-show="errormsg" >{{errormsg}}</span>
    </div>
    <!-- 登录 -->
    <div ref="login_btn" class="login-btn" @click="Login">
      <span>登录</span>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "@vue/reactivity";
import { watch } from "@vue/runtime-core";
import { login } from "../api/Login";
import { useRouter } from "vue-router";
import { useStore} from 'vuex'
export default {
  name: "Login",
  setup() {
    let router = new useRouter();
    let store = useStore();
    // 变量
    let username = ref("");
    let password = ref("");
    let showpwd = ref(false);
    let showclose = ref(false);
    let sharkFlag = ref(false);

    let errormsg = ref("");

    let userinfo = reactive({});

    // template ref
    const username_inp = ref(null);
    const password_inp = ref(null);
    const login_btn = ref(null);

    // 清空输入框
    const clearusername = () => {
      username.value = "";
      username_inp.value.focus();
    };

    // 监听输入框文本变换
    watch([username, password,sharkFlag], ([newusername, newpassword,newsharkFlag]) => {
      if (newusername.length > 0) {
        showclose.value = true;
      }
      if (newusername.length == 0) {
        showclose.value = false;
      }
      if (newusername.length != 0 && newpassword.length != 0) {
        login_btn.value.style.backgroundColor = "#ff2600";
      } else {
        login_btn.value.style.backgroundColor = "#f57b66";
      }

      if(newsharkFlag === true)
      setInterval(()=>{
          sharkFlag.value = false
      },2000)
    });

    // 改变密码框状态
    const changestate = () => {
      showpwd.value = !showpwd.value;
      password_inp.value.type = showpwd.value ? "text" : "password";
    };

    // 登录
    const Login = () => {
      if (username.value.length === 0 && password.value.length === 0) {
            errormsg.value = "请先输入账号和密码"
            sharkFlag.value =true;
      } 
      else if(username.value.length != 0 && password.value.length === 0)
      {
          errormsg.value = "请输入密码"
          sharkFlag.value =true;
      }
      else if(username.value.length === 0 && password.value.length != 0)
      {
          errormsg.value = "请输入账号"
          sharkFlag.value =true;
      }
      else {
        login(username.value, password.value).then((res) => {
            console.log(res);
          if (res.data.state === true && res.data.code === "200") {
            userinfo = res.data.data;
            store.commit("userinfo",userinfo);
            router.push("/Home");
            sessionStorage.setItem("userinfo","token");
          }
          else{
              errormsg.value = "账号或密码错误，请重新登录"
          }
        });
      }
        
    };

    // 回退
    const back_btn = () => {
      router.back(-1);
    };

    return {
      username,
      password,
      clearusername,
      changestate,
      username_inp,
      password_inp,
      showpwd,
      showclose,
      Login,
      login_btn,
      back_btn,
      userinfo,
      errormsg,
      sharkFlag
    };
  },
};
</script>

<style scoped>
.main-continer {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  position: relative;
  width: 100%;
  height: 812px;
  background-color: #fff;
}

.topnav {
  box-sizing: border-box;
  width: 100%;
  height: 150px;
  background-image: linear-gradient(
    180deg,
    rgba(230, 215, 215, 0.2),
    rgba(255, 255, 255, 0.2)
  );
  line-height: 40px;
  padding: 0 4%;
  font-size: 18px;
}

.topnav-btn::before {
  content: "\e646";
  font-size: 20px;
}

.topnav-btn::after {
  content: "\e644";
  font-size: 20px;
  margin-left: 3%;
}

.topnav {
  float: left;
}
.help {
  float: right;
}

.icon-img span::before {
  content: "\e670";
  font-size: 80px;
  border: 1px solid rgb(255, 250, 250);
  border-radius: 50%;
  padding: 10px;
}
.icon-img span {
  display: block;
  width: 100%;
  text-align: center;
  height: 120px;
  line-height: 120px;
}
.icon-img {
  width: 100%;
  height: 120px;
}

.userinfo-inp {
  width: 100%;
  text-align: center;
  position: absolute;
  margin-top: 50%;
  box-sizing: border-box;
}

.userinfo-inp input {
  width: 90%;
  height: 50px;
  border-radius: 35px;
  border: 0;
  background-color: rgba(238, 238, 238, 0.5);
  margin-top: 15px;
  padding-left: 20px;
  box-sizing: border-box;
  font-size: 18px;
  left: 5%;
  position: absolute;
}

input:focus {
  outline: none;
}

input::placeholder {
  font-size: 15px;
  letter-spacing: 2px;
}

.username span::after {
  content: "\e644";
  line-height: 75px;
  position: absolute;
  margin-left: 37%;
}

.password .closeeye::after {
  content: "\e67c";
  line-height: 83px;
  position: absolute;
  margin-left: 36.5%;
  font-size: 18px;
}

.openeye::after {
  line-height: 83px;
  position: absolute;
  margin-left: 36.5%;
  font-size: 18px;
  content: "\e67b";
}

.password {
  margin-top: 18%;
}

.login-btn {
  width: 90%;
  height: 50px;
  background-color: #f57b66;
  position: absolute;
  margin-top: 100%;
  margin-left: 50%;
  transform: translateX(-50%);
  border-radius: 35px;
}

.login-btn span {
  display: inline-block;
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  color: #fff;
}
.error-msg{
    position: absolute;
    margin-top: 47%;
    margin-left: 10%;
}
.error-msg span{
    color: rgb(250, 114, 114);
    font-weight: 600;
    font-size: 15px;
}

.my-shark{
  animation:login-shake 0.8s 1 ease-in;
}
@keyframes login-shake {
  0% {transform: scale(1);}
  10%, 20% {transform: scale(0.95) rotate(-2deg);}
  30%, 50%, 70%, 90% {transform: scale(1.05) rotate(2deg);}
  40%, 60%, 80% {transform: scale(1.05) rotate(-2deg);}
  100% {transform: scale(1) rotate(0);}
}
</style>
