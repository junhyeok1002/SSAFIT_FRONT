<template>
  <div class="fitness-box">
    <div class="info-container">
      <div class="info-left">
        <p>{{ fitness.e_name }}<br>({{ fitness.name }})</p>
      </div>
      <div class="info-right">
        <button class="buttonD" @click="deleteFitness">×</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FitnessComponent',
  props: {
    fitness: Object
  },
  methods: {
    deleteFitness() {
      localStorage.removeItem(this.fitness.e_name);
      location.reload();
    }
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

.info-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.info-left {
  width: 90%; /* 삭제 버튼을 제외한 왼쪽 영역의 너비 */
}

.info-right {
  width: 1.5rem; /* 삭제 버튼의 너비 */
}

.info-right button {
  width: 100%; /* 삭제 버튼이 전체 너비를 차지하도록 설정 */
}

.fitness-box p {
  margin: 0; /* 단락의 margin을 제거하여 여백 없이 표시 */
}

.buttonD{
  color: white;
  background-color: #dd4242;
  border: 0;
  border-radius: 1rem;
  /* font-weight: bold; */
  font-size: 1rem;

}
</style>
