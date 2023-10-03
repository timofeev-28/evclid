// BURGER-MENU
let burger = document.querySelector('.burger');
let menu = document.querySelector('.nav');
let menuLinks = menu.querySelectorAll('.nav__link');

burger.addEventListener('click', function () {

  burger.classList.toggle('burger--active');

  menu.classList.toggle('nav--active');

  document.body.classList.toggle('stop-scroll');
})

menuLinks.forEach(function (el) {   /*если нажать ещё раз на бургер*/
  el.addEventListener('click', function () {

    burger.classList.remove('burger--active');

    menu.classList.remove('nav--active');

    document.body.classList.remove('stop-scroll');
  })
})


// SEARCH
let search = document.querySelector('.header__btn');
let searchForm = document.querySelector('.header__search-form');
let searchFormOff = document.querySelector('.header__btn-off');

search.addEventListener('click', function () {

  searchForm.classList.toggle('header__search-form--active');

  search.classList.toggle('header__btn--active');
})

searchFormOff.addEventListener('click', function () {

  searchForm.classList.remove('header__search-form--active');

  search.classList.remove('header__btn--active');
})


  // TABS
let howBtn = document.querySelectorAll('.how__btn');
let howContent = document.querySelectorAll('.how__content');

howBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    howBtn.forEach(function(btn){ btn.classList.remove('how__btn--active') });
    e.currentTarget.classList.add('how__btn--active');

    howContent.forEach(function(element){ element.classList.remove('how__content--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('how__content--active');
  });
});


//  SLIDER
const swiper = new Swiper('.swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  speed: 3000,
  effect: "fade",
  autoplay: {
    delay: 4000,
  },
});


// ACCORDION
new Accordion('.accordion');
