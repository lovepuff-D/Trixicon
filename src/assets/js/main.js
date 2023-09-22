document.documentElement.style.setProperty('--header-height', document.querySelector('.header').clientHeight + 'px');


const resizeObserver = new ResizeObserver((entries) => {
  document.documentElement.style.setProperty('--header-height', entries[0].target.clientHeight + 'px');
});

resizeObserver.observe(document.querySelector('.header'));

import './modules/togglers.js'