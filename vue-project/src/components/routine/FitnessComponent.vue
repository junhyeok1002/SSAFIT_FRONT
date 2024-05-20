<template>
    
    <div class="fitness-box">
      <!-- <img src="`@/assets/img/muscle/Dumbbell_Curl.png`" alt="Dumbbell_Curl" style="width: 100%; height: 100%;"> -->

      <RouterLink :to="{name:'DetailFitness',params: {fitnessId : fitness.e_name}}">
         <p>{{ fitness.e_name }}({{ fitness.name }})</p>
      </RouterLink>
      <div class="muscles">
        <ul>
          <li><strong>주 근육:</strong> {{ fitness.muscle.agonist.join(', ') }}</li>
          <li><strong>일차 보조 근육:</strong> {{ fitness.muscle.synergists_first.join(', ') }}</li>
          <li><strong>이차 보조 근육:</strong> {{ fitness.muscle.synergists_second.join(', ') }}</li>
        </ul>
      </div>
    </div>
  </template>

  <script>
  export default {
    name: 'FitnessComponent',
    props: {
      fitness: Object // 피트니스 정보를 받아올 prop
    }
  }
  </script>
  
  <style scoped>
  .fitness-box {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 20px;
    margin-bottom: 20px;
    background-color: #f9f9f9;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .fitness-box h2 {
    margin-top: 0;
  }
  
  .fitness-box h3 {
    margin-top: 20px;
  }
  
  .fitness-box ul {
    padding-left: 20px;
  }
  
  .fitness-box li {
    margin-bottom: 5px;
  }
  </style>
  