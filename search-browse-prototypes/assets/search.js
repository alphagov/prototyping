  $(document).ready(function(){
    pattern = /q=([^&]*)/
     
    if (window.location.href.indexOf('q=') != -1) {
      search_term = window.location.href.match(pattern);
      $('input#search-main').val(search_term[1]);
      $('.descope a').attr("href", "http://www.gov.uk/search?q="+search_term[1]);
    }
  })
