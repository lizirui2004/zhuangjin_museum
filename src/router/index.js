import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/HomePage.vue'
import Intro from '@/views/IntroPage.vue'
import QA from '@/views/QAPage.vue'
import Game from '@/views/GamePage.vue'
import About from '@/views/AboutPage.vue'

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home },
  { path: '/intro', component: Intro },
  { path: '/qa', component: QA },
  { path: '/game', component: Game },
  { path: '/about', component: About },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
