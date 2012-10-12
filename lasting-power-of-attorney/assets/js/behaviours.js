---
---

$(function() {

  {% include javascripts/design-patterns/_emphasised_form_controls.js %}

  // ACCORDION FORM

  // Initialise: open first part
  $(".accordion-form .section:first").addClass('current');

  // Move to next part
  $(".next-part").click(function() {
    $(this).closest(".section").removeClass('current').addClass('complete')
    .next(".section").addClass('current');

  });

});