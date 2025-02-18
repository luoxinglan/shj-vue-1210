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
          <Outcomecharts/>
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
          <Handoff :contents="TTC_displayed"/>
        </div>
        <div class="results-radar">
          <Radarcharts :contents="radarchartscontent"/>
        </div>
        <div class="results-radar-t">
          <Radarchartss :contents="radarchartsscontent"/>
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
            <source :src="selectedVideo.url" type="video/mp4"/>
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
import {onMounted} from "vue";
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
    getList(metric) {
      this.radarchartscontent = metric;
      this.radarchartsscontent = metric;
      this.fetchTTCData(metric);
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
    async fetchTTCData(metric) {
      const metricId = metric.id; // 这里可以替换为你想要查询的 metric_id
      try {
        const response = await axios.get(`api/ttc/${metricId}`);
        // this.TTC_displayed = response.data;
        this.TTC_displayed = this.cutTTCData(metric, response.data);
        console.log('Fetched data in fetchTTCData:', this.TTC_displayed); // 调试信息
      } catch (error) {
        console.error('Error fetching data in fetchTTCData:', error);
      }
    },

    //TODO：UPDATE1227：修改TTC格式（其实可以在后端弄）
    cutTTCData(metric, TTC_to_process) {
      console.log('metric in cutTTCData:', metric); // 调试信息
      console.log('TTC_to_process in cutTTCData:', TTC_to_process); // 调试信息

      // 检查 TTC_to_process 是否为对象
      if (typeof TTC_to_process !== 'object' || TTC_to_process === null) {
        console.error('TTC_to_process is not an object:', TTC_to_process);
        return {};
      }

      // 创建一个新对象用于存放处理后的数据
      var TTC_processed = {};

      // 遍历 TTC_to_process 的每个键值对
      for (let key in TTC_to_process) {
        if (TTC_to_process.hasOwnProperty(key)) {
          console.log(`Processing key ${key} with value:`, TTC_to_process[key]); // 调试信息

          if (key.startsWith("TTC")) {
            try {
              // 将字符串转换为数组
              let parsedArray = JSON.parse(TTC_to_process[key]);
              console.log(`Parsed array for key ${key}:`, parsedArray); // 调试信息
              // 将处理后的数组存入新对象
              TTC_processed[key] = parsedArray;
            } catch (error) {
              console.error('Failed to parse JSON for key:', key, 'Error:', error);
              TTC_processed[key] = TTC_to_process[key]; // 如果解析失败，保留原始值
            }
          } else {
            // 如果不是 TTC 开头的键，则直接复制其值
            TTC_processed[key] = TTC_to_process[key];
            console.log(`Copied non-TTC key ${key} with value:`, TTC_to_process[key]); // 调试信息
          }
        }
      }

      console.log('Processed TTC data:', TTC_processed); // 调试信息
      return TTC_processed;
    }
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
