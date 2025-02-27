<template>
  <div id="app">
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
    />
    <div class="shj">
      <div class="shj-title">
        <div class="shj-title-text">自动驾驶测试平台</div>
        <p class="quit" @click="quit">退出</p>
      </div>
      <div class="shj-logo">
        <img src="../../assets/image/buaa.png" alt="" />
      </div>
      <div class="shj-content">
        <div class="shj-content-left">
          <div class="velocity">
            <i></i>
            <p>速度（m/s）</p>
            <Velocity />
          </div>
          <div class="acceleration">
            <i></i>
            <p>加速度（m/s²）</p>
            <Acceleration />
          </div>
          <div class="ttc">
            <i></i>
            <p>TTC（秒）</p>
            <Ttc />
          </div>
        </div>
        <!--        TODO：UPDATE0110：Carla窗口捕获-->
        <img :src="carlaVideoCamera" alt="Screen Stream" class="img" />
        <!-- 方向盘 -->
<!--        <div class="shj-content-center">
          <div class="brake">
            <p>刹车</p>
            <Brake />
          </div>
          <div class="throttle">
            <p>油门</p>
            <Throttle />
          </div>
          <div class="steering-wheel">
            <p>方向盘</p>
            <div>
              <SteeringWheelVue />
            </div>
          </div>
        </div>-->
        <!--        <video :src="carlaVideoSrc" autoplay playsinline></video>-->
        <div class="shj-content-right">
          <div class="shj-content-right">
            <div class="video">
              <i></i>
              <p>摄像头</p>
              <div>
                <img :src="carlaVideoMultiCamera0" alt="Screen Stream" />
              </div>
            </div>
            <div class="radar">
              <i></i>
              <p>激光雷达</p>
              <img :src="carlaVideoLidar" alt="Screen Stream" />
            </div>
            <div class="carlaVideoSemantic">
              <i></i>
              <p>语义相机</p>
              <img :src="carlaVideoSemantic" alt="Screen Stream" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 速度曲线图组件
import Velocity from "./components/velocity.vue";
// 加速度曲线图组件
import Acceleration from "./components/acceleration.vue";
// ttc曲线图组件
import Ttc from "./components/ttc.vue";
// 刹车组件
import Brake from "./components/brake.vue";
// 油门组件
import Throttle from "./components/throttle.vue";
// 方向盘组件
import SteeringWheelVue from "./components/SteeringWheel.vue";

export default {
  name: "news",
  data() {
    return {
      carlaVideoCamera: "http://localhost:8001/stream_Carla_new/camera",
      carlaVideoLidar: "http://localhost:8001/stream_Carla_new/lidar",
      carlaVideoMultiCamera0:
        "http://127.0.0.1:8001/stream_Carla_new/multi-camera/0",
      carlaVideoSemantic: "http://localhost:8001/stream_Carla_new/semantic",
    };
  },
  components: {
    Velocity,
    Acceleration,
    Ttc,
    Brake,
    Throttle,
    SteeringWheelVue,
  },
  mounted() {
    document.documentElement.scrollTop = 0;
    this.setPageZoom();
    window.addEventListener("resize", this.setPageZoom);
    this.setVedioSources();
  },
  methods: {
    setPageZoom() {
      const screenWidth = window.innerWidth;
      const zoom = screenWidth / 1920;
      document.documentElement.style.zoom = zoom;
    },
    // 退出刷新
    quit() {
      location.reload();
    },

    setVedioSources(window_name = "AUTOMATIC CONTROL") {
      this.carlaVideoCamera = "http://localhost:8001/stream_Carla_new/camera"; // TODO：UPDATE0110：Carla窗口捕获
      this.carlaVideoLidar = "http://localhost:8001/stream_Carla_new/lidar";
      this.carlaVideoMultiCamera0 =
        "http://localhost:8001/stream_Carla_new/multi-camera/0";
      this.carlaVideoSemantic =
        "http://localhost:8001/stream_Carla_new/semantic";
    },
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.setPageZoom);
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
}

a,
router-link {
  text-decoration: none;
}

body,
html {
  width: 100vw;
  height: 100vh;
  background: #161b24;
}

#app {
  height: 945px;
  width: 1920px;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.shj {
  width: 100%;
  height: 100%;
  background: #161b24;
  margin-top: 0;
}

.shj-title {
  width: 100%;
  height: 60px;
  background-position: center;
  background-image: url("../../assets/image/title.png");
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;
  top: -20px;
  z-index: 999;
}

.shj-title-text {
  color: rgb(217, 217, 217);
  text-align: center;
  font-size: 22px;
  line-height: 60px;
  font-weight: 800;
}

.quit {
  color: #fff;
  z-index: 999;
  font-size: 14px;
  position: fixed;
  top: 0px;
  right: 50px;
  cursor: pointer;
}

.shj-logo {
  width: 100%;
  height: 50px;
  color: #fff;
  position: relative;
  z-index: 999;
  overflow: hidden;
  top: -25px;
}

.shj-logo img {
  width: 240px;
  position: absolute;
  top: -62px;
  left: 0px;
}

.shj-content {
  width: 100%;
  height: 100%;
}

.shj-content-left {
  width: 400px;
  position: fixed;
  top: calc(53% - 410px);
  left: 50px;
  z-index: 2;
}

.shj-content-left div {
  width: 400px;
  height: 270px;
  margin-bottom: 10px;
  text-align: center;
  line-height: 260px;
  text-indent: 0px;
  overflow: hidden;
}

.shj-content-right {
  width: 400px;
  position: fixed;
  top: calc(53% - 410px);
  right: 50px;
  z-index: 2;
}

.shj-content-right div {
  width: 400px;
  height: 270px;
  margin-bottom: 10px;
  text-align: center;
  line-height: 260px;
  text-indent: 0px;
}

.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
}

.shj-content-center {
  width: 500px;
  height: 230px;
  position: fixed;
  bottom: 3%;
  left: calc(50% - 250px);
  z-index: 999;
  display: flex;
  justify-content: space-between;
}

.brake {
  width: 100px;
  height: 230px;
  position: relative;
}

.brake p {
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  text-indent: 30px;
  color: #fff;
  opacity: 0.7;
  text-shadow: 0 0 5px white, 0 0 10px white, 0 0 50px white;
}

.throttle {
  width: 100px;
  height: 230px;
  position: relative;
}

.throttle p {
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  text-indent: 30px;
  color: #fff;
  opacity: 0.7;
  text-shadow: 0 0 5px white, 0 0 10px white, 0 0 50px white;
}

.steering-wheel {
  width: 300px;
  height: 230px;
  position: relative;
}

.steering-wheel p {
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  text-indent: 30px;
  color: #fff;
  opacity: 0.7;
  text-shadow: 0 0 5px white, 0 0 10px white, 0 0 50px white;
}

.steering-wheel div {
  width: 150px;
  height: 150px;
  margin-left: 45px;
  margin-top: 20px;
}

.velocity {
  background: linear-gradient(
    90deg,
    rgba(22, 35, 88, 0.8) 0%,
    rgba(22, 35, 88, 0) 100%
  );
  position: relative;
}

.velocity p {
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  text-indent: 30px;
  color: #fff;
  /* background: #015cf0; */
  /* background: linear-gradient(90deg, #015cf0 0%, rgba(22, 35, 88, 0) 100%); */
  background: linear-gradient(
    90deg,
    rgba(22, 35, 88, 0.8) 0%,
    rgba(22, 35, 88, 0) 100%
  );
  opacity: 0.7;
  text-shadow: 0 0 5px white, 0 0 10px white, 0 0 50px white;
}

/* .velocity i {
  display: block;
  width: 15px;
  height: 15px;
  background: #fff;
  border-radius: 15px;
  position: absolute;
  top: 12.5px;
  left: 10px;
} */

.acceleration {
  background: linear-gradient(
    90deg,
    rgba(22, 35, 88, 0.8) 0%,
    rgba(22, 35, 88, 0) 100%
  );
  position: relative;
}

.acceleration p {
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  text-indent: 30px;
  color: #fff;
  /* background: #015cf0; */
  /* background: linear-gradient(90deg, #015cf0 0%, rgba(22, 35, 88, 0) 100%); */
  background: linear-gradient(
    90deg,
    rgba(22, 35, 88, 0.8) 0%,
    rgba(22, 35, 88, 0) 100%
  );
  opacity: 0.7;
  text-shadow: 0 0 5px white, 0 0 10px white, 0 0 50px white;
}

/* .acceleration i {
  display: block;
  width: 15px;
  height: 15px;
  background: #fff;
  border-radius: 15px;
  position: absolute;
  top: 12.5px;
  left: 10px;
} */

.ttc {
  background: linear-gradient(
    90deg,
    rgba(22, 35, 88, 0.8) 0%,
    rgba(22, 35, 88, 0) 100%
  );
  position: relative;
}

.ttc p {
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  text-indent: 30px;
  color: #fff;
  /* background: #015cf0; */
  /* background: linear-gradient(90deg, #015cf0 0%, rgba(22, 35, 88, 0) 100%); */
  background: linear-gradient(
    90deg,
    rgba(22, 35, 88, 0.8) 0%,
    rgba(22, 35, 88, 0) 100%
  );
  opacity: 0.7;
  text-shadow: 0 0 5px white, 0 0 10px white, 0 0 50px white;
}

/* .ttc i {
  display: block;
  width: 15px;
  height: 15px;
  background: #fff;
  border-radius: 15px;
  position: absolute;
  top: 12.5px;
  left: 10px;
} */

.video {
  width: 350px;
  height: 260px;
  overflow: hidden;
  background: linear-gradient(
    90deg,
    rgba(22, 35, 88, 0) 0%,
    rgba(22, 35, 88, 0.8) 100%
  );
  display: flex;
  flex-wrap: wrap;
  position: relative;
}

.video p {
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  text-indent: 30px;
  color: #fff;
  /* background: #015cf0; */
  /* background: linear-gradient(90deg, #015cf0 0%, rgba(22, 35, 88, 0) 100%); */
  opacity: 0.7;
  text-shadow: 0 0 5px white, 0 0 10px white, 0 0 50px white;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
}

/* .video i {
  display: block;
  width: 15px;
  height: 15px;
  background: #fff;
  border-radius: 15px;
  position: absolute;
  top: 12.5px;
  left: 10px;
} */

.video div {
  width: 100%;
  height: 100%;
}

.video div img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.radar {
  width: 350px;
  height: 260px;
  overflow: hidden;
  background: linear-gradient(
    90deg,
    rgba(22, 35, 88, 0) 0%,
    rgba(22, 35, 88, 0.8) 100%
  );
  position: relative;
}

.radar p {
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  text-indent: 30px;
  color: #fff;
  /* background: #015cf0; */
  /* background: linear-gradient(90deg, #015cf0 0%, rgba(22, 35, 88, 0) 100%); */
  opacity: 0.7;
  text-shadow: 0 0 5px white, 0 0 10px white, 0 0 50px white;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
}

/* .radar i {
  display: block;
  width: 15px;
  height: 15px;
  background: #fff;
  border-radius: 15px;
  position: absolute;
  top: 12.5px;
  left: 10px;
} */

.radar img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.carlaVideoSemantic {
  width: 350px;
  height: 260px;
  overflow: hidden;
  background: linear-gradient(
    90deg,
    rgba(22, 35, 88, 0) 0%,
    rgba(22, 35, 88, 0.8) 100%
  );
  position: relative;
}

.carlaVideoSemantic p {
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  text-indent: 30px;
  color: #fff;
  /* background: #015cf0; */
  /* background: linear-gradient(90deg, #015cf0 0%, rgba(22, 35, 88, 0) 100%); */
  opacity: 0.7;
  text-shadow: 0 0 5px white, 0 0 10px white, 0 0 50px white;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
}

/* .carlaVideoSemantic i {
  display: block;
  width: 15px;
  height: 15px;
  background: #fff;
  border-radius: 15px;
  position: absolute;
  top: 12.5px;
  left: 10px;
} */

.carlaVideoSemantic img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
</style>