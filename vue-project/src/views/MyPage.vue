<template>
    <div>
        <h1>마이페이지</h1>
        {{ user }}
        <h1>{{ user.name }}님의 마이페이지</h1>
        <button @click="update">수정하기</button>
        <div style="display: flex;">
            <div class="border">
                <h1>운동들</h1>
                <div v-for="fav in user.favoriteRoutine">
                    fav : {{ fav }}
                </div>
                <div v-for="done in user.doneRoutine">
                    done : {{ done }}
                </div>
            </div>
            <div class="border">
                <h1>작성한 게시글</h1>
            </div>
        </div>


    </div>
</template>

<script setup>
import { useUserStore } from '@/stores/useUserStore';
import { useRouter } from 'vue-router';

const userStore = useUserStore();
const user = userStore.user;

const router = useRouter();

const update = function() {
    router.push({name:'userUpdate'})
}
</script>