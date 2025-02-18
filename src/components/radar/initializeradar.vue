<template>
  <div style="width: 100%; height: 100%">
    <div id="radar" style="width: 100%; height: 100%" ref="echart"></div>
  </div>
</template>
<script>
import * as echarts from "echarts";
export default {
  name: "radar",
  data() {
    return {
      list: [0.3, 0.4, 0.6, 0.9, 0.8, 0.5, 0.7, 0.3, 0.7],
    };
  },
  methods: {
    radarCharts() {
      var chartDom = this.$refs.echart;
      var myChart = echarts.init(chartDom);
      var option;
      const lineStyle = {
        width: 1,
        opacity: 0.5,
      };
      option = {
        backgroundColor: "#161b24",
        title: {
          text: "指标雷达图",
          left: 125,
          top: 13,
          textStyle: {
            color: "#ccc",
            fontWeight: 600,
            fontSize: "16px",
          },
        },
        radar: {
          radius: "60%",
          center: [170, 135],
          indicator: [
            { name: "collision_rate", max: 1 },
            { name: "light_freq", max: 1 },
            { name: "following_stability", max: 1 },
            { name: "completion", max: 1 },
            { name: "time_spent", max: 1 },
            { name: "acceleration", max: 1 },
            { name: "yaw_velocity", max: 1 },
            { name: "lane_invasion_freq", max: 1 },
          ],
          shape: "circle",
          splitNumber: 5,
          axisName: {
            color: "#ccc",
            fontSize: "10px",
            padding: [-5, -10],
          },
          splitLine: {
            lineStyle: {
              color: "#152336",
            },
          },
          splitArea: {
            show: false,
          },
          axisLine: {
            lineStyle: {
              color: "#152336",
            },
          },
        },
        tooltip: {
          trigger: "item",
          backgroundColor: "#171717",
          borderColor: "#333",
          textStyle: {
            fontSize: 10,
            color: "#efefef",
          },
        },
        series: [
          {
            name: "radar",
            type: "radar",
            lineStyle: lineStyle,
            data: [this.list],
            symbol: "none",
            itemStyle: {
              color: "#1aad93",
            },
            areaStyle: {
              opacity: 0.1,
            },
          },
        ],
      };
      myChart.setOption(option);
    },
  },
  mounted() {
    this.radarCharts();
  },
};
</script>
<style>
</style>