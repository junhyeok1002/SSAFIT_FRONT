import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { useRouter, useRoute } from 'vue-router'
import { useMuscleStore} from '@/stores/routine'

const USER_URL = "http://localhost:8080"

export const useUserStore = defineStore('user', () => {
  const user = ref(null);
  const router = useRouter();
  const userList = ref([])
  const routineStore = useMuscleStore();
  if (sessionStorage.getItem("login")) {
    console.log("뭔진 모르겠는데 유저정보다시 가져와!",JSON.parse(sessionStorage.getItem("login")))
    user.value=JSON.parse(sessionStorage.getItem("login"));
    // user.value = JSON.parse(sessionStorage.getItem("login"));
  }
  if (sessionStorage.getItem("userList")) {
    userList.value=JSON.parse(sessionStorage.getItem("userList"));
  }
  

  const idToName =  async function(obj) {
    console.log("idtoname",obj,obj.value)
    for (let i = 0; i < obj.length; i ++) {
        const id = obj[i];
        await routineStore.getOneRoutine(id);
        obj[i] = routineStore.routine;
        console.log("???",obj);
    }
    return obj;
  }

  // 로그인
  const login = async function(info) {
    console.log(info)
    await axios.post(`${USER_URL}/login`,info)
    .then(async (res) => {
      console.log(res);
      user.value = res.data;
      //이 부분에서 즐겨찾기와 완료한 운동들 전부 명칭으로 변환
      await idToName(user.value.favoriteRoutine);
      user.favoriteRoutine = routineStore.routine;
      // user.favoriteRoutine.id = user.favoriteRoutine;
      // user.favoriteRoutine.name = routineStore.routine;
      await idToName(user.value.doneRoutine);
      user.doneRoutine = routineStore.routine;

      //유저가 작성한 글들 가져와!!
      getuserList();
      if (! sessionStorage.getItem("login")) {
        // 이제 세션영역에 유저정보가 있음
        sessionStorage.setItem("login",JSON.stringify(res.data));
        router.replace({name:"main"});
      }
      sessionStorage.setItem("login",JSON.stringify(res.data));
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
      sessionStorage.removeItem("userList");
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
      // 수정 뒤 세션스토리지에 있는 로그인정보를 가져와서, 이름, 비번, 주소만 바꿔서
      // 세션스토리지에 다시 올림
      console.log("필요한 부분 중 하나",res.data.address)
      user.value.address = res.data.address;
      user.value.name = res.data.name;
      user.value.password = res.data.password;
      //수정한 부분을 반영
      console.log("수정요소 넣은 후의 모습",user.value);
      sessionStorage.setItem("login",JSON.stringify(user.value));
      router.replace({name:'mypage'})
    })
  }

  //해당 회원이 작성한 게시글들
  const getuserList = function() {
    console.log("유저의 게시글도 가져와!!!",user.value.id)
    //여기서까지는 =가 안붙는데, 백에서는 붙고있음... 왜?
    axios.post(USER_URL+"/review/user",user.value.id)
    .then((res)=> {
      console.log("유저가 작성한 게시글?",res)
      userList.value = res.data;
      console.log("게시글 잘 들어감? ",userList.value);
      sessionStorage.setItem("userList",JSON.stringify(userList.value));
    })
  }

  // 
  const registFavorite = function() {
    console.log("즐찾");
    
    // 현재 URL 가져오기
    const currentUrl = window.location.href;

    // URL을 '/'로 분할하여 배열로 변환
    const urlParts = currentUrl.split('/');

    // 맨 뒤의 요소 출력
    const routindId = urlParts[urlParts.length - 1];

    console.log("즐겨찾기 등록!!!", routindId);

    axios.post(`${USER_URL}/favorite/${routindId}`)
    .then((res)=> {
      login({id:user.value.id,password:user.value.password})
      alert("즐겨찾기 등록이 완료 되었습니다!");
    })


    
  }

  return { 
    USER_URL,user,login,logout,signup,userUpdate,idToName,userList,getuserList,registFavorite,
  }
})
