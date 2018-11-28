<template>
  <div id="home">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <van-tabbar v-model="active" @change="change(active)">
      <van-tabbar-item icon="wap-home">首页</van-tabbar-item>
      <van-tabbar-item icon="shop">列表</van-tabbar-item>
      <van-tabbar-item icon="cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="contact">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      nowPath: ""
    };
  },
  created() {
    this.changeTabBarActive();
  },
  watch: {
    $route(){
      this.changeTabBarActive();
    }
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
    },
    changeTabBarActive() {
      this.nowPath = this.$route.path;
      switch (this.nowPath) {
        case "/index":
          this.active = 0;
          break;
        case "/category":
          this.active = 1;
          break;
        case "/cart":
          this.active = 2;
          break;
        case "/mine":
          this.active = 3;
          break;
        default:
          break;
      }
    }
  },

};
</script>

<style lang="less" scoped>
#home {
  .van-tabbar-item--active {
    color: #f44;
  }
}
</style>