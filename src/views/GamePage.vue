<template>
  <div class="game-wrapper">
    <h2>九宫格旋转拼图</h2>
    <div class="puzzle-grid">
      <div
        v-for="(piece, idx) in pieces"
        :key="idx"
        class="puzzle-piece"
        :style="pieceStyle(piece, idx)"
        @click="rotatePiece(idx)"
      >
        <img :src="imgUrl" alt="拼图" />
      </div>
    </div>
    <div class="game-actions">
      <button @click="shuffle">打乱</button>
      <button @click="reset">还原</button>
      <span v-if="isWin" class="game-success">恭喜你拼好了！</span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// 你可以替换为任意图片
const imgUrl = 'https://img.zcool.cn/community/01b1e95e2f2e2fa801216518a2e2e2.jpg@1280w_1l_2o_100sh.jpg'

// 9宫格，每个格子有旋转角度（0/90/180/270）
const pieces = ref(Array.from({ length: 9 }, (_, i) => ({ rotate: 0 })))

function pieceStyle(piece, idx) {
  const row = Math.floor(idx / 3)
  const col = idx % 3
  return {
    width: '100px',
    height: '100px',
    transform: `rotate(${piece.rotate}deg)` + ` translate(-${col * 100}px, -${row * 100}px)` ,
    background: '#eee',
    overflow: 'hidden',
    position: 'absolute',
    left: `${col * 100}px`,
    top: `${row * 100}px`,
    clipPath: `inset(${row * 100}px ${200 - col * 100}px ${200 - row * 100}px ${col * 100}px)`
  }
}

function rotatePiece(idx) {
  pieces.value[idx].rotate = (pieces.value[idx].rotate + 90) % 360
}

function shuffle() {
  pieces.value.forEach(piece => {
    piece.rotate = [0, 90, 180, 270][Math.floor(Math.random() * 4)]
  })
}

function reset() {
  pieces.value.forEach(piece => {
    piece.rotate = 0
  })
}

const isWin = computed(() => pieces.value.every(piece => piece.rotate === 0))
</script>

<style scoped>
.game-wrapper {
  max-width: 340px;
  margin: 40px auto;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  padding: 32px 24px;
  text-align: center;
}
.puzzle-grid {
  width: 300px;
  height: 300px;
  margin: 0 auto 24px auto;
  position: relative;
  background: #222;
  border-radius: 8px;
  overflow: hidden;
}
.puzzle-piece {
  position: absolute;
  width: 100px;
  height: 100px;
  box-sizing: border-box;
  cursor: pointer;
  transition: transform 0.3s;
}
.puzzle-piece img {
  width: 300px;
  height: 300px;
  object-fit: cover;
  position: absolute;
  left: -0px;
  top: -0px;
  pointer-events: none;
  user-select: none;
}
.game-actions {
  margin-top: 18px;
}
.game-actions button {
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
.game-actions button:hover {
  background: #36996b;
}
.game-success {
  color: #42b983;
  font-weight: bold;
  margin-left: 16px;
}
</style>
