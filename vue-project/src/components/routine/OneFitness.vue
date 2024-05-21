<template>
    <div>
    <div id="LeftTitle">
        <div id="LeftTitle"><h4>운동 상세</h4><hr></div>
    </div>

    <div id="detail" style="display: flex; padding :10px;">
        <div id="detailLeft" style="width: 50%; max-height: 100%; overflow-y: scroll; padding: 0px;">
          <RouterLink :to="{ name: 'youtube', params: { fitnessId: $route.params.fitnessId } }">YouTube</RouterLink> | 
          <RouterLink :to="{ name: 'chatgpt', params: { fitnessId: $route.params.fitnessId } }">ChatGPT</RouterLink>
          <div>
          <RouterView></RouterView>
        </div>
            <!-- <YoutubeView /> -->
        </div>
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
            <tr v-if="store.OneFitness.muscle.synergists_first && store.OneFitness.muscle.synergists_first.length">
                <td class="muscle-title">1차 협응근</td>
                <td class="muscle-name">{{ store.OneFitness.muscle.synergists_first.join(', ') }}</td>
            </tr>
            <tr v-else>
                <td class="muscle-title">1차 협응근</td>
                <td class="muscle-name">없음</td>
            </tr>
            <tr v-if="store.OneFitness.muscle.synergists_second && store.OneFitness.muscle.synergists_second.length">
                <td class="muscle-title">2차 협응근</td>
                <td class="muscle-name">{{ store.OneFitness.muscle.synergists_second.join(', ') }}</td>
            </tr>
            <tr v-else>
                <td class="muscle-title">2차 협응근</td>
                <td class="muscle-name">없음</td>
            </tr>
        </tbody>
    </table>
</div>
</div>
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
    width: 50%;
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


</style> 