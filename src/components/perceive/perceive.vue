<template>
  <div style="width: 100%; height: 100%">
    <div id="outcomeChart" style="width: 400px; height: 205px"></div>
  </div>
</template>
<script>
import * as echarts from "echarts";
export default {
  name: "radar",
  data() {
    return {
      perceiveData: [
        {
          value: 3,
          name: "语义分割：3",
          label: {
            color: "#fff",
            fontSize: 10,
          },
          itemStyle: {
            color: "#548B54",
          },
        },
        {
          value: 5,
          name: "后门攻击：5",
          label: {
            color: "#fff",
            fontSize: 10,
          },
          itemStyle: {
            color: "#8B4789",
          },
        },
        {
          value: 2,
          name: "物理攻击：2",
          label: {
            color: "#fff",
            fontSize: 10,
          },
          itemStyle: {
            color: "#A52A2A",
          },
        },
        {
          value: 10,
          name: "端到端：10",
          label: {
            color: "#fff",
            fontSize: 10,
          },
          itemStyle: {
            color: "#1874CD",
          },
        },
        {
          value: 14,
          name: "目标分类：14",
          label: {
            color: "#fff",
            fontSize: 10,
          },
          itemStyle: {
            color: "#CDC9A5",
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
        series: [
          {
            type: "pie",
            radius: [0, 90],
            center: ["50%", "50%"],
            roseType: "area",
            itemStyle: {
              borderRadius: 2,
            },
            data: this.perceiveData,
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
        this.perceiveData.length == this.dataIndex + 1
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