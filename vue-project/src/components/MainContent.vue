<template>
  <div>
    <!-- 카카오 맵을 표시할 div -->
    <!-- <div ref="map" style="width:500px;height:400px;"></div> -->
    <KakaoMapComponent/>
  </div>
</template>

<script setup>
    import KakaoMapComponent from '@/components/KakaoMapComponent.vue';
</script>

<!-- <script>
export default {
  mounted() {
    // 외부 스크립트 로드
    const script = document.createElement('script');
    const key = import.meta.env["VITE_KAKAO_KEY"];
    console.log(key);
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${key}`;
    script.onload = () => {
      // 스크립트 로드 후 실행할 코드
      this.initMap();
    };
    document.head.appendChild(script);
  },
  methods: {
    initMap() {
      // 카카오 맵 초기화 및 표시
      const container = this.$refs.map;
      const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3
      };
      const map = new kakao.maps.Map(container, options);
      // 추가적인 지도 설정 및 마커 등을 이곳에서 처리할 수 있습니다.
    }
  }
};
</script> -->


<script setup>



</script>
  
  <style scoped>
  .main-content {
    padding: 10px;
  }
  .map {
    height: 400px;
    border: 1px solid #000;
  }
  </style>
  

