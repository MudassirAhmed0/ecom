let swiperGap =
  window.innerWidth > 768
    ? (window.innerWidth / 100) * 2.60416666667
    : (window.innerWidth / 100) * 4;

window.addEventListener("resize", () => {
  swiperGap =
    window.innerWidth > 768
      ? (window.innerWidth / 100) * 2.60416666667
      : (window.innerWidth / 100) * 4;
});
const swiper = new Swiper(".homeSwiper", {
  slidesPerView: "auto",
  spaceBetween: swiperGap,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

setTimeout(function () {
  swiper.update(true);
  swiper.slideTo(0, 0);
}, 250);
