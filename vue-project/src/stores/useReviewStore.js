import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useMuscleStore } from '@/stores/routine'
import axios from 'axios'

const REVIEW_URL = "http://localhost:8080/review"
export const useReviewStore = defineStore('reivew', () => {
  const routineStore = useMuscleStore();
  const reviewList = ref([])
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
  const getReview = function(id) {
    axios.get(REVIEW_URL+"/"+id)
    .then((res) => {
      console.log(res);
    })
  }

  return { 
    reviewList,
    getReviewList,
    getReview,
    page,
    perPage

  }
})
