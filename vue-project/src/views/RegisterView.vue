<template>
  <div class="centered-container">
    <div class="signup-form" style="margin: 0;">
      <div class="logo">
        <img src="@/assets/img/Logo2.jpg" alt="로고" class="logo-img">
        <div class="title" style="font-weight: bold;">SSAFIT</div>
      </div>

      <h2 style="margin-top: 1rem; margin-bottom: 1rem;">회원가입</h2>
      <form @submit.prevent="handleSubmit">
        <div class="temp">
          <input type="text" v-model="form.id" placeholder="ID" required style="width: 85%;" />
        </div>
        <div class="temp">
          <input type="password" v-model="form.password" placeholder="Password" required style="width: 85%;" />
        </div>
        <div class="temp">
          <input type="text" v-model="form.name" placeholder="Name" required style="width: 85%;" />
        </div>
        <div class="temp">
          <input type="text" v-model="form.address" placeholder="Address" required style="width: 85%;" />
        </div>
        <button type="submit" style="margin-top: 0rem;">가입하기</button>
      </form>
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
  data() {
    return {
      form: {
        id: '',
        password: '',
        name: '',
        address: ''
      }
    };
  },
  methods: {
    handleSubmit() {
      console.log('Form Submitted:', this.form);
      this.userStore.signup(this.form);
    }
  }
};
</script>

<style scoped>
.signup-form {
  width: 50%;
  margin: 0 auto;
  padding: 3%;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.1);
  margin-top: 50px;
}

.signup-form h2 {
  text-align: center;
  margin-bottom: 8%;
}

.signup-form div {
  margin-bottom: 15px;
}

.signup-form label {
  display: block;
  margin-bottom: 5px;
}

.signup-form input {
  width: calc(100% - 20px);
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.signup-form button {
  width: 85%;
  height: 60px;
  font-size: 150%;
  padding: 10px;
  margin-top: 5%;
  background-color: #9dbfd3;
  color: rgb(0, 0, 0);
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.signup-form button:hover {
  background-color: #4556a0;
}

.temp {
  display: flex;
  margin: 0 auto;
  vertical-align: middle;
  justify-content: center;
}

.info {
  font-size: 200%;
  margin-right: 5%;
}

.centered-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
}
</style>
