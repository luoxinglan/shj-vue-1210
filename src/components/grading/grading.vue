<template>
  <div style="width: 100%; height: 100%">
    <div ref="chart" style="width: 400px; height: 230px"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";

export default {
  name: "FunnelChart",
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      const chart = echarts.init(this.$refs.chart);
      // 配置项
      const option = {
        tooltip: {
          trigger: "item",
        },
        legend: {
          show: true,
          icon: "rect",
          itemHeight: 7,
          itemWidth: 15,
          textStyle: {
            fontSize: 10,
            color: "#fff",
          },
        },
        textStyle: {
          fontSize: 12,
          color: "#fff",
        },
        series: [
          {
            name: "Funnel",
            type: "funnel",
            left: "10%",
            top: 30,
            bottom: 20,
            width: "80%",
            min: 10,
            max: 100,
            minSize: "0%",
            maxSize: "100%",
            sort: "descending",
            gap: 2,
            label: {
              show: true,
              position: "inside",
            },
            labelLine: {
              length: 10,
              lineStyle: {
                // width: 1,
                // type: "solid",
              },
            },
            itemStyle: {
              borderColor: "#fff",
              borderWidth: 0,
            },
            data: [
              { value: 50, name: "漏洞总数", itemStyle: { color: "#548B54" } },
              { value: 50, name: "官方认证", itemStyle: { color: "#8B4789" } },
              { value: 50, name: "国家认证", itemStyle: { color: "#A52A2A" } },
              { value: 90, name: "中高危", itemStyle: { color: "#1874CD" } },
              { value: 80, name: "检测对象", itemStyle: { color: "#CDC9A5" } },
            ],
            tooltip: {
              trigger: "item",
              backgroundColor: "#171717",
              borderColor: "#333",
              textStyle: {
                fontSize: 10,
                color: "#efefef",
              },
            },
          },
        ],
      };

      chart.setOption(option);
    },
  },
};
</script>