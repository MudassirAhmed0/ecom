AOS.init({ once: true });

let swiperGap =
  window.innerWidth > 768
    ? (window.innerWidth / 100) * 1.09375
    : (window.innerWidth / 100) * 4;

window.addEventListener("resize", () => {
  swiperGap =
    window.innerWidth > 768
      ? (window.innerWidth / 100) * 1.09375
      : (window.innerWidth / 100) * 4;
});
const swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: swiperGap,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
