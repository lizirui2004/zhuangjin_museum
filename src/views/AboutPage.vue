<template>
  <div class="intro-container">
    <h2 class="section-title">北京信息科技大学</h2>
    <img src="/img/about/ts.png" alt="北信科大主楼" class="intro-image" />
    <p class="intro-text">
      北京信息科技大学（BISTU）是北京市属重点大学，位于首都北京，前身可追溯至1937年。学校以信息科技为特色，工、理、管、文、法、艺术等多学科协调发展。现有多个校区，主校区位于昌平区，环境优美，设施先进。
    </p>
    <img src="/img/about/ts.png" alt="北信科大校园" class="intro-image" />
    <p class="intro-text">
      学校设有20余个学院，涵盖人工智能、电子信息、计算机科学、管理工程等热门专业。师资力量雄厚，科研氛围浓厚，积极服务首都经济社会发展。
    </p>
    <img src="/img/about/ts.png" alt="北信科大活动" class="intro-image" />
    <p class="intro-text">
      校园文化丰富多彩，学生社团活跃，定期举办科技创新、文体艺术等各类活动。学校注重国际交流，与多所海外高校建立合作关系，为学生提供广阔的发展平台。
    </p>
  </div>
</template>

<script setup>
// 这里只是展示内容，不需要逻辑
</script>

<style scoped>
.intro-container {
  max-width: 800px;
  margin: 60px auto;
  padding: 20px;
  text-align: center;
  background-color: #1e1e1e;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  color: white;
}

.intro-title {
  font-size: 32px;
  color: #42b983;
  margin-bottom: 20px;
}

.section-title {
  font-size: 26px;
  color: #f7c948;
  margin: 32px 0 18px 0;
}

.intro-image {
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 20px;
}

.intro-text {
  font-size: 18px;
  line-height: 1.8;
}
</style>
