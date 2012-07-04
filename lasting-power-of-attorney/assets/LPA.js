$(function() {

	// Radio button label styles		
	var $radios = jQuery('.touchy input[type=radio]');
   	$radios.filter(':checked').parent().addClass('checked');
	$radios.change(function() {
   		$radios.parent().removeClass('checked');
   		$radios.filter(':checked').parent().addClass('checked');
	});

	// INITIALISE ACCORDION
	// Disable all but the first section
	$(".smart-form li").not(':first').addClass('disabled-state');
	// If first section has an intro state, use it
	$(".smart-form li:first").has('.intro').addClass('intro-state');


	// Move from intro state to edit state
	$("#part1-intro").click(function() {
      $(this).closest(".intro-state").removeClass('intro-state').addClass('edit-state');
      return false;
    });



});