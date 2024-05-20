
<script setup>
  import Header from '@/components/Header.vue';
  import MainContent from '@/components/MainContent.vue';
  import Sidebar from '@/components/Sidebar.vue';


</script>

<template>
    <div id="app">
      <Header />
      <div class="content">
        <MainContent />
        <Sidebar />
      </div>
    </div>
  </template>
  
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  
  .content {
    display: flex;
  }
  </style>
  