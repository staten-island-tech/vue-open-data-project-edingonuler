import { createRouter, createWebHistory } from 'vue-router'
import ApiData from '@/views/ApiData.vue'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/',
      name: 'apidata',
      component: ApiData,
    },
  ],
})

export default router

// https://data.cityofnewyork.us/resource/5ucz-vwe8.json
