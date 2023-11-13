// window.onload = function () {
// }

// 칠성몰 > cj제일제당 > 11번가

window.addEventListener("load", function () {
  const swiperMain = new Swiper('#mainBanner .swiper', {
    loop: true,
    effect: "fade",
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '#mainBanner .swiper-button-next',
      prevEl: '#mainBanner .swiper-button-prev',
    },
    pagination: {
      el: "#mainBanner .swiper-pagination",
      clickable: true,
    },
  });

  var status = true;

  document.querySelector(".toggle").addEventListener("click", function () {
    console.log(status);
    document.querySelector(".toggle").classList.toggle("stop");
    status = document.querySelector(".toggle").classList.contains("stop");
    if (status) {
      swiperMain.autoplay.stop();
    } else {
      swiperMain.autoplay.start();
    }
    
  });
});

