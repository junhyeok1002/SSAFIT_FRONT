import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { useRouter } from 'vue-router'

const USER_URL = "http://localhost:8080"

export const useUserStore = defineStore('user', () => {
  const user = ref(null);
  const router = useRouter();
  if (sessionStorage.getItem("login")) {
    console.log(JSON.parse(sessionStorage.getItem("login")))
    user.value=JSON.parse(sessionStorage.getItem("login"));
    // user.value = JSON.parse(sessionStorage.getItem("login"));
  }

  // 로그인
  const login = function(info) {
    console.log(info)
    axios.post(`${USER_URL}/login`,info)
    .then((res) => {
      window.alert("로그인 완료!!");
      console.log(res);
      user.value = res.data;
      console.log("유저 정보 : ",user.value);
      // 이제 세션영역에 유저정보가 있음
      console.log("JSON으로 바꿔줘",JSON.stringify(res.data));
      sessionStorage.setItem("login",JSON.stringify(res.data));
      console.log("잘 변환됐니?",JSON.parse(sessionStorage.getItem("login")))
      router.replace({name:"main"});
    })
    .catch((err)=>{
      window.alert("아이디나 비번이 맞지 않습니다!!!")
    })
  }

  //로그아웃
  const logout = function() {
    axios.post(`${USER_URL}/logout`)
    .then(() => {
      user.value = null;
      sessionStorage.removeItem("login");
      console.log("로그아웃 완료")
      router.replace({name : "login"})
    })
  }

  //회원가입
  const signup = function(info) {
    console.log("여기는 store의 회원가입 메서드",info);
    axios.post(`${USER_URL}/signup`,info)
    .then((res) => {
      console.log("가져왔니? ",res)
      window.alert("환영합니다!");
      router.replace({name : "login"})
    })
    .catch((err) => {
      console.log("가입이 잘 안됐음...",err);
    })
  }

  //회원수정
  //먼저 로그인 상태가 전제조건
  const userUpdate = function(info) {
    console.log("엑시오스오기전의 모습?",info)
    axios.put(USER_URL+"/userUpdate",info)
    .then((res)=> {
      console.log("바뀜?",res)
      window.alert("회원수정 성공!",res);
      user.value = res.data;
      router.replace({name:'mypage'})
    })
  }
  

  return { 
    USER_URL,user,login,logout,signup,userUpdate,
  }
})
