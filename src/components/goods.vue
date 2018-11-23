<template>
  <div :class="$style['goods-info']" @click="goGoodsPage()">
    <div :class="$style['goods-image']">
      <img v-lazy="goodsImage" width="90%" />
    </div>
    <div :class="$style['goods-name']">{{goodsName}}</div>
    <div class="goods-price">￥{{goodsPrice | moneyFilter }}</div>
  </div>
</template>

<script>
import { toMoney } from "@/filter/index.js";
export default {
  props: {
    goodsImage: {
      type: String,
      required: true
    }, 
    goodsName: {
      type: String,
      required: true
    }, 
    goodsPrice: {
      type: [Number, String],
      required: true
    }, 
    goodsId: {
      type: String,
      required: true
    }
  },
  filters: {
    moneyFilter(money) {
      return toMoney(money);
    }
  },
  methods: {
    goGoodsPage() {
      this.$router.push({ name: "goodInfo", params: { id: this.goodsId } });
    }
  }
};
</script>

<style lang="less" module>
.goods-name {
  padding: 0 8px;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>