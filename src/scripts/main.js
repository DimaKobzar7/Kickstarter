'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#nav-menu') {
    document.body.classList.add('page__body--scroll-remove');
  } else {
    document.body.classList.remove('page__body--scroll-remove');
  }
});

// const navActive = document.querySelector('.switchers__switch--active');
// const switchers = document.querySelectorAll('.switchers__switch');

// switchers.forEach(item => {
//   item.addEventListener('click', () => {
//     // console.log("object");
//     if (item.classList.contains('.switchers__switch--active')) {
//       item.classList.remove('switchers__switch--active');
//     } else {
//       item.classList.add('switchers__switch--active');
//     }
//   });
// });

// switchers.forEach(item => {
//   item.addEventListener('click', (target) => {
//     // console.log("object");
//     // console.log(target);
//     if (target.classList.contains('switchers__switch--active')) {
//       target.classList.toggle('switchers__switch--active');
//     }
//   });
// });

// swiper попытки
// const swiper = new Swiper('.mySwiper', {
//   pagination: {
//     el: '.swiper-pagination',
//     type: 'fraction',
//   },
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });

// это через импорты
// core version + navigation, pagination modules:
// import Swiper, { Navigation, Pagination } from 'swiper';
// // import Swiper and modules styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// // init Swiper:
// const swiper = new Swiper('.swiper', {
//   // configure Swiper to use modules
//   modules: [Navigation, Pagination],
//   ...
// });

// через модули

// // import Swiper JS
// import Swiper from 'swiper';
// // import Swiper styles
// import 'swiper/css';

// const swiper = new Swiper(...);
