<template>
  <div>
    <router-view> </router-view>
    <router-view name="Tabbar"></router-view>
  </div>
</template>

<script>

export default {

  name: "App",
};
</script>

<style>
.el-carousel{
  --el-carousel-indicator-width:5px !important;
 --el-carousel-indicator-padding-horizontal: 10px !important;
}
</style>
