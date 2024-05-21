<template>
    <div>
        <div id="LeftTitle">
            <div id="LeftTitle">
                <h4>운동 상세</h4>
                <hr>
            </div>
        </div>

        <div id="detail" style="display: flex; padding :0px;">
            <div id="detailRight" class="centered-container">
                <div class="fitness-card" @click="saveToLocalStorage">
                    <div class="fitness-name" style="font-weight: bold;">{{ store.OneFitness.name }}</div>
                    <div class="fitness-e-name">({{ store.OneFitness.e_name }})</div>
                    <br>
                    <div class="fitness-image-container">
                        <img class="fitness-image" :src="imageSrc" alt="운동 이미지">
                    </div>
                    <br>
                    <div v-if="store.OneFitness.muscle" class="muscle-info-table">
                        <table>
                            <tbody>
                                <tr v-if="store.OneFitness.muscle.agonist && store.OneFitness.muscle.agonist.length">
                                    <td class="muscle-title">주동근</td>
                                    <td class="muscle-name">{{ store.OneFitness.muscle.agonist.join(', ') }}</td>
                                </tr>
                                <tr v-else>
                                    <td class="muscle-title">주동근</td>
                                    <td class="muscle-name">없음</td>
                                </tr>
                                <tr
                                    v-if="store.OneFitness.muscle.synergists_first && store.OneFitness.muscle.synergists_first.length">
                                    <td class="muscle-title">1차 협응근</td>
                                    <td class="muscle-name">{{ store.OneFitness.muscle.synergists_first.join(', ') }}
                                    </td>
                                </tr>
                                <tr v-else>
                                    <td class="muscle-title">1차 협응근</td>
                                    <td class="muscle-name">없음</td>
                                </tr>
                                <tr
                                    v-if="store.OneFitness.muscle.synergists_second && store.OneFitness.muscle.synergists_second.length">
                                    <td class="muscle-title">2차 협응근</td>
                                    <td class="muscle-name">{{ store.OneFitness.muscle.synergists_second.join(', ') }}
                                    </td>
                                </tr>
                                <tr v-else>
                                    <td class="muscle-title">2차 협응근</td>
                                    <td class="muscle-name">없음</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <br>
                <div style="color: gray; text-align: center;"> 
                    사진을 클릭하면 장바구니에 담을 수 있습니다
                </div>


                <!-- <div class="container" style="margin-top: 6.8rem;">
                    <div id="CartButton" @click="saveToLocalStorage">
                        장바구니 담기
                    </div>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script setup>
import YoutubeView from '@/views/YoutubeView.vue';
import ChatgptComponent from '@/components/chatgpt/ChatgptComponent.vue';
import { useMuscleStore } from '@/stores/routine';
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';

const route = useRoute();
const store = useMuscleStore();

const imageSrc = ref(''); // 이미지 소스를 저장할 변수

const saveToLocalStorage = () => {
    console.log("로컬 스토리지 저장");
    localStorage.setItem(store.OneFitness.e_name, JSON.stringify(store.OneFitness));
    console.log(localStorage.getItem(store.OneFitness.e_name));
    location.reload();
};

onMounted(async () => {
    await store.getOneFitness(); // store.getOneFitness()가 비동기 함수일 경우를 대비하여 await 사용

    // 이미지 경로를 동적으로 설정
    const images = import.meta.glob('@/assets/img/muscle/*.png');
    const imagePath = images[`/src/assets/img/muscle/${route.params.fitnessId}.png`];

    console.log(route.params.fitnessId);

    if (imagePath) {
        imageSrc.value = (await imagePath()).default;
    } else {
        console.error('이미지를 찾을 수 없습니다.');
    }
});


</script>

<style scoped>
#LeftTitle {
    position: sticky;
    top: 0;
    background-color: white;
}

.centered-container {
    width: 100%;
    height: 100%;
    max-height: 100%;
    overflow-y: auto;
    margin-top: 7rem;
}

.muscle-info-table {
    margin-top: 1rem;
}

table {
    width: 100%;
    border-collapse: collapse;
}

td {
    padding: 0.5rem;
    border-bottom: 1px solid #ddd;
}

.muscle-title {
    font-weight: bold;
}

.muscle-name {
    color: #666666;
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
    background-color: lightgray;
    /* 배경색 추가 (옵션) */
    text-align: center;
    /* 텍스트 중앙 정렬 (옵션) */
    padding: 10px;
    /* 패딩 추가 (옵션) */
    font-weight: bold;
}
</style>