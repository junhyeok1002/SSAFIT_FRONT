<template>
    <div>
        <h1>마이페이지</h1>
        <div style="display: flex; margin: 0 auto;">
            <h1>{{ user.name }}님의 마이페이지</h1>
            <button @click="update">수정하기</button>
        </div>
        <div style="display: flex;">
            <div class="border">
                <h1>운동들</h1>
                <h1>즐겨찾기 한 운동들</h1>
                <div v-for="fav in user.favoriteRoutine">
                    <div>
                        <button class="btn btn-outline-primary" v-for="f in fav">{{ f }}</button>
                    </div>
                </div>
                <h1>끝낸 운동들</h1>
                <div v-for="done in user.doneRoutine">
                    <div>
                        <button class="btn btn-outline-success" v-for="d in done">{{ d }}</button>
                    </div>
                </div>
            </div>
            <div class="border">
                <h1>작성한 게시글</h1>
                <div class="border" v-for="review in userStore.userList" @click="reviewDetail(review.reviewId)">
                    {{ review.title }}
                </div>
            </div>
        </div>


    </div>
</template>

<script setup>
import { useUserStore } from '@/stores/useUserStore';
import { useReviewStore } from '@/stores/useReviewStore';
import { useRouter } from 'vue-router';
import { onMounted } from 'vue'

const userStore = useUserStore();
const reviewStore = useReviewStore();
const user = userStore.user;
// userStore.idToName(user.favoriteRoutine);

console.log(user.favoriteRoutine[0]);
const router = useRouter();

const reviewDetail= function(id) {
    console.log("딸깍",id);
    router.push({name:'detail',params:{id:id}});
}

const update = function() {
    router.push({name:'userUpdate'})
}
</script>