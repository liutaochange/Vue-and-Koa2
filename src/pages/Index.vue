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
    <!-- 分类列表 -->
    <div :class="$style['type-bar']">
      <div v-for="(item,index) in category" :key="index">
        <img v-lazy="item.image" alt="item.mallCategoryName">
        <span>{{item.mallCategoryName}}</span>
      </div>
    </div>
    <!-- 广告条 -->
    <div :class="$style.adwamp">
      <img v-lazy="adBanner" alt="">
    </div>
  </div>
</template>
<script>
import { getIndex } from '@/api/index.js'
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
      ],
      category: [],
      adBanner: ''
    };
  },
  created(){
    this.getData()
  },
  methods: {
    getData(){
      getIndex().then((res) => {
        console.log(res)
        if (res.status === 200) {
          this.category = res.data.data.category
          this.adBanner = res.data.data.advertesPicture.PICTURE_ADDRESS
        }
      }).catch((error) => {
        console.log(error)
      })
    }
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
  overflow: hidden;
  &:after{
    content: "";
    display: block;
    height: 0;
    clear: both;
  }
}
.type-bar{
  background: #fff;
  margin: 0 .3rem .3rem .3rem;
  border-radius: .3rem;
  font-size: 14px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  div{
    padding: .3rem;
    font-size: 12px;
    text-align: center;
    flex: 1;
    img{
      width: 80%;
    }
    span{
      display: inline-block;
      width: 100%;
      white-space: nowrap;
    }
  }
}
.adwamp{
  width: 100%;
  overflow: hidden;
  img{
    float: left;
    width: 100%;
  }
}
</style>

