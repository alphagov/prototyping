$(function() {

	// Radio button label styles		
	var $radios = $('.emphasised input');
  $radios.filter(':checked').parent().addClass('checked');
	$radios.change(function() {
   		$radios.parent().removeClass('checked');
   		$radios.filter(':checked').parent().addClass('checked');
	});

  // ACCORDION FORM

  // Initialise: open first part
  $(".accordion-form .section:first").addClass('current');

  // Move to next part
  $(".next-part").click(function() {
      $(this).closest(".section").removeClass('current').addClass('complete')
      .next(".section").addClass('current');

    });

});