<template>
  <div :class="$style.index">
    <!-- 头部搜索部分 -->
    <div :class="$style.search">
      <van-row>
        <van-col span="3">
          <img :src="locationIcon" alt="" :class="$style.icon">
        </van-col>
        <van-col span="16">
          <input type="search" name="" id="" :class="$style['search-input']">
        </van-col>
        <van-col span="5">
          <van-button type="default" size="mini">查找</van-button>
        </van-col>
      </van-row>
    </div>
    <!-- 轮播图部分 -->
    <div :class="$style['swiper-area']">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(banner,index) in bannerPicArray" :key="index">
          <img v-lazy="banner.imageUrl" width="100%"/>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      locationIcon: require("@/assets/images/location.png"),
      bannerPicArray: [
        {
          imageUrl: "http://img.jspang.com/simleVueDemoPic001.jpg"
        },
        {
          imageUrl: "http://img.jspang.com/simleVueDemoPic002.jpg"
        },
        {
          imageUrl: "http://img.jspang.com/simleVueDemoPic003.jpg"
        }
      ]
    };
  }
};
</script>
<style lang="less" module>
.index {
  font-size: 14px;
}
.search {
  height: 2.2rem;
  background: #e5017d;
  line-height: 2.2rem;
  text-align: center;
  overflow: hidden;
  .icon {
    width: 70%;
    vertical-align: middle;
  }
  .search-input {
    width: 100%;
    height: 1.2rem;
    border: none;
    background: #e5017d;
    color: #fff;
    border-bottom: 1px solid #fff;
  }
}
.swiper-area{
  width: 100%;
  max-height: 12rem;
  overflow: hidden;
  &:after{
    content: "";
    display: block;
    height: 0;
    clear: both;
  }
}
</style>

