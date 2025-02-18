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
    return {};
  },
  methods: {
    radarCharts() {
      var chartDom = this.$refs.echart;
      var myChart = echarts.init(chartDom);
      var option;
      const dataBJ = [[0.9, 0.6, 0.7, 0.7, 0.9]];
      const lineStyle = {
        width: 1,
        opacity: 0.5,
      };
      option = {
        backgroundColor: "#161b24",
        title: {
          text: "(单)指标雷达图",
          left: 107,
          top: 5,
          textStyle: {
            color: "#eee",
            fontWeight: 600,
            fontSize: "16px",
          },
        },
        radar: {
          radius: "60%",
          center: [170, 135],
          indicator: [
            { name: "准确率", max: 1 },
            { name: "平均精度", max: 1 },
            { name: "召回率", max: 1 },
            { name: "IOU", max: 1 },
            { name: "骰子相似性", max: 1 },
          ],
          shape: "circle",
          splitNumber: 5,
          axisName: {
            color: "#fff",
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
            data: dataBJ,
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