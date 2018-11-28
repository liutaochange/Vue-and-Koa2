<template>
  <div>
    <div class="navbar-div">
      <van-nav-bar title="商品详情" left-text="返回" left-arrow @click-left="onClickLeft"/>
    </div>
    <div class="topimage-div">
      <img :src="goodsInfo.IMAGE1" width="100%">
    </div>
    <div :class="$style['goods-name']">{{goodsInfo.NAME}}</div>
    <div :class="$style['goods-price']">价格 ：￥{{goodsInfo.PRESENT_PRICE | moneyFilter}}元</div>
    <div :class="$style['goods-content']">
      <van-tabs swipeable sticky>
        <van-tab title="商品详情">
          <div :class="$style.detail" v-html="goodsInfo.DETAIL"></div>
        </van-tab>
        <van-tab title="评论">
          <div :class="$style.comment">评论制作中</div>
        </van-tab>
      </van-tabs>
    </div>
    <div :class="$style['goods-bottom']">
      <div>
        <van-button size="large" type="primary" @click="addGoodsToCart">加入购物车</van-button>
      </div>
      <div>
        <van-button size="large" type="danger">直接购买</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import { getGoodsInfo } from "@/api/index.js";
import { toMoney } from "@/filter/index.js";
const cartInfoKey = "__CARTINFOKEY__";
export default {
  data() {
    return {
      goodsId: "",
      goodsInfo: {} //商品详细信息
    };
  },
  filters: {
    moneyFilter(money) {
      return toMoney(money);
    }
  },
  created() {
    this.goodsId = this.$route.params.id;
    this.getInfo();
  },
  methods: {
    getInfo() {
      getGoodsInfo(this.goodsId)
        .then(response => {
          if (response.data.code == 200 && response.data.message) {
            this.goodsInfo = response.data.message;
          } else {
            this.$toast("服务器错误，数据获取失败");
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    addGoodsToCart() {
      //取出本地购物车中的商品
      //localStorage.removeItem(cartInfoKey)
      let cartInfo = localStorage.getItem(cartInfoKey) ? JSON.parse(localStorage.getItem(cartInfoKey)) : [];
      let isHaveGoods = cartInfo.find(cart => cart.goodsId == this.goodsId);
      if (!isHaveGoods) {
        let newGoodsInfo = {
          goodsId: this.goodsInfo.ID,
          name: this.goodsInfo.NAME,
          price: this.goodsInfo.PRESENT_PRICE,
          image: this.goodsInfo.IMAGE1,
          count: 1
        };
        cartInfo.push(newGoodsInfo);
        localStorage.setItem(cartInfoKey, JSON.stringify(cartInfo));
        this.$toast.success("添加成功");
      } else {
        this.$toast.success("已有此商品");
      }

      this.$router.push({ name: "cart" });
    }
  }
};
</script>

<style lang="less" module>
.goods-name,
.goods-price {
  background-color: #fff;
  padding: 4px 0;
}
.detail {
  font-size: 0px;
}
.comment {
  padding: 10px 0;
  text-align: center;
}
.goods-bottom {
  position: fixed;
  bottom: 0px;
  left: 0px;
  background-color: #fff;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-flow: nowrap;
}
.goods-content{
  padding-bottom: 60px;
}
.goods-bottom > div {
  flex: 1;
  padding: 5px;
}
</style>