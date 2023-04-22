let isCenter = window.innerWidth > 768;

const swiper = new Swiper(".homeSwiper", {
  slidesPerView: "auto",

  grabCursor: true,
  spaceBetween: 0,
  centeredSlides: !isCenter,
  loop: !isCenter,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
