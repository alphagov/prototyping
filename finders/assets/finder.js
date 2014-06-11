$(function() {
  $( ".head" ).on('click', function() {
    $(this).parent().toggleClass( "closed" );
  });

  var showAndHide = function(){
    var classes = $('input[type=checkbox]:checked').map(function(i,el){ return "li." + $(el).val() }).toArray().join(', ');


    if(classes.length){
      $('li.document').hide();
      $(classes).show();
    } else {
      $('li.document').show();
    }
  };

  var updateCount = function(){
    var n = $( ".results li:visible" ).size();
    $( "span.result-count" ).text(n);
  };

  $('input[type=checkbox]').on('change', function() {
    showAndHide();
    updateCount();
  });
});
