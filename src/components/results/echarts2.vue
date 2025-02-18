<template>
  <div style="width: 100%; height: 100%">
    <div id="Chart2" style="width: 400px; height: 205px"></div>
  </div>
</template>
<script>
import * as echarts from "echarts";
export default {
  name: "radar",
  data() {
    return {
      Chart2Data: [
        {
          name: "OTA升级：7",
          value: "7",
          itemStyle: { color: "#ffc300" },
          label: {
            color: "#fff",
            fontSize: 10,
          },
        },
        {
          name: "二进制漏洞：13",
          value: "13",
          itemStyle: { color: "#8B4789" },
          label: {
            color: "#fff",
            fontSize: 10,
          },
        },
        {
          name: "权限升级：15",
          value: "15",
          itemStyle: { color: "#1ea956" },
          label: {
            color: "#fff",
            fontSize: 10,
          },
        },
        {
          name: "射频信号：40",
          value: "40",
          itemStyle: { color: "#a6a6a6" },
          label: {
            color: "#fff",
            fontSize: 10,
          },
        },
        {
          name: "命令注入：25",
          value: "25",
          itemStyle: { color: "#1874CD" },
          label: {
            color: "#fff",
            fontSize: 10,
          },
        },
      ],
      dataIndex: 0,
    };
  },
  methods: {
    chart2Charts() {
      var chartDom2 = document.getElementById("Chart2");
      var Chart2Chart = echarts.init(chartDom2);
      var option2 = {
        tooltip: {
          show: true,
          trigger: "item",
          textStyle: {
            fontSize: 8,
            color: "#efefef",
          },
          backgroundColor: "#171717",
          borderColor: "#333",
        },
        series: [
          {
            type: "pie",
            radius: [30, 80],
            center: ["44%", "63%"],
            roseType: "area",
            itemStyle: {
              borderRadius: 2,
            },
            data: this.Chart2Data,
            startAngle: 0,
            labelLine: {
              normal: {
                length: 40, // 指示线宽度
                lineStyle: {
                  color: "#595959", // 指示线颜色
                },
              },
            },
            label: {
              normal: {
                show: true,
                textStyle: {
                  fontSize: 8,
                },
              },
              emphasis: {
                show: true,
              },
            },
          },
        ],
      };
      Chart2Chart.setOption(option2);
    },
    // 动态选中的定时器
    timerFun() {
      var chartDom2 = document.getElementById("Chart2");
      var Chart2Chart = echarts.init(chartDom2);
      this.timeInterval = setInterval(() => {
        Chart2Chart.dispatchAction({
          type: "downplay",
          dataIndex: this.dataIndex,
        });
        this.Chart2Data.length == this.dataIndex + 1
          ? (this.dataIndex = 0)
          : this.dataIndex++;
        Chart2Chart.dispatchAction({
          type: "highlight",
          dataIndex: this.dataIndex,
        });
      }, 1000);
    },
  },
  mounted() {
    this.chart2Charts();
    //是否完成的echarts动态选中
    var chartDom2 = document.getElementById("Chart2");
    var chart2Chart = echarts.init(chartDom2);
    this.timerFun(chart2Chart);
    chart2Chart.on("mouseover", (_) => {
      clearInterval(this.timeInterval);
      chart2Chart.dispatchAction({
        type: "downplay",
        dataIndex: 0,
      });
      chart2Chart.dispatchAction({
        type: "highlight",
        dataIndex: _.dataIndex,
      });
    });
    chart2Chart.on("mouseout", (_) => {
      this.timerFun(chart2Chart);
    });
  },
};
</script>
<style>
</style>