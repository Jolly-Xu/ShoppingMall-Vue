<template>
    <div>
        <h1>付款成功</h1>
        <span @click="toHome">回到首页</span>
    </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
    name: 'Success',
    setup(){
        let router = useRouter();
        const toHome = () =>{
            router.push("/Home")
        }
        
        return{
            toHome
        }
    }
}
</script>

<style scoped>
div{
    width: 100%;
    height: 500px;
    margin-top: 25%;
    text-align: center;
}
h1{
    width: 100%;
}

span{
    display:block;
    height: 10%;
    width: 100%;
    background-color: #fff;
    color: black;
    font-size: 20px;
    line-height: 200%;
}
</style>