<template>
  <div class="intro-container">
    <h1 class="intro-title">壮锦 · 民族瑰宝</h1>
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Zhuang_brocade_2.jpg/800px-Zhuang_brocade_2.jpg"
      alt="壮锦"
      class="intro-image"
    />
    <p class="intro-text">
      壮锦是中国壮族人民世代相传的传统织锦工艺，素有“南方丝绸之路明珠”的美誉。它图案精美、色彩鲜艳、技艺复杂，广泛用于服饰、装饰、礼仪等领域，是中华民族非物质文化遗产的重要组成部分。
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
