function initToggle () {
  $('.filters').on('click', 'a.js-toggle', function (e) {
    e.preventDefault();
    $(this).parent().toggleClass('open');
  });
}

$(document).ready(function() {
  // add items to list
  $('.search-picker').on('click', 'a.add', function (e) {
    e.preventDefault();
    var $this = $(this), $li = $this.parent('li').clone();
    $li.find('a.add').removeClass('add').addClass('remove').text('Remove');

    var $picked = $this.parents('.step').find('.picked-items');
    $picked.find('ul').append($li).end().find('.button-container').removeClass('hidden');
  });

  // remove items from list
  $('.picked-items').on('click', 'a.remove', function (e) {
    e.preventDefault();
    $(this).parents('li').remove();

    if ($('.picked-items').find('li').length === 0) {
      $('.picked-items').find('.button-container').addClass('hidden');
    }
  });

  initToggle();
});