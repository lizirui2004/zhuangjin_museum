<template>
  <div class="intro-layout">
    <aside class="intro-sidemenu">
      <ul>
        <li class="active">壮锦简介</li>
        <li>历史渊源</li>
        <li>工艺流程</li>
        <li>图案寓意</li>
        <li>现代发展</li>
      </ul>
    </aside>
    <main class="intro-main">
      <h1 class="intro-title">壮锦 · 民族瑰宝</h1>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Zhuang_brocade_2.jpg/800px-Zhuang_brocade_2.jpg"
        alt="壮锦" class="intro-image" />
      <p class="intro-text">
        壮锦是中国壮族人民世代相传的传统织锦工艺，素有“南方丝绸之路明珠”的美誉。它图案精美、色彩鲜艳、技艺复杂，广泛用于服饰、装饰、礼仪等领域，是中华民族非物质文化遗产的重要组成部分。
      </p>
    </main>
  </div>
</template>

<script setup>
// 这里只是展示内容，不需要逻辑
</script>

<style scoped>
.intro-layout {
  display: flex;
  min-height: calc(100vh - 60px);
  background: #181818;
  margin: 0;
}

.intro-sidemenu {
  width: 220px;
  background: #232323;
  border-radius: 0 16px 16px 0;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.08);
  padding: 40px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.intro-sidemenu ul {
  list-style: none;
  padding: 0 0 0 0;
  margin: 0;
  width: 100%;
}

.intro-sidemenu li {
  padding: 18px 32px 18px 24px;
  color: #fff;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  border-radius: 0 16px 16px 0;
}

.intro-sidemenu li.active,
.intro-sidemenu li:hover {
  background: #42b983;
  color: #fff;
}

.intro-main {
  flex: 1;
  padding: 48px 0 32px 0;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.intro-title {
  font-size: 32px;
  color: #42b983;
  margin-bottom: 20px;
}

.intro-image {
  width: 100%;
  max-width: 600px;
  max-height: 400px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 20px;
}

.intro-text {
  font-size: 18px;
  line-height: 1.8;
  text-align: left;
  max-width: 600px;
}

@media (max-width: 900px) {
  .intro-layout {
    flex-direction: column;
  }

  .intro-sidemenu {
    width: 100vw;
    flex-direction: row;
    align-items: center;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    justify-content: center;
  }

  .intro-sidemenu ul {
    display: flex;
    width: 100vw;
    justify-content: space-around;
  }

  .intro-sidemenu li {
    border-radius: 0;
    padding: 14px 10px;
    font-size: 1rem;
  }

  .intro-main {
    padding: 24px 0 16px 0;
  }
}
</style>


