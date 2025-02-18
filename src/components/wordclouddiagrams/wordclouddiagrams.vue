<template>
  <div @mouseenter="pauseHighlightLoop" @mouseleave="resumeHighlightLoop">
    <!-- 图表容器 -->
    <div id="wordCloud" style="width: 400px; height: 205px"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import "echarts-wordcloud";

export default {
  name: "WordCloudChart",
  data() {
    return {
      data: [
        { name: "SQL注入", value: 10000 },
        { name: "XSS", value: 6181 },
        { name: "CSRF", value: 4386 },
        { name: "远程代码执行", value: 4055 },
        { name: "安全", value: 2467 },
        { name: "性能错误评估", value: 2533 },
        { name: "故障注入", value: 3485 },
        { name: "弱口令", value: 7676 },
        { name: "监控缺失", value: 6752 },
        { name: "敏感数据泄露", value: 1786 },
        { name: "失效身份认证", value: 2465 },
        { name: "恶意文件上传", value: 2468 },
        { name: "日志缺失", value: 24690 },
        { name: "错误配置", value: 24671 },
        { name: "SSRF", value: 24672 },
        { name: "实时交互", value: 24674 },
        { name: "SQL注入", value: 10000 },
        { name: "XSS", value: 6181 },
        { name: "CSRF", value: 4386 },
        { name: "远程代码执行", value: 4055 },
        { name: "安全", value: 2467 },
        { name: "性能错误评估", value: 2533 },
        { name: "故障注入", value: 3485 },
        { name: "弱口令", value: 7676 },
        { name: "监控缺失", value: 6752 },
        { name: "敏感数据泄露", value: 1786 },
        { name: "失效身份认证", value: 2465 },
        { name: "恶意文件上传", value: 2468 },
        { name: "日志缺失", value: 24690 },
        { name: "错误配置", value: 24671 },
        { name: "SSRF", value: 24672 },
        { name: "实时交互", value: 24674 },
        { name: "SQL注入", value: 10000 },
        { name: "XSS", value: 6181 },
        { name: "CSRF", value: 4386 },
        { name: "远程代码执行", value: 4055 },
        { name: "安全", value: 2467 },
        { name: "性能错误评估", value: 2533 },
        { name: "故障注入", value: 3485 },
        { name: "弱口令", value: 7676 },
        { name: "监控缺失", value: 6752 },
        { name: "敏感数据泄露", value: 1786 },
        { name: "失效身份认证", value: 2465 },
        { name: "恶意文件上传", value: 2468 },
        { name: "日志缺失", value: 24690 },
        { name: "错误配置", value: 24671 },
        { name: "SSRF", value: 24672 },
        { name: "实时交互", value: 24674 },
      ],
      myChart: null,
      currentIndex: -1,
      highlightInterval: null,
      isPaused: false,
    };
  },
  mounted() {
    this.initChart();
    this.startHighlightLoop();
  },
  methods: {
    initChart() {
      // 初始化图表实例
      const chart = echarts.init(document.getElementById("wordCloud"));
      this.myChart = chart;
      // 配置项
      const option = {
        animation: true,
        animationDuration: 3000,
        animationEasing: "elasticOut",
        series: [
          {
            name: "词频统计",
            type: "wordCloud",
            shape: "circle", // 可以选择 'circle' 或 'cardioid' 等形状
            left: "center",
            top: "center",
            width: "100%",
            height: "100%",
            right: null,
            bottom: null,
            sizeRange: [10, 30], // 字体大小范围
            rotationRange: [-90, 90], // 文字旋转角度范围
            rotationStep: 45, // 文字旋转步长
            gridSize: 5, // 网格大小，控制单词间距
            drawOutOfBound: false,
            textStyle: {
              color: "#1953e6",
              normal: {
                color: function () {
                  return (
                    "rgb(" +
                    [
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160),
                    ].join(",") +
                    ")"
                  );
                },
              },
            },
            emphasis: {
              focus: "self",
              scaleSize: 36,
              textStyle: {
                fontSize: 24,
                fontWeight: 600,
              },
            },
            data: this.data,
          },
        ],
      };
      // 使用配置项和数据显示图表
      chart.setOption(option);
    },
    startHighlightLoop() {
      const self = this;
      this.highlightInterval = setInterval(() => {
        if (!this.isPaused) {
          self.loopHighlight();
        }
      }, 2000);
      this.loopHighlight();
    },
    loopHighlight() {
      this.currentIndex = (this.currentIndex + 1) % this.data.length;
      this.myChart.setOption({
        series: [
          {
            data: this.data.map((item, index) => ({
              ...item,
              emphasis:
                index === this.currentIndex
                  ? {
                      focus: "self",
                      textStyle: {
                        fontSize: item.value / 10 + 12, // 动态调整字体大小
                        fontWeight: "bold",
                        color: "#FF0000", // 高亮颜色
                      },
                    }
                  : {},
            })),
          },
        ],
      });
    },
    pauseHighlightLoop() {
      this.isPaused = true;
    },
    resumeHighlightLoop() {
      this.isPaused = false;
    },
  },
};
</script>

<style scoped>
</style>