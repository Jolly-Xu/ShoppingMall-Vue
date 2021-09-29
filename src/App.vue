<template>
  <div>
    <router-view> </router-view>
    <router-view name="Tabbar"></router-view>
  </div>
</template>

<script>

export default {
  name: "App",
  created() {
    if (sessionStorage.getItem("store")) {
      console.log("刷新加载");
      this.$store.replaceState(
        Object.assign(
          {},
          this.$store.state,
          JSON.parse(sessionStorage.getItem("store"))
        )
      );
    }
    window.addEventListener("beforeunload", () => {
      console.log("刷新了");
      sessionStorage.setItem("store", JSON.stringify(this.$store.state));
    });
  }
}
</script>

<style>
.el-carousel {
  --el-carousel-indicator-width: 5px !important;
  --el-carousel-indicator-padding-horizontal: 10px !important;
}
</style>
