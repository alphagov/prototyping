// Scripts for behaviour specific to use on mobile (non-desktop) devices

$(function () {
  var GOVUK = GOVUK || {};

  var guideTabs = function () {
      this.$navbar = $('div.article-container aside nav.page-navigation');
      this.$navlist = this.$navbar.find('ol');
      this.$showAllLink = $('<a href="#" class="show-all-parts">Show all parts of this guide</a>');
      this.$pageHeader = $('.multi-page article header h1 span');

      this.init();
  };

  guideTabs.prototype = {
    init : function () {
      // if the guideTabs are floated, quit (isn't small-screen)
      if (this.$navbar.closest('aside').css('float') !== 'none') {
        return;
      }

      this.setup();
    },
    control : function (e) {
      var $this = $(e.target),
          instance = this;

      if(!$this.hasClass('show-all-parts-open')) {
        $this.addClass('show-all-parts-open');
        $this.text($this.text().replace(/Show/, 'Hide'));
        instance.$navbar.removeClass('page-navigation-closed');
        instance.$navbar.addClass('page-navigation-open');
      } else {
        $this.removeClass('show-all-parts-open');
        $this.text($this.text().replace(/Hide/, 'Show'));
        instance.$navbar.removeClass('page-navigation-open');
        instance.$navbar.addClass('page-navigation-closed');
      }

      return false;
    },
    setup : function () {
      var instance = this,
          parts = this.$navlist.find('li').length,
          part = this.$navlist.find('li.active').index() + 1;

      this.$showAllLink.insertBefore(this.$navbar);
      this.$navbar.prepend(this.$navbar.find('ol').remove());
      if (this.$pageHeader.length) {
        this.$pageHeader.html(this.$pageHeader.html().replace(/Part\s(\d+)/, 'Part $1 of ' + this.$navlist.find('li').length));
      }
      this.$showAllLink.on('click', function (e) {
        instance.control(e); 
        return false;
      });

      this.$navbar.addClass('page-navigation-closed');
    }
  };

  GOVUK.guideTabs = new guideTabs();
});
