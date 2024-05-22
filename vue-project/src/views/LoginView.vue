<template>
  <div class="centered-container">
    <div class="login-container">
      <div class="logo">
        <img src="@/assets/img/Logo2.jpg" alt="로고" class="logo-img">
        <div class="title">SSAFIT</div>
      </div>
      <form @submit.prevent="login">
        <div class="userInfo">
          <div style="width: 100%; margin-bottom: 1.1rem;">
            <!-- <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg"></label> -->
            <div class="col-sm-10" style="width: 100%;">
              <input type="text" class="form-control form-control-lg" id="colFormLabelLg" placeholder="ID" v-model="username" required>
            </div>
          </div>
          <div style="width: 100%;">
            <!-- <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg"></label> -->
            <div class="col-sm-10" style="width: 100%;">
              <input type="password" class="form-control form-control-lg" id="colFormLabelLg" placeholder="PASSWORD" v-model="password" required>
            </div>
          </div>
          <button type="submit" class="btn btn-outline-primary login-button">로그인</button>
        </div>
      </form>
      <div class="register-container">
        <button @click="goToRegister" class="btn btn-outline-success register-button">회원가입</button>
      </div>
    </div>
  </div>
</template>

<script>
import { useUserStore } from '@/stores/useUserStore';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const userStore = useUserStore();
    const router = useRouter();
    const username = ref('');
    const password = ref('');

    const login = () => {
      console.log('로그인 시도:', username.value, password.value);
      const info = {
        id: username.value,
        password: password.value
      };
      userStore.login(info);
    };

    const goToRegister = () => {
      console.log('회원가입 버튼 클릭');
      router.push('/register');
    };

    return {
      username,
      password,
      login,
      goToRegister
    };
  }
};
</script>

<style scoped>
.centered-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
}

.login-container {
  width: 500px;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.logo {
  margin: 10%;
}

.title {
  font-family: "Oswald", sans-serif;
  font-weight: bold;
  font-size: 2rem;
}

.userInfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.login-button {
  width: 100%;
  font-size: 1.5rem;
  margin-top: 20px;
}

.register-container {
  margin-top: 20px;
}

.register-button {
  font-size: 1.5rem;
  width: 100%;
}
</style>
