import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Jokes from '../views/Jokes.vue'
import Memes from '../views/Memes.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/jokes',
    name: 'Jokes',
    component: Jokes
  },
  {
    path:'/memes',
    name:'Memes',
    component: Memes
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
