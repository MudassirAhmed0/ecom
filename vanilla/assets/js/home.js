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
owl.on("changed.owl.carousel", function (event) {
  if ($(".owl-next").hasClass("disabled")) {
    $(".flipIt").addClass("rotate-[180deg]");
    $(".flipIt2").removeClass("owl-carousel__next");
    $(".flipIt2").click(() => owl.trigger("prev.owl.carousel"));
  }
  if ($(".owl-prev").hasClass("disabled")) {
    $(".flipIt").removeClass("rotate-[180deg]");
    $(".flipIt2").click(() => owl.trigger("next.owl.carousel"));
  }
});
