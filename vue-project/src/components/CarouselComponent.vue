<template>
    <div>
        <!-- 이미지 부분 -->
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="@/assets/img/gym1.jpg" style="max-width: 100%; height: 250px;" class="d-block w-100">
                </div>
                <div class="carousel-item">
                    <img src="@/assets/img/gym2.jpg" style="max-width: 100%; height: 250px;" class="d-block w-100">
                </div>
                <div class="carousel-item">
                    <img src="@/assets/img/gym3.jpg" style="max-width: 100%; height: 250px;" class="d-block w-100">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>

    </div>
</template>

<script setup>
</script>