// Dr. Madhur Singhai's Dental Clinic — main.js

document.addEventListener('DOMContentLoaded', function () {
  const menuBtn  = document.getElementById('menuBtn');
  const closeBtn = document.getElementById('closeMenu');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuLinks = mobileMenu ? mobileMenu.querySelectorAll('a') : [];

  function openMenu() {
    mobileMenu.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (menuBtn) menuBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);

  menuLinks.forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });
});
