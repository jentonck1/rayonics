
const swiper = new Swiper('.swiper1', {
    // Optional parameters
    loop: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
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
    clickable: true
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

const swiperTestimonials = new Swiper('.swiper3', {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay:{
    delay: 5000,
  },
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },

});

window.addEventListener('scroll', ()=>{
  const header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY >0);
});