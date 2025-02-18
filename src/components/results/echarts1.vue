<template>
  <div style="width: 100%; height: 100%">
    <div id="Chart1" style="width: 400px; height: 205px"></div>
  </div>
</template>
<script>
import * as echarts from "echarts";
export default {
  name: "radar",
  data() {
    return {
      Chart1Data: [
        {
          name: "低危漏洞",
          value: "31.58",
          itemStyle: { color: "#1ea956" },
          label: {
            color: "#fff",
            fontSize: 10,
          },
        },
        {
          name: "中危漏洞",
          value: "31.58",
          itemStyle: { color: "#ffc300" },
          label: {
            color: "#fff",
            fontSize: 10,
          },
        },
        {
          name: "高危漏洞",
          value: "32",
          itemStyle: { color: "#a6a6a6" },
          label: {
            color: "#fff",
            fontSize: 10,
          },
        },
        {
          name: "超危漏洞",
          value: "5.26",
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
    Chart1Charts() {
      var chartDom1 = document.getElementById("Chart1");
      var Chart1Chart = echarts.init(chartDom1);
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
          itemHeight: 5,
          itemWidth: 10,
          textStyle: {
            fontSize: 10,
            color: "#F1F1F3",
          },
          top: "10",
          left: "60",
        },
        series: [
          {
            type: "pie",
            radius: ["40%", "70%"],
            center: ["44%", "60%"],
            data: this.Chart1Data,
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
      Chart1Chart.setOption(option1);
    },
    // 动态选中的定时器
    timerFun() {
      var chartDom1 = document.getElementById("Chart1");
      var Chart1Chart = echarts.init(chartDom1);
      this.timeInterval = setInterval(() => {
        Chart1Chart.dispatchAction({
          type: "downplay",
          dataIndex: this.dataIndex,
        });
        this.Chart1Data.length == this.dataIndex + 1
          ? (this.dataIndex = 0)
          : this.dataIndex++;
        Chart1Chart.dispatchAction({
          type: "highlight",
          dataIndex: this.dataIndex,
        });
      }, 1000);
    },
  },
  mounted() {
    this.Chart1Charts();
    //是否完成的echarts动态选中
    var chartDom1 = document.getElementById("Chart1");
    var Chart1Chart = echarts.init(chartDom1);
    this.timerFun(Chart1Chart);
    Chart1Chart.on("mouseover", (_) => {
      clearInterval(this.timeInterval);
      Chart1Chart.dispatchAction({
        type: "downplay",
        dataIndex: 0,
      });
      Chart1Chart.dispatchAction({
        type: "highlight",
        dataIndex: _.dataIndex,
      });
    });
    Chart1Chart.on("mouseout", (_) => {
      this.timerFun(Chart1Chart);
    });
  },
};
</script>
<style>
</style>