<template>
  <div class="combines">
    <!-- 虚实结合测试 -->
    <div class="authentic">
      <div class="authentic-title">
        感知增强
        <el-button type="text" @click="dialogVisible = true" class="news">
          跳转页面
        </el-button>
        <el-dialog
            :visible.sync="dialogVisible"
            width="100%"
            :before-close="handleClose"
            fullscreen
            :close-on-click-modal="false"
            :close-on-press-escape="false"
        >
          <News/>
        </el-dialog>
      </div>
      <div class="authentic-content">
        <div class="perceive-former">
          <img src="../assets/image/zqq.png" alt="图片加载失败"/>
          <p>增强前</p>
        </div>
        <div class="arrowhead">
          <p class="semanteme">语义分割</p>
          <img src="../assets/image/长箭头.png" alt="图片加载失败"/>
          <p class="level">层次处理</p>
        </div>
        <div class="perceive-after">
          <img src="../assets/image/zqh.png" alt="图片加载失败"/>
          <p>增强后</p>
        </div>
        <div class="perceive">
          <!-- <img src="../assets/image/perceive.png" alt="" /> -->
          <el-image
              style="width: 320px; height: 170px"
              :src="url1"
              :preview-src-list="srcList"
          >
          </el-image>
          <p>感知增强算法</p>
        </div>
      </div>
    </div>

    <div class="dummy">
      <div class="dummy-title">决控增强</div>
      <div class="dummy-content">
        <div class="found">
          <img src="../assets/image/car.jpg" alt="图片加载失败"/>
          <p>发现风险</p>
        </div>
        <div class="arrowhead">
          <p class="semanteme">优选轨迹</p>
          <img src="../assets/image/长箭头.png" alt="图片加载失败"/>
          <p class="level">脑车协作规划</p>
        </div>
        <div class="circumvent">
          <video
              src="../assets/image/car2.mp4"
              muted
              controls
              autoplay="autoplay"
              loop="loop"
              width="100%"
              height="100%"
          ></video>
          <p>规避风险</p>
        </div>
        <div class="control">
          <!-- <img src="../assets/image/decide.png" alt="" /> -->
          <el-image
              style="width: 320px; height: 170px"
              :src="url2"
              :preview-src-list="srcList"
          >
          </el-image>
          <p>决控增强算法</p>
        </div>
      </div>
    </div>

    <div class="introduce">
      <div class="introduce-title">
        虚实结合增强
        <button @click="handoff" class="handoff"></button>
      </div>
      <div class="introduce-content">
        <iframe
            id="camera1"
            allowfullscreen
            :src="src1"
            v-show="this.switch == true"
        ></iframe>
        <iframe
            id="camera2"
            allowfullscreen
            :src="src2"
            v-show="this.switch == true"
        ></iframe>
        <iframe
            id="camera3"
            allowfullscreen
            :src="src3"
            v-show="this.switch == true"
        ></iframe>
        <video
            id="camera4"
            muted
            controls
            autoplay="autoplay"
            loop="loop"
            v-show="this.switch == false"
        >
          <source :src="src1" type="video/mp4"/>
        </video>
        <video
            id="camera4"
            muted
            controls
            autoplay="autoplay"
            loop="loop"
            v-show="this.switch == false"
        >
          <source :src="src2" type="video/mp4"/>
        </video>
        <video
            id="camera4"
            muted
            controls
            autoplay="autoplay"
            loop="loop"
            v-show="this.switch == false"
        >
          <source :src="src3" type="video/mp4"/>
        </video>
        <video id="camera4" muted controls autoplay="autoplay" loop="loop">
          <source src="../assets/video/combine/dummy1.mp4" type="video/mp4"/>
        </video>
        <!--        // TODO：UPDATE1224：电脑摄像头直播-->
        <!--        <img :src="videoSourceCamera" alt="Camera Feed"/>-->
        <!--        // TODO：UPDATE1225：电脑窗口直播-->
                <img :src="videoSourceWindow" alt="Screen Stream"/>
        <video id="camera5" muted controls autoplay="autoplay" loop="loop">
          <source src="../assets/video/combine/dummy2.mp4" type="video/mp4"/>
        </video>
        <video id="camera6" muted controls autoplay="autoplay" loop="loop">
          <source src="../assets/video/combine/dummy3.mp4" type="video/mp4"/>
        </video>
      </div>
    </div>
  </div>
</template>
<script>
// import Viewer from "@/assets/js/viewer.min.js";
import "../assets/style/page5.css";
import News from "../components/news/news.vue";

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
      switch: false,
      url1: require("../assets/image/perceive.png"),
      srcList: [
        require("../assets/image/perceive.png"),
        require("../assets/image/decide.png"),
      ],
      url2: require("../assets/image/decide.png"),

      videoSourceCamera: '',// TODO：UPDATE1224：电脑摄像头直播

      videoSourceWindow: '',// TODO：UPDATE1225：电脑窗口直播

      sourceWindow: 'SafeCerebro – page5.vue',// UPDATE0108：添加窗口名称变量
      dialogVisible: false,
    };
  },
  name: "page5",
  components: {
    News,
  },
  computed: {},
  methods: {
    handleClose(done) {
      done();
    },
    tap() {
      this.$refs.preview.clickHandler();
    },
    setWindowSources(window_name) {
      this.sourceWindow = window_name;
      this.videoSourceCamera = 'http://localhost:8001/video_feed'; // TODO：UPDATE1224：电脑摄像头直播
      this.videoSourceWindow = 'http://localhost:8001/stream/' + this.sourceWindow // TODO：UPDATE0108：电脑窗口直播
    },
    setVideoSources() {
      this.src1 = require("../assets/video/combine/authentic1.mp4");
      this.src2 = require("../assets/video/combine/authentic2.mp4");
      this.src3 = require("../assets/video/combine/authentic3.mp4");
    },
    handoff() {
      this.setWindowSources(this.sourceWindow);

      this.switch = !this.switch;
      console.log(this.switch);
      if (this.switch == true) {
        this.src1 = `https://open.ys7.com/ezopen/h5/iframe?url=ezopen://open.ys7.com/${this.DEVICE_SERIAL_1}/1.hd.live&autoplay=1&accessToken=${this.accessToken}`;
        this.src2 = `https://open.ys7.com/ezopen/h5/iframe?url=ezopen://open.ys7.com/${this.DEVICE_SERIAL_3}/0.hd.live&autoplay=1&accessToken=${this.accessToken}`;
        this.src3 = `https://open.ys7.com/ezopen/h5/iframe?url=ezopen://open.ys7.com/${this.DEVICE_SERIAL_2}/0.hd.live&autoplay=1&accessToken=${this.accessToken}`;
        this.videoSourceCamera = 'http://localhost:8001/video_feed'; // TODO：UPDATE1224：电脑摄像头直播
        this.videoSourceWindow = 'http://localhost:8001/stream/' + this.sourceWindow // TODO：UPDATE0108：电脑窗口直播
      } else {
        this.src1 = require("../assets/video/combine/authentic1.mp4");
        this.src2 = require("../assets/video/combine/authentic2.mp4");
        this.src3 = require("../assets/video/combine/authentic3.mp4");
      }
    },
  },
  mounted() {
    this.setWindowSources('SafeCerebro – page5.vue');
    // TODO：0108：新增两个窗口：VISUALIZATION MULTIPLE SENSORS、AUTOMATIC CONTROL
    this.setVideoSources();
  },
};
</script>