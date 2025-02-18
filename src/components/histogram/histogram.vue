<template>
  <div style="width: 100%; height: 100%">
    <div id="histogram" style="width: 100%; height: 100%"></div>
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
    outcomeCharts() {
      var chartDom = document.getElementById("histogram");
      var myChart = echarts.init(chartDom);
      var option = {
        title: {
          text: "(多)测试结果对比图",
          left: 100,
          top: 5,
          textStyle: {
            color: "#eee",
            fontWeight: 600,
            fontSize: "16px",
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
        grid: {
          x: "9%",
          y: "20%",
          height: "72%",
          width: "90%",
        },
        xAxis: [
          {
            type: "category",
            data: ["YOLO-v2", "", "YOLO-v5", "", "Fast-RCNN", "", "A-LOAM"],
            axisLabel: {
              textStyle: {
                fontSize: 10,
              },
            },
            splitLine: {
              show: true,
              lineStyle: {
                type: "dashed",
                color: "#1c212a",
              },
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            min: 0,
            max: 1,
            interval: 0.2,
            axisLabel: {
              textStyle: {
                fontSize: 10,
              },
            },
            splitLine: {
              show: true,
              lineStyle: {
                type: "dashed",
                color: "#1c212a",
              },
            },
          },
        ],
        series: [
          {
            name: "系列一",
            type: "bar",
            data: [0.614, 0.578, 0.842, 0.317, 0.268, 0.945, 0.872],
            barWidth: "10px",
          },
          {
            name: "系列二",
            type: "bar",
            data: [0.314, 0.487, 0.924, 0.567, 0.397, 0.657, 0.872],
            barWidth: "10px",
          },
        ],
      };
      myChart.setOption(option);
    },
  },
  mounted() {
    this.outcomeCharts();
  },
};
</script>
<style>
</style>