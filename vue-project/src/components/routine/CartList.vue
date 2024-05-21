<template>
    <div style="height: 100%; padding: 0;">
    
        <div class="CartContainer">
        <div id="Header1">장바구니</div>
        <div id="CartBody">
            <!-- 장바구니 아이템을 동적으로 추가하는 부분 -->
            <div v-for="item in cartItems">{{ item }}</div>
            
        </div>
        </div>
    
        <div class="container">
            <div id="CartButton" @click="generateRoutine">
                루틴 생성하기
            </div>
        </div>
    
    </div>
    </template>
    
    <script setup>
    import { ref, onMounted } from 'vue';
    import axios from 'axios';
    
    const cartItems = ref([]); // 장바구니 아이템을 저장할 배열
    
    // 로컬 스토리지에서 데이터를 가져와서 cartItems에 할당하는 함수
    const loadCartItems = () => {

        const localStorageKeys = Object.keys(localStorage);
        const allData = {};
        for (let key of localStorageKeys) {
            allData[key] = localStorage.getItem(key);
        }

        if (allData) {
            cartItems.value = allData;
        }
    };
    
    // 컴포넌트가 마운트되면 로컬 스토리지에서 데이터를 가져와서 cartItems에 할당
    onMounted(() => {
        loadCartItems();
    });

    const generateRoutine = () => {
        // 로컬 스토리지에서 모든 아이템 가져오기
        const storedItems = Object.keys(localStorage).map(key => {
            return JSON.parse(localStorage.getItem(key));
        });

        // 모든 아이템의 e_name을 한 배열에 모으기
        const allENames = storedItems.map(item => item.e_name);

        // 콘솔에 출력
        console.log(allENames);

        const ret = sendRoutine(allENames);
        console.log(ret);

        // 로컬 스토리지 비우기
        localStorage.clear();

        // location.reload();
    };

    const sendRoutine = async (allENames) => {
        await axios.post('http://localhost:8080/api-routine/routine', allENames)
        .then(response => {
            return response.data.id;
        })
        .then(id => {
            console.log(id); // 숫자 출력
        })
        .catch(error => {
            console.error(error); // 오류 처리
        });
    };
    </script>

    

<style scoped>
    #CartContainer{
        padding: 0px;
    }

    #Header1{
        font-weight: bold;
        font-size: 1.5rem;
        height:7%;
        text-align: center;
        align-items: center;
        padding: 10px;
    }

    #CartBody{
        max-height: 76.95vh;
        overflow-y: auto;
        height: 76.95vh;
    }

    .container {
        position: relative; /* 상위 컴포넌트의 위치를 기준으로 하위 컴포넌트를 배치하기 위해 필요 */
        padding: 0;
    }

    #CartButton {
        position: relative; /* 상위 컴포넌트를 기준으로 절대 위치 설정 */
        bottom: 0; /* 하단에 고정 */
        width: 100%; /* 너비를 상위 컴포넌트에 맞춤 */
        background-color: #b3b6b4; /* 배경색 추가 (옵션) */
        text-align: center; /* 텍스트 중앙 정렬 (옵션) */
        padding: 10px; /* 패딩 추가 (옵션) */
        font-weight: bold;
    }


    
</style>