$(function() {
  $(document).scroll(function() {
    let $nav = $("#navbar");
    $nav.toggleClass("navbar-scrolled", $(this).scrollTop() > $nav.height());
  });
});
