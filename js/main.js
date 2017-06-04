$(document).ready(function() {
  $('#nav-home').click(function(e) {
    $('.nav-item').removeClass('nav-item--active');
    $('#nav-home').addClass('nav-item--active');

    $('#home').addClass('u-show--block').removeClass('u-hide');
    $('#installation').addClass('u-hide').removeClass('u-show');
    $('#usage').addClass('u-hide').removeClass('u-show');
  });

  $('#nav-installation').click(function(e) {
    $('.nav-item').removeClass('nav-item--active');
    $('#nav-installation').addClass('nav-item--active');

    $('#home').addClass('u-hide').removeClass('u-show--block');
    $('#installation').addClass('u-show').removeClass('u-hide');
    $('#usage').addClass('u-hide').removeClass('u-show');
  });

  $('#nav-usage').click(function(e) {
    $('.nav-item').removeClass('nav-item--active');
    $('#nav-usage').addClass('nav-item--active');

    $('#home').addClass('u-hide').removeClass('u-show--block');
    $('#installation').addClass('u-hide').removeClass('u-show');
    $('#usage').addClass('u-show').removeClass('u-hide');
  });

  $('#download').click(function(e) {
    $('.nav-item').removeClass('nav-item--active');
    $('#nav-installation').addClass('nav-item--active');

    $('#home').addClass('u-hide').removeClass('u-show--block');
    $('#installation').addClass('u-show').removeClass('u-hide');
    $('#usage').addClass('u-hide').removeClass('u-show');
  });
});
