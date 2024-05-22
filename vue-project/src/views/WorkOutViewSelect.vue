<template>
    <Header />
    <div>
        <!-- <div id="LeftTitle">
            <h4>운동하기SELECT</h4>
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
                    <WorkoutLeftComponent />
                </div>
            </div>
            <div style="width: 50%; max-height: 100%; overflow-y: scroll; padding: 0px;">
                <YoutubeView style="height: 82vh;" />

                <div class="container">
                    <div id="CartButton" @click="nextWorkout">
                        다음으로
                    </div>
                </div>
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

const nextWorkout = () => {
    const currentURL = window.location.href;
    console.log(currentURL);

    // URL을 '/'를 기준으로 나누어 배열로 만듭니다.
    const urlParts = currentURL.split('/');
    console.log(urlParts);

    // 배열의 끝에서부터 첫 번째와 두 번째 변수를 추출합니다.
    const fId= urlParts.pop(); // 뒤에서 첫 번째 변수 (routine ID)
    const rId = urlParts.pop(); // 뒤에서 두 번째 변수 (workout ID)

    const arr = store.getWorkoutSelectNext(rId, fId);

    
    console.log("rId:", rId);
    console.log("fId:", fId);

    router.push({name:'workout'});
};
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

.container {
    position: relative;
    /* 상위 컴포넌트의 위치를 기준으로 하위 컴포넌트를 배치하기 위해 필요 */
    padding: 0;
}

#CartButton {
    position: relative;
    /* 상위 컴포넌트를 기준으로 절대 위치 설정 */
    bottom: 0;
    /* 하단에 고정 */
    width: 100%;
    /* 너비를 상위 컴포넌트에 맞춤 */
    background-color: #9dbfd3;
    /* 배경색 추가 (옵션) */
    text-align: center;
    /* 텍스트 중앙 정렬 (옵션) */
    padding: 10px;
    /* 패딩 추가 (옵션) */
    font-weight: bold;
    color: white;
}

#CartButton:hover {
    background-color: #4556a0;
}
</style>