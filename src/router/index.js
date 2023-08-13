import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DeletedTasks from '../views/DeletedTasks.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        auth: true,
      },
    },
    {
      path: '/deleted',
      name: 'deleted',
      component: DeletedTasks,
      props: true,
    },
  ],
})

export default router
