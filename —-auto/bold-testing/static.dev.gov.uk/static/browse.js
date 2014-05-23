var GOVUK = window.GOVUK || {};

GOVUK.browse = {
  selectSubsection : function (e) {
    var $this = $(this);
    
    if ($this.parents('ul.subsections').length < 1) {
      e.preventDefault();
      window.location.href = '#/';
      slug = 'popular';
      $('.subsections')
        .find('.active')
        .removeClass('active');
    } else {
      var $section = $(this).parent(),
          slug = $section
                  .data('filter')
                  .match(/section-([\w-]+)/)
                  .pop();

      $section
        .addClass('active')
        .siblings()
        .removeClass('active');
    }

    $('#' + slug)
      .removeClass('hidden')
      .siblings()
      .not('.summary')
      .addClass('hidden');
  },
  init : function () {
    var hash = window.location.hash,
        instObj = this;

    // Browse sections click actions
    if ($('.section-page').length > 0) {
      $('.filters')
        .find('li.open')
        .on('click', 'a', function (e) {
          instObj.selectSubsection.call(this, e); 
        });  
    }

    if (hash !== '' && hash !== '#/') {
      // on page load parse hash
      hash = hash.substring(2);

      $('.subsections li').filter(function() {
        return $(this).data('filter') == 'section-' + hash;
      })
        .find('a')
        .click();
    }

    // add sub-section titles to each related content block
    $('#popular').prepend('<h2>Most popular</h2>');
    
    $('.filters')
      .find('ul:eq(0) li ul li')
      .each(function (idx) {
        var section = $(this).find('a').text(),
            slug = $(this) 
              .data('filter')
              .match(/section-([\w-]+)/)
              .pop();

        $('#' + slug).prepend('<h2>' + section+ '</h2>');
      });
  }
};

$(document).ready(function() {
  GOVUK.browse.init();
});
