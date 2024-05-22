<template>
    <div>
      <progress id="progress" :value="value" min="0" max="100"></progress>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      value: {
        type: Number,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
    #progress {
        appearance: none;
        width: 80%;
        margin-bottom: 0.5rem;
        height: 1.5rem;
    }
    #progress::-webkit-progress-bar {
        background:#f0f0f0;
        border-radius:10px;
        box-shadow: inset 3px 3px 10px #ccc;
    }
    #progress::-webkit-progress-value {
        border-radius:10px;
        background: #4556a0;
        background: -webkit-linear-gradient(to right, #9dbfd3, #4556a0);
        background: linear-gradient(to right, #9dbfd3, #4556a0);

    }

  </style>
  