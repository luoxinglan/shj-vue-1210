<template>
  <div class="test">
    <!-- 感知测试平台 -->
    <div class="test-overview">
      <div class="test-overview-title">感知测试库总览</div>
      <div class="test-overview-content">
        <div class="test-overview-content-table">
          <table>
            <thead cellpadding="0" cellspacing="0">
              <tr>
                <th v-for="(item, index) in tableTitle" :key="index">
                  {{ item }}
                </th>
              </tr>
            </thead>
          </table>
          <vue-seamless-scroll
            :data="tableData"
            :class-option="optionHover"
            v-if="tableData"
            class="test-seamless-warp"
          >
            <ul class="test-table-content">
              <li v-for="(item, index) in tableData" :key="index">
                <span>{{
                  item.task_serial_number ? item.task_serial_number : "-"
                }}</span>
                <span>{{ item.apply_field ? item.apply_field : "-" }}</span>
                <span>{{ item.perceive_task ? item.perceive_task : "-" }}</span>
                <span>{{ item.attack_type ? item.attack_type : "-" }}</span>
                <span>{{ item.test_model ? item.test_model : "-" }}</span>
                <span>{{ item.test_scheme ? item.test_scheme : "-" }}</span>
                <span>{{ item.accuracy ? item.accuracy : "-" }}</span>
                <span>{{
                  item.average_accuracy ? item.average_accuracy : "-"
                }}</span>
                <span>{{ item.recall ? item.recall : "-" }}</span>
                <span>{{ item.iou ? item.iou : "-" }}</span>
                <span>{{
                  item.dice_similarity ? item.dice_similarity : "-"
                }}</span>
                <span>{{ item.model_size ? item.model_size : "-" }}</span>
              </li>
            </ul>
          </vue-seamless-scroll>
        </div>
        <div class="test-overview-content-upload">
          <div class="test-overview-content-upload-title">测试文件上传</div>
          <input type="button" value="被测模型上传" class="test-upload" />
          <input type="button" value="开始测试" class="start-test" />
        </div>
      </div>
    </div>
    <div class="test-show">
      <div class="test-show-title">测试进度展示</div>
      <div class="test-show-content">
        <div class="test-show-content-left">
          <div class="test-show-content-left-select">
            <div class="test-show-select">
              <div class="test-show-select-title">应用领域</div>
              <select v-model="formData.apply_field" @change="fieldSelect">
                <option value="请选择" disabled>-- 请选择 --</option>
                <option
                  v-for="(item, index) in selectData.apply_field"
                  :key="index"
                  :value="item"
                >
                  {{ item }}
                </option>
              </select>
            </div>
            <div class="test-show-select">
              <div class="test-show-select-title">感知任务</div>
              <select v-model="formData.perceive_task" @change="taskSelect">
                <option value="请选择" disabled>-- 请选择 --</option>
                <option
                  v-for="(item, index) in selectData.perceive_task"
                  :key="index"
                  :value="item"
                >
                  {{ item }}
                </option>
              </select>
            </div>
            <div class="test-show-select">
              <div class="test-show-select-title">攻击类型</div>
              <select v-model="formData.attack_type" @change="typeSelect">
                <option value="请选择" disabled>-- 请选择 --</option>
                <option
                  v-for="(item, index) in selectData.attack_type"
                  :key="index"
                  :value="item"
                >
                  {{ item }}
                </option>
              </select>
            </div>
            <div class="test-show-select">
              <div class="test-show-select-title">测试方案</div>
              <select v-model="formData.test_scenarios">
                <option value="请选择" disabled>-- 请选择 --</option>
                <option
                  v-for="(item, index) in selectData.test_scenarios"
                  :key="index"
                  :value="item"
                >
                  {{ item }}
                </option>
              </select>
            </div>
            <div class="test-show-select">
              <div class="test-show-select-title">IOU</div>
              <input
                type="text"
                placeholder="请输入（0-1）"
                v-model="formData.iou"
                oninput="if(value>1)value=1"
              />
            </div>
            <div class="test-show-select">
              <div class="test-show-select-title">置信度</div>
              <input
                type="text"
                placeholder="请输入（0-1）"
                v-model="formData.confidence"
                oninput="if(value>1)value=1"
              />
            </div>
            <div class="test-show-select">
              <div class="test-show-select-title">非极大值</div>
              <input
                type="text"
                placeholder="请输入（0-1）"
                v-model="formData.non_maximum"
                oninput="if(value>1)value=1"
              />
            </div>
          </div>
          <div class="test-show-content-left-progress">
            <div class="test-show-progress-text">
              <p>任务A001</p>
              <span>创建时间：{{ this.date ? this.date : "" }}</span>
            </div>
            <div class="test-show-progress">
              <progress max="100" :value="progressValue"></progress>
            </div>
            <dir class="test-show-progress-number">
              {{ this.progressValue }}%
            </dir>
          </div>
        </div>
        <div class="test-show-content-right">
          <Outcomecharts />
        </div>
      </div>
    </div>
    <div class="test-results">
      <div class="test-results-title">测试结果</div>
      <div class="test-results-content">
        <div class="test-results-dashboard">
          <textarea cols="40" rows="11" id="output"></textarea>
          <button class="test-results-dashboard-button">保存并展示</button>
        </div>
        <div class="test-results-radar">
          <Perceiveradar />
        </div>
        <div class="test-results-histogram">
          <Histogram />
        </div>
        <div class="test-results-authentic">
          <img src="../assets/image/test-results.png" alt="图片加载失败" />
        </div>
        <div class="test-results-perceive">
          <img src="../assets/image/test-results.png" alt="图片加载失败" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "../assets/style/page3.css";
import Perceiveradar from "../components/perceiveradar/perceiveradar.vue";
import Outcomecharts from "../components/outcome/outcome.vue";
import Histogram from "../components/histogram/histogram.vue";
export default {
  name: "page3",
  data() {
    return {
      tableTitle: [
        "任务序号",
        "应用领域",
        "感知任务",
        "攻击类型",
        "被测模型",
        "测试方案",
        "准确率",
        "平均精度",
        "召回率",
        "IOU",
        "骰子相似性",
        "模型大小",
      ],
      tableData: [
        {
          task_serial_number: "A001",
          apply_field: "图像感知",
          perceive_task: "目标分类",
          attack_type: "数字空间",
          test_model: "YOLO-v3",
          test_scheme: "BIM",
          accuracy: "80%",
          average_accuracy: "80%",
          recall: "",
          iou: "0.2",
          dice_similarity: "",
          model_size: "",
        },
        {
          task_serial_number: "A002",
          apply_field: "图像感知",
          perceive_task: "目标检测&追踪",
          attack_type: "数字空间",
          test_model: "YOLO-v5",
          test_scheme: "StepLL",
          accuracy: "",
          average_accuracy: "90%",
          recall: "",
          iou: "0.5",
          dice_similarity: "88%",
          model_size: "10",
        },
        {
          task_serial_number: "A003",
          apply_field: "图像感知",
          perceive_task: "图像分割",
          attack_type: "数字空间",
          test_model: "A-LOAM",
          test_scheme: "C&W",
          accuracy: "95%",
          average_accuracy: "79%",
          recall: "87%",
          iou: "0.6",
          dice_similarity: "",
          model_size: "",
        },
        {
          task_serial_number: "A004",
          apply_field: "图像感知",
          perceive_task: "目标检测",
          attack_type: "物理空间",
          test_model: "YOLO-v1",
          test_scheme: "Pixle",
          accuracy: "80%",
          average_accuracy: "80%",
          recall: "",
          iou: "0.3",
          dice_similarity: "",
          model_size: "2",
        },
        {
          task_serial_number: "A005",
          apply_field: "图像感知",
          perceive_task: "目标检测&追踪",
          attack_type: "物理空间",
          test_model: "YOLO-v6",
          test_scheme: "SSAH",
          accuracy: "87%",
          average_accuracy: "",
          recall: "82%",
          iou: "0.8",
          dice_similarity: "",
          model_size: "",
        },
        {
          task_serial_number: "A006",
          apply_field: "图像感知",
          perceive_task: "目标监测",
          attack_type: "数字空间",
          test_model: "YOLO-v9",
          test_scheme: "FLAT",
          accuracy: "99%",
          average_accuracy: "",
          recall: "88%",
          iou: "0.5",
          dice_similarity: "79%",
          model_size: "7",
        },
      ],
      selectData: {
        apply_field: ["图像感知模块", "激光雷达感知模块"],
        perceive_task: ["目标分类", "目标检测&追踪", "图像分割", "目标检测"],
        attack_type: ["数字空间", "物理空间"],
        test_scenarios: [
          "BIM",
          "StepLL",
          "C&W",
          "PGD",
          "FSGM",
          "Pixle",
          "VMIFGSM",
          "VNIFGSM",
          "PIFGSMPP",
          "Per-CL",
          "SSAH",
          "AdvDrop",
          "Jitter",
          "AdvINN",
          "AdvPatch",
          "AdvYOLO",
          "AdvT-shirt",
          "T-SEA",
          "AdvCaT",
          "AdvCam",
          "FLAT",
          "Mesh Attack",
        ],
      },
      formData: {
        apply_field: "请选择",
        perceive_task: "请选择",
        attack_type: "请选择",
        test_scenarios: "请选择",
        iou: "",
        confidence: "",
        non_maximum: "",
      },
      progressValue: 0,
      date: "",
      field: "",
      task: "",
      type: "",
    };
  },
  computed: {
    optionHover() {
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
    },
  },
  components: {
    Outcomecharts,
    Perceiveradar,
    Histogram,
  },
  methods: {
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
    fieldSelect(e) {
      this.field = e.target.value;
      if (this.field == "图像感知模块") {
        this.selectData.perceive_task = [
          "目标分类",
          "目标检测&追踪",
          "图像分割",
        ];
      } else {
        this.selectData.perceive_task = ["目标检测"];
      }
    },
    taskSelect(e) {
      this.task = e.target.value;
      if (this.task == "目标分类") {
        this.selectData.attack_type = ["数字空间", "物理空间"];
      } else if (this.task == "目标检测&追踪") {
        this.selectData.attack_type = ["物理空间"];
      } else if (this.task == "图像分割") {
        this.selectData.attack_type = ["数字空间", "物理空间"];
      } else {
        this.selectData.attack_type = ["数字空间"];
      }
    },
    typeSelect(e) {
      this.type = e.target.value;
      if (
        this.field == "图像感知模块" &&
        this.task == "目标分类" &&
        this.type == "数字空间"
      ) {
        this.selectData.test_scenarios = [
          "BIM",
          "StepLL",
          "C&W",
          "PGD",
          "FSGM",
          "Pixle",
          "VMIFGSM",
          "VNIFGSM",
          "PIFGSMPP",
          "Per-CL",
          "SSAH",
          "AdvDrop",
          "Jitter",
          "AdvINN",
        ];
      } else if (
        this.field == "图像感知模块" &&
        this.task == "目标分类" &&
        this.type == "物理空间"
      ) {
        this.selectData.test_scenarios = ["AdvPatch", "light attack"];
      } else if (
        this.field == "图像感知模块" &&
        this.task == "目标检测&追踪" &&
        this.type == "物理空间"
      ) {
        this.selectData.test_scenarios = [
          "TTP",
          "AdvLS",
          "AdvCP",
          "TC-EGA",
          "RHDE",
          "AdvYOLO",
          "AdvT-shirt",
          "T-SEA",
          "AdvCaT",
          "AdvCam",
        ];
      } else if (
        this.field == "图像感知模块" &&
        this.task == "图像分割" &&
        this.type == "数字空间"
      ) {
        this.selectData.test_scenarios = ["Mask-RCNN"];
      } else if (
        this.field == "图像感知模块" &&
        this.task == "图像分割" &&
        this.type == "物理空间"
      ) {
        this.selectData.test_scenarios = [
          "segPGD",
          "DarkSAM",
          "Scene-Specific Patch",
        ];
      } else if (
        this.field == "激光雷达感知模块" &&
        this.task == "目标检测" &&
        this.type == "数字空间"
      ) {
        this.selectData.test_scenarios = [
          "FLAT",
          "Mesh Attack",
          "PLA-LiDAR",
          "SlowLiDAR",
          "EVAA",
          "NTA",
          "3D-Vfield",
        ];
      }
    },
  },
  mounted() {
    var time = new Date();
    this.date = time;
    this.date = this.filterTime(this.date);
  },
};
</script>
<style>
</style>