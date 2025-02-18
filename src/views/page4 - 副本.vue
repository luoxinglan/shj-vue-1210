<template>
  <div class="regulation">
    <!-- 规控测试平台 -->
    <div class="overview">
      <div class="overview-title">规控测试库总览</div>
      <div class="overview-data">
        <div class="overview-data-content">
          <table class="overview-data-table" cellpadding="0" cellspacing="0">
            <thead>
              <tr>
                <th
                  class="overview-data-table-title"
                  v-for="(item, index) in tableTitle"
                  :key="index"
                >
                  <div class="overview-data-table-title-text">
                    {{ item }}
                  </div>
                </th>
              </tr>
            </thead>
          </table>
          <div class="seamless-warp-box">
            <!--  <vue-seamless-scroll
              :data="tableData"
              :class-option="optionHover"
              class="seamless-warp"
              v-if="tableData[0]"
            > -->
            <ul class="table-content">
              <li
                v-for="(item, index) in tableData"
                :key="index"
                @click="getList(item)"
              >
                <span> {{ item.index }}</span>
                <span class="outcome">{{ item.collision_rate }}</span>
                <span>{{ item.avg_red_light_freq }}</span>
                <span>{{ item.avg_stop_sign_freq }}</span>
                <span>{{ item.out_of_road_length }}</span>
                <span>{{ item.route_following_stability }}</span>
                <span>{{ item.route_completion }}</span>
                <span>{{ item.avg_time_spent }}</span>
                <span>{{ item.avg_acceleration }}</span>
                <span>{{ item.avg_yaw_velocity }}</span>
                <span>{{ item.avg_lane_invasion_freq }}</span>
                <span>{{ item.safety_os }}</span>
                <span>{{ item.task_os }}</span>
                <span>{{ item.comfort_os }}</span>
                <span>{{ item.final_score }}</span>
              </li>
            </ul>
            <!-- </vue-seamless-scroll> -->
          </div>
        </div>
        <div class="overview-data-chart">
          <Outcomecharts />
        </div>
      </div>
    </div>
    <div class="progress">
      <div class="progress-title">测试进度展示</div>
      <form action="" class="progress-form">
        <div class="progress-form-box">
          <div class="progress-form-select-top">
            <div class="progress-form-select">
              <div class="progress-form-select-title">运算模式</div>
              <div class="progress-form-select-style">
                <select v-model="formData.mode" name="algorithm" class="select">
                  <option
                    v-for="(item, index) in selectData.mode"
                    :key="index"
                    :value="item"
                    class="select-text"
                  >
                    {{ item }}
                  </option>
                </select>
              </div>
            </div>
            <div class="progress-form-select">
              <div class="progress-form-select-title">自动驾驶配置</div>
              <select
                v-model="formData.agent_cfg"
                name="scenario"
                class="select"
              >
                <option
                  v-for="(item, index) in selectData.agent_cfg"
                  :key="index"
                  :value="item"
                  class="select-text"
                >
                  {{ item }}
                </option>
              </select>
            </div>
            <div class="progress-form-select">
              <div class="progress-form-select-title">测试算法配置</div>
              <select
                v-model="formData.scenario_cfg"
                name="scenario"
                class="select"
              >
                <option
                  v-for="(item, index) in selectData.scenario_cfg"
                  :key="index"
                  :value="item"
                  class="select-text"
                >
                  {{ item }}
                </option>
              </select>
            </div>
            <div class="progress-form-select">
              <div class="progress-form-select-title">自动驾驶复训练</div>
              <select
                v-model="formData.continue_agent_training"
                name="scenario"
                class="select"
              >
                <option
                  v-for="(item, index) in selectData.continue_agent_training"
                  :key="index"
                  :value="item"
                  class="select-text"
                >
                  {{ item }}
                </option>
              </select>
            </div>
            <div class="progress-form-select">
              <div class="progress-form-select-title">测试算法复训练</div>
              <select
                v-model="formData.continue_scenario_training"
                name="scenario"
                class="select"
              >
                <option
                  v-for="(item, index) in selectData.continue_scenario_training"
                  :key="index"
                  :value="item"
                  class="select-text"
                >
                  {{ item }}
                </option>
              </select>
            </div>
            <div class="progress-form-select">
              <div class="progress-form-select-title">保存视频</div>
              <select
                v-model="formData.save_video"
                name="scenario"
                class="select"
              >
                <option
                  v-for="(item, index) in selectData.save_video"
                  :key="index"
                  :value="item"
                  class="select-text"
                >
                  {{ item }}
                </option>
              </select>
            </div>
            <div class="progress-form-select">
              <div class="progress-form-select-title">记录过程数据</div>
              <select
                v-model="formData.process_record"
                name="scenario"
                class="select"
              >
                <option
                  v-for="(item, index) in selectData.process_record"
                  :key="index"
                  :value="item"
                  class="select-text"
                >
                  {{ item }}
                </option>
              </select>
            </div>
            <div class="progress-form-select">
              <div class="progress-form-select-title">种子数</div>
              <input
                type="text"
                class="progress-form-input"
                placeholder="请输入"
                v-model="formData.seed"
              />
            </div>
            <div class="progress-form-select">
              <div class="progress-form-select-title">线程数</div>
              <input
                type="text"
                class="progress-form-input"
                placeholder="请输入"
                v-model="formData.threads"
              />
            </div>
            <div class="progress-form-select">
              <div class="progress-form-select-title">CARLA端口</div>
              <input
                type="text"
                class="progress-form-input"
                placeholder="请输入"
                v-model="formData.port"
              />
            </div>
            <div class="progress-form-select">
              <div class="progress-form-select-title">交通仿真端口</div>
              <input
                type="text"
                class="progress-form-input"
                placeholder="请输入"
                v-model="formData.tm_port"
              />
            </div>
            <div class="progress-form-select">
              <div class="progress-form-select-title">固定仿真步长</div>
              <input
                type="text"
                class="progress-form-input"
                placeholder="请输入"
                v-model="formData.fixed_delta_seconds"
              />
            </div>
            <div class="progress-form-select">
              <div class="progress-form-select-title">最大执行步数</div>
              <input
                type="text"
                class="progress-form-input"
                placeholder="请输入"
                v-model="formData.max_episode_step"
              />
            </div>
            <div class="progress-form-select">
              <div class="progress-form-select-title">跳帧</div>
              <input
                type="text"
                class="progress-form-input"
                placeholder="请输入"
                v-model="formData.frame_skip"
              />
            </div>
          </div>
          <div class="progress-form-select-bottom">
            <div class="progress-task" id="border">
              <p>任务A001</p>
              <span>创建时间：{{ this.date ? this.date : "" }}</span>
            </div>
            <div class="progress-progress">
              <div class="progress-progress-box">
                <div class="progressbox">
                  <progress
                    max="100"
                    :value="progressValue"
                    class="progress-progress-progress1"
                  ></progress>
                </div>
                <div class="progress-percentage-number">
                  {{ this.progressValue }}%
                </div>
              </div>
              <div class="progress-progress-box">
                <div class="progressbox2">
                  <progress
                    max="100"
                    :value="smallProgressValue"
                    class="progress-progress-progress2"
                  ></progress>
                </div>
                <div class="progress-percentage-number">
                  场景{{ this.scenarioNumber }} {{ this.smallProgressValue }}%
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="progress-form-button">
          <input
            id="runButton"
            type="button"
            class="progress-form-initiate"
            @click="initiate"
            value="启动"
          />
          <input
            type="button"
            class="progress-form-stop"
            value="终止"
            @click="stop"
          />
          <input
            type="file"
            id="model"
            style="display: none"
            @change="fileChange"
          />
          <input
            type="button"
            class="progress-form-model"
            value="被测模型上传"
            @click="model"
          />
          <input
            type="file"
            id="scenario"
            style="display: none"
            @change="fileChange1"
          />
          <input
            type="button"
            class="progress-form-scenario"
            value="场景文件上传"
            @click="scenario"
          />
        </div>
      </form>
    </div>
    <div class="results">
      <div class="results-title">测试结果</div>
      <div class="results-content">
        <div class="results-dashboard">
          <textarea cols="40" rows="11" id="output"></textarea>
          <button class="results-dashboard-button">保存并展示</button>
        </div>
        <div class="results-curve">
          <Handoff :contents="TTC_displayed" />
        </div>
        <div class="results-radar">
          <Radarcharts :contents="radarchartscontent" />
        </div>
        <div class="results-radar-t">
          <Radarchartss :contents="radarchartsscontent" />
        </div>
        <div class="results-description">
          <div class="results-description-title">视频回放</div>
          <select
            v-model="selectedVideo"
            @change="selectVideo"
            class="results-description-select"
          >
            <option
              v-for="(item, index) in videoList"
              :key="index"
              :value="item"
            >
              {{ item.title }}
            </option>
          </select>
          <video
            muted
            controls
            autoplay="autoplay"
            loop="loop"
            width="100%"
            height="100%"
            ref="videoPlayer"
          >
            <source :src="selectedVideo.url" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
let ws;
let isScriptRunning = false;

//TODO:UPDATE12.16:总体进度条改为动态
function connectWebSocket(vm) {
  console.log("Valid 吗？");
  ws = new WebSocket(`ws://127.0.0.1:8001/ws`);
  console.log("Valid 吗？");
  ws.onopen = () => {
    console.log("WebSocket connection opened.");
    // 启用按钮，但只有在脚本未运行时才允许点击
    document.getElementById("runButton").disabled = isScriptRunning;
  };

  ws.onmessage = (event) => {
    let currentOutput = document.getElementById("output").value;
    document.getElementById("output").value = currentOutput + "\n" + event.data;
    console.log("Received message:", event.data); // 添加调试信息

    //TODO:UPDATE12.16:总体进度条改为动态解析进度信息并更新 progressValue
    const progressMatch = event.data.match(/\[(\d+)\/(\d+)\]/);
    if (progressMatch && vm) {
      const current = parseInt(progressMatch[1], 10);
      const total = parseInt(progressMatch[2], 10);
      if (total > 0) {
        vm.progressValue = Math.round((current / total) * 100);
        console.log(
          "Updated progress value in connectWebSocket:",
          vm.progressValue
        );

        // 检查 progressValue 是否为 100
        if (vm.progressValue === 100) {
          vm.checkAndInsertMetrics();
          vm.checkAndInsertTTC();
        }
      }
    } else {
      //console.error("VM is not defined or no valid progress match found in connectWebSocket.");
    }

    // ... 现有的消息处理代码
    let outputElement = document.getElementById("output");
    outputElement.scrollTop = outputElement.scrollHeight;
  };

  ws.onclose = () => {
    console.log("WebSocket closed");
    // 如果脚本正在运行，则保持按钮禁用状态
    if (isScriptRunning) {
      setTimeout(() => {
        // 尝试重新连接 WebSocket（可选）
        // connectWebSocket();
        // 或者只是启用按钮让用户知道可以重试
        document.getElementById("runButton").disabled = false;
      }, 3000); // 例如，等待3秒后再启用按钮
    }
  };

  ws.onerror = (error) => {
    console.error("WebSocket error in connectWebSocket:", error);
    // 如果脚本正在运行，则保持按钮禁用状态，并显示错误消息
    if (isScriptRunning) {
      isScriptRunning = false;
      document.getElementById("runButton").disabled = false;
    }
  };
}

//生命周期函数
import { onMounted } from "vue";
import "../assets/style/page4.css";
import Outcomecharts from "../components/outcome/outcome.vue";
import Curvecharts from "../components/curve/curve.vue";
import Radarcharts from "../components/radar/radar.vue";
import Radarchartss from "../components/radar/radars.vue";
import Handoff from "../components/handoff/handoff.vue";
import axios from "axios";

export default {
  setup() {
    //TODO：UPDATE12.23
    onMounted(() => {
      console.log("load...in onMounted");
      // connectWebSocket(this);
    });
  },
  data() {
    return {
      formData: {
        mode: "train_agent",
        agent_cfg: "basic.yaml",
        scenario_cfg: "BayesianOptimization.yaml",
        continue_agent_training: "False",
        continue_scenario_training: "False",
        save_video: "False",
        process_record: "False",
        seed: "0",
        threads: "4",
        port: "2000",
        tm_port: "8000",
        fixed_delta_seconds: "0.1",
        max_episode_step: "300",
        frame_skip: "1",
      },
      tableTitle: [
        "任务序号",
        "碰撞率",
        "红灯违反率",
        "违停率",
        "道路偏离率",
        "路线稳定性",
        "路线完成度",
        "平均耗时",
        "平均加速度",
        "平均减速度",
        "车道线违反率",
        "安全得分",
        "任务得分",
        "舒适得分",
        "最终得分",
      ],
      tableData: [
        {
          id: 90,
          collision_rate: 1,
          avg_red_light_freq: 0,
          avg_stop_sign_freq: 0,
          out_of_road_length: 0,
          route_following_stability: 0.92818,
          route_completion: 0.415618,
          avg_time_spent: 0,
          avg_acceleration: 0.593701,
          avg_yaw_velocity: 0.0384105,
          avg_lane_invasion_freq: 0,
          safety_os: 0.375,
          task_os: 0.781266,
          comfort_os: 0.789296,
          final_score: 0.459948,
          index: 1,
        },
        {
          id: 91,
          collision_rate: 1,
          avg_red_light_freq: 0,
          avg_stop_sign_freq: 0,
          out_of_road_length: 0,
          route_following_stability: 0.928461,
          route_completion: 0.415618,
          avg_time_spent: 0,
          avg_acceleration: 0.60099,
          avg_yaw_velocity: 0.0385865,
          avg_lane_invasion_freq: 0,
          safety_os: 0.375,
          task_os: 0.78136,
          comfort_os: 0.786808,
          final_score: 0.459814,
          index: 2,
        },
        {
          id: 92,
          collision_rate: 0.9,
          avg_red_light_freq: 0,
          avg_stop_sign_freq: 0,
          out_of_road_length: 0,
          route_following_stability: 0.930788,
          route_completion: 0.474189,
          avg_time_spent: 0.168333,
          avg_acceleration: 0.563197,
          avg_yaw_velocity: 0.0368658,
          avg_lane_invasion_freq: 0,
          safety_os: 0.4375,
          task_os: 0.745548,
          comfort_os: 0.799979,
          final_score: 0.504783,
          index: 3,
        },
        {
          id: 93,
          collision_rate: 0.7,
          avg_red_light_freq: 0,
          avg_stop_sign_freq: 0,
          out_of_road_length: 0,
          route_following_stability: 0.932226,
          route_completion: 0.59133,
          avg_time_spent: 0.168889,
          avg_acceleration: 0.551709,
          avg_yaw_velocity: 0.0316459,
          avg_lane_invasion_freq: 0,
          safety_os: 0.5625,
          task_os: 0.784889,
          comfort_os: 0.805548,
          final_score: 0.609967,
          index: 4,
        },
        {
          id: 94,
          collision_rate: 0.7,
          avg_red_light_freq: 0,
          avg_stop_sign_freq: 0,
          out_of_road_length: 0,
          route_following_stability: 0.94766,
          route_completion: 0.590007,
          avg_time_spent: 0.19,
          avg_acceleration: 0.388991,
          avg_yaw_velocity: 0.0292469,
          avg_lane_invasion_freq: 0,
          safety_os: 0.5625,
          task_os: 0.782556,
          comfort_os: 0.860587,
          final_score: 0.61289,
          index: 5,
        },
        {
          id: 95,
          collision_rate: 1,
          avg_red_light_freq: 0,
          avg_stop_sign_freq: 0,
          out_of_road_length: 0,
          route_following_stability: 0.929694,
          route_completion: 0.42091,
          avg_time_spent: 0,
          avg_acceleration: 0.603404,
          avg_yaw_velocity: 0.0397769,
          avg_lane_invasion_freq: 0,
          safety_os: 0.375,
          task_os: 0.783535,
          comfort_os: 0.785606,
          final_score: 0.460066,
          index: 6,
        },
        {
          id: 96,
          collision_rate: 0.8,
          avg_red_light_freq: 0,
          avg_stop_sign_freq: 0,
          out_of_road_length: 0,
          route_following_stability: 0.929875,
          route_completion: 0.511515,
          avg_time_spent: 0.17,
          avg_acceleration: 0.563136,
          avg_yaw_velocity: 0.0348404,
          avg_lane_invasion_freq: 0,
          safety_os: 0.5,
          task_os: 0.75713,
          comfort_os: 0.800675,
          final_score: 0.55605,
          index: 7,
        },
        {
          id: 97,
          collision_rate: 1,
          avg_red_light_freq: 0,
          avg_stop_sign_freq: 0,
          out_of_road_length: 0,
          route_following_stability: 0.928615,
          route_completion: 0.399901,
          avg_time_spent: 0,
          avg_acceleration: 0.63734,
          avg_yaw_velocity: 0.0380485,
          avg_lane_invasion_freq: 0,
          safety_os: 0.375,
          task_os: 0.776172,
          comfort_os: 0.77487,
          final_score: 0.458335,
          index: 8,
        },
        {
          id: 98,
          collision_rate: 1,
          avg_red_light_freq: 0,
          avg_stop_sign_freq: 0,
          out_of_road_length: 0,
          route_following_stability: 0.928915,
          route_completion: 0.416941,
          avg_time_spent: 0,
          avg_acceleration: 0.589485,
          avg_yaw_velocity: 0.0390033,
          avg_lane_invasion_freq: 0,
          safety_os: 0.375,
          task_os: 0.781952,
          comfort_os: 0.790504,
          final_score: 0.460122,
          index: 9,
        },
        {
          id: 99,
          collision_rate: 1,
          avg_red_light_freq: 0,
          avg_stop_sign_freq: 0,
          out_of_road_length: 0,
          route_following_stability: 0.93101,
          route_completion: 0.493677,
          avg_time_spent: 0,
          avg_acceleration: 0.484074,
          avg_yaw_velocity: 0.0389844,
          avg_lane_invasion_freq: 0,
          safety_os: 0.375,
          task_os: 0.808229,
          comfort_os: 0.825647,
          final_score: 0.466112,
          index: 10,
        },
        {
          id: 100,
          collision_rate: 0.8,
          avg_red_light_freq: 0,
          avg_stop_sign_freq: 0,
          out_of_road_length: 0,
          route_following_stability: 0.930771,
          route_completion: 0.532759,
          avg_time_spent: 0.1675,
          avg_acceleration: 0.567072,
          avg_yaw_velocity: 0.0339535,
          avg_lane_invasion_freq: 0,
          safety_os: 0.5,
          task_os: 0.765343,
          comfort_os: 0.799658,
          final_score: 0.557209,
          index: 11,
        },
        {
          id: 101,
          collision_rate: 1,
          avg_red_light_freq: 0,
          avg_stop_sign_freq: 0,
          out_of_road_length: 0,
          route_following_stability: 0.928897,
          route_completion: 0.414295,
          avg_time_spent: 0,
          avg_acceleration: 0.584887,
          avg_yaw_velocity: 0.0398622,
          avg_lane_invasion_freq: 0,
          safety_os: 0.375,
          task_os: 0.781064,
          comfort_os: 0.79175,
          final_score: 0.460064,
          index: 12,
        },
        {
          id: 102,
          collision_rate: 0.9,
          avg_red_light_freq: 0,
          avg_stop_sign_freq: 0,
          out_of_road_length: 0,
          route_following_stability: 0.929909,
          route_completion: 0.474189,
          avg_time_spent: 0.17,
          avg_acceleration: 0.584622,
          avg_yaw_velocity: 0.0391753,
          avg_lane_invasion_freq: 0,
          safety_os: 0.4375,
          task_os: 0.744699,
          comfort_os: 0.792068,
          final_score: 0.504187,
          index: 13,
        },
        {
          id: 103,
          collision_rate: 1,
          avg_red_light_freq: 0,
          avg_stop_sign_freq: 0,
          out_of_road_length: 0,
          route_following_stability: 0.927451,
          route_completion: 0.360951,
          avg_time_spent: 0,
          avg_acceleration: 0.688628,
          avg_yaw_velocity: 0.0403549,
          avg_lane_invasion_freq: 0,
          safety_os: 0.375,
          task_os: 0.762801,
          comfort_os: 0.757006,
          final_score: 0.455288,
          index: 14,
        },
        {
          id: 104,
          collision_rate: 0.8,
          avg_red_light_freq: 0,
          avg_stop_sign_freq: 0,
          out_of_road_length: 0,
          route_following_stability: 0.930158,
          route_completion: 0.534082,
          avg_time_spent: 0.17,
          avg_acceleration: 0.560747,
          avg_yaw_velocity: 0.0335729,
          avg_lane_invasion_freq: 0,
          safety_os: 0.5,
          task_os: 0.764747,
          comfort_os: 0.801893,
          final_score: 0.557253,
          index: 15,
        },
        {
          id: 105,
          collision_rate: 0.9,
          avg_red_light_freq: 0,
          avg_stop_sign_freq: 0,
          out_of_road_length: 0,
          route_following_stability: 0.929514,
          route_completion: 0.452438,
          avg_time_spent: 0.17,
          avg_acceleration: 0.620163,
          avg_yaw_velocity: 0.0366061,
          avg_lane_invasion_freq: 0,
          safety_os: 0.4375,
          task_os: 0.737318,
          comfort_os: 0.781077,
          final_score: 0.502438,
          index: 16,
        },
        {
          id: 106,
          collision_rate: 0.666667,
          avg_red_light_freq: 0,
          avg_stop_sign_freq: 0,
          out_of_road_length: 0,
          route_following_stability: 0.94734,
          route_completion: 0.60953,
          avg_time_spent: 0.195,
          avg_acceleration: 0.387961,
          avg_yaw_velocity: 0.0273579,
          avg_lane_invasion_freq: 0,
          safety_os: 0.583333,
          task_os: 0.78729,
          comfort_os: 0.86156,
          final_score: 0.630152,
          index: 17,
        },
        {
          id: 107,
          collision_rate: 1,
          avg_red_light_freq: 0,
          avg_stop_sign_freq: 0,
          out_of_road_length: 0,
          route_following_stability: 0.929522,
          route_completion: 0.417603,
          avg_time_spent: 0,
          avg_acceleration: 0.594577,
          avg_yaw_velocity: 0.0377272,
          avg_lane_invasion_freq: 0,
          safety_os: 0.375,
          task_os: 0.782375,
          comfort_os: 0.789232,
          final_score: 0.460109,
          index: 18,
        },
        {
          id: 108,
          collision_rate: 1,
          avg_red_light_freq: 0,
          avg_stop_sign_freq: 0,
          out_of_road_length: 0,
          route_following_stability: 0.929243,
          route_completion: 0.414295,
          avg_time_spent: 0,
          avg_acceleration: 0.585588,
          avg_yaw_velocity: 0.0405543,
          avg_lane_invasion_freq: 0,
          safety_os: 0.375,
          task_os: 0.781179,
          comfort_os: 0.791286,
          final_score: 0.460054,
          index: 19,
        },
        {
          id: 109,
          collision_rate: 0,
          avg_red_light_freq: 0.35,
          avg_stop_sign_freq: 0,
          out_of_road_length: 0,
          route_following_stability: 0.952281,
          route_completion: 1,
          avg_time_spent: 0.219667,
          avg_acceleration: 0.299638,
          avg_yaw_velocity: 0.000463263,
          avg_lane_invasion_freq: 0,
          safety_os: 0.95625,
          task_os: 0.910872,
          comfort_os: 0.899966,
          final_score: 0.946167,
          index: 20,
        },
        {
          id: 110,
          collision_rate: 0.4,
          avg_red_light_freq: 0,
          avg_stop_sign_freq: 0,
          out_of_road_length: 0,
          route_following_stability: 0.942274,
          route_completion: 0.765718,
          avg_time_spent: 0.209167,
          avg_acceleration: 0.334797,
          avg_yaw_velocity: 0.0223493,
          avg_lane_invasion_freq: 0.015,
          safety_os: 0.75,
          task_os: 0.832942,
          comfort_os: 0.875951,
          final_score: 0.7698,
          index: 21,
        },
        {
          id: 111,
          collision_rate: 0,
          avg_red_light_freq: 0,
          avg_stop_sign_freq: 0,
          out_of_road_length: 0,
          route_following_stability: 0.947832,
          route_completion: 1,
          avg_time_spent: 0.196667,
          avg_acceleration: 0.335236,
          avg_yaw_velocity: 0.0152491,
          avg_lane_invasion_freq: 0,
          safety_os: 1,
          task_os: 0.917055,
          comfort_os: 0.883172,
          final_score: 0.980741,
          index: 22,
        },
        {
          id: 112,
          collision_rate: 1,
          avg_red_light_freq: 0,
          avg_stop_sign_freq: 0,
          out_of_road_length: 0,
          route_following_stability: 0.928197,
          route_completion: 0.414295,
          avg_time_spent: 0,
          avg_acceleration: 0.60636,
          avg_yaw_velocity: 0.037773,
          avg_lane_invasion_freq: 0,
          safety_os: 0.375,
          task_os: 0.780831,
          comfort_os: 0.785289,
          final_score: 0.459646,
          index: 23,
        },
        {
          id: 113,
          collision_rate: 1,
          avg_red_light_freq: 0,
          avg_stop_sign_freq: 0,
          out_of_road_length: 0,
          route_following_stability: 0.928106,
          route_completion: 0.415618,
          avg_time_spent: 0,
          avg_acceleration: 0.603933,
          avg_yaw_velocity: 0.0403574,
          avg_lane_invasion_freq: 0,
          safety_os: 0.375,
          task_os: 0.781241,
          comfort_os: 0.785237,
          final_score: 0.459703,
          index: 24,
        },
        {
          id: 114,
          collision_rate: 0.875,
          avg_red_light_freq: 0,
          avg_stop_sign_freq: 0,
          out_of_road_length: 0,
          route_following_stability: 0.929784,
          route_completion: 0.487508,
          avg_time_spent: 0.17,
          avg_acceleration: 0.575763,
          avg_yaw_velocity: 0.0367835,
          avg_lane_invasion_freq: 0,
          safety_os: 0.453125,
          task_os: 0.749097,
          comfort_os: 0.795818,
          final_score: 0.517439,
          index: 25,
        },
        {
          id: 115,
          collision_rate: 0.8,
          avg_red_light_freq: 0,
          avg_stop_sign_freq: 0,
          out_of_road_length: 0,
          route_following_stability: 0.929827,
          route_completion: 0.498003,
          avg_time_spent: 0.17,
          avg_acceleration: 0.533115,
          avg_yaw_velocity: 0.0342622,
          avg_lane_invasion_freq: 0,
          safety_os: 0.5,
          task_os: 0.75261,
          comfort_os: 0.810874,
          final_score: 0.555984,
          index: 26,
        },
        {
          id: 116,
          collision_rate: 0.7,
          avg_red_light_freq: 0,
          avg_stop_sign_freq: 0,
          out_of_road_length: 0,
          route_following_stability: 0.931034,
          route_completion: 0.587361,
          avg_time_spent: 0.169167,
          avg_acceleration: 0.517048,
          avg_yaw_velocity: 0.0317809,
          avg_lane_invasion_freq: 0,
          safety_os: 0.5625,
          task_os: 0.783076,
          comfort_os: 0.817057,
          final_score: 0.610381,
          index: 27,
        },
        {
          id: 117,
          collision_rate: 1,
          avg_red_light_freq: 0,
          avg_stop_sign_freq: 0,
          out_of_road_length: 0,
          route_following_stability: 0.928791,
          route_completion: 0.419965,
          avg_time_spent: 0,
          avg_acceleration: 0.618661,
          avg_yaw_velocity: 0.0401376,
          avg_lane_invasion_freq: 0,
          safety_os: 0.375,
          task_os: 0.782919,
          comfort_os: 0.7804,
          final_score: 0.459665,
          index: 28,
        },
        {
          id: 118,
          collision_rate: 1,
          avg_red_light_freq: 0,
          avg_stop_sign_freq: 0,
          out_of_road_length: 0,
          route_following_stability: 0.928221,
          route_completion: 0.394153,
          avg_time_spent: 0,
          avg_acceleration: 0.590478,
          avg_yaw_velocity: 0.0364423,
          avg_lane_invasion_freq: 0,
          safety_os: 0.375,
          task_os: 0.774125,
          comfort_os: 0.791027,
          final_score: 0.45899,
          index: 29,
        },
        {
          id: 119,
          collision_rate: 1,
          avg_red_light_freq: 0,
          avg_stop_sign_freq: 0,
          out_of_road_length: 0,
          route_following_stability: 0.928524,
          route_completion: 0.388908,
          avg_time_spent: 0,
          avg_acceleration: 0.606584,
          avg_yaw_velocity: 0.04083,
          avg_lane_invasion_freq: 0,
          safety_os: 0.375,
          task_os: 0.772477,
          comfort_os: 0.784195,
          final_score: 0.45834,
          index: 30,
        },
      ],
      date: "",
      progressValue: 0, //任务X的整体进度UPDATE12.16
      smallProgressValue: 0, //场景n的进度UPDATE12.16
      scenarioNumber: 1,
      selectData: {
        mode: ["train_agent", "train_scenario", "eval"],
        agent_cfg: [
          "basic.yaml",
          "behavior.yaml",
          "ddpg.yaml",
          "dummy.yaml",
          "faster_rcnn.yaml",
          "GAIL.yaml",
          "ppo.yaml",
          "sac.yaml",
          "td3.yaml",
        ],
        scenario_cfg: [
          "advsim.yaml",
          "advtrai.yaml",
          "BayesianOptimization.yaml",
          "ddpg.yaml",
          "dqn.yaml",
          "generate_traffic.yaml",
          "GradDescent.yaml",
          "human.yaml",
          "LC.yaml",
          "nf.yaml",
          "ordinary.yaml",
          "ppo.yaml",
          "ppo_cd.yaml",
          "random.yaml",
          "sac.yaml",
          "scenic.yaml",
          "standard.yaml",
          "td3.yaml",
        ],
        continue_agent_training: ["True", "False"],
        continue_scenario_training: ["True", "False"],
        save_video: ["True", "False"],
        process_record: ["True", "False"],
      },
      videoList: [
        {
          id: 1,
          url: require("../assets/video/regulation/video_0000_id_0200.mp4"),
          title: "video_0000_id_0200.mp4",
        },
        {
          id: 2,
          url: require("../assets/video/regulation/video_0001_id_0201.mp4"),
          title: "video_0001_id_0201.mp4",
        },
        {
          id: 3,
          url: require("../assets/video/regulation/video_0002_id_0202.mp4"),
          title: "video_0002_id_0202.mp4",
        },
        {
          id: 4,
          url: require("../assets/video/regulation/video_0003_id_0203.mp4"),
          title: "video_0003_id_0203.mp4",
        },
        {
          id: 5,
          url: require("../assets/video/regulation/video_0004_id_0204.mp4"),
          title: "video_0004_id_0204.mp4",
        },
        {
          id: 6,
          url: require("../assets/video/regulation/video_0005_id_0205.mp4"),
          title: "video_0005_id_0205.mp4",
        },
      ],
      selectedVideo: {
        id: 1,
        url: require("../assets/video/regulation/video_0000_id_0200.mp4"),
        title: "video_0000_id_0200.mp4",
      },
      radarchartscontent: null,
      radarchartsscontent: null,
      TTC_displayed: {},
    };
  },
  name: "page4",
  components: {
    Outcomecharts,
    Curvecharts,
    Radarcharts,
    Radarchartss,
    Handoff,
  },
  computed: {
    /* optionHover() {
      return {
        hoverStop: true, // 是否开启鼠标悬停stop
        direction: 1, // 0向下 1向上 2向左 3向右
        step: 1, // 数值越大速度滚动越快
        openWatch: true, // 开启数据实时监控刷新dom
        limitMoveNum: 5, //开始滚动的数据量
        singleHeight: 30, //单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        singleWidth: 105, //单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
        waitTime: 1000, //单步运动停止的时间(默认值1000ms)
      };
    }, */
  },
  methods: {
    getList(e) {
      this.radarchartscontent = e;
      this.radarchartsscontent = e;
      console.log(e.id);
      var TTC_list_all = [
        {
          id: 112,
          TTC1: "[28515.719925514288, 51027.514858054376, 91411.84925997088, 163914.02857190056, 37122.49957616799, 77.94036409567343, 45.25141428112895, 33.25601096634131, 24.887600506062945, 19.487758953278515, 15.7669453052825, 12.820576610458184, 10.949872637090882, 9.87748586790226, 9.453055884552404, 9.519822645874587, 7.740049744381466, 6.493140061280378, 5.660893289394411, 5.16209921969252, 4.947507463295199, 4.948481747810145, 4.664982965219794, 4.635612841504131, 4.598380554861813, 4.553572521667097, 4.345328198478919, 3.967481449574568, 3.3909815032293302, 3.0072896865358256, 2.8633428314114493, 2.6050317775344065, 2.324991226624582, 2.139690158241375, 1.977380272363656, 1.8027309717585696, 1.6018962540621735, 1.39928818344396, 1.235877198450529, 1.1167087992783131, 0.9847809281134734, 0.8886733780236632, 0.8297864125384704, 0.7798183178284037, 0.7106634397081741, 0.6126700116915471, 0.5020166357578858, 0.4007386625076197, 0.34229464325380515, -1024, -1024]",
          TTC2: "[28515.719925514288, 51027.514858054376, 91411.84925997088, 163914.02857190056, 37122.49957616799, 77.94036409567343, 45.25141428112895, 33.25601096634131, 24.693529123080356, 19.4861263960754, 15.775292327437375, 12.82952679961433, 10.954081995039523, 9.881891589000936, 9.459193631179796, 9.528009120330962, 7.7485132416923905, 6.501350109606991, 5.668607671739329, 5.163709871524584, 4.947148531568292, 4.945899897605301, 4.663514648341368, 4.633899021150358, 4.597943237385962, 4.553750779527614, 4.345678578375814, 3.967793688522789, 3.391178825066805, 3.0074434509023296, 2.863464357730479, 2.605155935730445, 2.325109901688894, 2.1398187720320307, 1.9775124784251124, 1.8028653974039412, 1.6020235860340386, 1.423390520431102, 1.296314680009944, 1.2446783930572385, 1.1356343432432192, 1.0341535715965622, 0.9235975373830928, 0.8065668492192642, 0.6938509561608257, 0.6278290133612524, 0.5726575344124907, 0.5041327327019928, 0.4108363768687854, 3.680846471444821, 0.695383932247481]",
          TTC3: "[28512.78781932014, 51029.72185440267, 91457.78755918956, 163882.3406143978, 535059123.1502628, 37122.49957616799, 77.94018420103428, 46.28453074308795, 33.088252911393994, 25.35499320792907, 19.76234089921225, 15.5327685479033, 12.757487621257354, 10.827855324396852, 9.873929326533249, 9.44150516289858, 9.340366029000226, 7.679316265155149, 6.452808506090695, 5.6426288260500606, 5.170896152230112, 4.961615146732429, 4.975351439815807, 4.679307173697301, 4.584847977879428, 4.578759279919319, 4.545147541855175, 4.349894500919984, 3.976067785656443, 3.3946059511076228, 3.01381793699994, 2.867742342295439, 2.60705389396764, 2.3259075825157365, 2.1398692576729426, 1.9773752754632423, 1.8027412878875289, 1.6017399972739657, 1.3991164799712268, 1.235728568398842, 1.1164735925462204, 0.9981452102331756, 0.9336064996569032, 0.8868678147150874, 0.8265589962592423, 0.7370420314171771, 0.6272981927737257, 0.5084241480589357, 0.39925693567922993, 0.326109841180697, -1024, 5.804553804588959]",
          TTC4: "[28515.719925514288, 51013.6272903291, 91442.57359649269, 163994.3668213999, 37123.04714186277, 77.94017104521845, 46.05532180810483, 32.95710644612852, 25.12297283281745, 19.649874897066276, 15.707618934379036, 12.786613838541149, 10.92904087071642, 9.858424069546391, 9.26531935885068, 9.415331478219226, 7.666836392499819, 6.43369934007723, 5.61191862169515, 5.035323967766181, 4.799143153053742, 4.442443750641857, 3.998264422605192, 3.817022440374523, 3.6647725598462686, 3.5480954777768887, 3.5251784124147796, 3.528324397417682, 3.3048488425055975, 3.218049018699424, 3.1374265865060025, 2.823176220053526, 2.4110195675764095, 2.0976484679638863, 1.8091146601839836, 1.571831037594265, 1.406489683627633, 1.2663354610354731, 1.1607595829374324, 1.0640724645518649, 0.940769034753592, 0.8429064236127971, 0.76869169407566, 0.6910649067429662, 0.5905323689856393, 0.47559434214509233, 0.37378564280783816, 5.921345264814102, 0.9373938450257328]",
          TTC5: "[28515.719925514288, 51027.514858054376, 91411.84925997088, 163914.02857190056, 37122.49957616799, 77.94036409567343, 45.25141428112895, 33.25601096634131, 24.887600506062945, 19.487758953278515, 15.7669453052825, 12.820576610458184, 10.949872637090882, 10.147636376407348, 9.558499411145196, 9.35516011108446, 7.743593936390772, 6.466146802811751, 5.596646510096885, 5.133046259566329, 4.938782245159233, 4.887861466084819, 4.647492526206261, 4.634232819350408, 4.60487185051495, 4.561953625489783, 4.313609154232534, 3.962860469188711, 3.384735350860705, 3.010654380863124, 2.8695469169155476, 2.6098390585970312, 2.328479092822397, 2.141811695371216, 1.9789507635278052, 1.8041746222540311, 1.6029518534598115, 1.4002717399059716, 1.2369363360440666, 1.1280420225272183, 1.0402011704261365, 0.9871400363169488, 0.9302495633702028, 0.8486065353298501, 0.7472106490868279, 0.6308515086223481, 0.5159722413500472, 0.4178097759805888, 0.3367448110518736, 32951.64801907341, 1.7767644178164732]",
          TTC6: "[28515.719925514288, 51027.514858054376, 91411.84925997088, 163914.02857190056, 37122.49957616799, 77.94036409567343, 44.8688076934715, 33.33621162668347, 25.16301470932312, 19.56210193495526, 15.769692038308367, 12.808757455915272, 10.944345674850531, 9.871337882288532, 9.27464704948062, 9.420769968060526, 7.665687241185548, 6.429540083817939, 5.71664948624683, 5.1953687445220655, 5.048155997134413, 5.029794936256775, 4.686887683404413, 4.628015696713311, 4.585281180639105, 4.531425759702692, 4.327308456295407, 3.960824345432502, 3.389331234453578, 3.008080326418011, 2.8638688008452458, 2.6053687029441064, 2.325083869647519, 2.139784848622755, 1.9774764179109925, 1.802849502224407, 1.6052177913397994, 1.4003914674068936, 1.2366784592863191, 1.1578492580911592, 1.1133144960663688, 1.065871606029796, 0.993207382222174, 0.895772326287102, 0.7784739695480809, 0.6599902253295336, 0.5556680476589454, 0.45182205598848785, 0.36522089761254534, 1.074498358832225, 1.0850929353247427]",
          TTC7: "[28515.719925514288, 51027.514858054376, 91411.84925997088, 163914.02857190056, 37122.49957616799, 77.94036409567343, 45.25141428112895, 33.25601096634131, 24.887600506062945, 19.487758953278515, 15.7669453052825, 12.820576610458184, 10.949872637090882, 9.87748586790226, 9.283937276483496, 9.434691157175262, 7.680570152747211, 6.444174542155563, 5.623301994830316, 5.163783554727122, 4.959465444251728, 4.976047145828649, 4.6806679738776875, 4.650911663330071, 4.604123417009633, 4.554994436393451, 4.298097654460557, 3.955150331860752, 3.378027264195634, 3.0078601664841873, 2.8683477783124753, 2.609392003860026, 2.3279890427942926, 2.141217569319219, 1.978171758163092, 1.8032499322700464, 1.6020809776306426, 1.4251197091203065, 1.3115053458457413, 1.2560854498284737, 1.2045669261598486, 1.1309938231256371, 1.0363574784418264, 0.9236535139156968, 0.7973841270254421, 0.6761976105491543, 0.5714765927855107, 0.4735913155231185, 0.3836086035828075, 2.7121596214510673, 0.8050553608756752]",
          TTC8: "[28515.719925514288, 51027.514858054376, 91411.84925997088, 163914.02857190056, 37122.49957616799, 77.94036409567343, 45.25141428112895, 32.92474300582575, 24.567810767872388, 19.482894766090595, 15.792576380004926, 12.84050707256159, 10.968419180804467, 9.896397639859508, 9.469297815056516, 9.534183441894998, 7.747379798573303, 6.4968276310589035, 5.666634325929869, 5.082745086746069, 4.815261682879638, 4.437277304745325, 3.994391936121103, 3.786150523522146, 3.6912439694450727, 3.5602580822785894, 3.538070988927931, 3.5361130867177684, 3.3125579485175756, 3.2133744242833804, 3.126715952440375, 2.810552241286154, 2.3968418398587876, 2.073453879311534, 1.793341449864567, 1.6131107005654717, 1.3971505571602587, 1.239049256606544, 1.1220388474029972, 1.0151695040733484, 0.8771312200727732, 0.7852191167067817, 0.7255408206294767, 0.6694686203572822, 0.5928736900049716, 0.4908661900276229, 0.3781052645182317, 1.7021737603117657, 0.6187354065938171]",
          TTC9: "[28512.78781932014, 51029.72185440267, 91457.78755918956, 163882.3406143978, 535059123.1502628, 37122.49957616799, 77.94036409567343, 45.25141428112895, 33.25584157984296, 24.695053003589095, 19.25984211830438, 15.769935600584745, 13.153296699059837, 10.973567476345996, 10.16080905044469, 9.556227211671954, 9.513653169720392, 7.782427280232172, 6.485952546154623, 5.607233000395621, 5.127015559180888, 4.929856552637914, 4.941729739641611, 4.662803028681032, 4.638737181222565, 4.6366428661753645, 4.564941401219241, 4.343485403559395, 3.934177258507566, 3.3788288883378548, 3.0039189349432225, 2.8631566751193627, 2.605753786410097, 2.3257507979839165, 2.1402070792636407, 1.977744699670385, 1.8030733634768592, 1.602181465507504, 1.4252926256553853, 1.311708667977887, 1.2562553917109895, 1.2049997056896935, 1.1310487687363973, 1.0349318338324862, 0.9263916343447424, 0.8120419073144458, 0.7064039213864964, 0.6172267055894602, 0.5235506458463552, 0.4157690413178351, 2.6766259248850672, 0.7769339033332211]",
          TTC10:
            "[28515.719925514288, 51027.514858054376, 91411.84925997088, 163914.02857190056, 37122.49957616799, 77.94036409567343, 45.25141428112895, 32.92474300582575, 24.567810767872388, 19.28265775865383, 15.788250749278005, 12.845893806650736, 10.97525632284785, 9.90482111482403, 9.481287584401176, 9.550825762448452, 7.596517141172208, 6.444005432066574, 5.629589276402827, 5.1671865908020225, 4.9627279975710925, 4.979129739605861, 4.683982791585951, 4.590964367533812, 4.584446685357306, 4.551053353036841, 4.303710786838943, 3.96587103189055, 3.402676811931615, 3.0258593248187973, 2.8764497112667553, 2.612556478407415, 2.3295156220533184, 2.142653274371962, 1.9799172912719285, 1.8052557769268125, 1.6100792986001673, 1.4288729003741316, 1.3135406397188916, 1.2572469153751902, 1.2078167740173515, 1.1329759849662913, 1.0376716811416715, 0.924797182711827, 0.7991777701231885, 0.6775682654518792, 0.5728718246520194, 0.4750909096939681, 0.38583684942993185, 2.6318184278434997, 0.8017091206399738]",
          metrics_id: 90,
        },
        {
          id: 113,
          TTC1: "[28515.719925514288, 51027.514858054376, 91411.84925997088, 163914.02857190056, 37122.49957616799, 77.94036409567343, 45.25141428112895, 33.25601096634131, 24.887600506062945, 19.487758953278515, 15.7669453052825, 12.820576610458184, 10.949872637090882, 9.87748586790226, 9.453055884552404, 9.519822645874587, 7.740049744381466, 6.493140061280378, 5.660893289394411, 5.16209921969252, 4.947507463295199, 4.948481747810145, 4.664982965219794, 4.635612841504131, 4.598380554861813, 4.553572521667097, 4.345328198478919, 3.967481449574568, 3.3909815032293302, 3.0072896865358256, 2.8633428314114493, 2.6050317775344065, 2.324991226624582, 2.139690158241375, 1.977380272363656, 1.8027309717585696, 1.6018962540621735, 1.39928818344396, 1.235877198450529, 1.1167087992783131, 0.9847809281134734, 0.8770321846087044, 0.7914085844560026, 0.7321050386019798, 0.6744113649873675, 0.5957753408163822, 0.4974008262648138, 0.4074240374368035, 0.373165152504515, -1024, -1024]",
          TTC2: "[28515.719925514288, 51027.514858054376, 91411.28880285769, 163913.9543565578, 37122.49957616799, 77.94036409567343, 45.25141428112895, 32.98088592594852, 25.108966417784092, 19.518435351378233, 15.768387727003432, 13.130053715281967, 10.973150668782278, 9.85699627001511, 9.421449128969597, 9.468875444060876, 7.685720344146249, 6.438544644922529, 5.608748931946089, 5.148472627392678, 5.00863346706515, 5.004023985688619, 4.68196692141815, 4.638092406296408, 4.591476048930231, 4.540687856894341, 4.335999628430492, 3.9613817408732888, 3.3872350870828645, 3.005016080076812, 2.861443140649507, 2.603594054268467, 2.323724828292134, 2.138584277475075, 1.9763173321839855, 1.8017005670065187, 1.600978172992314, 1.4241360520931552, 1.3104898863656926, 1.255209535348652, 1.2049282313706182, 1.1293318948854778, 1.0352390770489277, 0.9228775305364624, 0.813011958720284, 0.7192201110413877, 0.6228534759227641, 0.518837085252481, 0.41875328044346855, -1024, 1.3656970536386563]",
          TTC3: "[28515.719925514288, 51027.514858054376, 91411.28880285769, 163913.9543565578, 37122.49957616799, 77.94036409567343, 44.87752148645503, 32.442648709128314, 25.10040403446111, 19.583192596192813, 15.826578987534548, 12.855843065640432, 10.98009952009494, 9.90807509634926, 9.478142532874992, 9.541192571158987, 7.7505974762166, 6.6345475700548695, 5.848793664165953, 5.228167065539461, 4.967217115061169, 4.930649514151023, 4.636678217535267, 4.585923021566308, 4.620863063897075, 4.576984186583004, 4.365440797496077, 3.9825324306241376, 3.4012115371365548, 3.015502932624319, 2.8707926169884357, 2.612193090619279, 2.331804500405098, 2.157034235847024, 1.9874245013557923, 1.809627794900908, 1.6131612166561755, 1.409762861976831, 1.2422989987271382, 1.1585521303130992, 1.1126243210279023, 1.0628468450721384, 0.9897246084970512, 0.892406719922887, 0.775294407957653, 0.6455393394902761, 0.5227250380092903, 0.4212956185033235, 0.34030631159476904, 3.0827034561312097, -1024]",
          TTC4: "[28515.719925514288, 51027.514858054376, 91411.84925997088, 163914.02857190056, 37122.49957616799, 77.94036409567343, 45.25141428112895, 33.25601096634131, 24.887600506062945, 19.487758953278515, 15.7669453052825, 13.136449647185628, 10.953499845560843, 10.144186432595305, 9.548538577325797, 9.336577799467904, 7.555196125016645, 6.497892513482583, 5.593095608079512, 5.14429383781432, 5.013070185895173, 5.012952719087078, 4.686998400607016, 4.5803862308538745, 4.5707939494008185, 4.529830441688643, 4.277265146070238, 3.954424618137814, 3.3988827409760387, 3.026195322411163, 2.8764132883452267, 2.612072496307209, 2.3287910726466405, 2.1419682744711896, 1.9793218687439773, 1.7994931256139646, 1.6082723594758797, 1.4028549415010594, 1.2388716262803294, 1.159646820951235, 1.116318558982768, 1.0679691660322257, 0.9947209057689188, 0.8971312736959511, 0.7796954615111448, 0.6500206152582418, 0.5274263734785615, 0.4263643984867747, 0.34480419965456943, 5.694334667564764, 9.142990358783376]",
          TTC5: "[28515.719925514288, 51013.6272903291, 91442.30734300484, 163994.95024455828, 37123.04714186277, 77.940521195949, 45.76151366806686, 33.93626943932261, 25.23769363513227, 19.57814467372334, 15.669285434836672, 12.759248533426126, 10.912368979576044, 9.8415707166116, 9.416635491493915, 9.48048509495165, 7.709620873237593, 6.468236259952652, 5.634648157503476, 5.148427899497074, 4.997763579118594, 4.9132025756831235, 4.643211920888575, 4.609813316083046, 4.583894873108163, 4.545338441534623, 4.339928100897382, 3.9630756753306984, 3.3870495580489317, 3.004006934171867, 2.8595452653985274, 2.601140457883243, 2.3212597860143096, 2.138299312468289, 1.9744866181769851, 1.7992765628347536, 1.5984128499675836, 1.3960007263378416, 1.2297258288598671, 1.113024177297543, 0.9474190409673484, 0.859627065177952, 0.7905739449847636, 0.7144669073890221, 0.6152264680459981, 0.5326312005124114, 0.4464370297056209, 0.36431066887874264, -1024, 1.7176923908834292]",
          TTC6: "[28512.78781932014, 51029.72185440267, 91457.78755918956, 163882.3406143978, 535059123.1502628, 37122.49957616799, 77.94036409567343, 45.25141428112895, 33.25584157984296, 24.895904870033625, 19.488435499708103, 15.573131501133334, 12.77938891466317, 10.954003290041802, 9.890575812853672, 9.4673876525729, 9.366616316732395, 7.539383351523126, 6.540930619685586, 5.680318986223997, 5.092294827078123, 4.820861683419605, 4.4428794847743545, 3.994751186525935, 3.7839662476958753, 3.6864808200569543, 3.5527924595234244, 3.527544358428659, 3.5314989779146777, 3.310989793241926, 3.216401170128931, 3.1374469570533483, 2.825551878907189, 2.4139958713041936, 2.1008264487274566, 1.809029377384196, 1.573284899162166, 1.4085514940251138, 1.269036634074077, 1.1634346259732302, 1.078042136448718, 1.0011146226743404, 0.9496100820547226, 0.8760798452279286, 0.7653818673610557, 0.636085635521335, 0.5070161996048053, 0.403000384234376, 0.3173396617117071, 1.9766614720507347, 0.7835852244671344]",
          TTC7: "[28515.719925514288, 51027.514858054376, 91411.84925997088, 163914.02857190056, 37122.49957616799, 77.94018420103428, 46.28446534659862, 34.228431355259794, 25.53636865648504, 19.49309903764317, 15.69042246997138, 12.781540892500612, 10.931249191259834, 9.862668647896736, 9.439641799983626, 9.508064920177889, 7.567344230924057, 6.421169554032965, 5.711920321307715, 5.185689499744681, 4.962794836820482, 4.965256027258389, 4.664971929854212, 4.626170472024798, 4.588221822157376, 4.544379434755472, 4.337861635562895, 3.961582237410372, 3.3864895685758305, 3.00364567041967, 2.8599173204833814, 2.601957037601516, 2.322181899703737, 2.1370215345151897, 1.9747751322890053, 1.800198408891171, 1.602701356733956, 1.3979324098968444, 1.2343215962226848, 1.1573128527869907, 1.1109570984673107, 1.0634994481347129, 0.9903358928162028, 0.8959383026705239, 0.7901858760854027, 0.6754100491873963, 0.566119295672822, 0.470516621831952, 0.37402555758951767, -1024, 1.3459735133494843]",
          TTC8: "[28515.719925514288, 51027.514858054376, 91411.84925997088, 163914.02857190056, 37122.49957616799, 77.94018420103428, 46.28446534659862, 33.082933158757804, 25.31397939490558, 19.732423156721392, 15.723672603306431, 12.799978963277796, 10.93971535223557, 9.86987562916484, 9.444360194130796, 9.510540580221791, 7.7334772450193086, 6.48810997181731, 5.766033608966587, 5.197238029743986, 4.954251554756445, 4.935212784264464, 4.652892724768135, 4.616256267570097, 4.601992699545173, 4.554947339312477, 4.344992946416534, 3.9659975459677175, 3.3891111029150367, 3.0059077156836658, 2.8620783685497195, 2.6043117434045557, 2.3245517800295645, 2.1395096001425213, 1.9772943285932276, 1.8026711745067696, 1.601916112213052, 1.399327493792223, 1.2364621938028617, 1.157850881210235, 1.1127082688645578, 1.064100418496755, 0.9925613890394108, 0.8985605091964202, 0.793209298217175, 0.6785600785400372, 0.5694167021066807, 0.4735174053038738, 0.3774562837635562, -1024, 1.8146753195913543]",
          TTC9: "[28512.78781932014, 51029.72185440267, 91457.78755918956, 163882.3406143978, 535059123.1502628, 37122.49957616799, 77.94036409567343, 45.25141428112895, 32.92485883298924, 24.609861164074857, 19.488384297940957, 15.792764996518546, 12.839954915422265, 10.96770103460771, 9.895595052516455, 9.468395106180116, 9.53326582443572, 7.746827298573597, 6.496461697566792, 5.6662515767073165, 5.169031611033891, 4.955241600370435, 4.957721616323405, 4.672654527935682, 4.6433427186084675, 4.605112115157078, 4.559770368976599, 4.351052428276695, 3.972604358451335, 3.395216831512504, 3.0450262900645617, 2.880668144120678, 2.446732369886392, 2.133701803581632, 1.933305614996352, 1.7594462862918931, 1.5914076928262275, 1.4801956751378929, 1.3685856653757342, 1.272076068366814, 1.2114107481009564, 1.1514639908213835, 1.0560618441772955, 0.916306120459396, 0.7995301087424083, 0.6528463551305217, 0.5284228672450352, 0.42244095099423096, 0.334225870789093, 20.290650759452426, 1.249105548103009]",
          TTC10:
            "[28515.719925514288, 51013.6272903291, 91442.57359649269, 163994.3668213999, 37123.04714186277, 77.94017104521845, 46.05532180810483, 32.95710644612852, 25.12297283281745, 19.649874897066276, 15.512526429891889, 12.744630765824825, 10.818285070340432, 10.101682303594954, 9.545799888879058, 9.524467632016547, 7.795576677118655, 6.50820888399478, 5.63516315913144, 5.129609350100699, 4.924544905374314, 4.929268640740169, 4.652803967310525, 4.626806159104656, 4.590827335323821, 4.546205631097774, 4.338626890211552, 3.9617095494105854, 3.386653997677488, 3.0038489786053764, 2.860113082420179, 2.602088949446605, 2.3224287517967643, 2.13732591855777, 1.9751720249301177, 1.7960817702270209, 1.5986295676398192, 1.3952484481426224, 1.233988280432024, 1.1151662317789972, 0.9833818430369794, 0.8864680604208406, 0.8276352826370891, 0.777321265242082, 0.7081070326795188, 0.6097397382060654, 0.49916354451343975, 0.3970602174458653, 0.34217773659176487, -1024, 17.94005445866771]",
          metrics_id: 91,
        },
        {
          id: 114,
          TTC1: "[28515.719925514288, 51027.514858054376, 91411.84925997088, 163914.02857190056, 37122.49957616799, 77.94036409567343, 45.25141428112895, 33.25601096634131, 24.887600506062945, 19.487758953278515, 15.7669453052825, 12.820576610458184, 10.949872637090882, 9.87748586790226, 9.453055884552404, 9.519822645874587, 7.740049744381466, 6.493140061280378, 5.660893289394411, 5.16209921969252, 4.947507463295199, 4.948481747810145, 4.664982965219794, 4.635612841504131, 4.598380554861813, 4.553572521667097, 4.345328198478919, 3.967481449574568, 3.3909815032293302, 3.0072896865358256, 2.8633428314114493, 2.6050317775344065, 2.324991226624582, 2.139690158241375, 1.977380272363656, 1.8027309717585696, 1.6018962540621735, 1.4249848954240658, 1.3113177250102603, 1.2559781409055113, 1.2046031336299208, 1.1310314739331826, 1.0364386540462276, 0.9237934895616652, 0.7980580365645271, 0.6764971321125098, 0.5716861184187921, 0.4738003386275302, 0.384023546242416, 2.711327012795302, 0.8059489818110358]",
          TTC2: "[28512.78781932014, 51029.72185440267, 91457.78755918956, 163882.3406143978, 535059123.1502628, 37122.49957616799, 77.94036409567343, 45.25141428112895, 33.25584157984296, 24.895904870033625, 19.283403738507864, 15.76243604171943, 13.142749413926571, 10.982579448901667, 10.157652660609047, 9.552378556708728, 9.507823317179618, 7.776559658877348, 6.480151781075936, 5.6012996991235235, 5.1252384676202425, 4.929480121531626, 4.942728300980829, 4.663315949517495, 4.63951394541366, 4.637699865113343, 4.565001429427444, 4.304349227078592, 3.9138449425063744, 3.376830007062693, 3.0070445535489645, 2.867383592733215, 2.6086816594185627, 2.3274566548430213, 2.1410010981875938, 1.9781429065036389, 1.8033642317802243, 1.6023562012211798, 1.399772043706485, 1.2364762497025723, 1.117195333221127, 0.999069527473523, 0.934257741565506, 0.8876955581058266, 0.8274154921509205, 0.7383526836394296, 0.6279904699462644, 0.5093473926160371, 0.4004751194395955, 0.3284392381176362, -1024, 9.84911377638455]",
          TTC3: "[28515.719925514288, 51027.514858054376, 91411.84925997088, 163914.02857190056, 37122.49957616799, 77.94036409567343, 44.8688076934715, 33.33621162668347, 25.16301470932312, 19.56210193495526, 15.769692038308367, 12.808757455915272, 10.944345674850531, 9.871337882288532, 9.442847238270645, 9.505607095346566, 7.724838901258209, 6.613844929109798, 5.718378013321965, 5.1738500405637255, 4.944447707492754, 4.92809346747053, 4.652778919032807, 4.621049050362153, 4.594861086081585, 4.555442745823037, 4.348748535267549, 3.970481456140131, 3.392947547691477, 3.0088086907842717, 2.864596104813231, 2.6062960153726955, 2.3262351884503323, 2.143338884743333, 1.9794355223377087, 1.804104896712999, 1.6086523624669569, 1.4019396587019048, 1.2369857460111138, 1.1174800001948706, 0.9856360858528712, 0.8778690088154352, 0.7925002792993983, 0.7359367837935059, 0.6896266751350748, 0.6297554238367079, 0.5508283174781843, 0.47835787681462777, 0.4735680777915999, 42.838460185708165, -1024]",
          TTC4: "[28515.719925514288, 51027.514858054376, 91411.84925997088, 163914.02857190056, 37122.49957616799, 77.94036409567343, 45.25141428112895, 33.25601096634131, 24.693529123080356, 19.4861263960754, 15.775292327437375, 12.82952679961433, 10.954081995039523, 9.881891589000936, 9.459193631179796, 9.528009120330962, 7.7485132416923905, 6.501350109606991, 5.668607671739329, 5.163709871524584, 5.005719965976463, 4.916412227776092, 4.648702205204007, 4.614892714949429, 4.591907239047275, 4.554632312197762, 4.349078658933101, 3.9711569642264255, 3.3873246474780347, 3.007034669802584, 2.864290923639701, 2.606145209554501, 2.3174340081579974, 2.1377688681932936, 1.9778478791501917, 1.8039865873810992, 1.6030204013482008, 1.4001986063455678, 1.2366202655960494, 1.1172609072095507, 0.9852239208223008, 0.8890404498120672, 0.8302266895116108, 0.7802856176590846, 0.7112023596294995, 0.6132213272606974, 0.5029286336597738, 0.4013698183706873, 0.34252209435777564, -1024, -1024]",
          TTC5: "[28512.78781932014, 51029.72185440267, 91457.78755918956, 163882.3406143978, 535059123.1502628, 37122.49957616799, 77.94036409567343, 45.25141428112895, 33.25584157984296, 24.895904870033625, 19.283403738507864, 15.76243604171943, 12.825864458164558, 10.956589006156756, 9.885832823291716, 9.464942655344156, 9.53630600964214, 7.589070758834997, 6.576993520496324, 5.694422326335155, 5.1737944669753215, 4.95022785234442, 4.943029036727116, 4.661462520392721, 4.629896335236269, 4.596942139898252, 4.554435344222762, 4.346977230181439, 3.9690380385186983, 3.3920655298610045, 3.0426005211132123, 2.8779973539602226, 2.4444142098667734, 2.131590122441857, 1.9313503215071175, 1.766304142197625, 1.5926139009354976, 1.4832879399565422, 1.367687281137285, 1.269102468122044, 1.1737328313106563, 1.0741106761761126, 1.0118180079848818, 0.9490679018000072, 0.8643512963354162, 0.7679487266678356, 0.6734276556544362, 0.5793049916690252, 0.49250628467373153, 0.4223094257889934, 0.3773600369292739, 8.877562867194795, 1.976156029822324]",
          TTC6: "[28515.719925514288, 51027.514858054376, 91411.84925997088, 163914.02857190056, 37122.49957616799, 77.94036409567343, 45.25141428112895, 32.92474300582575, 24.567810767872388, 19.482894766090595, 15.595568467999447, 12.79878745042785, 10.972846530573744, 9.90970850299913, 9.48644648772883, 9.559944894534198, 7.771600087765325, 6.52110851268878, 5.689141384947722, 5.173783688326435, 4.95391659508896, 4.949650925224578, 4.667834467250342, 4.637654100932571, 4.603202952017363, 4.559704449189172, 4.351547186764052, 3.9730084628937687, 3.395368759452588, 3.045256546955608, 2.886107493782105, 2.4482943124270573, 2.1338125652674056, 1.9309847497121075, 1.7671539193856287, 1.59329213659728, 1.4849173095385622, 1.3696809316051488, 1.274838642076913, 1.185182398512163, 1.063787180526425, 1.0278003877168227, 1.0360319578121726, 1.0193103199834537, 0.9490002864638094, 0.8367856728400156, 0.7609882386853144, 0.6951874755167449, 0.7045707630609312, 0.6925266434974664, 0.9297298715168216, 4.216152806184553, -1024, -1024]",
          TTC7: "[28512.78781932014, 51029.72185440267, 91457.78755918956, 163882.3406143978, 535059123.1502628, 37122.49957616799, 77.94036409567343, 44.8688076934715, 33.33621162668347, 25.16301470932312, 19.35741933625274, 15.765251904677395, 12.814103571143429, 10.863083116667148, 9.872846156070327, 9.434518302297311, 9.486802498761651, 7.715093678564341, 6.6096154069799935, 5.716942729694372, 5.176549384858651, 4.947262480329606, 4.865977957503481, 4.61899610941675, 4.589502558276419, 4.5923981070272495, 4.566246128665802, 4.362480116238656, 3.982301435752776, 3.40128687233829, 3.016614557004792, 2.8693287094984017, 2.6086125933875244, 2.3275929254307326, 2.1418513642413113, 1.9794970581297695, 1.804878728592274, 1.6096581856004986, 1.4027334916488323, 1.2382089354534316, 1.1589629968409487, 1.1155407841907283, 1.0671574121346423, 0.9942328413023362, 0.8967136729193829, 0.7789037944971863, 0.6496403493583454, 0.5270818549308396, 0.4258816406055483, 0.34402095653800313, 5.4397112327570625, 8.564312628102767]",
          TTC8: "[-1024, -1024, -1024, -1024, 26141.161209071975, 76.83442407168566, 44.4120854194182, 33.11987520855671, 24.912258635983505, 19.514854266309676, 15.746496705435908, 13.11013202349068, 10.957182584084151, 9.843795509794596, 9.4081298323284, 9.45528820412344, 7.510994232627787, 6.3606554298657105, 5.547732109434711, 5.132164153795347, 4.947493175316411, 4.981191323595222, 5.046863440552618, 5.21259796600455, 5.33153878069927, 5.526766135642205, 5.620964242527632, 5.446280632443479, 5.187234197501723, 4.8316374846882955, 4.8397223654178045, 4.933835089750905, 5.162226773087878, 5.3954504095785785, 5.748242934457862, 5.890887284693068, 5.832188188749907, 5.6247068671473786, 5.480655099900056, 5.699077784122942, 5.910066390470203, 6.10184301170414, 6.263582607259323, 6.314491176157247, 6.0376737261375855, 6.048450574725293, 5.910195267498557, 5.871646517540452, 6.0039059609681455, 6.027211989977276, 5.579938171253126, 5.505697005789323, 5.632785793960438, 5.448229845009106, 5.474116587426089, 5.186206654688096, 5.897688523516404, 5.945882088160201, 5.5672831202378115, 5.817915536922, 6.504627969811553, 7.965042232799172, 10.416202929132702, 15.810976262501358, 46.90071051240434, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024]",
          TTC9: "[28515.719925514288, 51027.514858054376, 91411.84925997088, 163914.02857190056, 37122.49957616799, 77.94036409567343, 44.8688076934715, 33.33621162668347, 25.16301470932312, 19.56210193495526, 15.769692038308367, 13.12270685884482, 10.969772107624149, 9.854335582136384, 9.41663105206768, 9.462170556598762, 7.678521141893597, 6.431453066107263, 5.601750291738958, 5.147113560581084, 4.948077725602775, 4.96545015297738, 4.67505189896061, 4.6482593807308525, 4.602204956715766, 4.523509550039724, 4.455423286560338, 4.217291210849399, 3.6891084849862312, 3.310947159684931, 2.9600348953775364, 2.6097553888594867, 2.1986553411361944, 1.9329186829270388, 1.752832761481641, 1.5937472407025093, 1.441991232189784, 1.308554641898913, 1.2301541045448148, 1.1898418594247802, 1.1655466571080242, 1.11344817671418, 1.0058789358730365, 0.8588296208646943, 0.7034640403027267, 0.56245942078198, 0.45476877503530944, 0.3702658247922511, 4.804754035620084, 0.9418536833933692]",
          TTC10:
            "[28512.78781932014, 51029.72185440267, 91457.78755918956, 163882.3406143978, 535059123.1502628, 37122.49957616799, 77.94036409567343, 45.25141428112895, 33.25584157984296, 24.695053003589095, 19.48621153065651, 15.775340512344004, 12.8295470297181, 10.95410639561853, 9.881513843881152, 9.459308882443082, 9.528165644657944, 7.748520457255356, 6.5013045344615294, 5.668533974475087, 5.089528840144253, 4.870596387108864, 4.4649881274538235, 3.992337156311626, 3.7755378575487857, 3.6686406512076446, 3.524726410829098, 3.488007749712481, 3.5031857013851697, 3.305842087738234, 3.219863198412429, 3.149437738743979, 2.8305883206911284, 2.415492887566046, 2.091484883453294, 1.808911015767376, 1.6151071807983806, 1.4025254445924809, 1.2326455317996872, 1.1098099744575602, 1.0125707960170411, 0.916505636599375, 0.8620257102272492, 0.8096813873249241, 0.7289174631349289, 0.6321870079724281, 0.5242447053641428, 0.4103233637266012, 0.3011449756707323, 1.854697183958155, 1.691727435315823]",
          metrics_id: 92,
        },
        {
          id: 115,
          TTC1: "[28515.719925514288, 51027.514858054376, 91411.84925997088, 163914.02857190056, 37122.49957616799, 77.94036409567343, 45.25141428112895, 33.25601096634131, 24.887600506062945, 19.487758953278515, 15.7669453052825, 12.820576610458184, 10.949872637090882, 9.87748586790226, 9.453055884552404, 9.519822645874587, 7.740049744381466, 6.493140061280378, 5.660893289394411, 5.16209921969252, 4.947507463295199, 4.948481747810145, 4.664982965219794, 4.635612841504131, 4.598380554861813, 4.553572521667097, 4.345328198478919, 3.967481449574568, 3.3909815032293302, 3.0072896865358256, 2.8633428314114493, 2.6050317775344065, 2.324991226624582, 2.139690158241375, 1.977380272363656, 1.8027309717585696, 1.6018962540621735, 1.39928818344396, 1.2364268404685186, 1.1577827770894331, 1.1125797983699233, 1.0655490371382248, 0.992941682657868, 0.8954856299165551, 0.778127662416362, 0.6596571309693195, 0.5552807338751873, 0.4569202890967599, 0.3675998812465968, 1.7953684364303204, 1.6632760406934055]",
          TTC2: "[28515.719925514288, 51027.514858054376, 91411.28880285769, 163913.9543565578, 37122.49957616799, 77.94036409567343, 45.25141428112895, 33.25598478224998, 24.832436681089895, 19.46752509247009, 15.765599372124512, 12.82213651657035, 10.951545988397363, 9.879291499562736, 9.455299834970049, 9.522315002658312, 7.741915873537491, 6.494658567523105, 5.772982157064557, 5.201214237779932, 4.957293590031001, 4.9375407932228885, 4.655172424286526, 4.618362941243101, 4.603943858726091, 4.557375444237813, 4.3474930793889, 3.968259672074314, 3.3909359348886356, 3.0074562346396694, 2.8635308531399883, 2.6056021208043942, 2.3168942237994083, 2.137847929002876, 1.9771888217199192, 1.833188546733502, 1.6702468748209374, 1.484839314699751, 1.3182678869986555, 1.1514631476231292, 0.9763578653665492, 0.8628098126216899, 0.79121582696409, 0.7344676998834487, 0.6816438858707227, 0.6194576471722206, 0.542705104468499, 0.4589255064834507, 0.379701622481911, -1024, 5.548732687108087]",
          TTC3: "[6888.4965394578585, 9566.829313708067, 19564.744502476336, 39820.35646143238, 35467.72982106316, 77.52554149466877, 46.05020537480655, 32.91159491897662, 25.177364746809623, 19.417921620231205, 15.628186710528624, 12.732069953458996, 10.882423967856582, 9.821241977313504, 9.232993111761695, 9.385019106078891, 7.642465139809503, 6.414721426961691, 5.5985072153641395, 5.025062096132079, 4.776709339959289, 4.4117459892097965, 4.235512671562466, 4.16587508858751, 4.156328493663478, 4.161481711231753, 4.411714685357688, 4.795355257622457, 5.116732931130882, 5.47116230394444, 5.716405641152112, 5.847790304081917, 5.77817266481991, 5.414276583432442, 4.99863316541772, 4.806030132872221, 4.978488012711702, 5.30649823295616, 5.721143323484144, 5.9478999694330845, 6.227134161678013, 6.313006175825519, 6.1350952417531355, 5.760452955202606, 5.056891679419077, 4.623997317851725, 4.391008332949595, 4.113842816511395, 3.947882862827569, 3.766820346353329, 3.55628867533288, 3.3633750540250156, 3.4786790962891474, 3.699913979231474, 4.076310623740981, 3.916450506861374, 4.003060306308291, 4.582447566347228, 11.241483712296414, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024]",
          TTC4: "[28515.719925514288, 51027.514858054376, 91411.84925997088, 163914.02857190056, 37122.49957616799, 77.94018420103428, 46.28446534659862, 34.228431355259794, 25.53636865648504, 19.69434600073898, 15.693703645306003, 12.775954753363498, 10.836285192293095, 9.84843685110746, 9.407927323863248, 9.457046657386163, 7.690846579674412, 6.453131463833085, 5.623620566685674, 5.152579217294085, 4.945576976027213, 4.9559769272017995, 4.666884226284789, 4.637774486130955, 4.631176951050276, 4.538546966787184, 4.454904208778845, 4.208848862522167, 3.668918982125665, 3.299793673281854, 2.9501621696915374, 2.627237727713558, 2.1944915165458942, 1.9370506350947292, 1.7569446258247468, 1.5948901558366442, 1.4425883800525845, 1.3153902572132898, 1.2356811025261865, 1.1946203616050088, 1.1732308306689578, 1.120005253803706, 1.0119922410155726, 0.864382953593055, 0.7084332213357126, 0.5764657175924837, 0.4862936999069084, 0.4086464270904685, 0.32757777070884897, 1.4364086640084683, 1.4498419483393556]",
          TTC5: "[1239.491790717322, -1024, -1024, 8445.246009768818, 2983.200796561646, 77.66750432519083, 46.41515908036349, 33.143874158793636, 25.39839067941755, 19.947009600557635, 15.867247026831564, 12.904359889069289, 11.059360270446744, 9.996799321216065, 9.322840026845432, 9.400987332881682, 7.6338432538507695, 6.409852119079218, 5.59614756222709, 5.10614772496934, 4.8951874972543425, 4.8922265279013235, 4.967730975443392, 5.128232227668066, 5.242613080947889, 5.439711552291564, 5.462924238366904, 5.415423595518429, 5.108103670712122, 4.756357238471984, 4.771021547290884, 4.874264778467086, 5.103382826170308, 5.33224881107858, 5.551669632850711, 6.000546113768583, 6.291624302479535, 6.337108751098813, 6.07906384179922, 5.560907364833363, 5.322461799268892, 5.47427360472276, 5.878083677834564, 6.281005529809781, 6.4688011869920965, 6.7640221063348465, 6.946629377213607, 7.022253641781712, 6.852900654100539, 6.46338577665461, 6.374577846060604, 6.56399124460281, 6.672524777017297, 7.310277836006139, 8.121289387985696, 9.200700426325035, 10.83023724691326, 11.800585748758214, 11.939361094099487, 12.43948652515002, 13.427284286455478, 17.024107604560612, 33.191572153164344, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024]",
          TTC6: "[2205.226792775908, 2882.312298455615, 2333.677444547015, 2781.498184675875, 968.8107725600328, 72.10247218704615, 45.9275522315725, 33.684074124463756, 26.006928986585617, 19.766040246544385, 15.708799430293976, 12.786079171859235, 10.930687071972372, 9.83845413854993, 9.417962543812912, 9.48952309735888, 7.701572240248308, 6.464265205194602, 5.63727760087286, 5.136265000206939, 4.980823951844638, 4.979621870997305, 5.024711334616436, 5.171595845630383, 5.295838923543271, 5.482948408910447, 5.539623421404231, 5.407791212582598, 4.946335633612036, 4.459724336612619, 4.325332462927331, 4.279026900928091, 4.250814597983949, 4.1902827333039, 4.130456401248103, 3.989703303938983, 3.694614589218964, 3.3538349426541454, 3.0563774252652935, 2.8578008925817437, 2.7132822647059585, 2.6222685128078265, 2.5205699710766, 2.386804812456071, 2.310818765641304, 2.2275281350656337, 2.0780322089243466, 1.902622522997044, 1.7733241632829455, 1.799271810405609, 2.0576296107539007, 2.0578240868801325, 2.1110547961381942, 2.064135622272279, 2.028592565045643, 2.1014161156673525, 2.3617826390592755, 2.8262233881180485, 3.8792573492829954, 59.924507391841075, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024, -1024]",
          TTC7: "[28515.719925514288, 51027.514858054376, 91411.28880285769, 163913.9543565578, 37122.49957616799, 77.94036409567343, 45.25141428112895, 33.25598478224998, 24.832436681089895, 19.46752509247009, 15.765599372124512, 13.138098443651586, 10.955513812948787, 9.846041138352511, 9.25033490766816, 9.213852862205536, 7.569096892060289, 6.397598270508908, 5.610957581554277, 5.171825396797102, 4.978561658714089, 5.012497831323073, 4.696551595885147, 4.661863505566401, 4.606024390156308, 4.553184936090948, 4.34340849746078, 3.966631156181105, 3.391432957431253, 3.0078859943851453, 2.864142391761253, 2.605416594474164, 2.325096747293496, 2.1394952565258745, 1.976980496391432, 1.8313483927549208, 1.6648884407900053, 1.4860966334807089, 1.3180404125876672, 1.1952385957396232, 1.0970716764571382, 1.0231116013173296, 0.938797649074993, 0.8407057704417369, 0.7364572771483745, 0.6327119514416811, 0.5412001575557415, 0.46624504110634274, 0.38918554086323903, -1024, 1.2600755980365657]",
          TTC8: "[28515.719925514288, 51027.514858054376, 91411.84925997088, 163914.02857190056, 37122.49957616799, 77.94036409567343, 45.25141428112895, 33.25601096634131, 24.887600506062945, 19.487758953278515, 15.7669453052825, 12.820576610458184, 10.949872637090882, 9.87748586790226, 9.453055884552404, 9.519822645874587, 7.740049744381466, 6.493140061280378, 5.660893289394411, 5.16209921969252, 4.947507463295199, 4.948481747810145, 4.664982965219794, 4.635612841504131, 4.598380554861813, 4.553572521667097, 4.345328198478919, 3.967481449574568, 3.3909815032293302, 3.0072896865358256, 2.8633428314114493, 2.6050317775344065, 2.316104783249483, 2.1368946911697426, 1.9772115132296624, 1.8034633744374569, 1.6025792184122771, 1.3997900085920578, 1.2362217581065749, 1.1295088713722825, 1.0402436365382892, 0.9867765256055088, 0.9294862822353984, 0.847872138909699, 0.7469967703779631, 0.6302271298404967, 0.5089583983969928, 0.4018070319733519, 0.32501931958064045, -1024, 2.2171138001829864]",
          TTC9: "[28515.719925514288, 51027.514858054376, 91411.84925997088, 163914.02857190056, 37122.49957616799, 77.94036409567343, 45.25141428112895, 33.25601096634131, 24.887600506062945, 19.487758953278515, 15.7669453052825, 12.820576610458184, 10.949872637090882, 9.87748586790226, 9.453055884552404, 9.346677603481467, 7.516286182600654, 6.380199374846555, 5.583259567581666, 5.160935039053992, 4.972058613806585, 5.0088539871651205, 4.696260162828215, 4.6645663274258515, 4.607163030160356, 4.553353070238752, 4.342994129385311, 3.935576380565013, 3.36529336496105, 3.002073163891141, 2.865764896017218, 2.608311009496885, 2.327397389802817, 2.140567315378769, 1.977803892617183, 1.825501449828009, 1.666301739439495, 1.4866634211443932, 1.3181699832765257, 1.1953904459812728, 1.0969371248459303, 1.0227595137451548, 0.938363766523924, 0.8402202787003857, 0.735922744905777, 0.6431730269785257, 0.5750567004907604, 0.5146107182273263, 0.4414276506234275, 146.7458558634611, 1.0584477530190264]",
          TTC10:
            "[28515.719925514288, 51027.514858054376, 91411.84925997088, 163914.02857190056, 37122.49957616799, 77.94036409567343, 44.8688076934715, 33.33621162668347, 25.16301470932312, 19.56210193495526, 15.769692038308367, 12.808757455915272, 10.944345674850531, 9.871337882288532, 9.442847238270645, 9.505607095346566, 7.724838901258209, 6.478151380402978, 5.6466288095417365, 5.159467362093224, 4.948675884223624, 4.953921486931963, 4.668327688720839, 4.6394774018528455, 4.599807035573856, 4.524190526614761, 4.458584863035894, 4.219399889300659, 3.6902765419572656, 3.3115766551875883, 2.9604229056674423, 2.52560353817604, 2.206205664510107, 2.012961454732078, 1.8597512777344256, 1.7152068466076311, 1.5809787310706802, 1.4507330174891533, 1.3340434351789856, 1.2011200822430614, 1.0401281118923946, 0.9207043815771604, 0.8510745908769977, 0.7397876358339899, 0.6347307330310289, 0.5328402846874303, 0.4337984537463185, 0.3371352036911854, -1024, 1.9218929082519616]",
          metrics_id: 93,
        },
      ];
      var TTC_list_id = TTC_list_all.filter((item, index) => {
        return item.metrics_id == e.id;
      });
      var TTC_selected = TTC_list_id[0];
      // 创建一个新对象用于存放处理后的数据
      var TTC_processed = {};
      // 遍历listData中的每个键值对
      for (let key in TTC_selected) {
        if (key.startsWith("TTC")) {
          // 将字符串转换为数组
          let parsedArray = JSON.parse(TTC_selected[key]);
          // 将处理后的数组存入新对象
          TTC_processed[key] = parsedArray;
        } else {
          // 如果不是TTC开头的键，则直接复制其值
          TTC_processed[key] = TTC_selected[key];
        }
      }
      this.TTC_displayed = TTC_processed;

      // this.fetchTTCData(e);
    },
    // 标准时间转为年月日
    filterTime(time) {
      var date = time;
      var y = date.getFullYear();
      var m = date.getMonth() + 1;
      m = m < 10 ? "0" + m : m;
      var d = date.getDate();
      d = d < 10 ? "0" + d : d;
      var h = date.getHours();
      h = h < 10 ? "0" + h : h;
      var minute = date.getMinutes();
      minute = minute < 10 ? "0" + minute : minute;
      var s = date.getSeconds();
      s = s < 10 ? "0" + s : s;
      return y + "-" + m + "-" + d + " " + h + ":" + minute + ":" + s;
    },
    // 启动点击事件
    initiate(e) {
      e.preventDefault(); // 阻止表单默认提交行为
      console.log(this.formData);
      var time = new Date();
      this.date = time;
      this.date = this.filterTime(this.date);
      var borderStyle = document.getElementById("border");
      borderStyle.style.background = "#111";
      borderStyle.style.transition = "0.35s";
      borderStyle.style.color = "#11151c";
      this.timeStyle();
      if (this.smallProgressValue == 0) {
        //this.startProgress();
      }

      if (isScriptRunning) return; // 防止重复点击

      const button = document.getElementById("runButton");
      const output = document.getElementById("output");

      // 更新状态并显示输出区域
      isScriptRunning = true;
      button.disabled = true;
      output.innerHTML = ""; // 清空之前的输出
      output.style.display = "block"; // 显示输出区域

      fetch("api/run-script", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.formData),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("网络响应异常");
          }
          // 注意：这里不需要返回 response.json()，因为后端应该直接通过 WebSocket 发送输出
          return;
        })
        .catch((error) => {
          console.error("Error:", error);
          isScriptRunning = false;
          button.disabled = false;
        });
    },
    // 终止点击事件
    stop() {
      clearInterval(this.intervalId);
      this.progressValue = 0;
      this.smallProgressValue = 0;
      this.scenarioNumber = 1;
      this.date = "";
      //TODO：UPDATE12.16
      if (this.socket && this.socket.readyState === WebSocket.OPEN) {
        this.socket.close();
      }
      this.checkAndInsertMetrics(); //TODO：UPDATE12.16点击终止按钮更新数据库。
    },
    // TODO：进度条应当从控制台获取:是否要注释掉?
    // startProgress() {
    //   this.intervalId = setInterval(() => {
    //     // 更新第一个进度条
    //     this.smallProgressValue += 10;
    //     if (this.smallProgressValue > 100) {
    //       // 当第一个进度条达到100%
    //       this.smallProgressValue = 0; // 重置第一个进度条
    //       this.scenarioNumber += 1;
    //       this.progressValue += 10;//第二个进度条增加10% // UPDATE12.16：progressValue才是第一个进度条。。。。
    //       // TODO：是否放弃第二个进度条
    //       // 如果第二个进度条也达到了100%，则停止定时器
    //       if (this.progressValue >= 100) {
    //         this.scenarioNumber = 1;
    //         clearInterval(this.intervalId);
    //       }
    //     }
    //   }, 500); // 每秒更新一次进度
    // },
    // 相机效果
    timeStyle() {
      this.timerStyle = setInterval(() => {
        var borderStyle = document.getElementById("border");
        borderStyle.style.background = "#161b24";
        borderStyle.style.color = "#fff";
      }, 350);
    },
    // 被测模型上传点击事件
    model() {
      var file = document.getElementById("model");
      file.click();
    },
    fileChange() {
      var file = document.getElementById("model");
      var name = file.files[0].name;
      this.selectData.agent_cfg.push(name);
    },
    // 场景文件上传
    scenario() {
      var file = document.getElementById("scenario");
      file.click();
    },
    fileChange1() {
      var file = document.getElementById("scenario");
      var name = file.files[0].name;
      this.selectData.scenario_cfg.push(name);
    },
    // 切换视频
    selectVideo() {
      const selectedVideo = this.videoList.find(
        (video) => video.id === this.selectedVideo.id
      );
      if (selectedVideo) {
        this.selectedVideo = selectedVideo;
        this.$refs.videoPlayer.load(); // 重新加载视频以确保新的视频被加载
        this.$refs.videoPlayer.play(); // 自动播放新选择的视频
      }
    },
    fetchMetrics() {
      axios
        .get("api/metrics")
        .then((response) => {
          this.tableData = response.data;
        })
        .catch((error) => {
          console.error("Error fetching metrics:", error);
        });
    },

    // TODO：checkAndInsertMetrics插入2024.UPDATE12.16
    checkAndInsertMetrics() {
      fetch("api/check-and-insert-metrics", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(
            "Check and Insert Response in checkAndInsertMetrics:",
            data
          );
        })
        .catch((error) => {
          console.error(
            "Error checking and inserting metrics in checkAndInsertMetrics:",
            error
          );
        });
    },

    // TODO：UPDATE12.20:checkAndInsertTTC插入
    checkAndInsertTTC() {
      fetch("api/check-and-insert-ttc", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Check and Insert Response in checkAndInsertTTC:", data);
        })
        .catch((error) => {
          console.error(
            "Error checking and inserting metrics in checkAndInsertTTC:",
            error
          );
        });
    },

    //TODO：UPDATE1226：替换TTC数据
    async fetchTTCData(e) {
      const metricId = e.id; // 这里可以替换为你想要查询的 metric_id
      try {
        const response = await axios.get(`api/ttc/${metricId}`);
        this.TTC_displayed = response.data;
        console.log("Fetched data in fetchTTCData:", this.TTC_displayed); // 调试信息
      } catch (error) {
        console.error("Error fetching data in fetchTTCData:", error);
      }
    },
  },
  mounted() {
    // TODO:UPDATE12.16插入metrics
    this.checkAndInsertMetrics();

    // TODO:UPDATE12.20插入TTC
    this.checkAndInsertTTC();

    //获取metrics
    this.fetchMetrics();

    //TODO:UPDATE12.16:总体进度条改为动态
    console.log("Mounted, calling connectWebSocket with this:", this);
    connectWebSocket(this);
  },
};
</script>