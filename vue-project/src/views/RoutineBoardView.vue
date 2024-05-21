<template>
    <div class="board">
        <h1>루틴 게시판</h1>
        <div>
            검색기능을 넣을 영역 | 
            <div class="box">
                <div>  제목 : {{ selected.reviewTitle }} | 작성자 : {{ selected.reviewAuthorName }}  | Selected: {{ selected.reviewDirection }} | routine {{ selected.reviewRoutineId }}</div>
                <input v-model="selected.reviewTitle">
                <input v-model="selected.reviewAuthorName">
                <select v-model="selected.reviewRoutineId">
                    <option disabled value="">루틴</option>
                    <option v-for="i in 3">{{ i }}</option>
                </select>
                <select v-model="selected.reviewDirection">
                    <option disabled value="">조회수</option>
                    <option>오름차순</option>
                    <option>내림차순</option>
                </select>
                <button @click="search">검색</button>
            </div>
        </div>
        <div style="margin: 0 auto;" class="col-sm-9 bg-light p-3 border" v-for="review in currentPageBoardList">
            <div style="text-align: left;" class="title">
                <a @click="detail(review.reviewId)">
                    {{ review.title }}
                </a>
            </div>
            <div v-if="review.content.length < 15" style="text-align: left;">
                {{ review.content}}
            </div>
            <div v-else style="text-align: left;">
                {{ review.content.substring(0, 15)}}...
            </div>
            <div class="row">
                <div class="col-auto me-auto">{{ review.userName }} | {{ review.createTime }}</div>
                
                <div v-if="userInfo !== null && review.userId === userInfo.id"    class="col-auto">
                    {{ review.viewCnt }} <button @click="update(review.reviewId)" >수정</button><button @click="remove(review.reviewId)" >삭제</button>
                </div>
                <div v-else  class="col-auto">
                    {{ review.viewCnt }}
                </div>
            </div>
            <div style="display: flex;">
                <button class="btn btn-outline-primary" v-for="i in review.routineId">
                    {{ i }}
                </button>
            </div>
            <!-- <div style="display: flex;">
                <a  v-for="asdf in review.routineId in " type="button"> 
                    {{ asdf }}
                </a>
            </div> -->
        </div>

        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li v-for="i in reviewStore.page" :key=i class="page-item">
                    <a class="page-link" href="#" @click="pagination(i)">{{i}}</a>
                </li>
            </ul>
        </nav>
    </div>
</template>


<script setup>
import { useReviewStore } from '@/stores/useReviewStore';
import { useUserStore } from '@/stores/useUserStore';
import { computed,onMounted,ref } from 'vue';
import { useRouter,RouterLink } from 'vue-router'

const router = useRouter();
const reviewStore = useReviewStore();
const userStore = useUserStore();
const userInfo = userStore.user;

//검색 조건
const selected = ref({
    reviewTitle:null,
    reviewAuthorName:null,
    reviewDirection:null,
    reviewRoutineId:0,
})

console.log("aaaaaaaaa",selected.value);

const currentPage = ref(1);
const perPage = 7;

const detail = function(id) {
    console.log("게시글의 아이디 ",id);
    router.push({name : 'detail', params : {id : id}})
}

onMounted(async ()=> {
    await reviewStore.getReviewList();
    console.log("조건잇슴",selected.value);
    // await nextTick();
    console.log("onmouted",reviewStore.reviewList.length,reviewStore.page.value);
})

const currentPageBoardList = computed(() => {
  return reviewStore.reviewList.slice(
    (currentPage.value - 1) * perPage,
    currentPage.value * perPage
  );
});

// 검색
const search = function() {
    console.log("지금까지의 검색 기준 ",selected.value);

    reviewStore.searchReview(selected.value);
}

const pagination = function(page) {
    console.log("페이지",page);
    currentPage.value=page;
}
console.log(reviewStore.reviewList.length);

const update = async function(id) {
    await reviewStore.getReview(id);
    router.push({name:'update',params:{id:id}})
}

const remove =  async function(id) {
    await reviewStore.removeReview(id);
    location.reload();
}


</script>

<style scoped>
    .board {
        width: 70%;
        margin: 0 auto;
    }
    /* .line{
        border-left: 1px solid rgb(218, 218, 218);
    } */

    .number {
        width: 10%;
    }
    .title {
        width: 60%;
    }
    .writer {
        width: 20%;
    }

    .viewCnt {
        widows: 10%;
    }

    .title:hover {
        text-decoration-line: underline;
    } 

</style>