// Подключение свайпера
import Swiper from "swiper";
import { Autoplay, Navigation, Pagination, Thumbs } from "swiper/modules";
Swiper.use([Navigation, Pagination, Thumbs, Autoplay]);

const heroSwiper = new Swiper(".hero__slider", {
  loop: true,
  slidesPerView: 1,
  initialSlide: 0,
  speed: 700,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: ".hero__slider-controls-next",
    prevEl: ".hero__slider-controls-prev",
  },
  pagination: {
    el: ".hero__pagination",
    clickable: true,
  },
});

const newsSwiper = new Swiper(".news__slider", {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".news__slider-controls-next",
    prevEl: ".news__slider-controls-prev",
  },
  pagination: {
    el: ".news__pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 990px
    990: {
      slidesPerView: 4,
      spaceBetween: 32,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

const readItSwiper = new Swiper(".read-it__slider", {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".read-it__slider-controls-next",
    prevEl: ".read-it__slider-controls-prev",
  },
  pagination: {
    el: ".read-it__pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 990px
    990: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
  },
});

const inStockSwiper = new Swiper(".in-stock__slider", {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".in-stock__slider-controls-next",
    prevEl: ".in-stock__slider-controls-prev",
  },
  pagination: {
    el: ".in-stock__pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 990px
    1200: {
      slidesPerView: 4,
      spaceBetween: 32,
    },
    990: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});

const clientsSwiper = new Swiper(".clients__slider", {
  slidesPerView: 4,
  spaceBetween: 32,
  navigation: {
    nextEl: ".clients__slider-controls-next",
    prevEl: ".clients__slider-controls-prev",
  },
  pagination: {
    el: ".clients__pagination",
    clickable: true,
  },
});

const clientsMobileSwiper = new Swiper(".clients__slider-mobile", {
  slidesPerView: 1,
  pagination: {
    el: ".clients__pagination-mobile",
    clickable: true,
  },
});

const technicCardSwiper = new Swiper(".technic-card__slider", {
  enabled: false,
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".technic-card__pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 1200px
    768: {
      enabled: true,
    },
  },
});

const usedLiftCardSwiper = new Swiper(".used-lifts__card-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".used-lifts__pagination",
    clickable: false,
  },
  breakpoints: {
    // when window width is >= 1200px
    768: {
      slidesPerView: 3,
      spaceBetween: 8,
    },
  },
});

const productPageSwiperThumbs = new Swiper(".product__swiper-thumbs", {
  spaceBetween: 4,
  slidesPerView: 4,
  slideToClickedSlide: true,
  loop: true,

  breakpoints: {
    768: {
      spaceBetween: 8,
      slidesPerView: 3,
      direction: "vertical",
    },
  },
});

const productPageSwiper = new Swiper(".product__swiper", {
  spaceBetween: 4,
  loop: true,
  navigation: {
    nextEl: ".product__swiper-next",
    prevEl: ".product__swiper-prev",
  },
  pagination: {
    el: ".product__swiper-pagination",
    clickable: true,
  },
  thumbs: {
    swiper: productPageSwiperThumbs,
  },
});

const projectPageSwiperThumbs = new Swiper(".project-detail__swiper-thumbs", {
  spaceBetween: 4,
  slidesPerView: 4,
  slideToClickedSlide: true,
  clickable: true,
  freeMode: true,
  loop: true,
  breakpoints: {
    768: {
      spaceBetween: 8,
      slidesPerView: 4,
      direction: "vertical",
    },

    576: {
      spaceBetween: 8,
      slidesPerView: 5,
    },
  },
});

const projectPageSwiper = new Swiper(".project-detail__swiper", {
  spaceBetween: 4,
  loop: true,
  navigation: {
    nextEl: ".project-detail__swiper-next",
    prevEl: ".project-detail__swiper-prev",
  },
  pagination: {
    el: ".project-detail__swiper-pagination",
    clickable: true,
  },
  thumbs: {
    swiper: projectPageSwiperThumbs,
  },
});

const certificatesSwiper = new Swiper(".certificates__slider", {
  slidesPerView: 1,
  spaceBetween: 8,
  navigation: {
    nextEl: ".certificates__slider-controls-next",
    prevEl: ".certificates__slider-controls-prev",
  },
  pagination: {
    el: ".certificates__pagination",
    clickable: true,
  },
  breakpoints: {
    990: {
      slidesPerView: 3.3,
      spaceBetween: 32,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});
