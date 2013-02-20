/**
  @name BetaPopup
  @namespace
  @description A set of methods for generating popups and related odds and ends
  @requires jquery 1.6.2
*/


var BetaPopup = {
  maskOpacity : 0.6,

  /**
    @name BetaPopup.popup
    @function
    @description Shows a feedback popup
    @param html A snippet of HTML to put into the popup.
    @param ident A class name to apply to the popup, so it can be uniquely styled.
    @param source A focal point to return to on close, usually the originating anchor
    
    @example
      BetaPopup.popup($("#myContent").html(), "myContentClass");
  */

  popup: function(html, ident, source){
    $("body").append("<div id='mask' class='popover-mask'></div>").append("<div id='popup' class="+ident+"></div>");

    var source = source || "#header-global h1 a",
    $popup = $('#popup'), $win = $(window), $mask = $('#mask');

    //Get the window height and width
    var winH = $win.height(), winW = $win.width();

    $popup.append(html);
    $mask.fadeTo("fast", this.maskOpacity).height(winH).width(winW);

    //Set the popup window to center
    $popup
      .delay(100).fadeIn('fast', function(){
        $popup.find("h2").attr("tabindex",-1).focus();
      })
      .on('keydown', function (e) {
         if ( e.which == 27 ){
             closePopup();
          }
      }).on("click", ".close", function(){
        closePopup()
        return false;
      });
    
    closePopup = function(){
      $popup.fadeOut(400, function(){
        $mask.slideUp('fast', function() { $(this).remove(); $popup.remove(); });
      });

      $(source).focus();
    }
  }
};
