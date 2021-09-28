<template>
  <div class="main-continer">
      <div class="person-info">
        <div class="person-avatar"><img src="../assets/img/caoshuang1.jpg" alt=""></div>
        <div class="person-infos">
          <span class="username">达州彭于晏</span>
          <span>关注 4</span>
          <span>粉丝 5</span>
          </div>

        <div class="settings-btn">设置</div>
      </div>
  </div>
</template>

<script>

export default {
    name: "person",
    setup(){

    }
}
</script>

<style scoped>
.main-continer{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  position: relative;
}

.person-info div{
  display: inline-block;
}

.person-info{
  height: 100px;
  width: 100%;
  background-color: #fff;
  display: flex;
}

.person-avatar{
  width: 15%;
  border-radius: 50%;
  height: 70%;
  overflow: hidden;
  margin-top: 15px;
  margin-left: 10px;
}

.person-avatar img{
  height: 100%;
  width: 100%;
}
 .person-info .person-infos{
  width: 75%;
  display: flex;
  flex-direction: column;
}


</style>