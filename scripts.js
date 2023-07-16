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
let requestButton = document.querySelector('.request-btn');
let popup = document.querySelector('.popup');


// Получаем ссылку на всплывающую форму
let popupForm = document.querySelector('.popup-form');
  
// Получаем ссылку на кнопку "Закрыть"
let closeBtn = document.querySelector('.close-btn');

// Скрываем форму при загрузке страницы
popupForm.style.display = 'none';

// Обработчик события для открытия всплывающей формы
requestButton.addEventListener('click', function (event) {
  event.preventDefault();
  popupForm.style.display = 'flex';
  popup.style.display = 'block';
  body.classList.add('scroll-lock');
  setTimeout(function () {
    popupForm.classList.add('open');
  }, 10);
});

// Обработчик события для закрытия всплывающей формы
closeBtn.addEventListener('click', function (event) {
  event.preventDefault();
  popupForm.classList.remove('open');
  popup.style.display = 'none';
  body.classList.remove('scroll-lock');
  setTimeout(function () {
    popupForm.style.display = 'none';
  }, 10);
  closeBtn.classList.toggle('clicked');
});

popup.addEventListener('click', function (event) {
  event.preventDefault();
  popupForm.classList.remove('open');
  popup.style.display = 'none';
  body.classList.remove('scroll-lock');
  setTimeout(function () {
    popupForm.style.display = 'none';
  }, 10);
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
  let header = document.getElementById('main-header');
  let scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollPosition >= 150) {
    header.classList.add('header-scroll');
    body.classList.add('body-scroll');
  } else {
    header.classList.remove('header-scroll');
    body.classList.remove('body-scroll');
  }
});

// выпадение спойлеров

const spoilers = document.querySelectorAll('.spoiler');

Array.from(spoilers).forEach(function (spoiler) {
  let header = spoiler.querySelector('.spoiler-header');

  header.addEventListener('click', function () {
    spoiler.classList.toggle('active');
    let spoilerImg = header.querySelector('.spoiler_img');
    spoilerImg.classList.toggle('flipped');
  });
});



// скейтбордист

window.addEventListener('scroll', function () {
  let circle = document.querySelector('.circle');
  let scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
  let moveDistance = scrollPercentage * (window.innerWidth - circle.offsetWidth);
  circle.style.transform = 'translateX(' + moveDistance + 'px)';
});


// переключатель цветовой схемы

// Получаем элемент переключателя и "слайдера"
let colorSwitcher = document.getElementById('colorSwitcher');
let slider = document.querySelector('.switch_slider');

// Обработчик события изменения состояния переключателя
colorSwitcher.addEventListener('change', function () {
  // Плавное перемещение "слайдера" при изменении состояния переключателя
  if (colorSwitcher.checked) {
    slider.style.transform = 'translateX(26px)';
  } else {
    slider.style.transform = 'translateX(0)';
  }

  // Инвертирование цветов на странице при включении переключателя
  document.body.classList.toggle('invert-colors', colorSwitcher.checked);

  // Вращение картинки при активации переключателя
  let pizzaImage = document.querySelector('.pizza-img');
  pizzaImage.classList.add('rotate-image', colorSwitcher.checked);
  pizzaImage.classList.remove('reverse-rotate-image', colorSwitcher.checked);
  if (!colorSwitcher.checked) {
    pizzaImage.classList.toggle('reverse-rotate-image');
  }
});

// кнопка поиска

// Получаем ссылки на элементы
const searchButton = document.querySelector('.search-button');
const searchInputContainer = document.getElementById('searchInputContainer');
const popup_search = document.querySelector('.popup-search');
// Обработчик события клика по кнопке поиска
searchButton.addEventListener('click', function () {
  // Показываем или скрываем всплывающее окно при нажатии на кнопку
  searchInputContainer.style.display = searchInputContainer.style.display === 'block' ? 'none' : 'block';
  popup_search.style.display = 'flex';
  body.classList.add('scroll-lock');
});

// Обработчик события клика за пределами всплывающего окна
document.addEventListener('click', function (event) {
  const isSearchInputClicked = searchInputContainer.contains(event.target) || searchButton.contains(event.target);

  if (!isSearchInputClicked) {
    // Если клик был за пределами всплывающего окна, то скрываем его
    searchInputContainer.style.display = 'none';
    popup_search.style.display = 'none';
    body.classList.remove('scroll-lock');
  }
});




