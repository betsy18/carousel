$(document).ready(loadPage);
var target = 0;

function loadPage() {
  // elementos
  var $buttons = $('.control');
  var $previus = $('.previus');
  var $next = $('next');

  //   eventos
  $buttons.click(changeImage);
  $previus.click(previusImage);
  $next.click(nextImage);
}

function changeImage() {
  target = parseInt($(this).data('target'));
  showImage(target);
}

function previusImage(e) {
  e.preventDefault();
  target = target - 1;
  target = (target < 0) ? 4 : target;
  showImage(target);
}

function nextImage(e) {
  e.preventDefault();
  target = target + 1;
  target = (target > 4) ? 0 : target;
  showImage(target);
}

function showImage() {
  var $lastSlide = $('div.active');
  var $slide = $('div[data-slide = \'' + target + '\']');
  $lastSlide.removeClass('active');
  $slide.addClass('active');
}