const carousel = new Swiper(".scene-swiper", {
  slidesPerView: "auto",
  spaceBetween: 18,
  grabCursor: true,
  speed: 650,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    561: {
      spaceBetween: 22,
    },
  },
});
