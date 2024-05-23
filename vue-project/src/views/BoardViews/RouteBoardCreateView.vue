<script setup>
import { onMounted, ref } from 'vue'
import { useReviewStore } from '@/stores/useReviewStore';
import { useRoute, useRouter } from 'vue-router';
import { useUserStore } from '@/stores/useUserStore';

const reviewStore = useReviewStore();
const userStore = useUserStore();
const user = userStore.user;

const router = useRouter();
const route = useRoute();
const nowReview = reviewStore.review;


const newReview = ref({
    userId: user.id,
    userName: user.name,
    title: "",
    content: "",
    routineId: route.params.routineId
})



const back = function () {
    router.replace({ name: 'main' });
}

const onTitle = function (event) {
    newReview.value.title = event.currentTarget.value
}
const onContent = function (event) {
    console.log("현재 내용 : ", event.currentTarget.value);
    newReview.value.content = event.currentTarget.value
}

const submitForm = function () {
    console.log("딸각")
    console.log("현재 내용 : ");
    console.log(reviewStore.review);
    // if (newReview.value.title.length === 0) {
    //     newReview.value.title=reviewStore.review.title;
    // }
    // if (newReview.value.content.length === 0) {
    //     newReview.value.content=reviewStore.review.content;
    // }
    reviewStore.createReview(newReview.value);
}

</script>

<template>
    <div>
        <div class="container">
            <div class="row justify-content-center mt-5">
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-header">게시글 작성</div>
                        <div class="card-body">
                            <form @submit.prevent="submitForm">
                                <div class="mb-3">
                                    <label for="name" class="form-label">제목</label>
                                    <input type="text" class="form-control" id="title" @input="onTitle"
                                        v-bind="newReview.title" required>
                                </div>
                                <div class="mb-3">
                                    <label for="name" class="form-label">내용</label>
                                    <input type="text" class="form-control" id="content" @input="onContent"
                                        v-bind="newReview.content" required>
                                </div>

                                <div class="text-center">
                                    <button class="btn btn-danger" @click="back">작성취소</button>
                                    <button type="submit" class="btn btn-primary">작성완료</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped></style>