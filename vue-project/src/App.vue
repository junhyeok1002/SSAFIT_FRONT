<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useUserStore } from '@/stores/useUserStore';

const userStore = useUserStore();

</script>

<template>
  <header>
    <ul class="nav justify-content-center">
      <li class="nav-item">
        <RouterLink class="nav-link" to="/">Home</RouterLink> 
      </li>
      <li class="nav-item" v-if="userStore.user === null">
        <RouterLink class="nav-link" to="/login">Login</RouterLink> 
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link" to="/main">Main</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link" to="/youtube">Youtube</RouterLink>
      </li>
    </ul>
  </header>

  <RouterView />

</template>

<style scoped>

.nav-link:active {
  color: gold;
}


</style>
