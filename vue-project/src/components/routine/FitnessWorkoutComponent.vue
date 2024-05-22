<template>
  <div>
    <RouterLink
      :to="{ name: 'workoutselct', params: { fitnessId: fitness.e_name } }"
      @click.native="reloadPage"
      style="color: black; text-decoration: none;"
    >
      <div class="fitness-box">
        <!-- <img src="@/assets/img/muscle/Dumbbell_Curl.png" alt="Dumbbell_Curl" style="width: 100%; height: 100%;"> -->
        <p style="margin-bottom: 0;">{{ fitness.e_name }}<br>({{ fitness.name }})</p>
      </div>
    </RouterLink>
  </div>
</template>

<script>
export default {
  name: 'FitnessComponent',
  props: {
    fitness: {
      type: Object,
      required: true
    }
  },
  methods: {
    reloadPage() {
      // Delay the reload to ensure the navigation occurs first
      setTimeout(() => {
        window.location.reload();
      }, 100);
    }
  }
}
</script>

<style scoped>
.fitness-box {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
