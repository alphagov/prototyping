$(function() {

  window.addEventListener("scroll", function(e) {

    if ($(document).scrollTop() > ($('.manual-content').position().top) && !$('.up-nav').hasClass('fixed')) {
      $('.up-nav').addClass('fixed');


    }

    if ($(document).scrollTop() < $('.manual-content').position().top && $('.up-nav').hasClass('fixed')) {
      $('.up-nav').removeClass('fixed');

    }
  });

  $('.up-nav a').on('click', function(){
    $('.up-nav').removeClass('fixed');
  })
});
