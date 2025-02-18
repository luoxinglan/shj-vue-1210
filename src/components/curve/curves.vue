<template>
  <div style="width: 100%; height: 100%">
    <div id="curveChart" style="width: 340px; height: 220px" ref="echart"></div>
  </div>
</template>
<script>
import * as echarts from "echarts";
export default {
  name: "radar",
  data() {
    return {
      curveData: [23, 20, 12, 4, 2, 1, 0.4],
    };
  },
  methods: {
    curveCharts() {
      var chartDom2 = this.$refs.echart;
      var curveChart = echarts.init(chartDom2);
      var option2 = {
        title: {
          show: true, //false
          text: "主车加速度曲线", //主标题文本
          textStyle: {
            color: "#ccc", // 字体颜色
            fontWeight: 600, //'bold'(粗体) | 'bolder'(粗体) | 'lighter'(正常粗细) ，字体粗细
            fontSize: 16, //字体大小
            lineHeight: 16, //字体行高
          },
          x: "center",
          y: "top",
          textAlign: "left",
          top: 13,
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "line",
          },
          backgroundColor: "#171717",
          borderColor: "#333",
          borderWidth: 1, // 悬浮框边框宽度
          textStyle: {
            // 悬浮框文字样式
            color: "#efefef",
            fontSize: 12,
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["1", "2", "3", "4", "5", "6"],
          axisLabel: {
            textStyle: {
              fontSize: "10px",
            },
          },
        },
        yAxis: {
          type: "value",
          splitLine: {
            show: false,
          },
          axisLabel: {
            textStyle: {
              fontSize: "10px",
            },
          },
        },
        series: [
          {
            data: this.curveData,
            type: "line",
            smooth: true,
            symbol: "none",
            areaStyle: {},
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0.2,
                  color: "#131c30",
                },
                {
                  offset: 0.8,
                  color: "#162037",
                },
              ],
            },
            lineStyle: {
              // 线条样式
              color: "#1651df",
            },
            emphasis: {
              focus: "series",
            },
          },
        ],
        grid: {
          // 让图表占满容器
          top: "55px",
          left: "30px",
          right: "20px",
          bottom: "18px",
        },
      };
      curveChart.setOption(option2);
    },
  },
  mounted() {
    this.curveCharts();
  },
};
</script>
<style>
</style>