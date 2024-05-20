<template>
  <div class="signup-form">
    <h2>회원가입</h2>
    <form @submit.prevent="handleSubmit">
      <div class="temp">
        <div style="width: 25%;">
          <label for="id" class="info">ID</label>
        </div>
        <input type="text" v-model="form.id" required style="width: 60%;"/>
      </div>
      <div class="temp">
        <div style="width: 25%;">
          <label for="pw" class="info">Password</label>
        </div>
        <input type="password" v-model="form.password" required style="width: 60%;"/>
      </div>
      <div class="temp">
        <div style="width: 25%;">
          <label for="name" class="info">Name</label>
        </div>
        <input type="text" v-model="form.name" required style="width: 60%;"/>
      </div>
      <div class="temp">
        <div style="width: 25%;">
          <label for="address" class="info">Address</label>
        </div>
        <input type="text" v-model="form.address" required style="width: 60%;"/>
      </div>
      <button type="submit">가입하기</button>
    </form>
  </div>
</template>

<script>
import { useUserStore } from '@/stores/useUserStore';

export default {
  setup () {
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
  background-color: #a3ea82;
  color: rgb(0, 0, 0);
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.signup-form button:hover {
  background-color: #5c988b;
}

.temp {
  display: flex;
  margin: 0 auto;
  vertical-align: middle;
  justify-content: center;
}

.info{
  font-size: 200%;
  margin-right: 5%;
}


</style>
