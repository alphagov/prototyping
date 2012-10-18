    // If a hidden-control radio-button set changes...
    $(".hidden-controls input[type='radio']").change(function(e){
      // If a hidden control radio is checked...
      var isChecked = $(this).closest(".hidden-controls").find('summary input').attr("checked");
      if(!isChecked){
        // Set the details tag to 'closed'
        $(this).closest(".hidden-controls").find('details').removeAttr('open');
      }
    });

    // VERSION FOR BROWSERS THAT DON'T SUPPORT DETAILS / SUMMARY

    // If a hidden-control label is clicked
    $(".no-details .hidden-controls label").click(function(){
      // If a hidden control label is checked...
      var isChecked = $(this).children("input").attr("checked");
      if(!isChecked){
        // Set the details tag to 'open'
        $(this).closest(".hidden-controls").find('details').attr('open', 'open');
      } else {
        // Set the details tag to 'closed'
        $(this).closest(".hidden-controls").find('details').removeAttr('open');
      }
    });