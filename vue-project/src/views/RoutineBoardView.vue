<template>
    <div class="board">
        <h1>루틴 게시판</h1>
        <div>
            검색기능을 넣을 영역
        </div>
        <div style="margin: 0 auto;" class="col-sm-9 bg-light p-3 border" v-for="review in currentPageBoardList">
            <div style="text-align: left;">
                {{ review.title }}
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
                    {{ review.viewCnt }} <button>수정</button><button>삭제</button>
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

const reviewStore = useReviewStore();
const userStore = useUserStore();
const userInfo = userStore.user;


const currentPage = ref(1);
const perPage = 7;

const getPage = function(number) {
    console.log("page...",number);
}
onMounted(async ()=> {
    await reviewStore.getReviewList();
    // await nextTick();
    console.log("onmouted",reviewStore.reviewList.length,reviewStore.page.value);
    await getPage(reviewStore.reviewList.length);

})

const currentPageBoardList = computed(() => {
  return reviewStore.reviewList.slice(
    (currentPage.value - 1) * perPage,
    currentPage.value * perPage
  );
});

const pagination = function(page) {
    console.log("페이지",page);
    currentPage.value=page;
}
console.log(reviewStore.reviewList.length);



const click = function(id) {
    console.log("click!",id);
    reviewStore.getReview(id);
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
        color: orange;
        text-decoration-line: underline;
    } 

</style>