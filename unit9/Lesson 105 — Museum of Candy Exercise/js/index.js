$(document).scroll(function navbarToggle() {
  const $nav = $('#navbar');
  $nav.toggleClass('navbar-scrolled', $(this).scrollTop() > $nav.height());
});
