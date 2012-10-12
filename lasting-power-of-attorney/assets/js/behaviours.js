$(function() {

	// Emphasised checkbox and radio button label styles		
	var $emphasised = $('.emphasised input');
  $emphasised.filter(':checked').parent().addClass('checked');
	$emphasised.change(function() {
   		$emphasised.parent().removeClass('checked');
   		$emphasised.filter(':checked').parent().addClass('checked');
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