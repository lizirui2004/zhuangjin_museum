<template>
  <div class="game-wrapper">
    <h2>九宫格旋转拼图</h2>
    <div class="puzzle-grid">
      <div v-for="(piece, idx) in pieces" :key="idx" class="puzzle-piece" :style="pieceStyle(piece, idx)"
        @click="rotatePiece(idx)">
        <img :src="imgUrl" alt="拼图" :style="imgPieceStyle(idx, piece.rotate)" />
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
import imgUrl from '@/assets/img/game/game.png'
const gridSize = 3
const pieceSize = 100
const imgSize = gridSize * pieceSize
const pieces = ref(Array.from({ length: gridSize * gridSize }, () => ({ rotate: 0 })))

function pieceStyle(piece, idx) {
  const row = Math.floor(idx / gridSize)
  const col = idx % gridSize
  return {
    width: pieceSize + 'px',
    height: pieceSize + 'px',
    position: 'absolute',
    left: col * pieceSize + 'px',
    top: row * pieceSize + 'px',
    overflow: 'hidden',
    cursor: 'pointer',
    boxSizing: 'border-box',
    // 无动画
    transition: 'none',
    transform: `rotate(${piece.rotate}deg)`
  }
}

function imgPieceStyle(idx, rotate) {
  const row = Math.floor(idx / gridSize)
  const col = idx % gridSize
  return {
    width: imgSize + 'px',
    height: imgSize + 'px',
    objectFit: 'cover',
    position: 'absolute',
    left: -col * pieceSize + 'px',
    top: -row * pieceSize + 'px',
    pointerEvents: 'none',
    userSelect: 'none',
    // 无动画
    transition: 'none',
    transform: `rotate(${rotate}deg)`
  }
}

function rotatePiece(idx) {
  // 记录上一次旋转角度
  const prev = pieces.value[idx].rotate
  const next = (prev + 90) % 360
  // 如果从270到0，强制动画正向旋转
  if (prev === 270 && next === 0) {
    pieces.value[idx].rotate = 360
    setTimeout(() => {
      pieces.value[idx].rotate = 0
    }, 300) // 动画时长与transition一致
  } else {
    pieces.value[idx].rotate = next
  }
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
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
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
  overflow: hidden;
}

.puzzle-piece img {
  /* 由js动态设置定位和旋转 */
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
