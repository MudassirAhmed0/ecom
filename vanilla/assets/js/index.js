// AOS.init({ once: true });
var scrollableElement = document.body; //document.getElementById('scrollableElement');

scrollableElement.addEventListener("wheel", checkScrollDirection);

const nav = document.querySelector("nav");
function checkScrollDirection(event) {
  if (checkScrollDirectionIsUp(event)) {
    nav.classList.remove("zeroH");
  } else {
    if (window.scrollY > 200) {
      nav.classList.add("zeroH");
    }
  }
}

function checkScrollDirectionIsUp(event) {
  if (event.wheelDelta) {
    return event.wheelDelta > 0;
  }
  return event.deltaY < 0;
}
