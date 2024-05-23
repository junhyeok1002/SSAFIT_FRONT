<template>
    <div>
        <div id="LeftTitle">

            <h4>운동 API</h4>
            <hr>

        </div>

        <div id="detail" style="display: flex; padding :10px; padding-top: 0px;">
            <div id="detailLeft" style="width: 100%; max-height: 100%; overflow-y: scroll; padding: 0px;">
                <div class="link-container">
                    <div class="link-item">
                        <RouterLink :to="{ name: 'create', params: { fitnessId: $route.params.fitnessId } }"
                            class="button">Select Menu</RouterLink>
                    </div>
                    <div class="link-item">
                        <RouterLink :to="{ name: 'youtube', params: { fitnessId: $route.params.fitnessId } }"
                            class="button">YouTube</RouterLink>
                    </div>
                    <div class="link-item">
                        <RouterLink :to="{ name: 'chatgpt', params: { fitnessId: $route.params.fitnessId } }"
                            class="button">ChatGPT</RouterLink>
                    </div>
                </div>

                <div>
                    <RouterView></RouterView>
                </div>
                <!-- <YoutubeView /> -->
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

.link-container {
    display: flex;
    width: 100%;
}

.link-item {
    flex: 1;
    text-align: center;
}

.button {
    display: inline-block;
    padding: 10px 20px;
    background-color: #9dbfd3;
    color: white;
    text-align: center;
    text-decoration: none;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
    width: 99%;
    font-weight: bold;
}

.button:hover {
    background-color: #4556a0;
}
</style>