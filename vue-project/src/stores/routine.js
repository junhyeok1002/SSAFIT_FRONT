import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useRoute } from 'vue-router';
import axios from 'axios'


const REST_BOARD_API = `http://localhost:8080/api-routine`

export const useMuscleStore = defineStore('muscle', () => {
  
  const MuscleList = ref([])
  const getMuscleList = function () {
    axios.get(`${REST_BOARD_API}/muscle`)
      .then((response) => {
        MuscleList.value = response.data;
    })
  }

  const FitnessListAgonist = ref([])
  const getFitnessListAgonist = function () {
    const dynamicSegment = useRoute().params.muscleId;
    console.log("여기는 루틴 저장소의 아이디 가져오기",dynamicSegment);
    axios.get(`${REST_BOARD_API}/fitness/agonist/${dynamicSegment}`)
      .then((response) => {
        console.log(response.data);
        FitnessListAgonist.value = response.data;
        // console.log(dynamicSegment);
        console.log(FitnessListAgonist.value);
    })
  }

  const FitnessListSynergy1 = ref([])
  const getFitnessListSynergy1 = function () {
    const dynamicSegment = useRoute().params.muscleId;
    console.log("여기는 루틴 저장소의 아이디 가져오기",dynamicSegment);
    axios.get(`${REST_BOARD_API}/fitness/synergyfirst/${dynamicSegment}`)
      .then((response) => {
        console.log(response.data);
        FitnessListSynergy1.value = response.data;
        // console.log(dynamicSegment);
        console.log(FitnessListSynergy1.value);
    })
  }

  const FitnessListSynergy2 = ref([])
  const getFitnessListSynergy2 = function () {
    const dynamicSegment = useRoute().params.muscleId;
    console.log("여기는 루틴 저장소의 아이디 가져오기",dynamicSegment);
    axios.get(`${REST_BOARD_API}/fitness/synergysecond/${dynamicSegment}`)
      .then((response) => {
        console.log(response.data);
        FitnessListSynergy2.value = response.data;
        console.log(FitnessListSynergy2.value);
    })
  }


  //루틴 아이디로 루틴정보 가져오기
  const routine = ref([]);
  const getOneRoutine = async function(id) {
    console.log("URL",REST_BOARD_API+"/routine/"+id);
    await axios.get(REST_BOARD_API+"/routine/"+id)
    .then((res)=> {
      routine.value = res.data.routine;
      console.log("루틴 아이디로 가져와!",id,res.data.routine);
    })
  }
  const OneFitness = ref([])
  const getOneFitness = function () {
      // const route = useRoute();
      const dynamicSegment = useRoute().params.fitnessId;
      console.log("여기는 루틴 저장소의 아이디 가져오기",dynamicSegment);
      axios.get(`${REST_BOARD_API}/fitness/${dynamicSegment}`)
        .then((response) => {
          console.log("response: " + response.data);
          OneFitness.value = response.data;
          // FitnessListAgonist.value = response.data;
          // console.log(dynamicSegment);
          // console.log(FitnessListAgonist);
      })
    }

  const sendRoutine = async () => {
      try {
          const response = await axios.post(`${REST_BOARD_API}/routine`, allENames);
          console.log(response.data); // 서버로부터 받은 응답 데이터
      } catch (error) {
          console.error(error); // 오류 처리
      }
  };
  
  const RoutineDetail = ref([])
  const getRoutineDetail = function () {
    const dynamicSegment = useRoute().params.routineId;
    axios.get(`${REST_BOARD_API}/fitness/routine/${dynamicSegment}`)
      .then((response) => {
        RoutineDetail.value = response.data;
    })
  }

  return { 
           MuscleList, getMuscleList,
           FitnessListAgonist, getFitnessListAgonist,
           routine, getOneRoutine,
           OneFitness, getOneFitness,
           sendRoutine,
           FitnessListSynergy1, getFitnessListSynergy1,
           FitnessListSynergy2, getFitnessListSynergy2,
           RoutineDetail, getRoutineDetail,
           
         }
})
