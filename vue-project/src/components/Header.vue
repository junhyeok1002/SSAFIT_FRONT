<template>
  <div class="header">
    <div class="logo">
      <!-- <img src="로고이미지주소" alt="로고" class="logo-img"> -->
      <span class="logo-text">SSAFIT</span>
    </div>
    <div v-if="userStore.user !== null" class="userInfo">
      <div class="user-greeting">반갑습니다, {{ userStore.user.name }} 님</div>
      <div class="user-buttons">
        <button @click="logout" class="btn btn-outline-primary">로그아웃</button>
        <button @click="mypage" class="btn btn-outline-secondary">마이페이지</button>
      </div>
    </div>
    <div v-else>
      <button @click="login" class="btn btn-outline-primary">로그인</button>
    </div>
  </div>
</template>

<script>
import { useUserStore } from '@/stores/useUserStore';

export default {
  setup() {
    const userStore = useUserStore();
    return {
      userStore
    };
  },
  methods: {
    logout() {
      this.userStore.logout();
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
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

.logo {
  display: flex;
  align-items: center;
}

.logo-img {
  width: 50px; /* 로고 이미지의 크기에 맞게 조절 */
  height: auto;
  margin-right: 10px;
}

.logo-text {
  font-size: 1.5rem;
}

.user-greeting {
  margin-right: 10px;
}

.user-buttons button {
  margin-left: 5px;
}
</style>
