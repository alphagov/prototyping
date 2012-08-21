(function () {
  alert('Js is working');
  var $navbar = $('div.article-container aside nav.page-navigation'),
      $navItems = $navbar.find('ol li')
      $showAllLink = $('<a href="#" class="show-all-parts">Show all parts of this guide</a>'),
      labelHTML = {
        open : ['Part ', '<span class="visuallyhidden">:</span>'],
        close : ['Part ', ' of ' + $navItems.length]
      },
      $activeTab = $navItems.filter('.active'),
      activeIdx = $navItems.index($activeTab),
      $nonActiveTabs = $navItems.not('.active'),
      spanTxt = $navItems.eq(activeIdx).find('span.part-label').text(),
      spanHTML = $navItems.eq(activeIdx).find('span.part-label').html(),
      alterSpan = function ($link, action) {
        var $span = $link.find('span.part-label');
          
        $span.html(labelHTML[action][0] + (activeIdx + 1) + labelHTML[action][1]);
      };

  // if the navbar is floated to the left of content, this is not needed
  if ($navbar.closest('aside').css('float') === 'left') { return; }

  $showAllLink.insertBefore($navbar);
  $showAllLink.on('click', function (e) {
    var $this = $(this);

    if(!$this.hasClass('show-all-parts-open')) {
      $this.addClass('show-all-parts-open');
      alterSpan($activeTab.find('a'), 'open');
      $nonActiveTabs.show();
      $navbar.addClass('page-navigation-open');
    } else {
      $this.removeClass('show-all-parts-open');
      alterSpan($activeTab.find('a'), 'close');
      $nonActiveTabs.hide();
      $navbar.removeClass('page-navigation-open');
    }

    return false;
  });

  alterSpan($activeTab.find('a'), 'close');
  $nonActiveTabs.hide();
}(jQuery));
