(function () {
  var $navbar = $('div.article-container aside nav.page-navigation'),
      $navItems = $navbar.find('ol li')
      $showAllLink = $('<a href="#" class="show-all-parts">Show all parts</a>'),
      activeTab = $navItems.index('.active');

  var $nonActiveTabs = $navItems.not('.active');

  $showAllLink.insertBefore($navbar);
  $showAllLink.on('click', function (e) {
    var $this = $(this);

    if(!$this.hasClass('show-all-parts-open')) {
      $(this).addClass('show-all-parts-open');
      $nonActiveTabs.show();
    } else {
      $(this).removeClass('show-all-parts-open');
      $nonActiveTabs.hide();
    }

    return false;
  });

  var spanTxt = $navItems.eq(activeTab).find('span.part-label').text();
  $navItems.eq(activeTab)
    .find('span.part-label')
    .html(spanTxt.replace(/\:/,' of ' + $navItems.length + '<span class="visuallyhidden">:</span>'));

    $nonActiveTabs.hide();
}(jQuery));
