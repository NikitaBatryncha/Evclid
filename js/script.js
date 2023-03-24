let menu = document.querySelector('.header__nav');
let burger = document.querySelector('.burger');

burger.addEventListener('click',

function () {

  burger.classList.toggle('burger--active');

  menu.classList.toggle('header__nav--active');

  document.body.classList.toggle('stop-scroll');
})

let menuLinks = menu.querySelectorAll('.header__link');

menuLinks.forEach(function(el) {
  el.addEventListener('click',

  function() {

    burger.classList.remove('burger--active');

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll')
  })
})

let searchUtility = document.querySelector('.search__nav');
let search = document.querySelector('.header__search');

search.addEventListener('click',

function () {

  search.classList.toggle('header__search--active');

  searchUtility.classList.toggle('search__nav--active');
})

let searchClose = searchUtility.querySelector('.close');

searchClose.addEventListener('click',

  function() {

    search.classList.remove('header__search--active');

    searchUtility.classList.remove('search__nav--active');
})

let searchUtility1024 = document.querySelector('.search1024__nav');
let search1024 = document.querySelector('.header1024__search');

search1024.addEventListener('click',

function () {

  search1024.classList.toggle('header1024__search--active');

  searchUtility1024.classList.toggle('search1024__nav--active');
})

let searchClose1024 = searchUtility1024.querySelector('.close1024');

searchClose1024.addEventListener('click',

  function() {

    search1024.classList.remove('header1024__search--active');

    searchUtility1024.classList.remove('search1024__nav--active');
  })

const swiper = new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  loop: true
});

let tabsBtn = document.querySelectorAll('.tabs-nav__btn');
let tabsItem = document.querySelectorAll('.tabs__item');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn){btn.classList.remove('tabs-nav__btn--active')});
    e.currentTarget.classList.add('tabs-nav__btn--active');

    tabsItem.forEach(function(element){element.classList.remove('tabs__item--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs__item--active');
  });
});

let tabsSelector = document.querySelectorAll('.tabs-nav__item');
let tabsIllustration = document.querySelectorAll('.tabs__illustration');

tabsSelector.forEach(function(picture){
  picture.addEventListener('click', function(p) {
    const path = p.currentTarget.dataset.path;

    tabsSelector.forEach(function(selector){selector.classList.remove('tabs-nav__item--active')});
    p.currentTarget.classList.add('tabs-nav__item--active');

    tabsIllustration.forEach(function(picture){picture.classList.remove('tabs__illustration--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs__illustration--active');
  });
});

new Accordion('.accordion');

function changeCheckbox(event) {
  let item = document.getElementById('cbx');
  switch(item.getAttribute('aria-checked')) {
      case "true":
          item.setAttribute('aria-checked', "false");
          break;
      case "false":
          item.setAttribute('aria-checked', "true");
          break;
  }
}
