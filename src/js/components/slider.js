// Подключение свайпера
import Swiper from "swiper";
import { Navigation, Pagination, Thumbs } from "swiper/modules";
Swiper.use([Navigation, Pagination, Thumbs]);

const heroSwiper = new Swiper(".hero__slider", {
  loop: true,
  slidesPerView: 1,
  initialSlide: 1,
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