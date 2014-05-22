function setCookie(name, value, days){
  var cookieString = name + "=" + value + "; path=/";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    cookieString = cookieString + "; expires=" + date.toGMTString();
  }
  if (document.location.protocol == 'https:'){
    cookieString = cookieString + "; Secure";
  }
  document.cookie = cookieString;
}

function getCookie(name){
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i = 0, len = ca.length; i < len; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1, c.length);
    }
    if (c.indexOf(nameEQ) === 0) {
      return c.substring(nameEQ.length, c.length);
    }
  }
  return null;
}

$(function() {
  var addStyle,
      $message = $('#global-cookie-message'),
      $relatedColumn = $('#wrapper .related-positioning');

  if ($message.length && getCookie('seen_cookie_message') === null) {
    if ($relatedColumn.length) {
      // correct the related module top position to consider the cookie bar
      $relatedColumn.addClass('related-with-cookie');
      // related content box needs to know the top position of the footer
      // this changes when content is split into tabs
      if (typeof GOVUK.stopScrollingAtFooter !== 'undefined') {
        GOVUK.stopScrollingAtFooter.updateFooterTop();
      }
    }
    $message.show();
    setCookie('seen_cookie_message', 'yes', 28);
  }
});
