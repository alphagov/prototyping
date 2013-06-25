/**
  @name BetaPopup
  @namespace
  @description A set of methods for generating popups and related odds and ends
  @requires jquery 1.6.2
*/

var NewPopup = {
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

  popup: function (html, ident, source, placement) {

    // Defaults
    var source = source || '#header-global h1 a',
        placement = placement || 'body';

    // Create the HTML templates
    var $mask = $('#mask'), $popup, $close;
    // Re-use if already open
    if ($mask.length) {
      $popup = $('#popup', $mask);
      $close = $('.close', $mask);
    } else {
      $mask = $('<div id="mask" class="popover-mask" />');
      $popup = $('<div id="popup" class="' + ident + '" />');
      $close = $('<p class="close"><a id="lightboxclose" href="#" title="Click or press escape to close this window">Close</a></p>');
    }

    // Get the window height and width
    var $win = $(window),
        winH = $win.height(),
        winW = $win.width();

    // Clear-up method
    var closePopup = function () {

      // Re-enable scrolling of rest of page
      var scrollTop = parseInt($('html').css('top'));
      $('html').removeClass('noscroll');
      $('html,body').scrollTop(-scrollTop);

      $popup.fadeOut(400, function () {
        $mask.fadeOut(200, function () {

          // Put popup contents back where you found it
          $(html).appendTo('#content').hide();

          // Remove the popup from the DOM
          $(this).remove();
        });
      });

      $(source).focus();
    };

    // Loop tab key
    var loopTabKeys = function (wrap) {
      var tabbable = 'a, area, button, input, object, select, textarea, [tabindex]',
          first = wrap.find(tabbable).filter(':first'),
          last = wrap.find(tabbable).filter(':last');

      first.add(last).keydown(function (e) {

        var code = (e.keyCode ? e.keyCode : e.which),
            shift = e.shiftKey,
            self = $(this)[0],
            down = (self == last[0] && !shift),
            up = (self == first[0] && shift),
            focusOn = down ? first : (up ? last : null);

        if (code === 9 && (down || up)) {
          e.preventDefault();
          focusOn.focus();
        }
      });
    };

    // Stop rest of page from scrolling when scrolling the popup
    if ($(document).height() > $(window).height()) {
      var scrollTop = ($('html').scrollTop()) ? $('html').scrollTop() : $('body').scrollTop(); // Works for Chrome, Firefox, IE...
      $('html').addClass('noscroll').css('top', -scrollTop);
    }

    // Apply close functions
    $popup
      .on('keydown', function (e) {
        if (e.which == 27) {
          closePopup();
        }
      })
      .on('click', '.close, .close-help', function (e) {
        e.preventDefault();
        closePopup();
      });

    // Join it all together
    $popup.prepend($close).append(html).appendTo($mask);

    // Place the mask in the DOM
    // If a placement has been provided, the popup is appended to that element,
    // otherwise the popup is appended to the body element.
    $(placement)[placement === 'body' ? 'append' : 'after']($mask);

    // Fade in the mask
    $mask.fadeTo(200, 1);

    // Center and fase in the popup
    $popup.delay(100).fadeIn(200, function () {
      $popup.find('h2').attr('tabindex', -1);
      $popup.find('#lightboxclose').focus(); // for accessibility

      loopTabKeys($popup);
    });

    return $popup;
  }
};