<template>
  <div>
    <div id="map" style="width:100%;height:350px;"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const KAKAO_MAP_API_KEY = import.meta.env.VITE_KAKAO_KEY;
const map = ref(null);

onMounted(() => {
  if (KAKAO_MAP_API_KEY) {
    const script = document.createElement('script');
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_MAP_API_KEY}&libraries=services`;
    script.async = true;
    script.onload = initMap;
    document.head.appendChild(script);
  } else {
    console.error('Kakao Map API key is not provided.');
  }
});

function initMap() {
  const mapContainer = document.getElementById('map');
  const mapOptions = {
    center: new kakao.maps.LatLng(37.566826, 126.9786567),
    level: 3
  };
  map.value = new kakao.maps.Map(mapContainer, mapOptions);

  searchPlaces('이태원 맛집');
}

function searchPlaces(keyword) {
  if (typeof kakao !== 'undefined') {
    const ps = new kakao.maps.services.Places();
    ps.keywordSearch(keyword, placesSearchCB);
  } else {
    console.error('Kakao Map API is not loaded.');
  }
}

function placesSearchCB(data, status) {
  if (status === kakao.maps.services.Status.OK) {
    const bounds = new kakao.maps.LatLngBounds();
    data.forEach(place => {
      displayMarker(place);
      bounds.extend(new kakao.maps.LatLng(place.y, place.x));
    });
    map.value.setBounds(bounds);
  }
}

function displayMarker(place) {
  const marker = new kakao.maps.Marker({
    map: map.value,
    position: new kakao.maps.LatLng(place.y, place.x)
  });
  const infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
  kakao.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
    infowindow.open(map.value, marker);
  });
}
</script>
