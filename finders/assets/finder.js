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

  var showAndHideRadio = function($this){
    var state = $this.data('state');
    if (state !== 'all') {
      $('li.document').hide();
      $('li.document.' + state).show();  
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

  $('input[type=radio]').on('change', function() {
    showAndHideRadio($(this));
    updateCount();
  });
});
