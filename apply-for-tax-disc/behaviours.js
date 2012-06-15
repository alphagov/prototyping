$(function() {


// Progressive disclosure

// Hide any content to be progressivly disclosed
$('.progressive_disclosure *:not(.visible)').hide();

// Toggle the hidden content when the user clicks on the visible trigger
$(".progressive_disclosure .visible").click(function() {
  $(this).siblings().slideToggle("fast");
});

});