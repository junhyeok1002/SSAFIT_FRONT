<script setup>
import { useReviewStore } from '@/stores/useReviewStore';
import { useRoute } from 'vue-router'
import { onMounted,ref } from 'vue';
import { useUserStore } from '@/stores/useUserStore';

const route = useRoute();
const reviewStore = useReviewStore();
const userStore = useUserStore();
console.log(userStore.user);
onMounted(() => {
    reviewStore.getReview(route.params.id);
})

</script>

<template>
    <div>
        <h1>정확하게 보기</h1>
        <p>
            <div v-for="item in reviewStore.review">
                {{ item  }}
            </div>
            <button v-if="userStore.user !== null && reviewStore.review.userId === userStore.user.id">
                수정
            </button>
            
            <button v-if="userStore.user !== null && reviewStore.review.userId === userStore.user.id">
                삭제
            </button>
            

        </p>

    </div>

</template>

<style scoped>

</style>