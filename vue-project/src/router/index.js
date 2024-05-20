import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import MainView from '@/views/MainView.vue'
import MyPage from '@/views/MyPage.vue'
import RoutineBoardView from '@/views/RoutineBoardView.vue'
import RoutineCreateView from '@/views/RoutineCreateView.vue'
import WorkOutView from '@/views/WorkOutView.vue'
import RoutineBoardDetailView from '@/views/RoutineBoardDetailView.vue'
import SelectFitness from '@/views/RoutineCreateViews/SelectFitness.vue'
import DetailFitness from '@/views/RoutineCreateViews/DetailFitness.vue'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/main',
      name: 'main',
      component: MainView
    },
    {
      path: '/create',
      name: 'create',
      component: RoutineCreateView,
      children : [
        {
          path: 'fitness/:muscleId',
          component: SelectFitness,
          name: 'SelectFitness',
          children : [{
            path: 'detail/:fitnessId',
            component: DetailFitness,
            name: 'DetailFitness',
          }
          ]
        },
      ]
    },
    {
      path: '/board',
      name: 'board',
      component: RoutineBoardView
    },
    {
      path: '/mypage',
      name: 'mypage',
      component: MyPage
    },
    {
      path: '/workout',
      name: 'workout',
      component: WorkOutView
    },
    {
      path: '/board/:id',
      name: 'detail',
      component : RoutineBoardDetailView
    },

  ]
})

export default router