<template>
  <div class="banner" @mousemove="stopPlay" @mouseleave="startPlay">
    <ul class="itemList">
      <li
        v-for="(item, idx) in items"
        :key="idx"
        class="item"
        :class="{ active: currentIndex === idx }"
      >
        <img :src="item" alt="图片加载失败" />
      </li>
    </ul>
    <ul class="pointList">
      <li
        v-for="(point, idx) in points"
        :key="idx"
        class="point"
        :class="{ active: currentIndex === idx }"
        :data-index="idx"
        @click="goToIndex(idx)"
      ></li>
    </ul>
    <button class="left" @click="prev">《</button>
    <button class="right" @click="next">》</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        require("../../assets/image/uninhabited-car1.png"),
        require("../../assets/image/uninhabited-car2.png"),
        require("../../assets/image/uninhabited-car3.webp"),
        require("../../assets/image/uninhabited-car4.jpg"),
        require("../../assets/image/uninhabited-car5.png"),
      ], // 轮播项内容
      currentIndex: 0,
      timer: null,
    };
  },
  computed: {
    points() {
      return this.items.map((_, index) => index); // 创建点数组
    },
  },
  methods: {
    prev() {
      this.currentIndex =
        (this.currentIndex - 1 + this.items.length) % this.items.length;
    },
    next() {
      this.currentIndex = (this.currentIndex + 1) % this.items.length;
    },
    goToIndex(index) {
      this.currentIndex = index;
    },
    startPlay() {
      if (!this.timer) {
        this.timer = setInterval(this.next, 2000);
      }
    },
    stopPlay() {
      clearInterval(this.timer);
      this.timer = null;
    },
  },
  mounted() {
    this.startPlay();
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
.banner {
  width: 400px;
  height: 205px;
  position: relative;
}
.itemList {
  width: 400px;
  height: 205px;
  overflow: hidden;
  position: relative;
}
.item {
  width: 400px;
  height: 205px;
  opacity: 0;
  transition: all 0.8s;
  position: absolute;
  left: 0;
}
.item img {
  width: 400px;
  height: 205px;
}
.item.active {
  z-index: 10;
  opacity: 1;
}
.pointList {
  width: 100px;
  height: 30px;
  position: absolute;
  bottom: 0;
  right: 10px;
  z-index: 200;
}
.point {
  width: 10px;
  height: 10px;
  border-radius: 10px;
  background: #fff;
  float: left;
  border-style: solid;
  border-width: 2px;
  border-color: slategray;
  margin-right: 8px;
  cursor: pointer;
}
.point.active {
  background: rgb(105, 105, 105);
}
.left {
  width: 20px;
  height: 50px;
  background: transparent;
  position: absolute;
  top: calc(50% - 25px);
  left: 0;
  z-index: 100;
  font-size: 20px;
  font-weight: 700;
}
.right {
  width: 20px;
  height: 50px;
  background: transparent;
  position: absolute;
  top: calc(50% - 25px);
  right: 0;
  z-index: 100;
  font-size: 20px;
  font-weight: 700;
}
</style>