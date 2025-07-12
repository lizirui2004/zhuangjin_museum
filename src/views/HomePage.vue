<template>
  <div class="homepage-flex-center">
    <div class="carousel-row">
      <el-carousel height="300px" indicator-position="outside" class="custom-carousel">
        <el-carousel-item v-for="(item, idx) in images" :key="idx">
          <img :src="item.src" class="carousel-img" :alt="item.alt" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="intro-section">
      <h2>壮锦简介</h2>
      <div class="intro-flex">
        <img class="intro-img"
          src="https://img.zcool.cn/community/01b1e95e2f2e2fa801216518a2e2e2.jpg@1280w_1l_2o_100sh.jpg" alt="壮锦简介图" />
        <p>
          壮锦是中国壮族人民世代相传的传统手工织锦工艺，历史悠久，被誉为“壮族的活化石”。壮锦以其色彩艳丽、图案丰富、工艺精湛著称，常用于服饰、被面、腰带、包袋等生活用品和艺术品。
        </p>
      </div>
    </div>
    <div class="intro-section">
      <h2>壮锦的图案与寓意</h2>
      <div class="intro-flex">
        <img class="intro-img"
          src="https://img.zcool.cn/community/01e2e25e2f2e2fa801216518a2e2e2.jpg@1280w_1l_2o_100sh.jpg" alt="壮锦图案图" />
        <p>
          壮锦的图案多以自然界的花鸟鱼虫、几何纹样及壮族民间传说为题材，寓意吉祥如意。每一幅壮锦都蕴含着壮族人民对美好生活的向往。
        </p>
      </div>
    </div>
    <div class="intro-section">
      <h2>壮锦的工艺流程</h2>
      <div class="intro-flex">
        <img class="intro-img"
          src="https://img.zcool.cn/community/01a1e95e2f2e2fa801216518a2e2e2.jpg@1280w_1l_2o_100sh.jpg" alt="壮锦工艺图" />
        <p>
          壮锦的织造过程采用传统的手工织机，工序繁复，包括选材、染色、织造等环节，充分展现了壮族人民的智慧与审美。
        </p>
      </div>
    </div>
    <div class="intro-section">
      <h2>壮锦的现代发展</h2>
      <div class="intro-flex">
        <img class="intro-img"
          src="https://img.zcool.cn/community/01b1e95e2f2e2fa801216518a2e2e2.jpg@1280w_1l_2o_100sh.jpg" alt="壮锦现代图" />
        <p>
          随着时代发展，壮锦不断创新，融入现代设计元素，成为时尚与传统结合的典范，走向更广阔的舞台。
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const images = ref([
  {
    src: 'https://img.zcool.cn/community/01b1e95e2f2e2fa801216518a2e2e2.jpg@1280w_1l_2o_100sh.jpg',
    alt: '壮锦图1'
  },
  {
    src: 'https://img.zcool.cn/community/01e2e25e2f2e2fa801216518a2e2e2.jpg@1280w_1l_2o_100sh.jpg',
    alt: '壮锦图2'
  },
  {
    src: 'https://img.zcool.cn/community/01a1e95e2f2e2fa801216518a2e2e2.jpg@1280w_1l_2o_100sh.jpg',
    alt: '壮锦图3'
  }
])
</script>

<style scoped>
.homepage-flex-center {
  min-height: calc(100vh - 60px);
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: #181818;
}

.carousel-row {
  width: 90%;
  max-width: 1200px;
  margin: 40px auto 0 auto;
  display: flex;
  justify-content: center;
  overflow-x: hidden;
}

.custom-carousel {
  width: 100%;
  height: 300px;
  margin: 0 auto;
}

.carousel-img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 12px;
}

.intro-section {
  width: 90%;
  max-width: 900px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  padding: 32px 24px;
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.intro-section h2 {
  color: #42b983;
  font-size: 1.6rem;
  margin-bottom: 16px;
}

.intro-flex {
  display: flex;
  align-items: center;
  gap: 32px;
  width: 100%;
}

.intro-img {
  width: 320px;
  max-width: 40vw;
  min-width: 120px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  margin-bottom: 0;
}

.intro-flex p {
  flex: 1;
  color: #333;
  font-size: 1.1rem;
  line-height: 1.8;
  text-align: left;
}

@media (max-width: 900px) {

  .carousel-row,
  .intro-section {
    width: 98vw;
    max-width: 98vw;
  }

  .homepage-flex-center {
    width: 100%;
    max-width: 100vw;
    overflow-x: hidden;
  }

  .intro-flex {
    flex-direction: column;
    gap: 18px;
  }

  .intro-img {
    width: 100%;
    max-width: 100%;
  }

  .intro-flex p {
    text-align: center;
  }
}

body,
html {
  overflow-x: hidden;
}
</style>
