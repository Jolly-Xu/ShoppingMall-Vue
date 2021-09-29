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
      this.$store.replaceState(
        Object.assign(
          {},
          this.$store.state,
          JSON.parse(sessionStorage.getItem("store"))
        )
      );
    }
    window.addEventListener("beforeunload", () => {
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
