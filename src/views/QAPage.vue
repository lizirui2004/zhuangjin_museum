<template>
  <div class="qa-wrapper">
    <div v-if="currentQuestion">
      <div class="qa-question">
        <div v-if="currentQuestion.img" class="qa-question-img">
          <img :src="currentQuestion.img" alt="题目图片" />
        </div>
        <h2>{{ currentQuestion.text }}</h2>
      </div>
      <div class="qa-options">
        <div v-for="(opt, idx) in currentQuestion.options" :key="idx" class="qa-option"
          :class="{ selected: selectedIndex === idx, correct: showResult && idx === currentQuestion.answer, wrong: showResult && selectedIndex === idx && idx !== currentQuestion.answer }"
          @click="selectOption(idx)">
          <template v-if="opt.img">
            <img :src="opt.img" :alt="opt.text || '选项图片'" />
            <div v-if="opt.text">{{ opt.text }}</div>
          </template>
          <template v-else>
            {{ opt.text }}
          </template>
        </div>
      </div>
      <div class="qa-actions">
        <button v-if="!showResult" @click="submitAnswer" :disabled="selectedIndex === null">提交</button>
        <button v-else @click="nextQuestion">下一题</button>
      </div>
      <div v-if="showResult" class="qa-feedback">
        <span v-if="selectedIndex === currentQuestion.answer" style="color: #42b983;">回答正确！</span>
        <span v-else style="color: #e74c3c;">回答错误，正确答案已标记。</span>
      </div>
    </div>
    <div v-else class="qa-finish">
      <h2>答题结束！</h2>
      <p>共 {{ questions.length }} 题，正确 {{ correctCount }} 题。</p>
      <button @click="restart">重新答题</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// 题目设置说明：
// 每个题目对象包含：
// text: 题目文字
// img: 题目图片（可选）
// options: 选项数组，每个选项可为 { text, img } 结构
// answer: 正确答案的索引（从0开始）
const questions = ref([
  {
    text: '下列哪一项是壮锦的传统图案？',
    img: '/img/QA/q1q.png',
    options: [
      { text: '凤凰,蝴蝶' },
      { text: '龙' },
      { text: '玫瑰花' },
      { text: '太阳' }
    ],
    answer: 0
  },
  {
    text: '壮锦传统上多用于以下哪一种用途？',
    options: [
      { text: '鞋底垫布' },
      { text: '建筑装饰画' },
      { text: '礼仪服饰或嫁妆' },
      { text: '军队制服' }
    ],
    answer: 2
  },
  {
    text: '壮锦最早的织造工具是？',
    options: [
      { text: '梭织机' },
      { text: '背带织机' },
      { text: '脚踏提花机' },
      { text: '飞梭织布机' }
    ],
    answer: 1
  },
  {
    text: '那个是山茶花纹壮锦',
    options: [
      { img: '/img/QA/dwl.png' },
      { img: '/img/QA/jhfsw.png' },
      { img: '/img/QA/schw.png' },
      { img: '/img/QA/sfw.png' }
    ],
    answer: 2
  }
])

const current = ref(0)
const selectedIndex = ref(null)
const showResult = ref(false)
const correctCount = ref(0)

const currentQuestion = computed(() => questions.value[current.value])

function selectOption(idx) {
  if (showResult.value) return
  selectedIndex.value = idx
}
function submitAnswer() {
  if (selectedIndex.value === null) return
  showResult.value = true
  if (selectedIndex.value === currentQuestion.value.answer) {
    correctCount.value++
  }
}
function nextQuestion() {
  showResult.value = false
  selectedIndex.value = null
  current.value++
}
function restart() {
  current.value = 0
  selectedIndex.value = null
  showResult.value = false
  correctCount.value = 0
}
</script>

<style scoped>
.qa-wrapper {
  max-width: 700px;
  margin: 40px auto;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  padding: 32px 24px;
  min-height: 400px;
}

.qa-question {
  margin-bottom: 24px;
  text-align: center;
}

.qa-question-img img {
  max-width: 320px;
  max-height: 180px;
  border-radius: 8px;
  margin-bottom: 12px;
}

.qa-options {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  justify-content: center;
  margin-bottom: 24px;
}

.qa-option {
  background: #f5f5f5;
  border-radius: 8px;
  padding: 12px 18px;
  min-width: 120px;
  min-height: 48px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid transparent;
  transition: border 0.2s, background 0.2s;
}

.qa-option.selected {
  border: 2px solid #42b983;
  background: #e6f9f0;
}

.qa-option.correct {
  border: 2px solid #42b983;
  background: #d4f5e9;
}

.qa-option.wrong {
  border: 2px solid #e74c3c;
  background: #fbeaea;
}

.qa-option img {
  max-width: 120px;
  max-height: 80px;
  border-radius: 6px;
  margin-bottom: 6px;
}

.qa-actions {
  text-align: center;
  margin-bottom: 12px;
}

.qa-actions button {
  background: #42b983;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 8px 24px;
  font-size: 1.1rem;
  cursor: pointer;
  margin: 0 8px;
  transition: background 0.2s;
}

.qa-actions button:disabled {
  background: #ccc;
  cursor: not-allowed;
}

.qa-feedback {
  text-align: center;
  font-size: 1.1rem;
  margin-top: 8px;
}

.qa-finish {
  text-align: center;
  padding: 40px 0;
}
</style>
