<script setup>
import { useUserStore } from '@/stores/useUserStore';
import {ref} from 'vue'
const userStore = useUserStore();
const user = userStore.user;
const newUser = ref({
    id:user.id,
    password:'',
    name:'',
    address:''
})
</script>

<template>
    <div>
        
        <div class="container">
            <div class="row justify-content-center mt-5">
            <div class="col-md-6">
                <div class="card">
                <div class="card-header">회원수정페이지</div>
                <div class="card-body">
                    <div class="mb-3">
                        <label for="name" class="form-label">비밀번호</label>
                        <input type="text" class="form-control" id="pw" v-model="newUser.password" required >
                    </div>
                    <div class="mb-3">
                        <label for="name" class="form-label">이름</label>
                        <input type="text" class="form-control" id="name" v-model="newUser.name" required>
                    </div>
                    <div class="mb-3">
                        <label for="name" class="form-label">주소</label>
                        <input type="text" class="form-control" id="address" v-model="newUser.address" required>
                    </div>

                    <div class="text-center">
                        <button class="btn btn-danger" @click="back">수정취소</button>
                        <button type="submit" class="btn btn-primary">수정하기</button>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>

    </div>

</template>

<style scoped>

</style>