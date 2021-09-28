<template>
    <div class="main-continer">
        <div class="topnav"><span class="topnav-btn iconfont"></span>
        <span class="help">帮助</span>
        <div class="icon-img"><span class="iconfont"></span></div></div>


        <!-- 输入框 -->
        <div class="userinfo-inp">
            <div class="username "><input  v-model="username" class="username-inp" type="text" name="" id="" placeholder="请输入用户名"><span @click="clearusername" class="iconfont"></span></div>
            <div class="password iconfont"><input  v-model="password" class="password-inp " type="password" name="" id="" placeholder="请输入密码"> <span @click="changestate"></span></div>
        </div>
        
        <!-- 登录 -->
        <div class="login-btn"><span>登录</span></div>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity';
export default {
    name:"Login",
    setup(){
        let username = ref("");
        let password = ref("");

        const clearusername = ()=>{
            username.value = ""
        }
        
        const changestate = () =>{

        }

        return{
            username,
            password,
            clearusername,
            changestate
        }
    }
}
</script>

<style scoped>


.main-continer{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  position: relative;
  width: 100%;
  height: 812px;
  background-color: #fff;
}

.topnav{
    box-sizing: border-box;
    width: 100%;
    height: 150px;
    background-image: linear-gradient(180deg,rgba(230, 215, 215, 0.2), rgba(255,255,255,0.2));
    line-height: 40px;
    padding: 0 4%;
    font-size: 18px;
    
}

.topnav-btn::before{
    content: "\e646";
    font-size: 20px;
}

.topnav-btn::after{
    content: "\e644";
    font-size: 20px;
    margin-left: 3%;
}

.topnav{
    float: left;
}
.help{
    float: right;
}

.icon-img span::before{
    content: "\e670";
    font-size: 80px;
    border: 1px solid rgb(255, 250, 250);
    border-radius: 50%;
    padding: 10px;
}
.icon-img span{
    display: block;
    width: 100%;
    text-align: center;
    height: 120px;
    line-height: 120px;
}
.icon-img{
    width: 100%;
    height: 120px;
}



.userinfo-inp{
    width: 100%;
    text-align: center;
    position: absolute;
    margin-top: 50%;
    box-sizing: border-box;
}

.userinfo-inp input{
    width: 90%;
    height: 50px;
    border-radius: 35px;
    border: 0;
    background-color: rgba(238, 238, 238,0.5);
    margin-top: 15px;
    padding-left: 20px;
    box-sizing: border-box;
    font-size: 18px;
    left: 5%;
    position: absolute;
}

input:focus{
    outline: none;
}

input::placeholder{
    font-size: 15px;
    letter-spacing: 2px;
}

.username span::after{
    content: "\e644";
    line-height: 75px;
    position:absolute;
    margin-left: 37%;
}

.password{
    margin-top: 18%;
}

.login-btn{
    width: 90%;
    height: 50px;
    background-color: #ff2600;
    position: absolute;
    margin-top:100%;
    margin-left: 50%;
    transform: translateX(-50%);
    border-radius: 35px;
}

.login-btn span{
    display: inline-block;
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
    color: #fff;
    
}


</style>