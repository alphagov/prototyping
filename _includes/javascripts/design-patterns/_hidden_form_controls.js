    $(".hidden-controls input[type='radio']").change(function(e){
      var isChecked = $(this).closest(".hidden-controls").find('summary input').attr("checked");
      if(!isChecked){
        $(this).closest(".hidden-controls").find('details').removeAttr('open');
      }
    });