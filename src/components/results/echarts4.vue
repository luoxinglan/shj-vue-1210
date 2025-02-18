<template>
  <div style="width: 100%; height: 100%">
    <div id="chart4" style="width: 400px; height: 205px"></div>
  </div>
</template>
<script>
import * as echarts from "echarts";
export default {
  name: "radar",
  data() {
    return {
      chart4Data: [
        {
          name: "已完成：38",
          value: "38",
          itemStyle: { color: "#1ea956" },
          label: {
            color: "#fff",
            fontSize: 10,
          },
        },
        {
          name: "未完成：3",
          value: "3",
          itemStyle: { color: "#ffc300" },
          label: {
            color: "#fff",
            fontSize: 10,
          },
        },
        {
          name: "失败：2",
          value: "2",
          itemStyle: { color: "#a6a6a6" },
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
    chart4Charts() {
      var chartDom1 = document.getElementById("chart4");
      var chart4Chart = echarts.init(chartDom1);
      var option1 = {
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
        legend: {
          show: true,
          icon: "rect",
          itemHeight: 7,
          itemWidth: 15,
          textStyle: {
            fontSize: 12,
            color: "#F1F1F3",
          },
          top: "10",
          left: "70",
        },
        series: [
          {
            type: "pie",
            radius: ["40%", "70%"],
            center: ["44%", "60%"],
            data: this.chart4Data,
            startAngle: 0,
            labelLine: {
              normal: {
                length: 5, // 指示线宽度
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
      chart4Chart.setOption(option1);
    },
    // 动态选中的定时器
    timerFun() {
      var chartDom1 = document.getElementById("chart4");
      var chart4Chart = echarts.init(chartDom1);
      this.timeInterval = setInterval(() => {
        chart4Chart.dispatchAction({
          type: "downplay",
          dataIndex: this.dataIndex,
        });
        this.chart4Data.length == this.dataIndex + 1
          ? (this.dataIndex = 0)
          : this.dataIndex++;
        chart4Chart.dispatchAction({
          type: "highlight",
          dataIndex: this.dataIndex,
        });
      }, 1000);
    },
  },
  mounted() {
    this.chart4Charts();
    //是否完成的echarts动态选中
    var chartDom1 = document.getElementById("chart4");
    var chart4Chart = echarts.init(chartDom1);
    this.timerFun(chart4Chart);
    chart4Chart.on("mouseover", (_) => {
      clearInterval(this.timeInterval);
      chart4Chart.dispatchAction({
        type: "downplay",
        dataIndex: 0,
      });
      chart4Chart.dispatchAction({
        type: "highlight",
        dataIndex: _.dataIndex,
      });
    });
    chart4Chart.on("mouseout", (_) => {
      this.timerFun(chart4Chart);
    });
  },
};
</script>
<style>
</style>