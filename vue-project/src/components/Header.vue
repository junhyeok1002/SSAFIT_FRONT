<template>
  <div class="header">
    <div class="logo" @click="goToMain">
      <img src="@/assets/img/Logo.png" alt="로고" class="logo-img">
      <div class="title">SSAFIT</div>
    </div>
    <div style="display: flex;">
      <div @click="goToHome" class="link">홈으로</div>
      <div @click="goToCreateRoutine" class="link">루틴 만들기</div>
      <div @click="goToRoutineBoard"  class="link">루틴 게시판</div>
      <div @click="goToRoutineMyPage"  class="link">마이 페이지</div>
    </div>
    <div class="user-info">
      <div v-if="userStore.user !== null" class="user-buttons" style="display: block;">
        <div class="user-greeting">반갑습니다, {{ userStore.user.name }} 님</div>
        <button @click="logout" class="btn btn-outline-primary">로그아웃</button>
        <button @click="mypage" class="btn btn-outline-secondary">마이페이지</button>
      </div>
      <div v-else>
        <button @click="login" class="btn btn-outline-primary">로그인</button>
      </div>
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
    },
    goToMain() {
      console.log("메인 클릭");
      this.$router.push('/main');
      // location.reload();
    },
    goToHome() {
      this.$router.push('/main');
      // location.reload();
    },
    goToCreateRoutine() {
      this.$router.push('/create');
    },
    goToRoutineBoard() {
      this.$router.push('/board');
    },goToRoutineMyPage(){
      this.$router.push('/mypage');
    }
  }
};
</script>

<style scoped>
/* 스타일은 여기에 작성 */
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

.link{
  margin-right: 5rem;
  margin-left: 5rem;
  font-weight: bold;
}

.link:hover{
  color: #4556a0;
  /* // #9dbfd3, #4556a0 */
}


.logo-img {
  width: 50px;
  /* 로고 이미지의 크기에 맞게 조절 */
  height: auto;
  /* margin-right: 10px; */
  margin-top: 0.3rem;
  margin-left: 1rem;
}

.logo-text {
  font-size: 1.5rem;
}

.user-greeting {
  margin-right: 10px;
  text-align: right;
  
  font-family: "Hahmlet", serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
  margin-bottom: 0.3rem;
}

.user-buttons button {
  margin-left: 5px;
}

.title {
  font-family: "Oswald", sans-serif;
  font-optical-sizing: auto;
  font-weight: bold;
  font-style: normal;
  font-size: 2rem;
  /* margin-left: 1rem; */
}
</style>

<style>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&family=Parisienne&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Hahmlet:wght@100..900&family=Oswald:wght@200..700&family=Parisienne&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Gowun+Batang&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Gowun+Batang&family=Gowun+Dodum&display=swap');

* {
  font-family: "Gowun Dodum", sans-serif;
  font-weight: 400;
  font-style: normal;
}
</style>

