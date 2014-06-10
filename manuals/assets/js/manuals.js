$(function() {
  $( ".closed" ).click(function() {
    $(this).parent().parent().parent().find( ".hidden-content" ).toggleClass( "open-content" );
    $(this).parent().parent().parent().find( ".fade-summary" ).toggleClass( "grey" );
    $(this).toggleClass( "open-content" );
    return false;
  });
  $( ".closed-secondary" ).click(function() {
    $(this).parent().parent().parent().find( ".hidden-content-secondary" ).toggleClass( "open-content" );
    $(this).toggleClass( "open-content" );
    return false;
  });
  $( ".close-this" ).click(function() {
    $(this).parent().parent().removeClass( "open-content" );
    $(this).parent().parent().parent().find( ".closed" ).toggleClass( "open-content" );
    $(this).parent().parent().parent().find( ".closed-secondary" ).toggleClass( "open-content" );
    return false;
  });

  $( ".open-all" ).click(function() {
    $( ".hidden-content").addClass( "open-content" );
    $( ".hidden-content-secondary").addClass( "open-content" );
    $( ".closed").addClass( "open-content" );
    $( ".open-all" ).toggle();
    $( ".close-all" ).toggle();
    return false;
  });
  $( ".close-all" ).click(function() {
    $( ".hidden-content").removeClass( "open-content" );
    $( ".hidden-content-secondary").removeClass( "open-content" );
    $( ".closed").removeClass( "open-content" );
    $( ".open-all" ).toggle();
    $( ".close-all" ).toggle();
    return false;
  });
});
