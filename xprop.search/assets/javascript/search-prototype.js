function initSearchFilter() {
  $('.search .filters').on('click', 'a', function(e) {
    e.preventDefault();
    
    $(this).parent().toggleClass('active').siblings('li').removeClass('active');
    
    filterResults();
  });
}

function filterResults() {
  var $results = $('.results-list');

  $results.find('.filtered').removeClass('filtered');

  var filter = '';
  $('.search .filters').find('.active').each(function() { 
    /* if (filter != '') filter += ', '; */
    filter += '.'+$(this).data('filter');
  });
  
  if (filter == '') filter = '*';
  
  console.log(filter);
  
  $results.children('li').not(filter).addClass('filtered');
}

$(document).ready(function() {
  initSearchFilter();
});
