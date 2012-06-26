$(function() {

// =======================================================================
// Simple inline expand
// =======================================================================

// Toggle the hidden content when the user clicks on the visible trigger
//$("details > summary").not($("details details summary")).click(function() {
$("details > summary").click(function() {
  //$(this).siblings().slideToggle(60);
  $(this).parents().toggleClass("open");
});

});