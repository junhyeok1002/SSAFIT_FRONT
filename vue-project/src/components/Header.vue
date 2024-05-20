<template>
    <div class="header">
      <div class="logo">로고 + SSAFIT</div>
      <div v-if="userStore.user!== null" class="userInfo">
        <div>{{ userStore.user.name }} 님 환영합니다.</div>
        <button @click="logout" class="btn btn-outline-primary">로그아웃</button>
        <button @click="mypage" class="btn btn-outline-secondary">마이페이지</button>
      </div>
      <div v-else>
        <div style="display: flex;">
          <button @click="login" class="btn btn-outline-primary">로그인</button>
        </div>
      </div>
    </div>
  </template>

<script>
  import { useUserStore } from '@/stores/useUserStore';

  // const user = useUserStore();
  export default {
    setup() {
      const userStore = useUserStore();
      return {
        userStore
      };
    },
    data() {
    },
    methods: {
      logout() {
        this.userStore.logout();
        console.log(this.userStore.user.value);
        this.$router.push('/login');
      },
      mypage() {
        this.$router.push('/mypage');
      },
      login() {
        this.$router.push('/login');
      }
    }
  };
</script>
  
  <style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid #000;
  }
  .logo {
    flex-grow: 1;
    text-align: center;
  }

  .userInfo {
    display: flex;
  }
  </style>
  