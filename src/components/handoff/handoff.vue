<template>
  <div class="handoff-select">
    <select v-model="selectedAttribute">
      <option v-for="(attr, index) in attributes" :key="index" :value="attr">
        {{ attr }}
      </option>
    </select>
    <canvas ref="chart"></canvas>
  </div>
</template>

<script>
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

export default {
  props: {
    contents: Object,
  },
  data() {
    return {
      selectedAttribute: "",
      attributes: [],
      data: {
        attribute1: [
          28515.719925514288, 51027.514858054376, 91411.84925997088,
          163914.02857190056, 37122.49957616799, 77.94036409567343,
          45.25141428112895, 33.25601096634131, 24.887600506062945,
          19.487758953278515, 15.7669453052825, 12.820576610458184,
          10.949872637090882, 9.87748586790226, 9.453055884552404,
          9.519822645874587, 7.740049744381466, 6.493140061280378,
          5.660893289394411, 5.16209921969252, 4.947507463295199,
          4.948481747810145, 4.664982965219794, 4.635612841504131,
          4.598380554861813, 4.553572521667097, 4.345328198478919,
          3.967481449574568, 3.3909815032293302, 3.0072896865358256,
          2.8633428314114493, 2.6050317775344065, 2.324991226624582,
          2.139690158241375, 1.977380272363656, 1.8027309717585696,
          1.6018962540621735, 1.39928818344396, 1.235877198450529,
          1.1271977094522594, 1.0393629088519318, 0.9865935456379872,
          0.9295914036034668, 0.8479875250677485, 0.7470518173963139,
          0.6306096619338548, 0.5090282174175704, 0.4017821085710224,
          0.327074304851296, -1024, 2.473039021932403,
        ],
      },
      chart: null,
    };
  },
  watch: {
    selectedAttribute(newValue) {
      this.updateChart(newValue);
    },
    contents(newValue) {
      this.data = newValue;
      this.attributes = Object.keys(newValue).slice(1, -1);
      this.selectedAttribute = Object.keys(newValue).slice(1, 2).toString();
      // 点击表格获取metrics_id
      console.log(newValue.metrics_id);
    },
  },
  mounted() {
    this.chart = new Chart(this.$refs.chart, {
      type: "line",
      data: {
        labels: Array.from(
          { length: this.data.attribute1.length },
          (_, i) => i
        ),
        datasets: [
          {
            label: this.selectedAttribute,
            data: this.data[this.selectedAttribute],
            borderColor: "#fff",
            borderWidth: 0.1,
          },
        ],
      },
      options: {
        scales: {
          x: {
            ticks: {
              color: "#fff", // X轴标签颜色
              font: {
                size: 10,
                weight: 200,
              },
            },
          },
          y: {
            beginAtZero: true,
            ticks: {
              color: "#fff", // Y轴标签颜色
              font: {
                size: 10,
                weight: 200,
              },
            },
          },
        },
        plugins: {
          legend: {
            display: false, // 隐藏图例
          },
        },
      },
    });
  },
  methods: {
    updateChart(attribute) {
      const dataset = this.chart.data.datasets[0];
      dataset.label = attribute;
      dataset.data = this.data[attribute];
      this.chart.update();
    },
  },
};
</script>
<style scoped>
.handoff-select {
  width: 100%;
  height: 100%;
}

.handoff-select select {
  width: 100%;
  height: 25px;
  line-height: 25px;
  text-align: center;
}

.handoff-select canvas {
  width: 100%;
  height: 190px !important;
  font-size: 8px !important;
  color: #fff !important;
}
</style>