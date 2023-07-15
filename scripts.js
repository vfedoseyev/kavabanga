/* Код для бургера */

const burgerMenu = document.querySelector('.burger-menu');
const overlayMenu = document.querySelector('.overlay-menu');
const closeMenu = document.querySelector('.close-menu');
const body = document.querySelector('body');

burgerMenu.addEventListener('click', function () {
  this.classList.toggle('open');
  overlayMenu.classList.toggle('open');
  body.classList.add('scroll-lock');
});

closeMenu.addEventListener('click', function () {
  burgerMenu.classList.remove('open');
  overlayMenu.classList.remove('open');
  body.classList.remove('scroll-lock');
});

/* Код для формы и кнопки заявка */

// Получаем ссылку на кнопку "Заявка"
var requestButton = document.querySelector('.request-btn');

// Получаем ссылку на всплывающую форму
var popupForm = document.querySelector('.popup-form');

// Получаем ссылку на кнопку "Закрыть"
var closeBtn = document.querySelector('.close-btn');

// Скрываем форму при загрузке страницы
popupForm.style.display = 'none';

// Обработчик события для открытия всплывающей формы
requestButton.addEventListener('click', function (event) {
  event.preventDefault();
  popupForm.style.display = 'flex';
  setTimeout(function () {
    popupForm.classList.add('open');
  }, 10);
});

// Обработчик события для закрытия всплывающей формы
closeBtn.addEventListener('click', function (event) {
  event.preventDefault();
  popupForm.classList.remove('open');
  setTimeout(function () {
    popupForm.style.display = 'none';
  }, 300);
  closeBtn.classList.toggle('clicked');
});


// Обработчик события для отправки формы
popupForm.addEventListener('submit', function (event) {
  event.preventDefault();
  // Здесь вы можете добавить логику для обработки отправки формы
});

// slider mf
$(document).ready(function () {
  $('.slider').slick({
    asNavFor: '.slider-nav',
    arrows: false,
    centerMode: true,
    dots: false,
    slidesToShow: 1,
    fade: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          dots: true,
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]

  });
  $('.slider-nav').slick({
    dots: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    centerMode: true,
    focusOnSelect: true,
    asNavFor: '.slider',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});

// появление хедера при скролле

window.addEventListener('scroll', function () {
  var header = document.getElementById('main-header');
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollPosition >= 150) {
    header.classList.add('header-scroll');
    body.classList.add('body-scroll');
  } else {
    header.classList.remove('header-scroll');
    body.classList.remove('body-scroll');
  }
});

// выпадение спойлеров

var spoilers = document.getElementsByClassName('spoiler');

Array.from(spoilers).forEach(function (spoiler) {
  var header = spoiler.querySelector('.spoiler-header');
  var content = spoiler.querySelector('.spoiler-content');

  header.addEventListener('click', function () {
    spoiler.classList.toggle('active');
  });
});

// скейтбордист

window.addEventListener('scroll', function () {
  var circle = document.querySelector('.circle');
  var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
  var moveDistance = scrollPercentage * (window.innerWidth - circle.offsetWidth);
  circle.style.transform = 'translateX(' + moveDistance + 'px)';
});


