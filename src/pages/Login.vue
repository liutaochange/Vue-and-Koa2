<template>
  <div>
    <van-nav-bar
      title="用户登录"
      left-text="返回"
      left-arrow
      @click-left="goBack"
    />
      <div :class="$style['register-panel']">
        <van-field 
          v-model="username"
          label="用户名"
          icon="clear"
          placeholder="请输入用户名"
          required
          @click-icon="username=''"
          :error-message="usernameErrorMsg"
        />
        <van-field 
          v-model="password"
          type="password"
          label="密码" 
          placeholder="请输入密码"
          required
          :error-message="passwordErrorMsg"
        />
        <div :class="$style['register-button']">
          <van-button type="primary" @click="LoginAction" size="large" :loading="openLoading">登录</van-button>
        </div>
      </div>
  </div>
</template>

<script>
import { loginUser } from "@/api/index.js";
import { Toast } from "vant";
export default {
  data() {
    return {
      username: "",
      password: "",
      openLoading: false, //是否开启用户登录的Loading状态
      usernameErrorMsg: "", //当用户名出现错误时的提示信息
      passwordErrorMsg: "" //当密码出现错误时的提示信息
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    LoginAction() {
      this.checkForm() && this.axioLoginUser();
    },
    axioLoginUser() {
      this.openLoading = true;
      loginUser(this.username, this.password)
        .then(response => {
          if (response.data.code == 200) {
            Toast.success(response.data.message);
            this.$router.push("/");
          } else {
            this.openLoading = false;
            Toast.fail("登录失败");
          }
        })
        .catch(error => {
          Toast.fail("登录失败");
          this.openLoading = false;
          console.log(error);
        });
    },
    //****表单验证方法
    checkForm() {
      let isOk = true;
      if (this.username.length < 5) {
        this.usernameErrorMsg = "用户名不能少于5位";
        isOk = false;
      } else {
        this.usernameErrorMsg = "";
      }
      if (this.password.length < 6) {
        this.passwordErrorMsg = "密码不能少于6位";
        isOk = false;
      } else {
        this.passwordErrorMsg = "";
      }
      return isOk;
    }
  }
};
</script>

<style lang="less" module>
.register-panel {
  width: 96%;
  border-radius: 5px;
  margin: 20px auto;
  padding-bottom: 80px;
}
.register-button {
  padding-top: 10px;
}
</style>