// window.onload = function () {
// }

// 칠성몰 > cj제일제당 > 11번가

window.addEventListener("load", function () {
  const swiperMain = new Swiper('#mainBanner .swiper', {
    loop: true,
    effect: "fade",
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '#mainBanner .swiper-button-next',
      prevEl: '#mainBanner .swiper-button-prev',
    },
    pagination: {
      el: "#mainBanner .swiper-pagination",
    },
  });

})