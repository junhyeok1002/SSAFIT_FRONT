<template>
    <Header />
    <div>
        <!-- <div id="LeftTitle">
            <h4>운동하기</h4>
            <hr>
        </div> -->

        <div style="display: flex; height: 90vh; ">
            <div style="width: 50%; max-height: 100%; overflow-y: scroll; padding: 0px;">
                <hr>
                <div class="top-section">
                    <div id="LeftTitle">
                        운동 선택지
                        <hr>
                    </div>
                    <!-- {{ store.RoutineDetail }} -->
                    <div>
                        <div style="padding: 0.5rem;">
                            <div v-if="store.WorkoutSelect.length > 0">
                                <FitnessWorkoutComponent v-for="fitness in store.WorkoutSelect" :key="fitness.e_name"
                                    :fitness="fitness" />
                                <br>
                            </div>
                        </div>
                    </div>
                </div>
                <hr>
                <div class="bottom-section">
                    <div id="LeftTitle">
                        남은 운동들
                        <hr>
                    </div>
                    <!-- {{ store.RoutineDetail }} -->
                    <WorkoutLeftComponent/>
                </div>
            </div>
            <div style="width: 50%; max-height: 100%; overflow-y: scroll; padding: 0px;">
                <YoutubeView />
            </div>
        </div>
    </div>
</template>


<script setup>
import Header from '@/components/Header.vue';
import YoutubeView from '@/views/YoutubeView.vue';
import { useMuscleStore } from '@/stores/routine';
import { useRouter } from 'vue-router'; // 수정된 부분: useRouter를 import합니다.
import { onMounted } from 'vue';
import WorkoutSelectComponent from '@/components/routine/WorkoutSelectComponent.vue';
import WorkoutLeftComponent from '@/components/routine/WorkoutLeftComponent.vue';
import FitnessWorkoutComponent from '@/components/routine/FitnessWorkoutComponent.vue';

// 수정된 부분: useRouter를 사용하여 router 객체를 가져옵니다.
const router = useRouter();
const store = useMuscleStore()
onMounted(() => {
    store.getRoutineDetail();
    store.getWorkoutSelectInit();
})

</script>





<style scoped>
#LeftTitle {
    position: sticky;
    top: 0;
    background-color: white;
    font-weight: bold;
    font-size: 1.2rem;
}

.top-section,
.bottom-section {
    flex: 1;
    overflow-y: scroll;
    height: 50%;
    /* 스크롤바가 필요할 경우를 대비하여 설정 */
}
</style>