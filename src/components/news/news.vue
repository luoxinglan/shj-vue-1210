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
      <div class="shj-logo">北 航</div>
      <div class="shj-content">
        <div class="shj-content-left">
          <div class="velocity">
            <i></i>
            <p>速度（m/s）</p>
            <Velocity/>
          </div>
          <div class="acceleration">
            <i></i>
            <p>加速度（m/s²）</p>
            <Acceleration/>
          </div>
          <div class="ttc">
            <i></i>
            <p>TTC（秒）</p>
            <Ttc/>
          </div>
        </div>
        <!--        TODO：UPDATE0110：Carla窗口捕获-->
        <img :src="carlaVideoCamera" alt="Screen Stream" class="img"/>
        <!--        <video :src="carlaVideoSrc" autoplay playsinline></video>-->
        <div class="shj-content-right">
          <div class="shj-content-right">
            <div class="video">
              <div><img :src="carlaVideoMultiCamera0" alt="Screen Stream"/></div>
              <!--              <div><img :src="carlaVideoMultiCamera1" alt="Screen Stream"/></div>-->
              <!--              <div><img :src="carlaVideoMultiCamera2" alt="Screen Stream"/></div>-->
              <!--              <div><img :src="carlaVideoMultiCamera3" alt="Screen Stream"/></div>-->
            </div>
            <div class="radar">
              <img :src="carlaVideoLidar" alt="Screen Stream"/>
            </div>
            <div class="carlaVideoSemantic">
              <img :src="carlaVideoSemantic" alt="Screen Stream"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Velocity from "./components/velocity.vue";
import Acceleration from "./components/acceleration.vue";
import Ttc from "./components/ttc.vue";

export default {
  name: "news",
  data() {
    return {
      carlaVideoCamera: "http://localhost:8001/stream_Carla_new/camera",
      carlaVideoLidar: "http://localhost:8001/stream_Carla_new/lidar",
      // carlaVideoMultiCamera0: "http://localhost:8001/stream_Carla_new/stitched",
      carlaVideoMultiCamera0: "http://127.0.0.1:8001/stream_Carla_new/multi-camera/0",
      // carlaVideoMultiCamera1: "http://localhost:8001/stream_Carla_new/multicamera/1",
      // carlaVideoMultiCamera2: "http://localhost:8001/stream_Carla_new/multicamera/2",
      // carlaVideoMultiCamera3: "http://localhost:8001/stream_Carla_new/multicamera/3",
      carlaVideoSemantic: "http://localhost:8001/stream_Carla_new/semantic",
    };
  },
  components: {
    Velocity,
    Acceleration,
    Ttc,
  },
  mounted() {
    document.documentElement.scrollTop = 0;
    this.setPageZoom();
    window.addEventListener("resize", this.setPageZoom);
    // this.setVedioSources();
  },
  methods: {
    setPageZoom() {
      const screenWidth = window.innerWidth;
      const zoom = screenWidth / 1920;
      document.documentElement.style.zoom = zoom;
    },
    quit() {
      location.reload();
    },

    // setVedioSources(window_name = "AUTOMATIC CONTROL") {
    //   this.carlaVideoCamera = "http://localhost:8001/stream_Carla_new/camera/5"; // TODO：UPDATE0110：Carla窗口捕获
    //   this.carlaVideoLidar = "http://localhost:8001/stream_Carla_new/lidar/5";
    //   this.carlaVideoMultiCamera0 = "http://localhost:8001/stream_Carla_new/multicamera/0";
    //   this.carlaVideoMultiCamera1 = "http://localhost:8001/stream_Carla_new/multicamera/1";
    //   this.carlaVideoMultiCamera2 = "http://localhost:8001/stream_Carla_new/multicamera/2";
    //   this.carlaVideoMultiCamera3 = "http://localhost:8001/stream_Carla_new/multicamera/3";
    //   this.carlaVideoSemantic="http://localhost:8001/stream_Carla_new/semantic/5";
    // },

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
  //background: #161b24;
  background-position: center;
  background-image: url("../../assets/image/title.png");
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;
  top: -25px;
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
  height: 30px;
  color: #fff;
  position: relative;
  z-index: 999;
}

.shj-content {
  width: 100%;
  height: 100%;
}

.shj-content-left {
  width: 350px;
  /* height: 800px; */
  /* background: #fff; */
  position: fixed;
  top: calc(53% - 400px);
  left: 10px;
  z-index: 2;
}

.shj-content-left div {
  width: 350px;
  height: 260px;
  margin-bottom: 8px;
  text-align: center;
  line-height: 260px;
  text-indent: 0px;
  overflow: hidden;
}

.shj-content-right {
  width: 350px;
  /* height: 800px; */
  /* background: #fff; */
  position: fixed;
  top: calc(53% - 400px);
  right: 10px;
  z-index: 2;
}

.shj-content-right div {
  width: 350px;
  height: 260px;
  margin-bottom: 8px;
  text-align: center;
  line-height: 260px;
  text-indent: 0px;
  //overflow: hidden;
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

.velocity {
  /* background: #161b24; */
  background: linear-gradient(
      90deg,
      rgba(22, 35, 88, 0.8) 0%,
      rgba(22, 35, 88, 0) 100%
  );
  //box-shadow: 3px 3px 10px 5px rgb(23, 232, 248, 0.2);
  position: relative;
}

.velocity p {
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: left;
  text-indent: 30px;
  color: #fff;
  background: #1941bd;
}

.velocity i {
  display: block;
  width: 15px;
  height: 15px;
  background: #fff;
  border-radius: 15px;
  position: absolute;
  top: 12.5px;
  left: 10px;
}

.acceleration {
  /* background: #161b24; */
  background: linear-gradient(
      90deg,
      rgba(22, 35, 88, 0.8) 0%,
      rgba(22, 35, 88, 0) 100%
  );
  //box-shadow: 3px 3px 10px 5px rgb(23, 232, 248, 0.2);
  position: relative;
}

.acceleration p {
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: left;
  text-indent: 30px;
  color: #fff;
  background: #1941bd;
}

.acceleration i {
  display: block;
  width: 15px;
  height: 15px;
  background: #fff;
  border-radius: 15px;
  position: absolute;
  top: 12.5px;
  left: 10px;
}

.ttc {
  /* background: #161b24; */
  background: linear-gradient(
      90deg,
      rgba(22, 35, 88, 0.8) 0%,
      rgba(22, 35, 88, 0) 100%
  );
  //box-shadow: 3px 3px 10px 5px rgb(23, 232, 248, 0.2);
  position: relative;
}

.ttc p {
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: left;
  text-indent: 30px;
  color: #fff;
  background: #1941bd;
}

.ttc i {
  display: block;
  width: 15px;
  height: 15px;
  background: #fff;
  border-radius: 15px;
  position: absolute;
  top: 12.5px;
  left: 10px;
}

.video {
  width: 350px;
  height: 260px;
  overflow: hidden;
  background: linear-gradient(
      90deg,
      rgba(22, 35, 88, 0) 0%,
      rgba(22, 35, 88, 0.8) 100%
  );
  //box-shadow: -3px 3px 10px 5px rgb(23, 232, 248, 0.2);
  display: flex;
  flex-wrap: wrap;
}

.video div {
  width: 50%;
  height: 50%;
  margin: 0;
  padding: 0;
}

.video div img {
  width: 175px;
  height: 130px;
  border: 1px solid #000;
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
  //box-shadow: -3px 3px 10px 5px rgb(23, 232, 248, 0.2);
  position: relative;
}

.radar img {
  width: 350px;
  height: 350px;
  position: absolute;
  top: -40px;
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
  //box-shadow: -3px 3px 10px 5px rgb(23, 232, 248, 0.2);
}

.carlaVideoSemantic img {
  width: 350px;
  height: 260px;
}
</style>