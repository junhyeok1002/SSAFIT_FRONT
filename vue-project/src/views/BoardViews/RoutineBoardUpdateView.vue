<script setup>
import { onMounted, ref } from 'vue'
import { useReviewStore } from '@/stores/useReviewStore';
import { useRoute, useRouter } from 'vue-router';

const reviewStore = useReviewStore();
const router = useRouter();
const route = useRoute();
const nowReview = reviewStore.review;

console.log("현재 내용 : ",nowReview);
const newReview = ref({
    id:nowReview.reviewId,
    title:"",
    content:""
})

onMounted(() => {
    reviewStore.getValue();
})


const back = function() {
    router.replace({name:'detail',params:{id:route.params.id}});
}

const onTitle = function (event) {
    newReview.value.title = event.currentTarget.value
}
const onContent = function (event) {
    console.log("현재 내용 : ",event.currentTarget.value);
    newReview.value.content = event.currentTarget.value
}

const submitForm = function() {
    console.log("딸각")
    console.log("현재 내용 : ",newReview.value.title, newReview.value.content,typeof newReview.value.title, newReview.value.title.length);
    console.log(reviewStore.review);
    if (newReview.value.title.length === 0) {
        newReview.value.title=reviewStore.review.title;
    }
    if (newReview.value.content.length === 0) {
        newReview.value.content=reviewStore.review.content;
    }
    reviewStore.updateReview(newReview.value);
}

</script>

<template>
    <div>
        수정할래!!
        <div class="container">
            <div class="row justify-content-center mt-5">
            <div class="col-md-6">
                <div class="card">
                <div class="card-header">User Information Form</div>
                <div class="card-body">
                    <form @submit.prevent="submitForm">
                    <div class="mb-3">
                        <label for="name" class="form-label">제목</label>
                        <input type="text" class="form-control" id="title" @input="onTitle" v-bind="newReview.title" required >
                    </div>
                    <div class="mb-3">
                        <label for="name" class="form-label">내용</label>
                        <input type="text" class="form-control" id="content" @input="onContent" v-bind="newReview.content" required>
                    </div>

                    <div class="text-center">
                        <button class="btn btn-danger" @click="back">수정취소</button>
                        <button type="submit" class="btn btn-primary">수정하기</button>
                    </div>
                    </form>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>

</template>

<style scoped>

</style>