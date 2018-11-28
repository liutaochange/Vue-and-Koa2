<template>
  <div>
    <div>
      <van-nav-bar title="会员中心" left-text="返回" left-arrow @click-left="onClickLeft"/>
    </div>
    <div :class="$style.top">
      <img src="https://vue-and-koa2.oss-cn-beijing.aliyuncs.com/21559008.jpg" :class="$style['top-img']">
    </div>
    <div :class="$style.login">
      <div>
        <van-button type="warning" @click="toLogin">我要登录</van-button>
      </div>
      <div>
        <van-button type="primary" @click="toRegister">我要注册</van-button>
      </div>
    </div>
    <div>
      <van-cell-group>
        <van-cell title="会员卡" is-link/>
        <van-cell title="地址管理" is-link/>
        <van-cell title="我的订单" is-link/>
        <van-cell title="会员权益" is-link/>
        <van-cell title="联系我们" is-link/>
      </van-cell-group>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    toLogin() {
      this.$router.push({'name': 'login'})
    },
    toRegister() {
      this.$router.push({'name': 'register'})
    }
  }
};
</script>

<style module>
.top-img {
  width: 70px;
  height: 70px;
  border-radius: 50px;
}
.top {
  height: 5rem;
  text-align: center;
  padding-top: 2rem;
  background-color: #eea2ad;
}
.login {
  display: flex;
  flex-direction: row;
  background-color: #fff;
  padding: 10px;
}
.login div {
  flex: 1;
  text-align: center;
}
</style>