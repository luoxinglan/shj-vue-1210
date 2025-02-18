<template>
  <div id="app">
    <h1>Carla Hero Vehicle Data</h1>
    <table>
      <thead>
        <tr>
          <th>Timestamp</th>
          <th>Location</th>
          <th>Velocity</th>
          <th>Acceleration</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(data, index) in vehicleData" :key="index">
          <td>{{ data.timestamp }}</td>
          <td>{{ data.location.x.toFixed(2) }}, {{ data.location.y.toFixed(2) }}, {{ data.location.z.toFixed(2) }}</td>
          <td>{{ data.velocity.x.toFixed(2) }}, {{ data.velocity.y.toFixed(2) }}, {{ data.velocity.z.toFixed(2) }}</td>
          <td>{{ data.acceleration.x.toFixed(2) }}, {{ data.acceleration.y.toFixed(2) }}, {{ data.acceleration.z.toFixed(2) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      vehicleData: []
    };
  },
  created() {
    this.fetchVehicleData();
    setInterval(this.fetchVehicleData, 1000); // 每秒更新一次数据
  },
  methods: {
    async fetchVehicleData() {
      try {
        const response = await fetch('http://localhost:8001/get-vehicle-data/');
        const data = await response.json();
        this.vehicleData = data;
      } catch (error) {
        console.error('Error fetching vehicle data:', error);
      }
    }
  }
};
</script>

<style>
#app {
  text-align: center;
  margin-top: 60px;
}

table {
  width: 80%;
  margin: 0 auto;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
}

th {
  background-color: #f2f2f2;
}
</style>