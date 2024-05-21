<script setup>
import { useReviewStore } from '@/stores/useReviewStore';
import { useRoute,useRouter } from 'vue-router'
import { onMounted,ref } from 'vue';
import { useUserStore } from '@/stores/useUserStore';

const route = useRoute();
const router = useRouter();
const reviewStore = useReviewStore();
const userStore = useUserStore();
console.log(userStore.user);
onMounted(async () => {
    await reviewStore.getReview(route.params.id);
    await reviewStore.getValue();
})

//현재 저장소에 해당 리뷰의 정보가 존재하는 상태
const update = function() {
    router.push({name:'update'})
}

const remove = function() {
    console.log("삭제?",route.params.id);
    console.log(reviewStore.review);
    
    reviewStore.removeReview(route.params.id);
}

</script>

<template>
    <div>
        <h1>정확하게 보기</h1>
        <p class="col-sm-9 bg-light p-3 border" >
            <div v-for="item in reviewStore.review">
                {{ item  }}
            </div>
            <button v-if="userStore.user !== null && reviewStore.review.userId === userStore.user.id" @click="update">
                수정
            </button>
            
            <button v-if="userStore.user !== null && reviewStore.review.userId === userStore.user.id" @click="remove">
                삭제
            </button>
            

        </p>

    </div>

</template>

<style scoped>

</style>