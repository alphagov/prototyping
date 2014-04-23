$(function() {
  $( ".closed" ).click(function() {
    $(this).parent().parent().find( ".hidden-content" ).toggle();
    $(this).toggleClass( "open" );
    return false;
  });
  $( ".closed-secondary" ).click(function() {
    $(this).parent().parent().find( ".hidden-content-secondary" ).toggle();
    $(this).toggleClass( "open" );
    return false;
  });
  $( ".close-this" ).click(function() {
    $(this).parent().parent().toggle();
    $(this).parent().parent().parent().find( ".closed" ).toggleClass( "open" );
    $(this).parent().parent().parent().find( ".closed-secondary" ).toggleClass( "open" );
    return false;
  });

 // $( ".open-all" ).click(function() {
 //   $( ".hidden-content").toggle();
 //   $( ".hidden-content-secondary").toggle();
 //   $( ".open-all" ).toggle();
 //   $( ".close-all" ).toggle();
 //   return false;
 // });
 // $( ".close-all" ).click(function() {
 //   $( ".hidden-content").toggle();
 //   $( ".hidden-content-secondary").toggle();
 //   $( ".open-all" ).toggle();
 //   $( ".close-all" ).toggle();
 //   return false;
 // });
});
