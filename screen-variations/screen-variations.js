(function () {
  var $navbar = $('div.article-container aside nav.page-navigation'),
      $navItems = $navbar.find('ol li')
      $showAllLink = $('<a href="#" class="show-all-parts">Show all parts</a>'),
      labelHTML = {
        open : ['Page ', '<span class="visuallyhidden">:</span>'],
        close : ['Page ', ' of ' + $navItems.length]
      },
      activeTab = $navItems.index('.active'),
      $nonActiveTabs = $navItems.not('.active'),
      spanTxt = $navItems.eq(activeTab).find('span.part-label').text(),
      spanHTML = $navItems.eq(activeTab).find('span.part-label').html(),
      alterSpan = function ($link, action) {
        var $span = $link.find('span.part-label');
          
        $span.html(labelHTML[action][0] + (activeTab + 1) + labelHTML[action][1]);
      };

  $showAllLink.insertBefore($navbar);
  $showAllLink.on('click', function (e) {
    var $this = $(this);

    if(!$this.hasClass('show-all-parts-open')) {
      $this.addClass('show-all-parts-open');
      alterSpan($navItems.eq(activeTab), 'open');
      $nonActiveTabs.show();
      $navbar.addClass('page-navigation-open');
    } else {
      $this.removeClass('show-all-parts-open');
      alterSpan($navItems.eq(activeTab), 'close');
      $nonActiveTabs.hide();
      $navbar.removeClass('page-navigation-open');
    }

    return false;
  });

  $navItems.eq(activeTab)
    .find('span.part-label')
    .html(spanTxt.replace(/\:/,' of ' + $navItems.length));

    $nonActiveTabs.hide();
}(jQuery));
