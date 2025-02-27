<template>
  <div class="velocity">
    <div ref="chart" style="width: 100%; height: 100%"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";

export default {
  name: "App",
  data() {
    return {
      vehicleData: [],
      velocity: [],
    };
  },
  created() {},
  computed: {},
  methods: {
    initChart() {
      const chartDom = this.$refs.chart;
      const myChart = echarts.init(chartDom);
      const option = {
        animation: false,
        xAxis: {
          type: "category",
          axisLabel: {
            fontSize: 10, // 设置x轴标签字体大小
            color: "#fff",
          },
          axisLine: {
            // 隐藏X轴线
            show: true,
          },
          splitLine: {
            // 隐藏X轴分割线
            show: false,
          },
        },
        yAxis: {
          type: "value",
          axisLabel: {
            fontSize: 10, // 设置y轴标签字体大小
            color: "#fff",
          },
          axisLine: {
            // 隐藏Y轴线
            show: true,
          },
          splitLine: {
            // 隐藏Y轴分割线
            show: false,
          },
        },
        grid: {
          top: "20px",
          bottom: "80px",
        },
        series: [
          {
            data: this.velocity,
            symbol: "none", // 取消显示数据点的标记
            symbolSize: 6,
            type: "line",
            smooth: true, // 平滑曲线
            lineStyle: {
              color: "rgb(23, 232, 248)",
              width: 2, // 设置曲线宽度
              type: "solid", // 设置曲线类型，可以是'solid', 'dashed', 或 'dotted'
            },
          },
        ],
      };
      myChart.setOption(option);
    },
    async fetchVehicleData() {
      try {
        const response = await fetch("http://localhost:8001/get-vehicle-data/");
        const data = await response.json();
        this.vehicleData = data;
        this.velocity = this.vehicleData.map((item) => item.speed);
        this.initChart();
      } catch (error) {
        console.error(
          "Error fetching vehicle data in async fetchVehicleData:",
          error
        );
      }
    },
  },
  mounted() {
    this.initChart();
    this.fetchVehicleData();
    setInterval(this.fetchVehicleData, 100); // 每秒更新一次数据
    console.log("this.vehicleData in mounted: ", this.vehicleData);
    console.log("this.velocity in mounted: ", this.velocity);
  },
};
</script>

<style scoped>
</style>