import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import EconomyPage from '../views/EconomyPage.vue'
import PoliticsPage from '../views/PoliticsPage.vue'
import ArticlePage from '../views/ArticlePage.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/politics', component: PoliticsPage },
    { path: '/economy', component: EconomyPage },
    { path: '/article/:id', component: ArticlePage },
  ],
  scrollBehavior: () => ({ top: 0 }),
})
