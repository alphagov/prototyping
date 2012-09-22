$(function() {

	// Radio button label styles		
	var $radios = $('.emphasised input');
  $radios.filter(':checked').parent().addClass('checked');
	$radios.change(function() {
   		$radios.parent().removeClass('checked');
   		$radios.filter(':checked').parent().addClass('checked');
	});

// ACCORDION

	// Initialise: open first part
	$(".accordion .accordion-item:first").addClass('current');


	// Move to next part
	$(".next-part").click(function() {
      $(this).closest(".accordion-item").removeClass('current').addClass('complete')
      .next(".accordion-item").slideDown().addClass('current');
      return false;
    });



});