window.addEventListener("DOMContentLoaded", () => {
  const petsSwiper = new Swiper(".pets-swiper", {
    direction: "horizontal",
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const testimonialsSwiper = new Swiper(".testimonials-swiper", {
    direction: "horizontal",
    loop: true,
    // autoplay: {
    //   delay: 5000,
    // },
    speed: 2000,
    pagination: {
      el: ".swiper-pagination",
      horizontalClass: "swiper-pagination-horizontal custom-prop",
      type: "progressbar",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
});
