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
  const getFitnessListAgonist = function (dynamicSegment) {
    // const dynamicSegment = route.params.id;
    console.log("여기는 루틴 저장소의 아이디 가져오기",dynamicSegment);
    axios.get(`${REST_BOARD_API}/fitness/agonist/${dynamicSegment}`)
      .then((response) => {
        console.log(response)
        FitnessListAgonist.value = response.data;
        // FitnessListAgonist.value = response.data;
        // console.log(dynamicSegment);
        // console.log(FitnessListAgonist);
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
  const getOneFitness = function (dynamicSegment) {
      // const route = useRoute();
      // const dynamicSegment = route.params.id;
      console.log("여기는 루틴 저장소의 아이디 가져오기",dynamicSegment);
      axios.get(`${REST_BOARD_API}/fitness/${dynamicSegment}`)
        .then((response) => {
          console.log("response: " + response)
          OneFitness.value = response.data;
          // FitnessListAgonist.value = response.data;
          // console.log(dynamicSegment);
          // console.log(FitnessListAgonist);
      })
    }

  return { 
           MuscleList, getMuscleList,
           FitnessListAgonist, getFitnessListAgonist,
           routine, getOneRoutine,
           OneFitness, getOneFitness,
         }
})
