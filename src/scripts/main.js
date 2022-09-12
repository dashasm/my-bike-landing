'use strict';

const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  form.reset();

  window.location.href = '#header';
});

const footer = document.querySelector('.footer');

footer.addEventListener('click', () => {
  window.location.href = '#header';
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
