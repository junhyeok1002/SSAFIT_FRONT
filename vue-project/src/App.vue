
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
      <li class="nav-item">
        <RouterLink class="nav-link" to="/main">Main</RouterLink>
      </li>
    </ul>
  </header>

  <RouterView />

</template>

<style scoped>

.nav-link:active {
  color: gold;
}
.nav-link{
  color: #9dbfd3;
}


</style>

