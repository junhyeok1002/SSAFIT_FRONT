import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useMuscleStore } from '@/stores/routine'
import {useUserStore} from '@/stores/useUserStore'
import axios from 'axios'
import { useRouter } from 'vue-router'


const REVIEW_URL = "http://localhost:8080/review"
export const useReviewStore = defineStore('reivew', () => {
  const routineStore = useMuscleStore();
  const userStore = useUserStore();
  const reviewList = ref([])
  const router = useRouter();
  const page = ref(0);
  // 나중에 1~10페이지, 11~20페이지.... 이런식으로 교체될 수 있도록 바꿔주기
  const perPage = 7;

  // 리뷰 목록 다가져오기
  const getReviewList = async function() {
    await axios.get(REVIEW_URL)
    .then(async (res)=> {
      console.log("리뷰 다가져와!!!",res)
      reviewList.value = res.data;
      for (let i = 0; i < reviewList.value.length; i ++) {
        const id = reviewList.value[i].routineId;
        await routineStore.getOneRoutine(id);
        reviewList.value[i].routineId = routineStore.routine;
        console.log("???",reviewList.value[i].routineId)
      }
      console.log("리스트!!!!",reviewList.value.length/perPage)
      page.value = Math.ceil(reviewList.value.length/perPage);
      console.log("page? ",Math.ceil(page.value/perPage));
    })
  }

  //특정 리뷰 가져오기
  const review = ref({});
  const getReview = async function(id) {
    await axios.get(REVIEW_URL+"/"+id)
    .then((res) => {
      console.log(res);
      review.value = res.data;
    })
  }

  //리뷰 수정
  const updateReview = function(reviewUpdate) {
    console.log("정보",reviewUpdate)
    console.log("정보2",reviewUpdate.value);
    axios.put(REVIEW_URL+"/"+reviewUpdate.id,reviewUpdate)
    .then((res)=> {
      console.log("수정!!!",res);
      userStore.getuserList();
      router.replace({name:'board'})
    })
  }

  //리뷰수정페이지에 막 들어서자마자 input value에 이전 데이터 고대로 가져오기
  const getValue = function() {
    console.log("지금 있니? ",review.value,review.value.content);
    document.querySelector("#title").value=review.value.title;
    document.querySelector("#content").value=review.value.content;
    return 0;
  }

  // 리뷰 삭제
  // 삭제시 마이페이지의 내가 작성한 게시글도 갱신필요
  const removeReview = function(id) {
    console.log(REVIEW_URL+"/"+id)
    axios.delete(REVIEW_URL+"/"+id)
    .then((res) => {
      console.log("삭제 완료");
      userStore.getuserList();
      router.replace({name:'board'})
    })
  }

  //리뷰 검색
  const reviewCondition = ref({
    reviewTitle:'none',
    reviewAuthorName:'none',
    reviewDirection:'none',
    reviewRoutineId:0,
})
  const searchReview = function(condition) {
    reviewCondition.value.reviewTitle = condition.reviewTitle;
    reviewCondition.value.reviewAuthorName = condition.reviewAuthorName;
    reviewCondition.value.reviewDirection = condition.reviewDirection;
    reviewCondition.value.reviewRoutineId = condition.reviewRoutineId;
    
    if (reviewCondition.value.reviewTitle === null) {
      reviewCondition.value.reviewTitle = 'none';
    }
    if (reviewCondition.value.reviewAuthorName === null) {
      reviewCondition.value.reviewAuthorName = 'none';
    }
    if (reviewCondition.value.reviewRoutineId === null) {
      reviewCondition.value.reviewRoutineId = 'none';
    }
    console.log("이걸로 가져와!!!",reviewCondition.value);
    console.log(`${REVIEW_URL}/search?reviewTitle=${reviewCondition.value.reviewTitle}&reviewAuthorName=${reviewCondition.value.reviewAuthorName}&reviewDirection=${reviewCondition.value.reviewDirection}&reviewRoutineId=${reviewCondition.value.reviewRoutineId}`,reviewCondition.value);
    axios.get(`${REVIEW_URL}/search?reviewTitle=${reviewCondition.value.reviewTitle}&reviewAuthorName=${reviewCondition.value.reviewAuthorName}&reviewDirection=${reviewCondition.value.reviewDirection}&reviewRoutineId=${reviewCondition.value.reviewRoutineId}`,reviewCondition.value)
    .then(async (res)=> {
      reviewList.value = res.data;
      for (let i = 0; i < reviewList.value.length; i ++) {
        const id = reviewList.value[i].routineId;
        await routineStore.getOneRoutine(id);
        reviewList.value[i].routineId = routineStore.routine;
        console.log("???",reviewList.value[i].routineId)
      }
      console.log("리스트!!!!",reviewList.value.length/perPage)
      page.value = Math.ceil(reviewList.value.length/perPage);
      console.log("page? ",Math.ceil(page.value/perPage));
      console.log("전부??",reviewList.value);
      
    })
  }

  //리뷰 게시글 작성
  const createReview = function(info) {
    console.log("만들려는 게시글의 정보",info)
    // axios.post(REVIEW_URL,info)
    // .then((res)=> {
    //   console.log("잘 됐니? ",res)
    // })
  }


  return { 
    reviewList,
    getReviewList,
    getReview,
    page,
    perPage,
    review,
    updateReview,
    removeReview,
    router,
    getValue,
    searchReview,
    reviewCondition,
    createReview

  }
})
