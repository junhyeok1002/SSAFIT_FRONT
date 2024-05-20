<template>
  <div class="login-container" style="width: 500px;">
    <img src="../assets/img/SsaFyTest.png" alt="ssafyimage" style="margin-top: 10%">
    <h2 style="margin:10%">로그인</h2>

    

    <form @submit.prevent="login">
      <div style="display: flex;">
        <div class="userInfo">
          <div class="row">
          <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">ID</label>
          <div class="col-sm-10">
            <input type="text" class="form-control form-control-lg" id="colFormLabelLg" placeholder="ID" v-model="username" required>
          </div>
        </div>
        <div class="row">
          <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">PW</label>
          <div class="col-sm-10">
            <input type="password" class="form-control form-control-lg" id="colFormLabelLg" placeholder="PASSWORD" v-model="password" required>
          </div>
        </div>
        </div>
        <button type="submit" class="btn btn-outline-primary" style="width: 30%; font-size: 150%;" >로그인</button>

      </div>
    </form>
    <div style="margin:10%">
      <button @click="goToRegister" class="btn btn-outline-success" style="font-size: 150%; width: 40%;">회원가입</button>
    </div>
  </div>
</template>

<script>
import { useUserStore } from '@/stores/useUserStore';
import {ref} from 'vue'
export default {

  setup() {
      const userStore = useUserStore();
      return {
        userStore
      };
    },
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    login() {
      console.log('로그인 시도:', this.username, this.password);
      const info = ref({
        'id':null,
        'password':null
      });
      info.value.id=this.username;
      info.value.password=this.password;
      this.userStore.login(info.value);
    },
    goToRegister() {
      this.$router.push('/register');
    }
  }
};
</script>

<style scoped>
.login-container {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 300px;
  margin: 50px auto;
}
</style>
