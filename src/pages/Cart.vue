<template>
  <div>
    <div :class="$style['navbar-div']">
      <van-nav-bar title="购物车" left-text="返回" left-arrow @click-left="onClickLeft"/>
    </div>
    <div :class="$style['cart-title']">
      <van-button size="small" type="danger" @click="clearCart" plain>清空购物车</van-button>
    </div>
    <!--显示购物车中的商品-->
    <div :class="$style['cart-list']">
      <div :class="$style['pang-row']" v-for="(item,index) in cartInfo" :key="index">
        <div :class="$style['pang-img']">
          <img :src="item.image" width="100%">
        </div>
        <div :class="$style['pang-text']">
          <div :class="$style['pang-goods-name']">{{item.name}}</div>
          <div :class="$style['pang-control']">
            <van-stepper v-model="item.count"/>
          </div>
        </div>
        <div :class="$style['pang-goods-price']">
          <div>￥{{item.price | moneyFilter}}</div>
          <div>x{{item.count}}</div>
          <div :class="$style.allPrice">￥{{item.price*item.count | moneyFilter}}</div>
        </div>
      </div>
    </div>
    <!--显示总金额-->
    <div :class="$style.totalMoeny">商品总价:￥{{totalMoney | moneyFilter}}</div>
  </div>
</template>

<script>
import { toMoney } from "@/filter/index.js";
const cartInfoKey = "__CARTINFOKEY__";
export default {
  data() {
    return {
      cartInfo: [],
      isEmpty: false
    };
  },
  created() {
    this.getCartInfo();
  },
  computed: {
    totalMoney() {
      let allMoney = 0;
      this.cartInfo.forEach(item => {
        allMoney += item.price * item.count;
      });
      localStorage.cartInfo = JSON.stringify(this.cartInfo);
      return allMoney;
    }
  },
  filters: {
    moneyFilter(money) {
      return toMoney(money);
    }
  },
  methods: {
    //得到购物车数据的方法
    getCartInfo() {
      if (localStorage.getItem(cartInfoKey)) {
        this.cartInfo = JSON.parse(localStorage.getItem(cartInfoKey));
      }
      this.isEmpty = this.cartInfo.length > 0 ? true : false;
    },
    clearCart() {
      localStorage.removeItem(cartInfoKey);
      this.cartInfo = [];
    },
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="less" module>
.cart-title {
  height: 2rem;
  line-height: 2rem;
  background-color: #fff;
  border-bottom: 1px solid #e4e7ed;
  padding: 5px;
  text-align: right;
}

.cart-list {
  background-color: #fff;
}
.pang-row {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  padding: 0.5rem;
  font-size: 0.85rem;
  border-bottom: 1px solid #e4e7ed;
}

.pang-img {
  flex: 6;
}
.pang-text {
  flex: 14;
  padding-left: 10px;
}
.pang-control {
  padding-top: 10px;
}
.pang-goods-price {
  flex: 4;
  text-align: right;
}
.allPrice {
  color: red;
}
.totalMoeny {
  text-align: right;
  background-color: #fff;
  border-bottom: 1px solid #e4e7ed;
  padding: 5px;
}
</style>