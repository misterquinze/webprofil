var mainNav = document.getElementById('menu-bar');
var navBarToggle = document.getElementById('navbar-toggle-menu');

navBarToggle.addEventListener('click', function () {

  mainNav.classList.toggle('active');
});