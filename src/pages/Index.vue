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
          <img v-lazy="banner.image" width="100%"/>
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 分类列表 -->
    <div :class="$style['type-bar']">
      <div v-for="(item,index) in category" :key="index">
        <img :src="item.image" alt="item.mallCategoryName">
        <span>{{item.mallCategoryName}}</span>
      </div>
    </div>
    <!-- 广告条 -->
    <div :class="$style.adwamp">
      <img :src="adBanner" alt="">
    </div>
    <!-- 商品推荐 -->
    <div :class="$style.recommend">
      <div :class="$style['recommend-title']">
        商品推荐
      </div>
      <div :class="$style['recommend-body']">
        <swiper :options="swiperOption">
          <swiperSlide v-for="(item,index) in recommendGoods" :key="index" >
            <div :class="$style['recommend-item']">
              <img :src="item.image" width="80%">
              <div>{{item.goodsName}}</div>
              <div>￥{{item.price | moneyFilter}}(￥{{item.mallPrice  | moneyFilter}})</div>
            </div>
          </swiperSlide> 
        </swiper>
      </div>
    </div>
    <!-- 类似于楼层的风格 -->
    <floor :floorData="floor1" :floorTitle="floorName.floor1"></floor>
    <floor :floorData="floor2" :floorTitle="floorName.floor2"></floor>
    <floor :floorData="floor3" :floorTitle="floorName.floor3"></floor>
    <!-- 热卖模块 -->
    <!--Hot Area-->
    <div :class="$style['hot-area']">
      <div :class="$style['hot-title']">热卖商品</div>
      <div :class="$style['hot-goods']">
      <!--这里需要一个list组件-->
        <van-list>
          <van-row gutter="20">
            <van-col span="12" v-for="(item,index) in hotGoods" :key="index">
              <goods :goodsId="item.goodsId" :goodsImage="item.image" :goodsName="item.name" :goodsPrice="item.price"></goods>
            </van-col>
          </van-row>
        </van-list>
      </div>
    </div>
  </div>
</template>
<script>
import { getIndex } from "@/api/index.js";
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import floor from "@/components/floor.vue";
import goods from "@/components/goods.vue"
import { toMoney } from "@/filter/index.js";
export default {
  data() {
    return {
      locationIcon: require("@/assets/images/location.png"),
      bannerPicArray: [],
      category: [],
      adBanner: "",
      recommendGoods: [],
      swiperOption: {
        slidesPerView: 3
      },
      floor1: [],
      floor2: [],
      floor3: [],
      floorName: "",
      hotGoods: []
    };
  },
  created() {
    this.getData();
  },
  filters: {
    moneyFilter(money) {
      return toMoney(money);
    }
  },
  methods: {
    getData() {
      getIndex()
        .then(res => {
          console.log(res);
          if (res.status === 200) {
            let getData = JSON.parse(res.data.data);
            res.data.data = getData.data
            this.bannerPicArray = res.data.data.slides;
            this.category = res.data.data.category;
            this.adBanner = res.data.data.advertesPicture.PICTURE_ADDRESS;
            this.recommendGoods = res.data.data.recommend;
            this.floor1 = res.data.data.floor1;
            this.floor2 = res.data.data.floor2;
            this.floor3 = res.data.data.floor3;
            this.floorName = res.data.data.floorName;
            this.hotGoods = res.data.data.hotGoods;
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  components: {
    swiper,
    swiperSlide,
    floor,
    goods
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
.swiper-area {
  width: 100%;
  overflow: hidden;
  &:after {
    content: "";
    display: block;
    height: 0;
    clear: both;
  }
}
.type-bar {
  background: #fff;
  margin: 0 0.3rem 0.3rem 0.3rem;
  border-radius: 0.3rem;
  font-size: 14px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  div {
    padding: 0.3rem;
    font-size: 12px;
    text-align: center;
    flex: 1;
    img {
      width: 80%;
    }
    span {
      display: inline-block;
      width: 100%;
      white-space: nowrap;
    }
  }
}
.adwamp {
  width: 100%;
  overflow: hidden;
  img {
    float: left;
    width: 100%;
  }
}
.recommend {
  background-color: #fff;
  margin-top: 0.3rem;
  .recommend-title {
    border-bottom: 1px solid #eee;
    font-size: 14px;
    padding: 0.2rem;
    color: #e5017d;
  }
  .recommend-body {
    border-bottom: 1px solid #eee;
  }
  .recommend-item {
    width: 99%;
    border-right: 1px solid #eee;
    font-size: 12px;
    text-align: center;
  }
}
.hot-area {
  text-align: center;
  font-size: 14px;
  height: 1.8rem;
  line-height: 1.8rem;
  .hot-goods {
    overflow: hidden;
    background-color: #fff;
    & > .van-col{
      float: none;
      display: inline-block;
      vertical-align: top;
    }
  }
}
</style>

