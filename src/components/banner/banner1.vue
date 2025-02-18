<template>
  <div class="carousel">
    <div
      class="carousel-inner"
      :style="{ transform: `translateX(${currentSlide * -100}%)` }"
    >
      <div v-for="(item, index) in slides" :key="index" class="carousel-item">
        <img :src="item" alt="carousel image" />
      </div>
    </div>
    <button @click="prevSlide" class="carousel-button-prev">❮</button>
    <button @click="nextSlide" class="carousel-button-next">❯</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        require("../../assets/image/uninhabited-car1.png"),
        require("../../assets/image/uninhabited-car2.png"),
        require("../../assets/image/uninhabited-car3.webp"),
        require("../../assets/image/uninhabited-car4.jpg"),
        require("../../assets/image/uninhabited-car5.png"),
      ],
      currentSlide: 0,
      intervalId: null,
    };
  },
  methods: {
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    },
    prevSlide() {
      this.currentSlide =
        (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    },
    startAutoPlay() {
      this.intervalId = setInterval(this.nextSlide, 3000);
    },
    stopAutoPlay() {
      clearInterval(this.intervalId);
    },
  },
  mounted() {
    this.startAutoPlay();
  },
  beforeDestroy() {
    this.stopAutoPlay();
  },
};
</script>

<style scoped>
.carousel {
  position: relative;
  width: 400px;
  overflow: hidden;
}

.carousel-inner {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.carousel-item {
  min-width: 100%;
  box-sizing: border-box;
}

.carousel img {
  width: 400px;
  height: 205px;
}

.carousel-button-prev,
.carousel-button-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
}

.carousel-button-prev {
  left: 10px;
}

.carousel-button-next {
  right: 10px;
}
</style>