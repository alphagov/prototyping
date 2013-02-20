var Devolution = {
	initDevolutionSetup: function(AlphaGeo) {
    if (!AlphaGeo.full_location) {
      AlphaGeo.lookup_full_location(function() { Devolution.openAndCloseSectionsByLocation(AlphaGeo.full_location.current_location) })
    } else {
      Devolution.openAndCloseSectionsByLocation(AlphaGeo.full_location.current_location)
    }
  },
  addHideThisLinks: function(){
    $('.devolved-content .devolved-header').each(function() {
      if ( $(this).find('a').length === 0 ){
        var expand_link = $('<a/>');
        expand_link.attr('href', '#');
        expand_link.text('Hide this');
        expand_link.click(
          function(){
            Devolution.toggle_section($(this).parent().parent());
            return false;
          }
        );
        $(this).append(expand_link);
      }
    });
  },
  openAndCloseSectionsByLocation: function(geo_data) {
  	var nation_name = geo_data.nation.toLowerCase(),
  		isLondon = geo_data.council.length >=1 && geo_data.council[0].type ==='LBO',
      class_pattern = new RegExp("(^|\\s|-)" + nation_name.replace(" ", "-") + "(\\s|-|$)");
  
	  
    $('.devolved-content').each(function(i, section) {
      var $section = $(section);
      if ($section.attr("class").match(class_pattern)) {
        Devolution.show_section($section);
      } else if (isLondon && $section.hasClass('london')) {
        Devolution.show_section($section);
      } else {
        Devolution.hide_section($section);
      }
    })

	},
  toggle_section: function(section){
    if(section.find('.devolved-body').is(':visible')){
      Devolution.hide_section(section);
    }else{
      Devolution.show_section(section);
    }
  },
  show_section: function(section){
    section.find('.devolved-body').show();
    section.find('.devolved-header a').text('Hide this');
  },
  hide_section: function(section){
    section.find('.devolved-body').hide();
    section.find('.devolved-header a').text('Show this');
  }  

};

$(document).ready(function() {
  $(AlphaGeo).bind('location-completed', function(e, location) {
    try {
      Devolution.initDevolutionSetup(AlphaGeo);
    } catch (e) {
      return;
    }  
  });
  Devolution.addHideThisLinks();  
});
