$(document).ready(function() {
  var $alpha = $('#alpha-popup'),
  html = $alpha.html();
  var popup = NewPopup.popup(html, $alpha.attr('class'));
});