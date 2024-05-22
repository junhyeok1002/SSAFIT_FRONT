
<template>
    <div class="sidebar">

      <button class="btn btn-outline-primary" @click="goToMakeRoutine">루틴 만들기</button>
      <button class="btn btn-outline-success" @click="goToBoard">루틴 게시판</button>

      
      <div class="favorite-routines">
        <h3>즐겨찾는 루틴들 목록 선택</h3>
        <ul>
          <li v-for="(value, key, index) in routineList">
            <button class="btn btn-outline-secondary" @click="goToWorkOut(value)">{{ userStore.user.favoriteRoutine[key] }}</button>
          </li>

        </ul>
      </div>

    </div>
  </template>

  <script>
  import { useUserStore } from '@/stores/useUserStore';
  export default {
    setup() {
      const userStore = useUserStore();
      // console.log(userStore.originalUser)
      return {
        userStore
      };
    },
      data() {
        return {
          routineList : JSON.parse(this.userStore.user.favorite)
        }
      },
      methods: {
        goToMakeRoutine() {
          this.$router.push('/create');
        },
        goToBoard() {
          this.$router.push('/board');
        },
        goToWorkOut(routineId) {
          console.log(routineId);
          this.$router.push({name:'RoutineDetailView',params:{routineId:routineId}});
        }
      }
    };
  </script>
  
  <style scoped>
  .sidebar {
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    border-left: 1px solid #000;
  }

  button {
    width: 100%;
    height: 3.5rem;
    padding: 10px;
    border: 1px solid #000;
  }

  .favorite-routines {
    border: 1px solid #000;
    padding: 10px;
  }
  .favorite-routines ul {
    list-style: none;
    padding: 0;
  }
</style>
  