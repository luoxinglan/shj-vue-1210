<template>
  <div class="uninhabited">
    <!-- 无人车模式 -->
    <div class="uninhabited-top">
      <div class="uninhabited-top-left">
        <div class="vulnerability-classification">
          <div class="vulnerability-classification-title">
            <p>漏洞分类</p>
            <Wordclouddiagrams />
          </div>
        </div>
        <div class="exploit-mining">
          <div class="exploit-mining-title">
            <p>漏洞挖掘平台</p>
          </div>
          <Banner />
        </div>
      </div>
      <div class="uninhabited-top-middle">
        <video
          muted
          controls
          autoplay="autoplay"
          loop="loop"
          width="100%"
          height="100%"
        >
          <source
            src="https://lganv-1304359499.cos.ap-beijing.myqcloud.com/lg_cos_static/users/1839580854142279681/pages/9t0ICgkGsbTSzBLZpGrC/d7395f57740cde07bb32b55c72bf46d0-20241011200047411.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div class="uninhabited-top-right">
        <div class="perceptual-testing">
          <div class="perceptual-testing-title">
            <p>感知测试平台</p>
            <Perceive />
          </div>
        </div>
        <div class="regulatory-testing">
          <div class="regulatory-testing-title">
            <p>规控测试平台</p>
          </div>
          <InitializeRadar style="width: 400px; height: 205px" />
        </div>
      </div>
    </div>
    <div class="uninhabited-bottom">
      <div class="vulnerability-rating">
        <div class="vulnerability-rating-title">
          <p>漏洞分级总览</p>
          <Grading />
        </div>
      </div>
      <div class="brand-support">
        <div class="brand-support-title">
          <p>品牌支持-应用验证</p>
        </div>
        <ul class="brand-support-content">
          <li>
            <img
              src="../assets/image/uninhabited-car1.png"
              alt="图片加载失败"
            />
          </li>
          <li>
            <img
              src="../assets/image/uninhabited-car2.png"
              alt="图片加载失败"
            />
          </li>
          <li>
            <img
              src="../assets/image/uninhabited-car3.webp"
              alt="图片加载失败"
            />
          </li>
          <li>
            <img
              src="../assets/image/uninhabited-car4.jpg"
              alt="图片加载失败"
            />
          </li>
          <li>
            <img
              src="../assets/image/uninhabited-car5.png"
              alt="图片加载失败"
            />
          </li>
          <li>
            <img
              src="../assets/image/uninhabited-plane1.png"
              alt="图片加载失败"
            />
          </li>
          <li>
            <img
              src="../assets/image/uninhabited-plane2.png"
              alt="图片加载失败"
            />
          </li>
          <li>
            <img
              src="../assets/image/uninhabited-plane3.png"
              alt="图片加载失败"
            />
          </li>
          <li>
            <img
              src="../assets/image/uninhabited-plane4.png"
              alt="图片加载失败"
            />
          </li>
          <li>
            <img
              src="../assets/image/uninhabited-plane5.png"
              alt="图片加载失败"
            />
          </li>
        </ul>
      </div>
      <div class="combine">
        <div class="combine-title">
          <p>虚实结合测试平台</p>
          <img src="../assets/image/home.gif" alt="图片加载失败" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// 漏洞分类词云图
import Wordclouddiagrams from "@/components/wordclouddiagrams/wordclouddiagrams.vue";
// 规控测试平台雷达图
import InitializeRadar from "@/components/radar/initializeradar.vue";
// 感知测试平台扇形图
import Perceive from "@/components/perceive/perceive.vue";
// 漏洞分级总览漏斗图
import Grading from "@/components/grading/grading.vue";
// 轮播图
import Banner from "@/components/banner/banner.vue";
import "../assets/style/page1.css";
export default {
  name: "page1",
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  components: { InitializeRadar, Perceive, Grading, Wordclouddiagrams, Banner },
};
</script>
<style>
</style>