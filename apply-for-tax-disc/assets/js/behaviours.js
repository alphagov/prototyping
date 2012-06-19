$(function() {

// =======================================================================
// Simple inline expand
// =======================================================================

// Toggle the hidden content when the user clicks on the visible trigger
$("details summary").click(function() {
  //$(this).siblings().slideToggle(60);
  $(this).parents().toggleClass("open");
});

});