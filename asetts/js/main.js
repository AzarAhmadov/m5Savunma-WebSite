var swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 10,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    300: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 25,
    },
    1023: {
      slidesPerView: 10,
      spaceBetween: 10,
    },
  },
});

var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  thumbs: {
    swiper: swiper,
  },
});

const openMenu = document.querySelector('.open-menu');
const openList = document.querySelector('.list-mobil');
const Body = document.querySelector('.body');

openMenu.addEventListener('click', () => {
  openList.classList.toggle('active');
  Body.classList.toggle('scrool-none');
})