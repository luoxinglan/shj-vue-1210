<template>
  <div class="leak">
    <!-- 智能漏洞挖掘 -->
    <div class="exploit-mining-platform">
      <div class="exploit-mining-platform-title">漏洞检测数据库</div>
      <div class="exploit-mining-platform-content">
        <div class="exploit-mining-platform-completeness-gimmick">
          <div class="gimmick">全球最大ROS公开漏洞库</div>
          <div class="text">
            通过下述shell指令启动navigation2项目。在运行一段时间后关闭，关闭期间通过终端指令不断向/initialpose话题发送消息。
            <br />
            source install/setup.bash source /opt/ros/humble/setup.bash export
            <br />
            TURTLEBOT3_MODEL=waffle ros2 launch nav2_bringup
            <br />
            tb3_simulation_launch.py
            <br />
            # 运行环境
            <br />
            # OS: Ubuntu22.04
            <br />
            # ROS2: humble
            <br />
            # navigation2: humble
          </div>
        </div>
        <div class="exploit-mining-platform-button">
          <button class="exploit-mining-platform-tested">被测代码上传</button>
          <button class="exploit-mining-platform-tested">场景文件上传</button>
          <button class="exploit-mining-platform-tested">
            种子数据文件上传
          </button>
          <select class="exploit-mining-platform-tested">
            <option value="">测试时长设置</option>
          </select>
          <button class="exploit-mining-platform-tested">
            启动参数/命令行
          </button>
        </div>
        <div class="exploit-mining-platform-completeness">
          <div class="exploit-mining-platform-completeness-progress">
            <el-progress
              type="circle"
              :percentage="progressValue"
              color="#002fa7"
              define-back-color="grey"
              :stroke-width="10"
            ></el-progress>
          </div>

          <div class="exploit-mining-platform-completeness-text">
            {{ progressText }}
            <!-- 进度条：测试中 进度条：已完成本轮测试,总测试时长为 -->
          </div>
          <button
            class="exploit-mining-platform-completeness-button"
            @click="progressStart"
          >
            开始测试
          </button>
        </div>
        <div class="leak-video">
          <select
            class="leak-video-select"
            v-model="selectedVideo"
            @change="selectVideo"
          >
            <option
              v-for="(item, index) in videoList"
              :key="index"
              :value="item"
            >
              {{ item.selectName }}
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
            <source :src="selectedVideo.video" type="video/mp4" />
          </video>
          <el-button
            type="text"
            @click="dialogVisible = true"
            class="leak-video-button"
            >查看视频详情</el-button
          >
          <el-dialog
            :visible.sync="dialogVisible"
            :before-close="handleClose"
            custom-class="leak-dialog"
            width="60%"
            top="5vh"
          >
            <div class="leak-dialog-video">
              <h2 class="video-name">{{ selectedVideo.name }}</h2>
              <div class="video-signature">{{ selectedVideo.signature }}</div>
              <div class="video-unit">{{ selectedVideo.unit }}</div>
              <div class="video-date">{{ selectedVideo.date }}</div>
              <div class="video-manufacturers">
                {{ selectedVideo.manufacturers }}
              </div>
              <div class="video-officialw-ebsite">
                {{ selectedVideo.official_website }}
              </div>
              <div class="video-leak-description">
                <h4>{{ selectedVideo.leak_description_title }}</h4>
                <p
                  v-for="(item, index) in selectedVideo.leak_description_text"
                  :key="index"
                >
                  {{ item }}
                </p>
              </div>
              <div class="video-leak_trigger_code">
                <h4>{{ selectedVideo.leak_trigger_code_title }}</h4>
                <p
                  v-for="(
                    item1, index1
                  ) in selectedVideo.leak_trigger_code_text"
                  :key="index1"
                >
                  {{ item1 }}
                </p>
              </div>
              <div class="video-leak_phenomenon">
                <h4>{{ selectedVideo.leak_phenomenon_title }}</h4>
                <p
                  v-for="(item, index) in selectedVideo.leak_phenomenon_text"
                  :key="index"
                >
                  {{ item }}
                  <img :src="item" alt="" />
                </p>
              </div>
              <div class="video-reference_links">
                <h4>{{ selectedVideo.reference_links_title }}</h4>
                <p
                  v-for="(item2, index2) in selectedVideo.reference_links_text"
                  :key="index2"
                >
                  {{ item2 }}
                </p>
              </div>
              <div class="video-numbering">
                <h4>{{ selectedVideo.numbering }}</h4>
                <p
                  v-for="(item, index) in selectedVideo.numbering_links_text"
                  :key="index"
                >
                  {{ item }}
                </p>
              </div>
            </div>
          </el-dialog>
        </div>
      </div>
    </div>
    <div class="vulnerability-detection-database">
      <div class="vulnerability-detection-database-title">漏洞检测数据库</div>
      <div class="vulnerability-detection-database-content">
        <div class="vulnerability-detection-database-table">
          <table
            class="vulnerability-data-table"
            cellpadding="0"
            cellspacing="0"
          >
            <thead>
              <tr>
                <th
                  class="vulnerability-data-table-title"
                  v-for="(item, index) in tableTitle"
                  :key="index"
                >
                  <div class="vulnerability-data-table-title-text">
                    {{ item }}
                  </div>
                </th>
              </tr>
            </thead>
          </table>
          <div class="vulnerability-table-content-box">
            <!-- <vue-seamless-scroll
            :data="tableData"
            :class-option="optionHover"
            class="vulnerability-warp"
            v-if="tableData[0]"
          > -->
            <ul class="vulnerability-table-content">
              <li v-for="(item, index) in tableData" :key="index">
                <span>
                  <i> {{ item.leak_name }}</i>
                </span>
                <span style="color: #cfa10a">
                  <i>{{ item.models }}</i>
                </span>
                <span>
                  <i>{{ item.leak_numbering }}</i>
                </span>
                <span>
                  <i>{{ item.hazard_level }}</i>
                </span>
                <span>
                  <i>{{ item.leak_type }}</i>
                </span>
                <span style="color: red">
                  <i>{{ item.reference_links }}</i>
                </span>
                <span>
                  <i>{{ item.inclusion_platform }}</i>
                </span>
              </li>
            </ul>
            <!-- </vue-seamless-scroll> -->
          </div>
        </div>
        <div class="vulnerability-detection-database-upload">
          <button class="vulnerability-upload">漏洞数据上传</button>
        </div>
      </div>
    </div>
    <div class="data-results">
      <div class="data-results-title">数据结果</div>
      <div class="data-results-content">
        <div>
          <Echarts1 />
        </div>
        <div>
          <Echarts2 />
        </div>
        <div>
          <Echarts4 />
        </div>
        <div class="vulnerability-logs">
          <h3>漏洞报告日志</h3>
          <div class="vulnerability-logs-text">
            <p>
              机器人操作系统ROS2是广泛应用于工业机器人、家用机器人、酒店服务机器人、自动驾驶汽车等场景的底层操作系统。自主导航系统navigation2是ROS2的重要组成模块之一。
              ROS2-navigation2的源码中对一个名为initial_sub_的指针处理有缺失，存在UAF漏洞缺陷。代码定位于navigation2的nav2_amcl包。攻击者可以在navigation2通过互联网远程向名为”/initialpose”的话题不断发送符合ROS2消息格式的信息，从而使得navigation2的initial_sub_指针不断被调用，以此增大UAF漏洞被触发的可能性。
              二进制漏洞UAF（use-after-free）是一种信息安全领域公认的高危险系统漏洞，攻击者可以通过收集被free的指针并通过将其指向恶意代码等方式实现权限升级、执行shell脚本等危险行为。如果发生在自动驾驶汽车、工业机器人中，将意味着汽车或机器人的控制权限完全被攻击者掌握，带来不可估计的安全损失。
              该漏洞由实验室开发的模糊测试工具发现，并通过我们所提供的修复方法修复。
              <br />
              ROS系统版本：ROS2-humble
              <br />
              Navigation2系统版本：navigation2-humble
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "../assets/style/page2.css";
import Echarts1 from "../components/results/echarts1.vue";
import Echarts2 from "../components/results/echarts2.vue";
import Echarts4 from "../components/results/echarts4.vue";
export default {
  name: "page2",
  data() {
    return {
      tableTitle: [
        "漏洞名称",
        "所属系统/车型",
        "漏洞编号",
        "危害等级",
        "漏洞类型",
        "参考链接",
        "收录平台",
      ],
      tableData: [
        {
          leak_name: "ros-navigation navigation2存在二进制漏洞",
          models: "ROS2-humble:navigation2-humble",
          leak_numbering: "CNVD-2024-29065",
          hazard_level: "中危",
          leak_type: "二进制漏洞",
          reference_links: "无",
          inclusion_platform: "CNVD",
        },
        {
          leak_name: "ros-navigation navigation2存在二进制漏洞",
          models: "ROS2-humble:navigation2-humble",
          leak_numbering: "CNVD-2024-29066",
          hazard_level: "中危",
          leak_type: "二进制漏洞",
          reference_links: "无",
          inclusion_platform: "CNVD",
        },
        {
          leak_name: "ros-navigation navigation2存在二进制漏洞",
          models: "ROS2-humble:navigation2-humble",
          leak_numbering: "CNVD-2024-29071",
          hazard_level: "中危",
          leak_type: "二进制漏洞",
          reference_links: "无",
          inclusion_platform: "CNVD",
        },
        {
          leak_name: "ros-navigation navigation2存在二进制漏洞",
          models: "ROS2-humble:navigation2-humble",
          leak_numbering: "CNVD-2024-29072",
          hazard_level: "中危",
          leak_type: "二进制漏洞",
          reference_links: "无",
          inclusion_platform: "CNVD",
        },
        {
          leak_name: "ros-navigation navigation2存在二进制漏洞",
          models: "ROS2-humble:navigation2-humble",
          leak_numbering: "CNVD-2024-29073",
          hazard_level: "中危",
          leak_type: "二进制漏洞",
          reference_links: "无",
          inclusion_platform: "CNVD",
        },
        {
          leak_name: "ros-navigation navigation2存在二进制漏洞",
          models: "ROS2-humble:navigation2-humble",
          leak_numbering: "CNVD-2024-29074",
          hazard_level: "中危",
          leak_type: "二进制漏洞",
          reference_links: "无",
          inclusion_platform: "CNVD",
        },
        {
          leak_name: "ros-navigation navigation2存在二进制漏洞",
          models: "ROS2-humble:navigation2-humble",
          leak_numbering: "CNVD-2024-29077",
          hazard_level: "中危",
          leak_type: "二进制漏洞",
          reference_links: "无",
          inclusion_platform: "CNVD",
        },
        {
          leak_name: "ROS Planning Navigation2存在二进制漏洞",
          models: "ROS2-humble:navigation2-humble",
          leak_numbering: "CNVD-2024-22504",
          hazard_level: "高危",
          leak_type: "二进制漏洞",
          reference_links: "无",
          inclusion_platform: "CNVD",
        },
        {
          leak_name: "ROS Planning Navigation2存在二进制漏洞",
          models: "ROS2-humble:navigation2-humble",
          leak_numbering: "CNVD-2024-22505",
          hazard_level: "高危",
          leak_type: "二进制漏洞",
          reference_links: "无",
          inclusion_platform: "CNVD",
        },
        {
          leak_name: "planning navigation2存在二进制漏洞",
          models: "ROS2-humble:navigation2-humble",
          leak_numbering: "CNVD-2024-22658",
          hazard_level: "高危",
          leak_type: "二进制漏洞",
          reference_links: "无",
          inclusion_platform: "CNVD",
        },
        {
          leak_name: "机器人操作系统ROS2存在二进制漏洞",
          models: "ROS2-humble:navigation2-humble",
          leak_numbering: "CNVD-2024-18675",
          hazard_level: "高危",
          leak_type: "二进制漏洞",
          reference_links: "无",
          inclusion_platform: "CNVD",
        },
        {
          leak_name: "navigation2存在二进制漏洞",
          models: "ROS2-humble:navigation2-humble",
          leak_numbering: "CNVD-2024-17402",
          hazard_level: "中危",
          leak_type: "二进制漏洞",
          reference_links: "无",
          inclusion_platform: "CNVD",
        },
        {
          leak_name: "navigation2存在二进制漏洞",
          models: "ROS2-humble:navigation2-humble",
          leak_numbering: "CNVD-2024-16363",
          hazard_level: "中危",
          leak_type: "二进制漏洞",
          reference_links: "无",
          inclusion_platform: "CNVD",
        },
        {
          leak_name: "navigation2存在二进制漏洞",
          models: "ROS2-humble:navigation2-humble",
          leak_numbering: "CNVD-2024-16329",
          hazard_level: "中危",
          leak_type: "二进制漏洞",
          reference_links: "无",
          inclusion_platform: "CNVD",
        },
        {
          leak_name: "navigation2存在二进制漏洞",
          models: "ROS2-humble:navigation2-humble",
          leak_numbering: "CNVD-2024-16333",
          hazard_level: "中危",
          leak_type: "二进制漏洞",
          reference_links: "无",
          inclusion_platform: "CNVD",
        },
        {
          leak_name: "ROS2存在不安全权限漏洞",
          models: "ROS2-humble:navigation2-humble",
          leak_numbering: "CVE-2024-44852",
          hazard_level: "未评级",
          leak_type: "二进制漏洞",
          reference_links:
            "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2024-44852",
          inclusion_platform: "CVE",
        },
        {
          leak_name: "ROS2存在不安全权限漏洞",
          models: "ROS2-humble:navigation2-humble",
          leak_numbering: "CVE-2024-44853",
          hazard_level: "未评级",
          leak_type: "二进制漏洞",
          reference_links:
            "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2024-44853",
          inclusion_platform: "CVE",
        },
        {
          leak_name: "ROS2存在不安全权限漏洞",
          models: "ROS2-humble:navigation2-humble",
          leak_numbering: "CVE-2024-44854",
          hazard_level: "未评级",
          leak_type: "二进制漏洞",
          reference_links:
            "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2024-44854",
          inclusion_platform: "CVE",
        },
        {
          leak_name: "ROS2存在不安全权限漏洞",
          models: "ROS2-humble:navigation2-humble",
          leak_numbering: "CVE-2024-44855",
          hazard_level: "未评级",
          leak_type: "二进制漏洞",
          reference_links:
            "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2024-44855",
          inclusion_platform: "CVE",
        },
        {
          leak_name: "ROS2存在不安全权限漏洞",
          models: "ROS2-humble:navigation2-humble",
          leak_numbering: "CVE-2024-44856",
          hazard_level: "未评级",
          leak_type: "二进制漏洞",
          reference_links:
            "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2024-44856",
          inclusion_platform: "CVE",
        },
        {
          leak_name: "ROS2存在不安全权限漏洞",
          models: "ROS2-humble:navigation2-humble",
          leak_numbering: "CVE-2024-41644",
          hazard_level: "未评级",
          leak_type: "二进制漏洞",
          reference_links:
            "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2024-41644",
          inclusion_platform: "CVE",
        },
        {
          leak_name: "ROS2存在不安全权限漏洞",
          models: "ROS2-humble:navigation2-humble",
          leak_numbering: "CVE-2024-41645",
          hazard_level: "未评级",
          leak_type: "二进制漏洞",
          reference_links:
            "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2024-41645",
          inclusion_platform: "CVE",
        },
        {
          leak_name: "ROS2存在不安全权限漏洞",
          models: "ROS2-humble:navigation2-humble",
          leak_numbering: "CVE-2024-41646",
          hazard_level: "未评级",
          leak_type: "二进制漏洞",
          reference_links:
            "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2024-41646",
          inclusion_platform: "CVE",
        },
        {
          leak_name: "ROS2存在不安全权限漏洞",
          models: "ROS2-humble:navigation2-humble",
          leak_numbering: "CVE-2024-41647",
          hazard_level: "未评级",
          leak_type: "二进制漏洞",
          reference_links:
            "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2024-41647",
          inclusion_platform: "CVE",
        },
        {
          leak_name: "ROS2存在不安全权限漏洞",
          models: "ROS2-humble:navigation2-humble",
          leak_numbering: "CVE-2024-41648",
          hazard_level: "未评级",
          leak_type: "二进制漏洞",
          reference_links:
            "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2024-41648",
          inclusion_platform: "CVE",
        },
        {
          leak_name: "ROS2存在不安全权限漏洞",
          models: "ROS2-humble:navigation2-humble",
          leak_numbering: "CVE-2024-41649",
          hazard_level: "未评级",
          leak_type: "二进制漏洞",
          reference_links:
            "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2024-41649",
          inclusion_platform: "CVE",
        },
        {
          leak_name: "ROS2存在不安全权限漏洞",
          models: "ROS2-humble:navigation2-humble",
          leak_numbering: "CVE-2024-41650",
          hazard_level: "未评级",
          leak_type: "二进制漏洞",
          reference_links:
            "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2024-41650",
          inclusion_platform: "CVE",
        },
        {
          leak_name: "ROS2存在不安全权限漏洞",
          models: "ROS2-humble:navigation2-humble",
          leak_numbering: "CVE-2024-38910",
          hazard_level: "未评级",
          leak_type: "二进制漏洞",
          reference_links:
            "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2024-38910",
          inclusion_platform: "CVE",
        },
        {
          leak_name: "ROS2存在不安全权限漏洞",
          models: "ROS2-humble:navigation2-humble",
          leak_numbering: "CVE-2024-38920",
          hazard_level: "未评级",
          leak_type: "二进制漏洞",
          reference_links:
            "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2024-38920",
          inclusion_platform: "CVE",
        },
        {
          leak_name: "ROS2存在不安全权限漏洞",
          models: "ROS2-humble:navigation2-humble",
          leak_numbering: "CVE-2024-38921",
          hazard_level: "未评级",
          leak_type: "二进制漏洞",
          reference_links:
            "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2024-38921",
          inclusion_platform: "CVE",
        },
        {
          leak_name: "ROS2存在不安全权限漏洞",
          models: "ROS2-humble:navigation2-humble",
          leak_numbering: "CVE-2024-38922",
          hazard_level: "未评级",
          leak_type: "二进制漏洞",
          reference_links:
            "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2024-38922",
          inclusion_platform: "CVE",
        },
        {
          leak_name: "ROS2存在不安全权限漏洞",
          models: "ROS2-humble:navigation2-humble",
          leak_numbering: "CVE-2024-38923",
          hazard_level: "未评级",
          leak_type: "二进制漏洞",
          reference_links:
            "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2024-38923",
          inclusion_platform: "CVE",
        },
        {
          leak_name: "ROS2存在不安全权限漏洞",
          models: "ROS2-humble:navigation2-humble",
          leak_numbering: "CVE-2024-38924",
          hazard_level: "未评级",
          leak_type: "二进制漏洞",
          reference_links:
            "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2024-38924",
          inclusion_platform: "CVE",
        },
        {
          leak_name: "ROS2存在不安全权限漏洞",
          models: "ROS2-humble:navigation2-humble",
          leak_numbering: "CVE-2024-38925",
          hazard_level: "未评级",
          leak_type: "二进制漏洞",
          reference_links:
            "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2024-38925",
          inclusion_platform: "CVE",
        },
        {
          leak_name: "ROS2存在不安全权限漏洞",
          models: "ROS2-humble:navigation2-humble",
          leak_numbering: "CVE-2024-38926",
          hazard_level: "未评级",
          leak_type: "二进制漏洞",
          reference_links:
            "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2024-38926",
          inclusion_platform: "CVE",
        },
        {
          leak_name: "ROS2存在不安全权限漏洞",
          models: "ROS2-humble:navigation2-humble",
          leak_numbering: "CVE-2024-38927",
          hazard_level: "未评级",
          leak_type: "二进制漏洞",
          reference_links:
            "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2024-38927",
          inclusion_platform: "CVE",
        },
        {
          leak_name: "ROS2存在缓冲区溢出漏洞",
          models: "ROS2-humble:navigation2-humble",
          leak_numbering: "CVE-2024-37860",
          hazard_level: "未评级",
          leak_type: "二进制漏洞",
          reference_links:
            "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2024-37860",
          inclusion_platform: "CVE",
        },
        {
          leak_name: "ROS2存在缓冲区溢出漏洞",
          models: "ROS2-humble:navigation2-humble",
          leak_numbering: "CVE-2024-37861",
          hazard_level: "未评级",
          leak_type: "二进制漏洞",
          reference_links:
            "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2024-37861",
          inclusion_platform: "CVE",
        },
        {
          leak_name: "ROS2存在缓冲区溢出漏洞",
          models: "ROS2-humble:navigation2-humble",
          leak_numbering: "CVE-2024-37862",
          hazard_level: "未评级",
          leak_type: "二进制漏洞",
          reference_links:
            "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2024-37862",
          inclusion_platform: "CVE",
        },
        {
          leak_name: "ROS2存在缓冲区溢出漏洞",
          models: "ROS2-humble:navigation2-humble",
          leak_numbering: "CVE-2024-37863",
          hazard_level: "未评级",
          leak_type: "二进制漏洞",
          reference_links:
            "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2024-37863",
          inclusion_platform: "CVE",
        },
        {
          leak_name: "ROS2存在不安全权限漏洞",
          models: "ROS2-humble:navigation2-humble",
          leak_numbering: "CVE-2024-30961",
          hazard_level: "未评级",
          leak_type: "二进制漏洞",
          reference_links:
            "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2024-30961",
          inclusion_platform: "CVE",
        },
        {
          leak_name: "ROS2存在缓冲区溢出漏洞",
          models: "ROS2-humble:navigation2-humble",
          leak_numbering: "CVE-2024-30962",
          hazard_level: "未评级",
          leak_type: "二进制漏洞",
          reference_links:
            "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2024-30962",
          inclusion_platform: "CVE",
        },
        {
          leak_name: "ROS2存在缓冲区溢出漏洞",
          models: "ROS2-humble:navigation2-humble",
          leak_numbering: "CVE-2024-30963",
          hazard_level: "未评级",
          leak_type: "二进制漏洞",
          reference_links:
            "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2024-30963",
          inclusion_platform: "CVE",
        },
        {
          leak_name: "ROS2存在不安全权限漏洞",
          models: "ROS2-humble:navigation2-humble",
          leak_numbering: "CVE-2024-30964",
          hazard_level: "未评级",
          leak_type: "二进制漏洞",
          reference_links:
            "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2024-30964",
          inclusion_platform: "CVE",
        },
        {
          leak_name: "ROS2存在缓冲区溢出漏洞",
          models: "ROS2-humble:navigation2-humble",
          leak_numbering: "CVE-2024-25196",
          hazard_level: "未评级",
          leak_type: "二进制漏洞",
          reference_links:
            "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2024-25196",
          inclusion_platform: "CVE",
        },
        {
          leak_name: "ROS2存在不安全权限漏洞",
          models: "ROS2-humble:navigation2-humble",
          leak_numbering: "CVE-2024-25197",
          hazard_level: "未评级",
          leak_type: "二进制漏洞",
          reference_links:
            "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2024-25197",
          inclusion_platform: "CVE",
        },
        {
          leak_name: "ROS2存在不安全权限漏洞",
          models: "ROS2-humble:navigation2-humble",
          leak_numbering: "CVE-2024-25198",
          hazard_level: "未评级",
          leak_type: "二进制漏洞",
          reference_links:
            "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2024-25198",
          inclusion_platform: "CVE",
        },
        {
          leak_name: "ROS2存在不安全权限漏洞",
          models: "ROS2-humble:navigation2-humble",
          leak_numbering: "CVE-2024-25199",
          hazard_level: "未评级",
          leak_type: "二进制漏洞",
          reference_links:
            "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2024-25199",
          inclusion_platform: "CVE",
        },
      ],
      tableData1: [
        {
          leak_name: "二进制",
          models: "ROS2-humble:navigation2-humble",
          leak_numbering: "CNVD-2024-16363",
          hazard_level: "中危",
          leak_type: "通用型",
          reference_links: "无",
          inclusion_platform: "CNVD",
        },
        {
          leak_name: "二进制",
          models: "ROS2-humble:navigation2-humble",
          leak_numbering: "CNVD-2024-17402",
          hazard_level: "中危",
          leak_type: "通用型",
          reference_links: "无",
          inclusion_platform: "CNVD",
        },
        {
          leak_name: "二进制",
          models: "ROS2-humble:navigation2-humble",
          leak_numbering: "CNVD-2024-16329",
          hazard_level: "中危",
          leak_type: "通用型",
          reference_links: "无",
          inclusion_platform: "CNVD",
        },
        {
          leak_name: "二进制",
          models: "ROS2-humble:navigation2-humble",
          leak_numbering: "CNVD-2024-16333",
          hazard_level: "中危",
          leak_type: "通用型",
          reference_links: "无",
          inclusion_platform: "CNVD",
        },
        {
          leak_name: "二进制",
          models: "ROS2-humble:navigation2-humble",
          leak_numbering: "CNVD-2024-29065",
          hazard_level: "中危",
          leak_type: "通用型",
          reference_links: "无",
          inclusion_platform: "CNVD",
        },
        {
          leak_name: "二进制",
          models: "ROS2-humble:navigation2-humble",
          leak_numbering: "CNVD-2024-29066",
          hazard_level: "中危",
          leak_type: "通用型",
          reference_links: "无",
          inclusion_platform: "CNVD",
        },
        {
          leak_name: "二进制",
          models: "ROS2-humble:navigation2-humble",
          leak_numbering: "CNVD-2024-29071",
          hazard_level: "中危",
          leak_type: "通用型",
          reference_links: "无",
          inclusion_platform: "CNVD",
        },
        {
          leak_name: "二进制",
          models: "ROS2-humble:navigation2-humble",
          leak_numbering: "CNVD-2024-29072",
          hazard_level: "中危",
          leak_type: "通用型",
          reference_links: "无",
          inclusion_platform: "CNVD",
        },
        {
          leak_name: "二进制",
          models: "ROS2-humble:navigation2-humble",
          leak_numbering: "CNVD-2024-29073",
          hazard_level: "中危",
          leak_type: "通用型",
          reference_links: "无",
          inclusion_platform: "CNVD",
        },
        {
          leak_name: "二进制",
          models: "ROS2-humble:navigation2-humble",
          leak_numbering: "CNVD-2024-29074",
          hazard_level: "中危",
          leak_type: "通用型",
          reference_links: "无",
          inclusion_platform: "CNVD",
        },
        {
          leak_name: "二进制",
          models: "ROS2-humble:navigation2-humble",
          leak_numbering: "CNVD-2024-29075",
          hazard_level: "中危",
          leak_type: "通用型",
          reference_links: "无",
          inclusion_platform: "CNVD",
        },
        {
          leak_name: "二进制",
          models: "ROS2-humble:navigation2-humble",
          leak_numbering: "CNVD-2024-29077",
          hazard_level: "中危",
          leak_type: "通用型",
          reference_links: "无",
          inclusion_platform: "CNVD",
        },
        {
          leak_name: "二进制",
          models: "ROS2-humble:navigation2-humble",
          leak_numbering: "CNVD-2024-18675",
          hazard_level: "中危",
          leak_type: "通用型",
          reference_links: "无",
          inclusion_platform: "CNVD",
        },
        {
          leak_name: "二进制",
          models: "ROS2-humble:navigation2-humble",
          leak_numbering: "CNVD-2024-18658",
          hazard_level: "中危",
          leak_type: "通用型",
          reference_links: "无",
          inclusion_platform: "CNVD",
        },
        {
          leak_name: "二进制",
          models: "ROS2-humble:navigation2-humble",
          leak_numbering: "CNVD-2024-22505",
          hazard_level: "中危",
          leak_type: "通用型",
          reference_links: "无",
          inclusion_platform: "CNVD",
        },
        {
          leak_name: "二进制",
          models: "ROS2-humble:navigation2-humble",
          leak_numbering: "CNVD-2024-22504",
          hazard_level: "中危",
          leak_type: "通用型",
          reference_links: "无",
          inclusion_platform: "CNVD",
        },
      ],
      progressValue: 0,
      rate: 100,
      progressText: "",
      videoList: [
        {
          id: "1",
          video: require("../assets/video/leak/poc1.webm"),
          selectName:
            "机器人操作系统（Robot Operating System, ROS）存在二进制漏洞-展示视频",
          name: "机器人操作系统（Robot Operating System, ROS）存在二进制漏洞",
          signature: "发现人署名：白家驹、高思淼、王朋成、于珈尉、刘建伟",
          unit: "所属单位署名：北京航空航天大学网络空间安全学院",
          date: "发现日期&提交日期： 2024年6月12日",
          manufacturers: "漏洞厂商： Open Robotics",
          official_website: "厂商官网：http://openrobotics.org/ ",
          leak_description_title: "一、漏洞描述",
          leak_description_text: [
            "机器人操作系统ROS2是广泛应用于工业机器人、家用机器人、酒店服务机器人、自动驾驶汽车等场景的底层操作系统。自主导航系统navigation2是ROS2的重要组成模块之一。nav2_params.yaml是navigation2在启动过程中对navigation2相关参数进行初始化的配置文档。",
            "ROS2-navigation2对该配置文档的数据输入的处理存在漏洞。攻击者可以通过特殊构造的配置文档数据启动navigation2服务模块，从而导致缓冲区溢出heap-buffer-overflow。",
            "在工业应用场景下，可能会因部署了ROS2/navigation2系统而导致整个工厂系统崩溃，带来不可估计的经济损失；在自动驾驶车辆场景下，可能导致车辆系统崩溃，从而连带服务器上其他服务崩溃，使得车辆无法启动，失去服务能力。",
            "该漏洞由实验室开发的模糊测试工具发现。相较于默认的配置文档数据，攻击者只需对该配置文档中一处数据进行修改： amcl中的max_particles参数改为一个巨大数值。",
            "ROS系统版本：ROS2-humble",
            "Navigation2系统版本：navigation2-humble",
          ],
          leak_trigger_code_title: "二、漏洞触发代码",
          leak_trigger_code_text: [
            "通过下述shell指令启动navigation2即可，其中crafted_nav2.yaml是修改后的配置文档。",
            "source install/setup.bash",
            "source /opt/ros/humble/setup.bash",
            "export TURTLEBOT3_MODEL=waffle",
            "ros2 launch nav2_bringup tb3_simulation_launch.py params_file:= crafted_nav2.yaml",
            "# 运行环境",
            "# OS: Ubuntu22.04",
            "# ROS2: humble",
            "# navigation2: humble",
          ],
          leak_phenomenon_title: "三、漏洞现象",
          leak_phenomenon_text: [
            "Navigation2启动失败，并且对整个ROS系统运行有一定干扰。通过Asan检查，可以得知触发原因为buffer-overflow。",
          ],
          reference_links_title: "四、参考链接",
          reference_links_text: [
            "开源仓库管理员确认了该bug：",
            "https://github.com/ros-navigation/navigation2/issues/4335",
            "https://github.com/ros-navigation/navigation2/issues/4338",
            "https://github.com/ros-planning/navigation2/issues/4005",
            "相似问题参考链接：",
            "https://github.com/ros-planning/navigation2/issues/4005, ",
            "https://robotics.stackexchange.com/questions/106008/ros2nav2user-misconfiguration-of-parameters-may-cause-instantaneous-crashs,",
            "https://github.com/ros-planning/navigation2/pull/4017,  ",
            "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2024-25196 ",
          ],
          numbering: "五、与CNVD-C-2024-107059 提交编号相似",
          numbering_links_text: [],
        },
        {
          id: "2",
          video: require("../assets/video/leak/poc2.webm"),
          selectName:
            "机器人操作系统（Robot Operating System, ROS）存在二进制漏洞-展示视频",
          name: "机器人操作系统（Robot Operating System, ROS）存在二进制漏洞",
          signature: "发现人署名：白家驹、高思淼、王朋成、于珈尉、刘建伟",
          unit: "所属单位署名：北京航空航天大学网络空间安全学院",
          date: "发现日期&提交日期： 2024年6月12日",
          manufacturers: "漏洞厂商： Open Robotics",
          official_website: "厂商官网：http://openrobotics.org/ ",
          leak_description_title: "一、漏洞描述",
          leak_description_text: [
            "机器人操作系统ROS2是广泛应用于工业机器人、家用机器人、酒店服务机器人、自动驾驶汽车等场景的底层操作系统。自主导航系统navigation2是ROS2的重要组成模块之一。nav2_params.yaml是navigation2在启动过程中对navigation2相关参数进行初始化的配置文档。",
            "ROS2-navigation2对该配置文档的数据输入的处理存在漏洞。攻击者可以通过特殊构造的配置文档数据启动navigation2服务模块，从而导致缓冲区溢出heap-buffer-overflow。",
            "在工业应用场景下，可能会因部署了ROS2/navigation2系统而导致整个工厂系统崩溃，带来不可估计的经济损失；在自动驾驶车辆场景下，可能导致车辆系统崩溃，从而连带服务器上其他服务崩溃，使得车辆无法启动，失去服务能力。",
            "该漏洞由实验室开发的模糊测试工具发现。相较于默认的配置文档数据，攻击者只需对该配置文档中一处数据进行修改： amcl中的min_particles参数改为一个巨大数值。",
            "ROS系统版本：ROS2-humble",
            "Navigation2系统版本：navigation2-humble",
          ],
          leak_trigger_code_title: "二、漏洞触发代码",
          leak_trigger_code_text: [
            "通过下述shell指令启动navigation2即可，其中crafted_nav2.yaml是修改后的配置文档。",
            "source install/setup.bash",
            "source /opt/ros/humble/setup.bash",
            "export TURTLEBOT3_MODEL=waffle",
            "ros2 launch nav2_bringup tb3_simulation_launch.py params_file:= crafted_nav2.yaml",
            "# 运行环境",
            "# OS: Ubuntu22.04",
            "# ROS2: humble",
            "# navigation2: humble",
          ],
          leak_phenomenon_title: "三、漏洞现象",
          leak_phenomenon_text: [
            "Navigation2启动失败，并且对整个ROS系统运行有一定干扰。通过Asan检查，可以得知触发原因为buffer-overflow。",
          ],
          reference_links_title: "四、参考链接",
          reference_links_text: [
            "开源仓库管理员确认了该bug：",
            "https://github.com/ros-navigation/navigation2/issues/4336",
            "https://github.com/ros-navigation/navigation2/issues/4339",
            "https://github.com/ros-planning/navigation2/issues/4005",
            "相似问题参考链接：",
            "https://github.com/ros-planning/navigation2/issues/4005, ",
            "https://robotics.stackexchange.com/questions/106008/ros2nav2user-misconfiguration-of-parameters-may-cause-instantaneous-crashs,",
            "https://github.com/ros-planning/navigation2/pull/4017,  ",
            "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2024-25196 ",
          ],
          numbering: "五、与CNVD-C-2024-107059 提交编号相似",
          numbering_links_text: [],
        },
        {
          id: "3",
          video: require("../assets/video/leak/poc3.webm"),
          selectName:
            "机器人操作系统（Robot Operating System, ROS）存在二进制漏洞-展示视频",
          name: "机器人操作系统（Robot Operating System, ROS）存在二进制漏洞",
          signature: "发现人署名：白家驹、高思淼、王朋成、于珈尉、刘建伟",
          unit: "所属单位署名：北京航空航天大学网络空间安全学院",
          date: "发现日期&提交日期： 2024年6月12日",
          manufacturers: "漏洞厂商： Open Robotics",
          official_website: "厂商官网：http://openrobotics.org/ ",
          leak_description_title: "一、漏洞描述",
          leak_description_text: [
            "机器人操作系统ROS2是广泛应用于工业机器人、家用机器人、酒店服务机器人、自动驾驶汽车等场景的底层操作系统。自主导航系统navigation2是ROS2的重要组成模块之一。nav2_params.yaml是navigation2在启动过程中对navigation2相关参数进行初始化的配置文档。",
            "ROS2-navigation2对该配置文档的数据输入的处理存在漏洞。攻击者可以通过特殊构造的配置文档数据启动navigation2服务模块，从而导致缓冲区溢出heap-buffer-overflow。",
            "在工业应用场景下，可能会因部署了ROS2/navigation2系统而导致整个工厂系统崩溃，带来不可估计的经济损失；在自动驾驶车辆场景下，可能导致车辆系统崩溃，从而连带服务器上其他服务崩溃，使得车辆无法启动，失去服务能力。",
            "该漏洞由实验室开发的模糊测试工具发现。相较于默认的配置文档数据，攻击者只需对该配置文档中一处数据进行修改：  global_costmap中的inflation_layer的inflation_radius参数改为一个巨大数值。",
            "ROS系统版本：ROS2-humble",
            "Navigation2系统版本：navigation2-humble",
          ],
          leak_trigger_code_title: "二、漏洞触发代码",
          leak_trigger_code_text: [
            "通过下述shell指令启动navigation2即可，其中crafted_nav2.yaml是修改后的配置文档。",
            "source install/setup.bash",
            "source /opt/ros/humble/setup.bash",
            "export TURTLEBOT3_MODEL=waffle",
            "ros2 launch nav2_bringup tb3_simulation_launch.py params_file:= crafted_nav2.yaml",
            "# 运行环境",
            "# OS: Ubuntu22.04",
            "# ROS2: humble",
            "# navigation2: humble",
          ],
          leak_phenomenon_title: "三、漏洞现象",
          leak_phenomenon_text: [
            "Navigation2启动失败，并且对整个ROS系统运行有一定干扰。通过Asan检查，可以得知触发原因为buffer-overflow。",
          ],
          reference_links_title: "四、参考链接",
          reference_links_text: [
            "开源仓库管理员确认了该bug：",
            "https://github.com/ros-navigation/navigation2/issues/4062",
            "https://github.com/ros-planning/navigation2/issues/4005",
            "相似问题参考链接：",
            "https://github.com/ros-planning/navigation2/issues/4005, ",
            "https://robotics.stackexchange.com/questions/106008/ros2nav2user-misconfiguration-of-parameters-may-cause-instantaneous-crashs,",
            "https://github.com/ros-planning/navigation2/pull/4017,  ",
            "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2024-25196 ",
          ],
          numbering: "五、与CNVD-C-2024-107059 提交编号相似",
          numbering_links_text: [],
        },
        {
          id: "4",
          video: require("../assets/video/leak/poc4.webm"),
          selectName:
            "机器人操作系统（Robot Operating System, ROS）存在拒绝服务漏洞（DoS）-展示视频",
          name: "机器人操作系统（Robot Operating System, ROS）存在拒绝服务漏洞（DoS）",
          signature: "",
          unit: "",
          date: "",
          manufacturers: "",
          official_website: "",
          leak_description_title: "一、漏洞描述",
          leak_description_text: [
            "机器人操作系统ROS2是广泛应用于工业机器人、家用机器人、酒店服务机器人、自动驾驶汽车等场景的底层操作系统。自主导航系统navigation2是ROS2的重要组成模块之一。nav2_params.yaml是navigation2在启动过程中对navigation2相关参数进行初始化的配置文档。",
            "ROS2-navigation2对该配置文档的数据输入的处理存在漏洞。攻击者可以通过特殊构造的配置文档数据启动navigation2服务模块，从而导致缓冲区溢出heap-buffer-overflow。",
            "在工业应用场景下，可能会因部署了ROS2/navigation2系统而导致整个工厂系统崩溃，带来不可估计的经济损失；在自动驾驶车辆场景下，可能导致车辆系统崩溃，从而连带服务器上其他服务崩溃，使得车辆无法启动，失去服务能力。",
            "该漏洞由实验室开发的模糊测试工具发现。相较于默认的配置文档数据，攻击者只需对该配置文档中一处数据进行修改： nav2_amcl中的ros_parameter的z_rand参数修改为巨大浮点型数值，如：",
            "54861240687936886832559362511872092700743926359323919340246415125412623597951915939539289081689902927585003914562122604.0",
            "ROS系统版本：ROS2-humble",
            "Navigation2系统版本：navigation2-humble",
          ],
          leak_trigger_code_title: "二、漏洞触发代码",
          leak_trigger_code_text: [
            "通过下述shell指令启动navigation2即可，其中crafted_nav2.yaml是修改后的配置文档。",
            "source install/setup.bash",
            "source /opt/ros/humble/setup.bash",
            "export TURTLEBOT3_MODEL=waffle",
            "ros2 launch nav2_bringup tb3_simulation_launch.py params_file:= crafted_nav2.yaml",
            "# 运行环境",
            "# OS: Ubuntu22.04",
            "# ROS2: humble",
            "# navigation2: humble",
          ],
          leak_phenomenon_title: "三、漏洞现象",
          leak_phenomenon_text: [
            "通过Asan检查，可以触发buffer-overflow，见附件asan.log",
          ],

          reference_links_title: "四、参考链接",
          reference_links_text: [
            "开源仓库管理员确认了该bug：",
            "https://github.com/ros-planning/navigation2/issues/4157",
            "相似问题参考链接：",
            "https://github.com/ros-planning/navigation2/issues/4005, ",
            "https://robotics.stackexchange.com/questions/106008/ros2nav2user-misconfiguration-of-parameters-may-cause-instantaneous-crashs,",
            "https://github.com/ros-planning/navigation2/pull/4017,  ",
            "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2024-25196 ",
          ],
          numbering: "五、与CNVD-C-2024-107059 提交编号相似",
          numbering_links_text: [],
        },
        {
          id: "5",
          video: require("../assets/video/leak/poc5.mp4"),
          selectName:
            "机器人操作系统（Robot Operating System, ROS）存在拒绝服务漏洞（DoS）-展示视频",
          name: "机器人操作系统（Robot Operating System, ROS）存在拒绝服务漏洞（DoS）",
          signature: "",
          unit: "",
          date: "",
          manufacturers: "",
          official_website: "",
          leak_description_title: "一、漏洞描述",
          leak_description_text: [
            "机器人操作系统ROS2是广泛应用于工业机器人、家用机器人、酒店服务机器人、自动驾驶汽车等场景的底层操作系统。自主导航系统navigation2是ROS2的重要组成模块之一。nav2_params.yaml是navigation2在启动过程中对navigation2相关参数进行初始化的配置文档。",
            "ROS2-navigation2对该配置文档的数据输入的处理存在漏洞。攻击者可以通过特殊构造的配置文档数据启动navigation2服务模块，从而导致缓冲区溢出；同时会使得部署了ROS2/navigation2的服务器主机因内存过载而出现卡顿、死机甚至蓝屏等现象；即实现对整个服务器的DoS攻击。",
            "在工业应用场景下，可能会因部署了ROS2/navigation2系统而导致整个工厂系统崩溃，带来不可估计的经济损失；在自动驾驶车辆场景下，可能导致车辆系统崩溃，从而连带服务器上其他服务崩溃，使得车辆无法启动，失去服务能力。",
            "该漏洞由实验室开发的模糊测试工具发现。相较于默认的配置文档数据，攻击者只需对该配置文档中一处数据进行修改： costmap参数对应的height参数修改为较大负数，如-20、-30等这类数值。",
            "ROS系统版本：ROS2-humble",
            "Navigation2系统版本：navigation2-humble",
          ],
          leak_trigger_code_title: "二、漏洞触发代码",
          leak_trigger_code_text: [
            "通过下述shell指令启动navigation2即可，其中crafted_nav2.yaml是修改后的配置文档。",
            "source install/setup.bash",
            "source /opt/ros/humble/setup.bash",
            "export TURTLEBOT3_MODEL=waffle",
            "ros2 launch nav2_bringup tb3_simulation_launch.py params_file:= crafted_nav2.yaml",
            "# 运行环境",
            "# OS: Ubuntu22.04",
            "# ROS2: humble",
            "# navigation2: humble",
          ],
          leak_phenomenon_title: "三、漏洞现象",
          leak_phenomenon_text: [
            "启动过程中，出现非常规的内存占用情况，具体影响即体现在：进程会发生崩溃，服务器发生卡顿、死机、终端退出甚至蓝屏等现象",
            require("../assets/image/leak/蓝屏.png"),
            "通过特殊构造的配置文档启动后，我们发现`nav2_controller`进程的内存占用异常 (超30G）",
            require("../assets/image/leak/异常1.png"),
            "常规情况下，应当只有1G以内的内存占用，图3为常规情况下的内存占用。",
            require("../assets/image/leak/异常2.png"),
          ],
          reference_links_title: "四、参考链接",
          reference_links_text: [
            "开源仓库管理员确认了该bug：",
            "https://github.com/ros-planning/navigation2/issues/4157",
            "根据管理员建议，该bug向栈溢出平台提交：",
            "https://robotics.stackexchange.com/questions/106008/ros2nav2user-misconfiguration-of-parameters-may-cause-instantaneous-crashs  ",
            "我们帮助修复了该bug：https://github.com/ros-planning/navigation2/pull/4017  ",
            "该漏洞已获取CVE编号： CVE-2024-25196",
            "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2024-25196 ",
          ],
          numbering: "",
          numbering_links_text: [],
        },
        {
          id: "6",
          video: require("../assets/video/leak/poc6.webm"),
          selectName:
            "机器人操作系统（Robot Operating System, ROS）存在二进制漏洞-展示视频",
          name: "",
          signature:
            "机器人操作系统（Robot Operating System, ROS）存在二进制漏洞",
          unit: "发现者署名：白家驹，高思淼，王朋成，于珈尉，刘建伟",
          date: "单位：北京航空航天大学网络空间安全学院",
          manufacturers: "已获CVE编号：CVE-2024-41646",
          official_website: "",
          leak_description_title: "一、资产信息",
          leak_description_text: [
            "Open Robotics是一家提供机器人相关的开源软件和硬件平台的公司，又名Open Source Robotics Foundation（厂商官网：https://www.openrobotics.org/ ），建立于2012年，资产超过5million美金（参考链接：https://craft.co/open-robotics ）。",
            "该公司开发的机器人操作系统ROS2是广泛应用于工业机器人、家用机器人、酒店服务机器人、自动驾驶汽车(Autoware)等现实场景的底层操作系统（参考链接：https://www.ros.org/blog/community/ ）。自主导航系统navigation2是ROS2的核心仓库之一（参考链接：https://www.ros.org/blog/community/）。",
          ],
          leak_trigger_code_title: "二、漏洞描述",
          leak_trigger_code_text: [
            "代码定位：ROS2-navigation2的源码文件controller_service.cpp中对名为costmap_ros_的插件使用机制存在缺陷，该指针可能在dwb_controller工作期间成为空指针或释放，从而导致空指针解引用（null-ptr dereference）或释放后使用（use-after-free,UAF）漏洞缺陷。代码定位于navigation2的nav2_smoother包。",
            "复现方案：该漏洞为多线程并发过程中的内存错误，无法稳定触发，但可以通过以下手段大幅度增加触发几率：攻击者可以在navigation2通过互联网远程向”/scan”话题发布消息，从而使得navigation2中访问costmap_ros_的线函数ControllerServer::getRobotPose()不断被调用，以此增大该漏洞被触发的可能性。",
            "危害分析：空指针解引用(null-ptr dereference)和释放后使用(use-after-free,UAF)是一种信息安全领域公认的高危险系统漏洞，攻击者可以通过收集被错误访问的指针并通过将其指向恶意代码等方式实现权限升级、执行shell脚本等危险行为。如果发生在自动驾驶汽车、工业机器人中，将意味着汽车或机器人的控制权限完全被攻击者掌握，带来不可估计的安全损失。",
            "该漏洞由实验室开发的模糊测试工具发现，并通过我们所提供的修复方法修复。",
            "版本信息：ROS系统版本：ROS2-humble；ROS2-Iron",
            "Navigation2系统版本：navigation2-humble; navigation2-Iron",
          ],
          leak_phenomenon_title: "三、漏洞触发代码",
          leak_phenomenon_text: [
            "（并发类漏洞，该方法可能不是100%触发）",
            "通过下述shell指令启动navigation2项目。在运行一段时间后关闭，关闭期间通过终端指令发送/scan话题信息。",
            "source install/setup.bash",
            "source /opt/ros/humble/setup.bash",
            "export TURTLEBOT3_MODEL=waffle",
            "ros2 launch nav2_bringup tb3_simulation_launch.py",
            "# 运行环境",
            "# OS: Ubuntu22.04",
            "# ROS2: humble",
            "# navigation2: humble",
          ],
          reference_links_title: "四、漏洞分析",
          reference_links_text: [
            "该漏洞由controller_service.cpp中computeAndPublishVelocity()函数对costmap_ros_指针的使用机制存在缺陷，导致在该函数执行期间可能访问已经成为空指针的costmap_ros_，导致该线程可能访问到被释放的指针，从而触发错误。",
          ],
          numbering: "五、参考链接",
          numbering_links_text: [
            "开源仓库管理员确认了该bug：",
            "https://github.com/ros-navigation/navigation2/issues/4437",
            "我们帮助修复了该bug：",
            "https://github.com/ros-navigation/navigation2/pull/4463",
          ],
        },
        {
          id: "7",
          video: require("../assets/video/leak/poc7.webm"),
          selectName:
            "机器人操作系统（Robot Operating System, ROS）存在二进制漏洞-展示视频",
          name: "",
          signature:
            "机器人操作系统（Robot Operating System, ROS）存在二进制漏洞",
          unit: "发现者署名：白家驹，高思淼，王朋成，于珈尉，刘建伟",
          date: "单位：北京航空航天大学网络空间安全学院",
          manufacturers: "已获CVE编号：CVE-2024-41647",
          official_website: "",
          leak_description_title: "一、资产信息",
          leak_description_text: [
            "Open Robotics是一家提供机器人相关的开源软件和硬件平台的公司，又名Open Source Robotics Foundation（厂商官网：https://www.openrobotics.org/ ），建立于2012年，资产超过5million美金（参考链接：https://craft.co/open-robotics ）。",
            "该公司开发的机器人操作系统ROS2是广泛应用于工业机器人、家用机器人、酒店服务机器人、自动驾驶汽车(Autoware)等现实场景的底层操作系统（参考链接：https://www.ros.org/blog/community/ ）。自主导航系统navigation2是ROS2的核心仓库之一（参考链接：https://www.ros.org/blog/community/）。",
          ],
          leak_trigger_code_title: "二、漏洞描述",
          leak_trigger_code_text: [
            "代码定位：ROS2-navigation2的源码文件mppi_controller.cpp中mppi::PathHandler::getGlobalPlanConsideringBoundsInCostmapFrame()函数对名为costmap_ros_的插件使用机制存在缺陷，该指针可能在函数执行期间成为空指针或释放，从而导致空指针解引用（null-ptr dereference）或释放后使用（use-after-free,UAF）漏洞缺陷。代码定位于navigation2的nav2_smoother包。",
            "复现方案：该漏洞为多线程并发过程中的内存错误，无法稳定触发，但可以通过以下手段大幅度增加触发几率：攻击者可以在navigation2通过互联网远程向”/scan”话题发布消息，从而使得navigation2中访问costmap_ros_的线程函数mppi::PathHandler::getGlobalPlanConsideringBoundsInCostmapFrame()不断被调用，以此增大该漏洞被触发的可能性。",
            "危害分析：空指针解引用(null-ptr dereference)和释放后使用(use-after-free,UAF)是一种信息安全领域公认的高危险系统漏洞，攻击者可以通过收集被错误访问的指针并通过将其指向恶意代码等方式实现权限升级、执行shell脚本等危险行为。如果发生在自动驾驶汽车、工业机器人中，将意味着汽车或机器人的控制权限完全被攻击者掌握，带来不可估计的安全损失。",
            "该漏洞由实验室开发的模糊测试工具发现，并通过我们所提供的修复方法修复。",
            "版本信息：ROS系统版本：ROS2-humble；ROS2-Iron",
            "Navigation2系统版本：navigation2-humble; navigation2-Iron",
          ],
          leak_phenomenon_title: "三、漏洞触发代码",
          leak_phenomenon_text: [
            "（并发类漏洞，该方法可能不是100%触发）",
            "通过下述shell指令启动navigation2项目。在运行一段时间后关闭，关闭期间通过终端指令发送/scan话题信息。",
            "source install/setup.bash",
            "source /opt/ros/humble/setup.bash",
            "export TURTLEBOT3_MODEL=waffle",
            "ros2 launch nav2_bringup tb3_simulation_launch.py",
            "# 运行环境",
            "# OS: Ubuntu22.04",
            "# ROS2: humble",
            "# navigation2: humble",
          ],
          reference_links_title: "四、漏洞分析",
          reference_links_text: [
            "该漏洞由mppi_controller.cpp中mppi::PathHandler::getGlobalPlanConsideringBoundsInCostmapFrame()函数对costmap_ros_指针的使用机制存在缺陷，导致在该函数执行期间可能访问已经成为空指针的costmap_ros_，导致该线程可能访问到被释放的指针，从而触发错误。",
          ],
          numbering: "五、参考链接",
          numbering_links_text: [
            "开源仓库管理员确认了该bug：  ",
            "https://github.com/ros-navigation/navigation2/issues/4436",
            "我们帮助修复了该bug：",
            "https://github.com/ros-navigation/navigation2/pull/4463",
          ],
        },
        {
          id: "8",
          video: require("../assets/video/leak/poc8.webm"),
          selectName:
            "机器人操作系统（Robot Operating System, ROS）存在二进制漏洞-展示视频",
          name: "",
          signature:
            "机器人操作系统（Robot Operating System, ROS）存在二进制漏洞",
          unit: "发现者署名：白家驹，高思淼，王朋成，于珈尉，刘建伟",
          date: "单位：北京航空航天大学网络空间安全学院",
          manufacturers: "已获CVE编号：CVE-2024-41648",
          official_website: "",
          leak_description_title: "一、资产信息",
          leak_description_text: [
            "Open Robotics是一家提供机器人相关的开源软件和硬件平台的公司，又名Open Source Robotics Foundation（厂商官网：https://www.openrobotics.org/ ），建立于2012年，资产超过5million美金（参考链接：https://craft.co/open-robotics ）。",
            "该公司开发的机器人操作系统ROS2是广泛应用于工业机器人、家用机器人、酒店服务机器人、自动驾驶汽车(Autoware)等现实场景的底层操作系统（参考链接：https://www.ros.org/blog/community/ ）。自主导航系统navigation2是ROS2的核心仓库之一（参考链接：https://www.ros.org/blog/community/）。",
          ],
          leak_trigger_code_title: "二、漏洞描述",
          leak_trigger_code_text: [
            "代码定位：ROS2-navigation2的源码文件nav2_regulated_pure_pursuit_controller.cpp中RegulatedPurePursuitController::computeVelocityCommands()函数对名为costmap_ros_的插件使用机制存在缺陷，该指针可能在函数执行期间成为空指针或释放，从而导致空指针解引用（null-ptr dereference）或释放后使用（use-after-free,UAF）漏洞缺陷。代码定位于navigation2的nav2_smoother包。",
            "复现方案：该漏洞为多线程并发过程中的内存错误，无法稳定触发，但可以通过以下手段大幅度增加触发几率：攻击者可以在navigation2通过互联网远程向”/scan”话题发布消息，从而使得navigation2中访问costmap_ros_的线程函数computeVelocityCommands()不断被调用，以此增大该漏洞被触发的可能性。",
            "危害分析：空指针解引用(null-ptr dereference)和释放后使用(use-after-free,UAF)是一种信息安全领域公认的高危险系统漏洞，攻击者可以通过收集被错误访问的指针并通过将其指向恶意代码等方式实现权限升级、执行shell脚本等危险行为。如果发生在自动驾驶汽车、工业机器人中，将意味着汽车或机器人的控制权限完全被攻击者掌握，带来不可估计的安全损失。",
            "该漏洞由实验室开发的模糊测试工具发现，并通过我们所提供的修复方法修复。",
            "版本信息：ROS系统版本：ROS2-humble；ROS2-Iron",
            "Navigation2系统版本：navigation2-humble; navigation2-Iron",
          ],
          leak_phenomenon_title: "三、漏洞触发代码",
          leak_phenomenon_text: [
            "（并发类漏洞，该方法可能不是100%触发）",
            "通过下述shell指令启动navigation2项目。在运行一段时间后关闭，关闭期间通过终端指令发送/scan话题信息。",
            "source install/setup.bash",
            "source /opt/ros/humble/setup.bash",
            "export TURTLEBOT3_MODEL=waffle",
            "ros2 launch nav2_bringup tb3_simulation_launch.py",
            "# 运行环境",
            "# OS: Ubuntu22.04",
            "# ROS2: humble",
            "# navigation2: humble",
          ],
          reference_links_title: "四、漏洞分析",
          reference_links_text: [
            "该漏洞由nav2_regulated_pure_pursuit_controller.cpp中RegulatedPurePursuitController::computeVelocityCommands()函数对costmap_ros_指针的使用机制存在缺陷，导致在该函数执行期间可能访问已经成为空指针的costmap_ros_，导致该线程可能访问到被释放的指针，从而触发错误。",
          ],
          numbering: "五、参考链接",
          numbering_links_text: [
            "开源仓库管理员确认了该bug：  ",
            "https://github.com/ros-navigation/navigation2/issues/4438",
            "我们帮助修复了该bug：",
            "https://github.com/ros-navigation/navigation2/pull/4463",
          ],
        },
        {
          id: "9",
          video: require("../assets/video/leak/poc9.webm"),
          selectName:
            "机器人操作系统（Robot Operating System, ROS）存在二进制漏洞-展示视频",
          name: "",
          signature:
            "机器人操作系统（Robot Operating System, ROS）存在二进制漏洞",
          unit: "发现者署名：白家驹，高思淼，王朋成，于珈尉，刘建伟",
          date: "单位：北京航空航天大学网络空间安全学院",
          manufacturers: "已获CVE编号：CVE-2024-44852",
          official_website: "",
          leak_description_title: "一、资产信息",
          leak_description_text: [
            "Open Robotics是一家提供机器人相关的开源软件和硬件平台的公司，又名Open Source Robotics Foundation（厂商官网：https://www.openrobotics.org/ ），建立于2012年，资产超过5million美金（参考链接：https://craft.co/open-robotics ）。",
            "该公司开发的机器人操作系统ROS2是广泛应用于工业机器人、家用机器人、酒店服务机器人、自动驾驶汽车(Autoware)等现实场景的底层操作系统（参考链接：https://www.ros.org/blog/community/ ）。自主导航系统navigation2是ROS2的核心仓库之一（参考链接：https://www.ros.org/blog/community/）。",
          ],
          leak_trigger_code_title: "二、漏洞描述",
          leak_trigger_code_text: [
            "代码定位：ROS2-navigation2的源码文件nav2_theta_star_planner.cpp中theta_star::ThetaStar::isUnsafeToPlan()函数对名为costmap_ros_的插件使用机制存在缺陷，该指针可能在函数执行期间成为空指针或释放，从而导致空指针解引用（null-ptr dereference）或释放后使用（use-after-free,UAF）漏洞缺陷。代码定位于navigation2的nav2_smoother包。",
            "复现方案：该漏洞为多线程并发过程中的内存错误，无法稳定触发，但可以通过以下手段大幅度增加触发几率：攻击者可以在navigation2通过互联网远程向”/scan”话题发布消息，从而使得navigation2中访问costmap_ros_的线程函数theta_star::ThetaStar::isUnsafeToPlan()不断被调用，以此增大该漏洞被触发的可能性。",
            "危害分析：空指针解引用(null-ptr dereference)和释放后使用(use-after-free,UAF)是一种信息安全领域公认的高危险系统漏洞，攻击者可以通过收集被错误访问的指针并通过将其指向恶意代码等方式实现权限升级、执行shell脚本等危险行为。如果发生在自动驾驶汽车、工业机器人中，将意味着汽车或机器人的控制权限完全被攻击者掌握，带来不可估计的安全损失。",
            "该漏洞由实验室开发的模糊测试工具发现，并通过我们所提供的修复方法修复。",
            "版本信息：ROS系统版本：ROS2-humble；ROS2-Iron",
            "Navigation2系统版本：navigation2-humble; navigation2-Iron",
          ],
          leak_phenomenon_title: "三、漏洞触发代码",
          leak_phenomenon_text: [
            "（并发类漏洞，该方法可能不是100%触发）",
            "通过下述shell指令启动navigation2项目。在运行一段时间后关闭，关闭期间通过终端指令发送/scan话题信息。",
            "source install/setup.bash",
            "source /opt/ros/humble/setup.bash",
            "export TURTLEBOT3_MODEL=waffle",
            "ros2 launch nav2_bringup tb3_simulation_launch.py",
            "# 运行环境",
            "# OS: Ubuntu22.04",
            "# ROS2: humble",
            "# navigation2: humble",
          ],
          reference_links_title: "四、漏洞分析",
          reference_links_text: [
            "该漏洞由nav2_theta_star_planner.cpp中theta_star::ThetaStar::isUnsafeToPlan()函数对costmap_ros_指针的使用机制存在缺陷，导致在该函数执行期间可能访问已经成为空指针的costmap_ros_，导致该线程可能访问到被释放的指针，从而触发错误。",
          ],
          numbering: "五、参考链接",
          numbering_links_text: [
            "开源仓库管理员确认了该bug：  ",
            "https://github.com/ros-navigation/navigation2/issues/4464",
            "我们帮助修复了该bug：",
            "https://github.com/ros-navigation/navigation2/pull/4463",
          ],
        },
        {
          id: "10",
          video: require("../assets/video/leak/poc10.webm"),
          selectName:
            "机器人操作系统（Robot Operating System, ROS）存在二进制漏洞-展示视频",
          name: "",
          signature:
            "机器人操作系统（Robot Operating System, ROS）存在二进制漏洞",
          unit: "发现者署名：白家驹，高思淼，王朋成，于珈尉，刘建伟",
          date: "单位：北京航空航天大学网络空间安全学院",
          manufacturers: "已获取CVE编号：CVE-2024-44853",
          official_website: "",
          leak_description_title: "一、资产信息",
          leak_description_text: [
            "Open Robotics是一家提供机器人相关的开源软件和硬件平台的公司，又名Open Source Robotics Foundation，建立于2012年，资产超过5million美金。（参考链接：https://craft.co/open-robotics ）",
            "该公司开发的机器人操作系统ROS2是广泛应用于工业机器人、家用机器人、酒店服务机器人、自动驾驶汽车(Autoware)等现实场景的底层操作系统（参考链接：https://www.ros.org/blog/community/ ）。自主导航系统navigation2是ROS2的核心仓库之一（参考链接：https://www.ros.org/blog/community/）。",
          ],
          leak_trigger_code_title: "二、漏洞描述",
          leak_trigger_code_text: [
            "代码定位：ROS2-navigation2的源码文件controller_server.cpp中对名为action_server_的指针变量缺少检查，该指针可能在被访问期间成为空指针，从而导致空指针解引用（null-ptr dereference）漏洞缺陷。代码定位于navigation2的nav2_controller包。",
            "复现方案：该漏洞为多线程并发过程中的内存错误，无法稳定触发，但可以通过以下手段大幅度增加触发几率：攻击者可以在navigation2通过互联网远程向”/NavigateToPose”话题发布action请求，从而使得navigation2中访问action_server_的函数computeControl()不断被调用，以此增大该漏洞被触发的可能性。",
            "危害分析：空指针解引用(null-ptr dereference)是一种信息安全领域公认的高危险系统漏洞，攻击者可以通过收集被错误访问的指针并通过将其指向恶意代码等方式实现权限升级、执行shell脚本等危险行为。如果发生在自动驾驶汽车、工业机器人中，将意味着汽车或机器人的控制权限完全被攻击者掌握，带来不可估计的安全损失。",
            "该漏洞由实验室开发的模糊测试工具发现，并通过我们所提供的修复方法修复。",
            "版本信息：ROS系统版本：ROS2-humble；ROS2-Iron",
            "Navigation2系统版本：navigation2-humble; navigation2-Iron",
          ],
          leak_phenomenon_title: "三、漏洞触发代码",
          leak_phenomenon_text: [
            "（并发类漏洞，该方法可能不是100%触发）",
            "通过下述shell指令启动navigation2项目。在运行一段时间后关闭，关闭期间通过终端指令发送/scan话题信息。",
            "source install/setup.bash",
            "source /opt/ros/humble/setup.bash",
            "export TURTLEBOT3_MODEL=waffle",
            "ros2 launch nav2_bringup tb3_simulation_launch.py",
            "# 运行环境",
            "# OS: Ubuntu22.04",
            "# ROS2: humble",
            "# navigation2: humble",
          ],
          reference_links_title: "四、漏洞分析",
          reference_links_text: [
            "该漏洞由controller_server.cpp中computeControl()函数对action_server_指针变量没有相应的检查机制，导致在该函数执行期间可能访问已经成为空指针的action_server_，导致该线程可能访问到被释放的指针，从而触发错误。",
          ],
          numbering: "五、参考链接",
          numbering_links_text: [
            "开源仓库管理员确认了该bug：  ",
            "https://github.com/ros-navigation/navigation2/issues/4547",
            "我们帮助修复了该bug：",
            "https://github.com/ros-navigation/navigation2/pull/4548",
          ],
        },
        {
          id: "11",
          video: require("../assets/video/leak/poc11.webm"),
          selectName:
            "机器人操作系统（Robot Operating System, ROS）存在二进制漏洞-展示视频",
          name: "",
          signature:
            "机器人操作系统（Robot Operating System, ROS）存在二进制漏洞",
          unit: "发现者署名：白家驹，高思淼，王朋成，于珈尉，刘建伟",
          date: "单位：北京航空航天大学网络空间安全学院",
          manufacturers: "已获取CVE编号：CVE-2024-44854",
          official_website: "",
          leak_description_title: "一、资产信息",
          leak_description_text: [
            "Open Robotics是一家提供机器人相关的开源软件和硬件平台的公司，又名Open Source Robotics Foundation（厂商官网：https://www.openrobotics.org/ ），建立于2012年，资产超过5million美金（参考链接：https://craft.co/open-robotics ）。。",
            "该公司开发的机器人操作系统ROS2是广泛应用于工业机器人、家用机器人、酒店服务机器人、自动驾驶汽车(Autoware)等现实场景的底层操作系统（参考链接：https://www.ros.org/blog/community/ ）。自主导航系统navigation2是ROS2的核心仓库之一（参考链接：https://www.ros.org/blog/community/）。",
          ],
          leak_trigger_code_title: "二、漏洞描述",
          leak_trigger_code_text: [
            "代码定位：ROS2-navigation2的源码文件nav2_smoother.cpp中对名为action_server_的指针变量缺少检查，该指针可能在被访问期间成为空指针，从而导致空指针解引用（null-ptr dereference）漏洞缺陷。代码定位于navigation2的nav2_smoother包。",
            "复现方案：该漏洞为多线程并发过程中的内存错误，无法稳定触发，但可以通过以下手段大幅度增加触发几率：攻击者可以在navigation2通过互联网远程向”/smooth_path”话题发布action请求，从而使得navigation2中访问action_server_的函数smooth_path()不断被调用，以此增大该漏洞被触发的可能性。",
            "危害分析：空指针解引用(null-ptr dereference)是一种信息安全领域公认的高危险系统漏洞，攻击者可以通过收集被错误访问的指针并通过将其指向恶意代码等方式实现权限升级、执行shell脚本等危险行为。如果发生在自动驾驶汽车、工业机器人中，将意味着汽车或机器人的控制权限完全被攻击者掌握，带来不可估计的安全损失。",
            "该漏洞由实验室开发的模糊测试工具发现，并通过我们所提供的修复方法修复。",
            "版本信息：ROS系统版本：ROS2-humble；ROS2-Iron",
            "Navigation2系统版本：navigation2-humble; navigation2-Iron",
          ],
          leak_phenomenon_title: "三、漏洞触发代码",
          leak_phenomenon_text: [
            "（并发类漏洞，该方法可能不是100%触发）",
            "通过下述shell指令启动navigation2项目。在运行一段时间后关闭，关闭期间通过终端指令发送/scan话题信息。",
            "source install/setup.bash",
            "source /opt/ros/humble/setup.bash",
            "export TURTLEBOT3_MODEL=waffle",
            "ros2 launch nav2_bringup tb3_simulation_launch.py",
            "# 运行环境",
            "# OS: Ubuntu22.04",
            "# ROS2: humble",
            "# navigation2: humble",
          ],
          reference_links_title: "四、漏洞分析",
          reference_links_text: [
            "该漏洞由nav2_smoother.cpp中smooth_path()函数对action_server_指针变量没有相应的检查机制，导致在该函数执行期间可能访问已经成为空指针的action_server_，导致该线程可能访问到被释放的指针，从而触发错误。",
          ],
          numbering: "五、参考链接",
          numbering_links_text: [
            "开源仓库管理员确认了该bug：  ",
            "https://github.com/ros-navigation/navigation2/issues/4538",
            "我们帮助修复了该bug：",
            "https://github.com/ros-navigation/navigation2/pull/4544",
          ],
        },
        {
          id: "12",
          video: require("../assets/video/leak/poc12.webm"),
          selectName:
            "机器人操作系统（Robot Operating System, ROS）存在二进制漏洞-展示视频",
          name: "",
          signature:
            "机器人操作系统（Robot Operating System, ROS）存在二进制漏洞",
          unit: "发现者署名：白家驹，高思淼，王朋成，于珈尉，刘建伟",
          date: "单位：北京航空航天大学网络空间安全学院",
          manufacturers: "已获CVE编号：CVE-2024-41648",
          official_website: "",
          leak_description_title: "一、资产信息",
          leak_description_text: [
            "Open Robotics是一家提供机器人相关的开源软件和硬件平台的公司，又名Open Source Robotics Foundation（厂商官网：https://www.openrobotics.org/ ），建立于2012年，资产超过5million美金（参考链接：https://craft.co/open-robotics ）。",
            "该公司开发的机器人操作系统ROS2是广泛应用于工业机器人、家用机器人、酒店服务机器人、自动驾驶汽车(Autoware)等现实场景的底层操作系统（参考链接：https://www.ros.org/blog/community/ ）。自主导航系统navigation2是ROS2的核心仓库之一（参考链接：https://www.ros.org/blog/community/）。",
          ],
          leak_trigger_code_title: "二、漏洞描述",
          leak_trigger_code_text: [
            "代码定位：ROS2-navigation2的源码文件nav2_navfn_planner.cpp中NavfnPlanner::makePlan()函数对名为costmap_ros_的插件使用机制存在缺陷，该指针可能在函数执行期间成为空指针或释放，从而导致空指针解引用（null-ptr dereference）或释放后使用（use-after-free,UAF）漏洞缺陷。代码定位于navigation2的nav2_smoother包。",
            "复现方案：该漏洞为多线程并发过程中的内存错误，无法稳定触发，但可以通过以下手段大幅度增加触发几率：攻击者可以在navigation2通过互联网远程向”/scan”话题发布消息，从而使得navigation2中访问costmap_ros_的线程函数NavfnPlanner::makePlan()不断被调用，以此增大该漏洞被触发的可能性。",
            "危害分析：空指针解引用(null-ptr dereference)和释放后使用(use-after-free,UAF)是一种信息安全领域公认的高危险系统漏洞，攻击者可以通过收集被错误访问的指针并通过将其指向恶意代码等方式实现权限升级、执行shell脚本等危险行为。如果发生在自动驾驶汽车、工业机器人中，将意味着汽车或机器人的控制权限完全被攻击者掌握，带来不可估计的安全损失。",
            "该漏洞由实验室开发的模糊测试工具发现，并通过我们所提供的修复方法修复。",
            "版本信息：ROS系统版本：ROS2-humble；ROS2-Iron",
            "Navigation2系统版本：navigation2-humble; navigation2-Iron",
          ],
          leak_phenomenon_title: "三、漏洞触发代码",
          leak_phenomenon_text: [
            "（并发类漏洞，该方法可能不是100%触发）",
            "通过下述shell指令启动navigation2项目。在运行一段时间后关闭，关闭期间通过终端指令发送/scan话题信息。",
            "source install/setup.bash",
            "source /opt/ros/humble/setup.bash",
            "export TURTLEBOT3_MODEL=waffle",
            "ros2 launch nav2_bringup tb3_simulation_launch.py",
            "# 运行环境",
            "# OS: Ubuntu22.04",
            "# ROS2: humble",
            "# navigation2: humble",
          ],
          reference_links_title: "四、漏洞分析",
          reference_links_text: [
            "该漏洞由nav2_navfn_planner.cpp中NavfnPlanner::makePlan()函数对costmap_ros_指针的使用机制存在缺陷，导致在该函数执行期间可能访问已经成为空指针的costmap_ros_，导致该线程可能访问到被释放的指针，从而触发错误。",
          ],
          numbering: "五、参考链接",
          numbering_links_text: [
            "开源仓库管理员确认了该bug：  ",
            "https://github.com/ros-navigation/navigation2/issues/4466",
            "我们帮助修复了该bug：",
            "https://github.com/ros-navigation/navigation2/pull/4463",
          ],
        },
        {
          id: "13",
          video: require("../assets/video/leak/poc13.webm"),
          selectName:
            "机器人操作系统（Robot Operating System, ROS）存在二进制漏洞-展示视频",
          name: "",
          signature:
            "机器人操作系统（Robot Operating System, ROS）存在二进制漏洞",
          unit: "发现者署名：白家驹，高思淼，王朋成，于珈尉，刘建伟",
          date: "单位：北京航空航天大学网络空间安全学院",
          manufacturers: "已获CVE编号：CVE-2024-44856",
          official_website: "",
          leak_description_title: "一、资产信息",
          leak_description_text: [
            "Open Robotics是一家提供机器人相关的开源软件和硬件平台的公司，又名Open Source Robotics Foundation（厂商官网：https://www.openrobotics.org/ ），建立于2012年，资产超过5million美金（参考链接：https://craft.co/open-robotics ）。",
            "该公司开发的机器人操作系统ROS2是广泛应用于工业机器人、家用机器人、酒店服务机器人、自动驾驶汽车(Autoware)等现实场景的底层操作系统（参考链接：https://www.ros.org/blog/community/ ）。自主导航系统navigation2是ROS2的核心仓库之一（参考链接：https://www.ros.org/blog/community/）。",
          ],
          leak_trigger_code_title: "二、漏洞描述",
          leak_trigger_code_text: [
            "代码定位：ROS2-navigation2的源码文件nav2_smac_planner.cpp中findCircumscribedCost ()函数对名为costmap_ros_的插件使用机制存在缺陷，该指针可能在函数执行期间成为空指针或释放，从而导致空指针解引用（null-ptr dereference）或释放后使用（use-after-free,UAF）漏洞缺陷。代码定位于navigation2的nav2_smoother包。",
            "复现方案：该漏洞为多线程并发过程中的内存错误，无法稳定触发，但可以通过以下手段大幅度增加触发几率：攻击者可以在navigation2通过互联网远程向”/scan”话题发布消息，从而使得navigation2中访问costmap_ros_的线程函数findCircumscribedCost ()不断被调用，以此增大该漏洞被触发的可能性。",
            "危害分析：空指针解引用(null-ptr dereference)和释放后使用(use-after-free,UAF)是一种信息安全领域公认的高危险系统漏洞，攻击者可以通过收集被错误访问的指针并通过将其指向恶意代码等方式实现权限升级、执行shell脚本等危险行为。如果发生在自动驾驶汽车、工业机器人中，将意味着汽车或机器人的控制权限完全被攻击者掌握，带来不可估计的安全损失。",
            "该漏洞由实验室开发的模糊测试工具发现，并通过我们所提供的修复方法修复。",
            "版本信息：ROS系统版本：ROS2-humble；ROS2-Iron",
            "Navigation2系统版本：navigation2-humble; navigation2-Iron",
          ],
          leak_phenomenon_title: "三、漏洞触发代码",
          leak_phenomenon_text: [
            "（并发类漏洞，该方法可能不是100%触发）",
            "通过下述shell指令启动navigation2项目。在运行一段时间后关闭，关闭期间通过终端指令发送/scan话题信息。",
            "source install/setup.bash",
            "source /opt/ros/humble/setup.bash",
            "export TURTLEBOT3_MODEL=waffle",
            "ros2 launch nav2_bringup tb3_simulation_launch.py",
            "# 运行环境",
            "# OS: Ubuntu22.04",
            "# ROS2: humble",
            "# navigation2: humble",
          ],
          reference_links_title: "四、漏洞分析",
          reference_links_text: [
            "该漏洞由nav2_smac_planner.cpp中findCircumscribedCost ()函数对costmap_ros_指针的使用机制存在缺陷，导致在该函数执行期间可能访问已经成为空指针的costmap_ros_，导致该线程可能访问到被释放的指针，从而触发错误。",
          ],
          numbering: "五、参考链接",
          numbering_links_text: [
            "开源仓库管理员确认了该bug：  ",
            "https://github.com/ros-navigation/navigation2/issues/4468",
            "我们帮助修复了该bug：",
            "https://github.com/ros-navigation/navigation2/pull/4463",
          ],
        },
        {
          id: "14",
          video: require("../assets/video/leak/poc14.webm"),
          selectName:
            "机器人操作系统（Robot Operating System, ROS）存在拒绝服务漏洞（DoS）-展示视频",
          name: "机器人操作系统（Robot Operating System, ROS）存在拒绝服务漏洞（DoS）",
          signature: "",
          unit: "",
          date: "",
          manufacturers: "",
          official_website: "",
          leak_description_title: "一、漏洞描述",
          leak_description_text: [
            "机器人操作系统ROS2是广泛应用于工业机器人、家用机器人、酒店服务机器人、自动驾驶汽车等场景的底层操作系统。激光雷达建图系统rtabmap_ros是ROS2的重要组成模块之一，在实际应用场景中rtabmap常用来实现在陌生环境对周边地形进行建图、定位等工作。",
            "Ros2 topic是机器人操作系统支持分布式计算的局域网内信息通讯的机制。ROS2-rtabmap_ros对`scan`类消息的输入处理存在缺陷。攻击者可以通过在局域网内远程发布恶意构造的scan消息，从而实现DoS攻击，阻断其运行时工作。",
            "同时，该漏洞暴露的是ROS的topic机制的不完善性。虽然topic对于信息的完整性有“基于时间戳的筛选机制”，但是我们依然可以选择一个就近的时间来伪造时间戳并发布恶意消息，从而让ROS系统有效接收到消息。",
            "在工业应用场景下，机器人系统可能会因部署了ROS2/rtabmap_ros系统而导致整个工厂工作运行中断，带来不可估计的经济损失；在自动驾驶车辆场景下甚至战场场景下，可能导致车辆失去地图信息功能，无法获取有效地形信息从而宣告任务失败。",
            "该漏洞由实验室开发的模糊测试工具发现",
          ],
          leak_trigger_code_title: "",
          leak_trigger_code_text: [
            "ROS系统版本：ROS2-humble",
            "Rtabmap_ros系统版本：rtabmap_ros",
          ],
          leak_phenomenon_title: "二、漏洞触发代码",
          leak_phenomenon_text: [
            "保持我们自己的主机连入ros2-rtabmap_ros正在工作的局域网环境，使用我们提供的command.txt附件中的shell指令，将我们所提供的shell指令中的时间戳改为当前真实时间戳+10秒，并远程执行。",
            "# 运行环境",
            "# OS: Ubuntu22.04",
            "# ROS2: humble",
          ],
          reference_links_title: "三、漏洞现象",
          reference_links_text: [
            "Rtabmap因捕获到异常scan消息，从而抛出错误，退出当前工作。",
            "详情可见POC视频。",
          ],
          numbering: "四、参考链接",
          numbering_links_text: [
            "开源仓库管理员确认了该bug：  ",
            "https://github.com/introlab/rtabmap_ros/issues/1138 ",
          ],
        },
      ],
      dialogVisible: false,
      selectedVideo: {
        id: "1",
        video: require("../assets/video/leak/poc1.webm"),
        selectName:
          "机器人操作系统（Robot Operating System, ROS）存在二进制漏洞-展示视频",
        name: "机器人操作系统（Robot Operating System, ROS）存在二进制漏洞",
        signature: "发现人署名：白家驹、高思淼、王朋成、于珈尉、刘建伟",
        unit: "所属单位署名：北京航空航天大学网络空间安全学院",
        date: "发现日期&提交日期： 2024年6月12日",
        manufacturers: "漏洞厂商： Open Robotics",
        official_website: "厂商官网：http://openrobotics.org/ ",
        leak_description_title: "一、漏洞描述",
        leak_description_text: [
          "机器人操作系统ROS2是广泛应用于工业机器人、家用机器人、酒店服务机器人、自动驾驶汽车等场景的底层操作系统。自主导航系统navigation2是ROS2的重要组成模块之一。nav2_params.yaml是navigation2在启动过程中对navigation2相关参数进行初始化的配置文档。",
          "ROS2-navigation2对该配置文档的数据输入的处理存在漏洞。攻击者可以通过特殊构造的配置文档数据启动navigation2服务模块，从而导致缓冲区溢出heap-buffer-overflow。",
          "在工业应用场景下，可能会因部署了ROS2/navigation2系统而导致整个工厂系统崩溃，带来不可估计的经济损失；在自动驾驶车辆场景下，可能导致车辆系统崩溃，从而连带服务器上其他服务崩溃，使得车辆无法启动，失去服务能力。",
          "该漏洞由实验室开发的模糊测试工具发现。相较于默认的配置文档数据，攻击者只需对该配置文档中一处数据进行修改： amcl中的max_particles参数改为一个巨大数值。",
          "ROS系统版本：ROS2-humble",
          "Navigation2系统版本：navigation2-humble",
        ],
        leak_trigger_code_title: "二、漏洞触发代码",
        leak_trigger_code_text: [
          "通过下述shell指令启动navigation2即可，其中crafted_nav2.yaml是修改后的配置文档。",
          "source install/setup.bash",
          "source /opt/ros/humble/setup.bash",
          "export TURTLEBOT3_MODEL=waffle",
          "ros2 launch nav2_bringup tb3_simulation_launch.py params_file:= crafted_nav2.yaml",
          "# 运行环境",
          "# OS: Ubuntu22.04",
          "# ROS2: humble",
          "# navigation2: humble",
        ],
        leak_phenomenon_title: "三、漏洞现象",
        leak_phenomenon_text: [
          "Navigation2启动失败，并且对整个ROS系统运行有一定干扰。通过Asan检查，可以得知触发原因为buffer-overflow。",
        ],
        reference_links_title: "四、参考链接",
        reference_links_text: [
          "开源仓库管理员确认了该bug：",
          "https://github.com/ros-navigation/navigation2/issues/4335",
          "https://github.com/ros-navigation/navigation2/issues/4338",
          "https://github.com/ros-planning/navigation2/issues/4005",
          "相似问题参考链接：",
          "https://github.com/ros-planning/navigation2/issues/4005, ",
          "https://robotics.stackexchange.com/questions/106008/ros2nav2user-misconfiguration-of-parameters-may-cause-instantaneous-crashs,",
          "https://github.com/ros-planning/navigation2/pull/4017,  ",
          "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2024-25196 ",
        ],
        numbering: "五、与CNVD-C-2024-107059 提交编号相似",
        numbering_links_text: [],
      },
    };
  },
  components: {
    Echarts1,
    Echarts2,
    Echarts4,
  },
  computed: {},
  methods: {
    progressStart() {
      this.progressText = "进度条：测试中";
      var timer = setInterval(() => {
        this.progressValue += 10;
        if (this.progressValue > 99) {
          clearInterval(timer);
          this.progressText = "进度条：本轮测试完成";
          this.progressValue = 100;
        }
      }, 500);
    },
    handleClose() {
      this.dialogVisible = false;
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
  },
};
</script>
<style>
</style>