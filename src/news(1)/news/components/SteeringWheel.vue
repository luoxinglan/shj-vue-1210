<template>
  <div class="steering-wheel-container">
    <img
      :style="{ transform: 'rotate(' + angle + 'deg)' }"
      src="../../../assets/image/方向盘.png"
      alt=""
      class="wheel"
    />
  </div>
</template>

<script>
export default {
  name: "SteeringWheel",
  data() {
    return {
      angle: 0,
    };
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped>
.steering-wheel-container {
  position: relative;
  width: 200px;
  height: 200px;
}
.wheel {
  width: 200px;
  height: 200px;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 10s ease; /* 可选：添加过渡效果 */
}
</style>