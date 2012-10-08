$(function() {
  $('.search-toggle').on('click', function(e) {
    e.preventDefault();
    $('#search').toggleClass('js-visible');
    $(this).addClass('js-hidden');
  });
});
