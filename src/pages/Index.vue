<template>
  <div :class="$style.index">
    {{msg}}
    <van-row>
      <van-col span="8">span: 8</van-col>
      <van-col span="8">span: 8</van-col>
      <van-col span="8">span: 8</van-col>
    </van-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "首页"
    };
  }
};
</script>
<style lang="less" module>
.index{
  font-size: 14px;
}
</style>

