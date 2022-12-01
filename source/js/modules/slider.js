/* eslint-disable no-unused-vars */
import Swiper, { Navigation, Pagination } from 'swiper';

const sliderCoaches = () => {
  const swiperCoaches = new Swiper('.swiper-coaches', {
    modules: [Navigation, Pagination],
    observer: true,
    slidesPerView: 4,
    spaceBetween: 34,
    // slidesPerGroup: 40,
    // autoHeight: true,
    loop: true,
    // loopFillGroupWithBlank: true,
    navigation: {
      nextEl: '.slider__button-next--coaches',
      prevEl: '.slider__button-prev--coaches',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        // spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        // spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
        // spaceBetween: 40,
      },
    },
  });
};


const sliderFeedback = () => {
  const swiperFeedback = new Swiper('.swiper-feedback', {
    modules: [Navigation],
    observer: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    infinite: false,
    loop: true,
    navigation: {
      nextEl: '.reviews__button-next--feedback',
      prevEl: '.reviews__button-prev--feedback',
    },
    breakpoints: {
      320: {
        spaceBetween: 20,
      },
      768: {
        spaceBetween: 30,
      },
      1200: {
        spaceBetween: 40,
      },
    },
  });
  // swiperFeedback.on('slideChange', function () {
  //   swiperFeedback.el.children[0].style.height = '';
  // });
};

export {sliderCoaches, sliderFeedback};
