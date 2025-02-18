<template>
  <div style="width: 100%; height: 100%">
    <div id="radar" style="width: 100%; height: 100%" ref="echart"></div>
  </div>
</template>
<script>
import * as echarts from "echarts";
export default {
  props: {
    contents: Object,
  },
  name: "radar",
  data() {
    return {
      list: [0, 0, 0, 0],
    };
  },
  watch: {
    contents(newValue) {
      this.list = [
        newValue.safety_os,
        newValue.task_os,
        newValue.comfort_os,
        newValue.final_score,
      ];
      this.radarChartss(); // 更新图表
    },
  },
  methods: {
    radarChartss() {
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
          text: "得分雷达图",
          left: 95,
          top: 13,
          textStyle: {
            color: "#ccc",
            fontWeight: 600,
            fontSize: "16px",
          },
        },
        radar: {
          radius: "60%",
          center: [140, 135],
          indicator: [
            { name: "safety_os", max: 1 },
            { name: "task_os", max: 1 },
            { name: "comfort_os", max: 1 },
            { name: "final_score", max: 1 },
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
    this.radarChartss();
  },
};
</script>
<style>
</style>