$(function() {

  $(".theme").addClass("theme-hidden");
  $(".theme-head").on("click", function() {
    $(this).toggleClass("active-theme").next(".theme").slideToggle(function() {
      $(this).toggleClass("theme-hidden");
      $(this).css("display", "");
    });
  });

  $(window).on("scroll", function() {
    // var current_header = $("h2:in-viewport, h3:in-viewport, h4:in-viewport").first();
    // alert(current_header[0].id)
    });
  
  // Set heights of rows in a breakdown table based on their percentage share
  $('.breakdown-table tbody tr td:first-child').css('height', function(index) {
    var height = +($(this).text().replace('%', '')) * 4;
    return height;
  });

  // Duplicate section titles under section index
  $('.section-title .title-text').each(function(index) {
    var sectionIndex = $(this).parent().children('.title-index');
    $(this).clone().appendTo(sectionIndex);
  });

  // Make section indexes sticky
  $("#contents").sticky();
  $(".section-title .title-index").sticky();

  // Scroll back up to contents page
  $("#contents").click(function() {
    scrollToAnchor('#markdown-toc');
  });

  // Visibly scroll to an anchor tag
  function scrollToAnchor(aid){
   var aTag = $(aid);
   $('html,body').animate({scrollTop: aTag.offset().top},50);
  }
  $("#markdown-toc a").click(function() {
    var anchor= $(this).attr('href');
    scrollToAnchor(anchor);
  });

});

// Sticky Plugin
// =============
// Author: Anthony Garand
// Improvements by German M. Bravo (Kronuz) and Ruud Kamphuis (ruudk)
// Improvements by Leonardo C. Daronco (daronco)
// Created: 2/14/2011
// Date: 2/12/2012
// Website: http://labs.anthonygarand.com/sticky
// Description: Makes an element on the page stick on the screen as you scroll
//              It will only set the 'top' and 'position' of your element, you
//              might need to adjust the width in some cases.

(function($) {
    var defaults = {
            topSpacing: 0,
            bottomSpacing: 0,
            className: 'is-sticky',
            wrapperClassName: 'sticky-wrapper'
        },
        $window = $(window),
        $document = $(document),
        sticked = [],
        windowHeight = $window.height(),
        scroller = function() {
            var scrollTop = $window.scrollTop(),
                documentHeight = $document.height(),
                dwh = documentHeight - windowHeight,
                extra = (scrollTop > dwh) ? dwh - scrollTop : 0;
            for (var i = 0; i < sticked.length; i++) {
                var s = sticked[i],
                    elementTop = s.stickyWrapper.offset().top,
                    etse = elementTop - s.topSpacing - extra;
                if (scrollTop <= etse) {
                    if (s.currentTop !== null) {
                        s.stickyElement
                            .css('position', '')
                            .css('top', '')
                            .removeClass(s.className);
                        s.stickyElement.parent().removeClass(s.className);
                        s.currentTop = null;
                    }
                }
                else {
                    var newTop = documentHeight - s.stickyElement.outerHeight()
                        - s.topSpacing - s.bottomSpacing - scrollTop - extra;
                    if (newTop < 0) {
                        newTop = newTop + s.topSpacing;
                    } else {
                        newTop = s.topSpacing;
                    }
                    if (s.currentTop != newTop) {
                        s.stickyElement
                            .css('position', 'fixed')
                            .css('top', newTop)
                            .addClass(s.className);
                        s.stickyElement.parent().addClass(s.className);
                        s.currentTop = newTop;
                    }
                }
            }
        },
        resizer = function() {
            windowHeight = $window.height();
        },
        methods = {
            init: function(options) {
                var o = $.extend(defaults, options);
                return this.each(function() {
                    var stickyElement = $(this);

                    stickyId = stickyElement.attr('id');
                    wrapper = $('<div></div>')
                        .attr('id', stickyId + '-sticky-wrapper')
                        .addClass(o.wrapperClassName);
                    stickyElement.wrapAll(wrapper);
                    var stickyWrapper = stickyElement.parent();
                    stickyWrapper.css('height', stickyElement.outerHeight());
                    sticked.push({
                        topSpacing: o.topSpacing,
                        bottomSpacing: o.bottomSpacing,
                        stickyElement: stickyElement,
                        currentTop: null,
                        stickyWrapper: stickyWrapper,
                        className: o.className
                    });
                });
            },
            update: scroller
        };

    // should be more efficient than using $window.scroll(scroller) and $window.resize(resizer):
    if (window.addEventListener) {
        window.addEventListener('scroll', scroller, false);
        window.addEventListener('resize', resizer, false);
    } else if (window.attachEvent) {
        window.attachEvent('onscroll', scroller);
        window.attachEvent('onresize', resizer);
    }

    $.fn.sticky = function(method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method ) {
            return methods.init.apply( this, arguments );
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.sticky');
        }
    };
    $(function() {
        setTimeout(scroller, 0);
    });
})(jQuery);

$(document).ready(function(){

    // Copy section title under index
    $('.section-title .title-text').each(function(index) {
      var sectionIndex = $(this).parent().children('.title-index');
      $(this).clone().appendTo(sectionIndex);
    });

    $("#contents").sticky();
    // Make section indexes sticky
    $(".section-title .title-index").sticky();

});
