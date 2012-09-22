$(document).ready(function() {
  var $container = $('section.more');

  if ($container.find('.nav-tabs').length) {
    $container.tabs();
  }
});