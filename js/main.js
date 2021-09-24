
const swiper = new Swiper('.swiper1', {
    // Optional parameters
    loop: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay:{
      delay: 8000,
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: true
    },
});

const swiperProducts = new Swiper('.swiper2', {

  // Optional parameters
  loop: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


mapboxgl.accessToken = 'pk.eyJ1IjoibWViaW5rdGhvbWFzIiwiYSI6ImNrdHNjNzl6MzFlenUyeGw0YjczamdxbzIifQ.v4MxUWr_UU1aiZpa_pJ3kQ';
  let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-74.5, 40],
  zoom: 8

});