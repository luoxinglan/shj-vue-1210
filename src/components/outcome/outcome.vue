<template>
  <div style="width: 100%; height: 100%">
    <div id="outcomeChart" style="width: 280px; height: 180px"></div>
  </div>
</template>
<script>
import * as echarts from "echarts";
export default {
  name: "radar",
  data() {
    return {
      outcomeData: [
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
    outcomeCharts() {
      var chartDom1 = document.getElementById("outcomeChart");
      var outcomeChart = echarts.init(chartDom1);
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
          left: "0",
        },
        series: [
          {
            type: "pie",
            radius: ["40%", "70%"],
            center: ["44%", "60%"],
            data: this.outcomeData,
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
      outcomeChart.setOption(option1);
    },
    // 动态选中的定时器
    timerFun() {
      var chartDom1 = document.getElementById("outcomeChart");
      var outcomeChart = echarts.init(chartDom1);
      this.timeInterval = setInterval(() => {
        outcomeChart.dispatchAction({
          type: "downplay",
          dataIndex: this.dataIndex,
        });
        this.outcomeData.length == this.dataIndex + 1
          ? (this.dataIndex = 0)
          : this.dataIndex++;
        outcomeChart.dispatchAction({
          type: "highlight",
          dataIndex: this.dataIndex,
        });
      }, 1000);
    },
  },
  mounted() {
    this.outcomeCharts();
    //是否完成的echarts动态选中
    var chartDom1 = document.getElementById("outcomeChart");
    var outcomeChart = echarts.init(chartDom1);
    this.timerFun(outcomeChart);
    outcomeChart.on("mouseover", (_) => {
      clearInterval(this.timeInterval);
      outcomeChart.dispatchAction({
        type: "downplay",
        dataIndex: 0,
      });
      outcomeChart.dispatchAction({
        type: "highlight",
        dataIndex: _.dataIndex,
      });
    });
    outcomeChart.on("mouseout", (_) => {
      this.timerFun(outcomeChart);
    });
  },
};
</script>
<style>
</style>