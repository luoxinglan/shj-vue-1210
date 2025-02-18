<template>
  <div id="app">
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
    />
    <div class="shj">
      <div class="shj-title">
        <!-- <div class="shj-title-text">高效能群智控制虚实平台</div> -->
        <div class="shj-title-text">自动驾驶虚实结合验证平台</div>
      </div>
      <div class="shj-router">
        <div class="shj-logo">
          <img src="./assets/image/logo.png" alt="图片加载失败" />
        </div>
        <div class="shj-home">
          <router-link to="/" class="home">无人车模式</router-link>
        </div>
        <ul class="shj-nav">
          <li v-for="(item, index) in nav" :key="index">
            <router-link
              :to="item.url"
              class="router-button"
              active-class="active"
            >
              {{ item.name }}
            </router-link>
          </li>
        </ul>
      </div>
      <router-view class="router-page"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      nav: [
        { id: "2", name: "智能漏洞挖掘", url: "/page2" },
        { id: "3", name: "感知测试平台", url: "/page3" },
        { id: "4", name: "规控测试平台", url: "/page4" },
        { id: "5", name: "虚实结合测试", url: "/page5" },
        { id: "6", name: "应用验证案例", url: "/page6" },
      ],
    };
  },
  components: {},
  mounted() {
    document.documentElement.scrollTop = 0;
    this.setPageZoom();
    window.addEventListener("resize", this.setPageZoom);
  },
  methods: {
    setPageZoom() {
      const screenWidth = window.innerWidth;
      const zoom = screenWidth / 1920;
      document.documentElement.style.zoom = zoom;
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
  overflow: hidden;
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
}
.shj-title {
  width: 100%;
  height: 60px;
  background-position: center;
  background-image: url("./assets/image/title.png");
  background-repeat: no-repeat;
  background-size: contain;
}
.shj-title-text {
  color: rgb(217, 217, 217);
  text-align: center;
  font-size: 22px;
  line-height: 60px;
  font-weight: 800;
}
.shj-router {
  width: 100%;
  height: 80px;
  margin-top: 10px;
  padding: 0 9%;
  display: flex;
  align-items: flex-end;
}
.shj-logo {
  width: 95px;
  height: 80px;
}
.shj-logo img {
  width: 85px;
  height: 85px;
}
.shj-home {
  width: 255px;
  height: 80px;
  background-image: url("./assets/image/homebutton.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: bottom;
  margin: 0 1%;
  position: relative;
}
.shj-home .home {
  width: 255px;
  height: 43px;
  position: absolute;
  bottom: 0;
  text-align: center;
  color: #b8d5e6;
  font-size: 18px;
  font-weight: 600;
}
.shj-nav {
  width: 76%;
  display: flex;
  justify-content: space-around;
}
.shj-nav li {
  width: 17%;
  height: 80px;
  background-image: url("./assets/image/routerbutton.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: bottom;
  position: relative;
}
.router-button {
  width: 100%;
  height: 37px;
  position: absolute;
  bottom: 0;
  text-align: center;
  color: #b8d5e6;
  font-size: 16px;
  font-weight: 600;
}
.router-button:hover {
  width: 100%;
  height: 37px;
  position: absolute;
  bottom: 0;
  text-align: center;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  transition: font-size 0.2s;
}
.active {
  width: 100%;
  height: 37px;
  position: absolute;
  bottom: 0;
  text-align: center;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  transition: font-size 0.2s;
}
.router-page {
  padding: 0 7%;
  margin-top: 15px;
  color: #fff;
}
</style>
