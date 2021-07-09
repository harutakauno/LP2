window.onunload = function () { };

function sizecheck() {
  w = window.innerWidth ? window.innerWidth : $(window).width();
  h = window.innerWidth ? window.innerHeight :$(window).innerHeight();
}
sizecheck();

$(function () {
  if (w > 769) {
  } else {
    $("header .draer").click(function () {
      $('body').toggleClass('nav-open');
      $('header .navbar').fadeToggle(200);
    });
  }
});
