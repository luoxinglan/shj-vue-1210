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
  methods: {
    async fetchVehicleData() {
      try {
        const response = await fetch("http://localhost:8001/get-vehicle-data/");
        const data = await response.json();
        this.vehicleData = data;
        console.log(this.vehicleData,111)
        this.steering = this.vehicleData.map((item) => item.steering);
        this.angle=Number(this.steering.slice(0,1))*1000

        console.log("方向盘",this.angle)
      } catch (error) {
        console.error("Error fetching vehicle data:", error);
      }
    },
  },
  mounted() {
    this.fetchVehicleData();
    setInterval(this.fetchVehicleData, 100); // 每秒更新一次数据
  },
};
</script>

<style scoped>
.steering-wheel-container {
  position: relative;
  width: 150px;
  height: 150px;
}
.wheel {
  width: 150px;
  height: 150px;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 10s ease;
}
</style>