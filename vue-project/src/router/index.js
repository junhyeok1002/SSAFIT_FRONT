import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import MainView from '@/views/MainView.vue'
import MyPage from '@/views/MyPage.vue'
import RoutineBoardView from '@/views/RoutineBoardView.vue'
import RoutineCreateView from '@/views/RoutineCreateView.vue'
import WorkOutView from '@/views/WorkOutView.vue'
import RoutineBoardDetailView from '@/views/BoardViews/RoutineBoardDetailView.vue'
import SelectFitness from '@/views/RoutineCreateViews/SelectFitness.vue'
import DetailFitness from '@/views/RoutineCreateViews/DetailFitness.vue'
import YoutubeView from '@/views/YoutubeView.vue'
import ChatgptComponent from '@/components/chatgpt/ChatgptComponent.vue'
import RoutineDetailView from '@/views/RoutineDetailView.vue'
import RoutineBoardUpdateView from '@/views/BoardViews/RoutineBoardUpdateView.vue'
import UserUpdateView from '@/views/UserUpdateView.vue'
import WorkOutViewSelect from '@/views/WorkOutViewSelect.vue'
import WorkOutFinish from '@/views/WorkOutFinish.vue';
import RouteBoardCreateView from '@/views/BoardViews/RouteBoardCreateView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainView
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
    },
    {
      path: '/youtube',
      name: 'youtube',
      component: YoutubeView
    },
    {
      path: '/fitness/:muscleId',
      component: SelectFitness,
      name: 'SelectFitness',
    },
    {
      path: '/detail/:fitnessId',
      component: DetailFitness,
      name: 'DetailFitness',
      redirect: to => {
        // 현재 요청된 경로(to.path) 뒤에 '/youtube'를 붙여서 redirect
        return to.path + '/youtube';
      },
      children: [
        {
          path: 'youtube',
          name: 'youtube',
          component: YoutubeView,
        },
        {
          path: 'chatgpt',
          component: ChatgptComponent,
          name: 'chatgpt',
        },
      ]
    },
    {
      path: '/chatgpt',
      component: ChatgptComponent,
      name: 'ChatgptComponent',
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
      path: '/workout/:routineId',
      name: 'workout',
      component: WorkOutView
    },
    {
      path: '/workout/:routineId/:fitnessId',
      name: 'workoutselct',
      component: WorkOutViewSelect
    },
    {
      path: '/workout/finish/:routineId',
      name: 'workoutFinish',
      component: WorkOutFinish
    },
    {
      path: '/board/:id',
      name: 'detail',
      component : RoutineBoardDetailView
    },
    {
      path: '/routine/:routineId',
      component: RoutineDetailView,
      name: 'RoutineDetailView',
    },
    {
      path: '/update/:id',
      name: 'update',
      component: RoutineBoardUpdateView
    },
    {
      path: '/userUpdate',
      name: 'userUpdate',
      component: UserUpdateView
    },
    {
      path: '/createReview/:routineId',
      name: 'createReview',
      component: RouteBoardCreateView
    },

  ]
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = sessionStorage.getItem("login");
  if (to.name === 'register') {
    next(); // 회원가입시 그냥 진행
  }else if (to.name !== 'login' && !isAuthenticated) {
    next({ name: 'login' }); // 로그인 페이지 이외의 모든 페이지는 로그인이 필요함
  } else if (to.name === 'login' && isAuthenticated) {
    next({ name: 'main' }); // 이미 로그인되어 있으면 로그인 페이지로 이동하지 않고 메인 페이지로 이동
  } else {
    next(); // 그 외의 경우에는 그냥 진행
  }
});

export default router