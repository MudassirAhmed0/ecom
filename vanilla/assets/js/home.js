const padding = (window.innerWidth / 100) * 8.4375;
const margin = (window.innerWidth / 100) * 1.19791666667;
const owl = $(".owl-carousel").owlCarousel({
  // loop: true,
  nav: true,
  dots: false,
  margin: margin,
  stagePadding: padding,
  navRewind: false,

  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 3,
    },
  },
});

$(".owl-carousel__next").click(() => owl.trigger("next.owl.carousel"));
$(".owl-carousel__prev").click(() => owl.trigger("prev.owl.carousel"));

let isNext = true;
let isPrev = false;

owl.on("changed.owl.carousel", function (event) {
  if ($(".owl-next").hasClass("disabled")) {
    isNext = false;
    meraRight.classList.add("opacity-0");
    meraRight.classList.add("pointer-events-none");
  } else {
    isNext = true;
  }
  if ($(".owl-prev").hasClass("disabled")) {
    isPrev = false;
    meraLeft.classList.add("opacity-0");
    meraLeft.classList.add("pointer-events-none");
  } else {
    isPrev = true;
  }
});

const meraLeft = document.querySelector(".meraLeft");
const meraRight = document.querySelector(".meraRight");
const carouselWrapper = document.querySelector(".carousel-wrapper");

carouselWrapper.addEventListener("mousemove", (e) => {
  if ((window.innerWidth - padding) / 2 > e.clientX) {
    if (!isPrev) {
      meraLeft.classList.add("opacity-0");
      meraLeft.classList.add("pointer-events-none");
    } else {
      meraLeft.classList.remove("opacity-0");
      meraLeft.classList.remove("pointer-events-none");
    }
    meraRight.classList.add("opacity-0");
    meraRight.classList.add("pointer-events-none");
  } else {
    meraLeft.classList.add("opacity-0");
    meraLeft.classList.add("pointer-events-none");
    if (!isNext) {
      meraRight.classList.add("opacity-0");
      meraRight.classList.add("pointer-events-none");
    } else {
      meraRight.classList.remove("opacity-0");
      meraRight.classList.remove("pointer-events-none");
    }
  }
});
carouselWrapper.addEventListener("mouseout", () => {
  meraLeft.classList.add("opacity-0");
  meraLeft.classList.add("pointer-events-none");
  meraRight.classList.add("opacity-0");
  meraRight.classList.add("pointer-events-none");
});
