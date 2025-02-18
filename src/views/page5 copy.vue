<template>
  <div class="combine">
    <!-- 虚实结合测试 -->
    <div class="authentic">
      <div class="authentic-title">校园内实车测试</div>
      <div class="authentic-content">
        <iframe id="camera1" allowfullscreen :src="src1"></iframe>
        <iframe id="camera2" allowfullscreen :src="src2"></iframe>
        <iframe id="camera3" allowfullscreen :src="src3"></iframe>
      </div>
    </div>
    <div class="dummy">
      <div class="dummy-title">CARLA虚拟同步</div>
      <div class="dummy-content">
        <video
          id="camera4"
          muted
          controls
          autoplay="autoplay"
          loop="loop"
        ></video>
        <video
          id="camera5"
          muted
          controls
          autoplay="autoplay"
          loop="loop"
        ></video>
        <video
          id="camera6"
          muted
          controls
          autoplay="autoplay"
          loop="loop"
        ></video>
      </div>
      <div class="introduce">
        <div class="introduce-title">虚实结合介绍</div>
        <div class="introduce-content">
          <div class="introduce-text">
            虚实结合：在北航校园内进行自动驾驶实车测试，在CARLA中同步现实场景并实时仿真，实现虚拟融合集群对抗测试验证。
          </div>
          <div class="introduce-img">
            <img src="../assets/image/introduce1.png" alt="" />
            <img src="../assets/image/introduce2.png" alt="" />
            <img src="../assets/image/introduce3.png" alt="" />
            <img src="../assets/image/introduce4.png" alt="" />
          </div>
          <!-- <div class="introduce-img">
            <div class="introduce-img1">
              <p>原型系统仿真测试</p>
              <div>
                <img src="../assets/image/introduce1.png" alt="" />
                <img src="../assets/image/introduce2.png" alt="" />
              </div>
            </div>
            <div class="introduce-img2">
              <p>公路所自动驾驶虚实融合测试</p>
              <img src="../assets/image/introduce3.png" alt="" />
            </div>
            <div class="introduce-img2">
              <p>校园内实车测试</p>
              <img src="../assets/image/introduce4.png" alt="" />
            </div>
          </div> -->
          <!-- <button class="handoff" @click="handoff"></button> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "../assets/style/page5.css";
export default {
  data() {
    return {
      accessToken:
        "at.902l4mqj42jn7q4h8x0nlo4q2861gvy2-7lk228hprg-0fetgmx-xzkrqe4qu",
      DEVICE_SERIAL_1: "BD3078337",
      DEVICE_SERIAL_2: "BD3078489",
      DEVICE_SERIAL_3: "BD9472429",
      src1: "",
      src2: "",
      src3: "",
    };
  },
  name: "page4",
  components: {},
  computed: {},
  methods: {
    setVideoSources() {
      this.src1 = `https://open.ys7.com/ezopen/h5/iframe?url=ezopen://open.ys7.com/${this.DEVICE_SERIAL_1}/1.hd.live&autoplay=1&accessToken=${this.accessToken}`;
      this.src2 = `https://open.ys7.com/ezopen/h5/iframe?url=ezopen://open.ys7.com/${this.DEVICE_SERIAL_3}/0.hd.live&autoplay=1&accessToken=${this.accessToken}`;
      this.src3 = `https://open.ys7.com/ezopen/h5/iframe?url=ezopen://open.ys7.com/${this.DEVICE_SERIAL_2}/0.hd.live&autoplay=1&accessToken=${this.accessToken}`;

      const setupFlvPlayer = (videoId, flvUrl) => {
        const videoElement = document.getElementById(videoId);
        if (flvjs.isSupported()) {
          const flvPlayer = flvjs.createPlayer({
            type: "flv",
            url: flvUrl,
          });
          flvPlayer.attachMediaElement(videoElement);
          flvPlayer.load();
          flvPlayer.play();
        } else {
          console.error(
            `FLV.js is not supported on this browser for ${videoId}`
          );
        }
      };

      setupFlvPlayer(
        "camera4",
        "http://39.106.231.250/live?port=8002&app=flv&stream=carla1"
      );
      setupFlvPlayer(
        "camera5",
        "http://39.106.231.250/live?port=8002&app=flv&stream=carla2"
      );
      setupFlvPlayer(
        "camera6",
        "http://39.106.231.250/live?port=8002&app=flv&stream=carla3"
      );
    },
    handoff() {
      this.src1 = require("../assets/video/regulation/video_0000_id_0200.mp4");
      this.src2 = require("../assets/video/regulation/video_0009_id_0209.mp4");
      this.src3 = require("../assets/video/regulation/video_0005_id_0205.mp4");
    },
  },
  mounted() {
    this.setVideoSources();
  },
};
</script>