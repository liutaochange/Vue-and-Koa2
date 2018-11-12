<template>
  <div class="floor">
    <div :class="$style['floor-title']">{{floorTitle}}</div>
    <div :class="$style['floor-anomaly']">
      <div :class="$style['floor-one']">
        <img :src="floorData0.image" width="100%" />
      </div>
      <div>
        <div :class="$style['floor-two']">
          <img :src="floorData1.image" width="100%" />
        </div>
        <div>
          <img :src="floorData2.image" width="100%" />
        </div>
      </div>
    </div>
    <div :class="$style['floor-rule']">
      <div v-for="(item, index) in floorData.slice(3)" :key="index">
        <img :src="item.image" width="100%"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    floorData: {
      type: Array,
      default: () => [],
      required: true
    },
    floorTitle: {
      type: String,
      default: "",
      required: true
    }
  },
  data() {
    return {
      floorData0: {},
      floorData1: {},
      floorData2: {}
    };
  },
  watch: {
    floorData() {
      this.floorData0 = this.floorData[0];
      this.floorData1 = this.floorData[1];
      this.floorData2 = this.floorData[2];
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" module>
.floor-title {
  text-align: center;
  font-size: 14px;
  height: 1.8rem;
  line-height: 1.8rem;
  border-bottom: 1px solid #ddd;
}
.floor-anomaly {
  display: flex;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
}
.floor-anomaly div {
  width: 100%;
  box-sizing: border-box;
}
.floor-one {
  border-right: 1px solid #ddd;
}
.floor-two {
  border-bottom: 1px solid #ddd;
}
.floor-rule {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #fff;
}
.floor-rule div {
  box-sizing: border-box;
  width: 50%;
  border-bottom: 1px solid #ddd;
}
.floor-rule div:nth-child(odd) {
  border-right: 1px solid #ddd;
}
</style>
