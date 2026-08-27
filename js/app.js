(function () {
  'use strict';

  document.getElementById('year').textContent = new Date().getFullYear();

  const btn = document.getElementById('btn-whatsapp');

  if (btn) {
    btn.addEventListener('click', function () {
      btn.classList.add('is-loading');
    });
  }
})();
