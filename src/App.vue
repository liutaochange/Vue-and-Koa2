<template>
  <div :id="$style.app">
    <router-view></router-view>
    <van-tabbar v-model="active" @change="change(active)">
      <van-tabbar-item icon="shop">首页</van-tabbar-item>
      <van-tabbar-item icon="chat" dot>列表</van-tabbar-item>
      <van-tabbar-item icon="records" info="5">购物车</van-tabbar-item>
      <van-tabbar-item icon="gold-coin" info="20">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      active: 0
    };
  },
  methods: {
    change(index) {
      this.active = index;
      switch (index) {
        case 0:
          this.$router.push({ name: "index" });
          break;
        case 1:
          this.$router.push({ name: "categoryList" });
          break;
        case 2:
          this.$router.push({ name: "cart" });
          break;
        case 3:
          this.$router.push({ name: "mine" });
          break;
        default:
          break;
      }
    }
  }
};
</script>

<style lang="less" module>
#app {
  font-size: 14px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f0f0f0;
}
</style>
