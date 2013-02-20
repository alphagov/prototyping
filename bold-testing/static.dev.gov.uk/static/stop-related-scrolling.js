$(function(){
  function checkOverflow(){
    var $related = $(".related-positioning");
    if($related.length !== 0 && $related.css('position') == 'fixed') {
      var viewPort = $(window).height();
      var relatedBox = $(".related").height();
      var boxOffset = $related.position().top;
      if(relatedBox > (viewPort - boxOffset)){
        $related.css("position", "absolute");
        return true;
      } else {
        $related.css("position", "fixed");
        return false;
      }
    }

    return false;
  }

  if(!checkOverflow()){
    window.GOVUK.stopScrollingAtFooter.addEl($('.related-positioning'), $('#related').height());
  }
});
