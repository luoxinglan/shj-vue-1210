<template>
  <div>
    <div id="main" style="width: 100%; height: 230px"></div>
  </div>
</template>

<script>
// 导入 echarts
import * as echarts from "echarts";

export default {
  name: "ChartComponent",
  data() {
    return {
      vehicleData: [],
      acceleration: [],
    };
  },
  methods: {
    initChart() {
      var chartDom = document.getElementById("main");
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        grid: {
          top: "10%", // 设置图表距离容器顶部的距离为容器高度的10%
          left: "5%",
          right: "5%",
          bottom: "10%",
          containLabel: true, // 确保标签完全显示在网格内
        },
        xAxis: {
          type: "category",
          data: ["brake"],
          // 取消 x 轴的网格线
          splitLine: {
            show: false,
          },
        },
        yAxis: {
          type: "value",
          // 取消 y 轴的网格线
          splitLine: {
            show: false,
          },
        },
        series: [
          {
            data: this.acceleration,
            type: "bar",
            // 设置柱子的颜色
            itemStyle: {
              color: "#fff", // 更改为你想要的颜色
            },
            // 设置柱子的宽度
            barWidth: "10%", // 百分比相对于每一类目宽度
            label: {
              show: true, // 显示数值标签
              position: "top", // 数值标签位置
              formatter: "{c}", // 格式化显示的内容
              color: "#333", // 文字颜色
              textShadowColor: "#ffffff", // 文字阴影颜色
              textShadowBlur: 5, // 文字阴影模糊大小
              textShadowOffsetX: 0, // 文字阴影X轴偏移量
              textShadowOffsetY: 0, // 文字阴影Y轴偏移量
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
        this.acceleration = this.vehicleData.map((item) => item.brake);
        this.initChart();
      } catch (error) {
        console.error("Error fetching vehicle data:", error);
      }
    },
  },
  mounted() {
    this.initChart();
    this.fetchVehicleData();
    setInterval(this.fetchVehicleData, 100); // 每秒更新一次数据
  },
};
</script>

<style scoped>
/* 可以在这里添加样式 */
</style>