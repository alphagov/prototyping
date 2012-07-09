$(function() {

	// Radio button label styles		
	var $radios = jQuery('.touchy input[type=radio]');
   	$radios.filter(':checked').parent().addClass('checked');
	$radios.change(function() {
   		$radios.parent().removeClass('checked');
   		$radios.filter(':checked').parent().addClass('checked');
	});

// ACCORDION

	// Initialise: open first part
	$(".accordion .accordion-item:first").addClass('current');


	// Move to next part
	$(".continue-button .button").click(function() {
      $(this).closest(".accordion-item").removeClass('current').addClass('complete')
      .next(".accordion-item").slideDown().addClass('current');
      return false;
    });



});