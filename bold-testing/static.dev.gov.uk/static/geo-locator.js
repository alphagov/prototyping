/**
  @name Alphageo V2
  @description Methods to handle geolocation across gov.uk
  @requires core.js
*/

var AlphaGeo = {

  location: false,
  full_location: false,

  initialize: function() {
    // look for cookie
    var cookie = AlphaGeo.read_and_parse_json_cookie('govukgeo');
    if (cookie.current_location) {
      AlphaGeo.location = { lat: cookie.current_location.lat, lon: cookie.current_location.lon };
      AlphaGeo.full_location = cookie;
    }

    if (AlphaGeo.location) {
      // get full location
      if (AlphaGeo.full_location) {
        $(AlphaGeo).trigger('location-completed', AlphaGeo.full_location);
      } else {
        AlphaGeo.lookup_full_location( function() {
          $(AlphaGeo).trigger('location-completed', AlphaGeo.full_location);
        });
      }
    }

    $(AlphaGeo).bind('location-completed', function(e, location){
      AlphaGeo.save_location_to_cookie(location);
    });
  },

  read_and_parse_json_cookie: function(name) {
    var cookie = Alphagov.read_cookie(name);
    if (cookie) {
      var json_cookie = $.base64Decode(cookie);
      var geo_json = jQuery.parseJSON(json_cookie);
          return geo_json;
      }
      return false;
  },

  lookup_full_location: function(callback) {
    $.ajax({
      url: '/locator.json',
      dataType: 'json',
      data: AlphaGeo.location,
      type: 'POST',
      success: function(data){
        if (data.location_error || data.current_location.locality === false) {
          $(AlphaGeo).trigger('location-failed');
          return false;
        } else {
          AlphaGeo.full_location = data;
          callback();
        }
      }
    });
  },

  locate: function(postcode) {
    AlphaGeo.location = { 'postcode': postcode };
    AlphaGeo.lookup_full_location( function() {
      $(AlphaGeo).trigger('location-completed', AlphaGeo.full_location);
    });
  },

  notify: function() {
    if (AlphaGeo.full_location) {
      $(AlphaGeo).trigger('location-completed', AlphaGeo.full_location);
    }
  },

  geolocate: function() {
    if (navigator.geolocation) {
      $(AlphaGeo).trigger('geolocation-started');
      AlphaGeo.browser_geolocate();
      $(AlphaGeo).bind('geolocation-completed', function(e, position) {
        AlphaGeo.location = position;
        AlphaGeo.lookup_full_location( function() {
          $(AlphaGeo).trigger('location-completed', AlphaGeo.full_location);
        });
      });
    } else {
      $(AlphaGeo).trigger('geolocation-failed');
    }
  },

  browser_geolocate: function() {
    navigator.geolocation.getCurrentPosition(
      function(position) {
        coordinates = {lat: position.coords.latitude, lon: position.coords.longitude};
        $(AlphaGeo).trigger('geolocation-completed', coordinates);
      },
      function() {
        $(AlphaGeo).trigger('geolocation-failed');
      }
    );
  },

  save_location_to_cookie: function() {
    var cookie = $.base64Encode(JSON.stringify(AlphaGeo.full_location));
    Alphagov.write_cookie('govukgeo', cookie);
  },

  remove: function() {
    Alphagov.delete_cookie('govukgeo');
    AlphaGeo.location = false;
    AlphaGeo.full_location = false;

    $(AlphaGeo).trigger('location-removed');
  }

};

var AlphaGeoForm = function(selector) {

  var form         = $(selector);
  var ask_ui       = form.find('.ask_location');
  var finding_ui   = form.find('.finding_location');
  var found_ui     = form.find('.found_location');
  var all_ui      = [ask_ui, finding_ui, found_ui];

  form.find('.location_error').addClass('hidden').text('');
  if (AlphaGeo.full_location) {
    found_ui.find('strong, a span.friendly-name').text(AlphaGeo.full_location.current_location.locality);
    show_ui(found_ui);
  } else {
    show_ui(ask_ui);
  }

  // Safari >5.0's Geolocation implementation is broken on windows 
  // see http://www.quirksmode.org/webkit.html
  function geoImplementationWorks() {
    var agentString = navigator.userAgent,
        isWindows = (agentString.match(/Windows/) !== null),
        isSafari = agentString.match(/Safari/),
        safariVersion;

    if (!isWindows || !isSafari) {
      return true;
    } else {
      // Some versions of webkit (such as Chrome) still report as Safari so check version as well
      safariVersion = agentString.match(/Version\/([\d\.]+)/)
      if (safariVersion === null) {
        return true;
      } else {
        safariVersion = parseFloat(safariVersion[1]);
      }
    }

    // assume next update will fix this
    if (safariVersion >= 5 && safariVersion <= 5.1) {
      return false;
    }

    return true;
  }

  function show_ui(selector) {
    $(all_ui).each(function(k, item){
      item.hide().css('visibility','hidden');
    });
    selector.show().css('visibility','visible');
  }

  function append_cookie_notice() {
    $('<p class="cookie-container"><span class="sets-cookie"><a href="/help/cookies/#locationcookies" title="This form sets a location cookie">Sets a cookie</a></span></p>').appendTo(ask_ui);
  }

  if (navigator.geolocation && geoImplementationWorks()) {
    $('<p class="geolocate-me">or <a href="#">locate me automatically</a></p>').appendTo(ask_ui);
    append_cookie_notice();

    $(".geolocate-me a").live('click', function(e){
      e.preventDefault();
      AlphaGeo.geolocate();
    });

    $(AlphaGeo).bind("geolocation-started", function() {
      form.find('.location_error').addClass('hidden').text('');
      show_ui(finding_ui);
    });

    $(AlphaGeo).bind("geolocation-failed", function() {
      show_ui(ask_ui);
    });
  } else {
    append_cookie_notice();
  }

  $('a.change-location').live('click', function(e){
    e.preventDefault();
    AlphaGeo.remove();
  });

  $(AlphaGeo).bind("location-completed", function(e, location) {
    form.find('.location_error').addClass('hidden').text('');
    found_ui.find('strong, a span.friendly-name').text(location.current_location.locality);
    ask_ui.find('input[type=submit]').removeAttr('disabled');
    show_ui(found_ui);
  });

  $(AlphaGeo).bind("location-failed", function(e, location) {
    form.find('.location_error').text('Please enter a valid postcode.').removeClass('hidden');
    ask_ui.find('input[type=submit]').removeAttr('disabled');
    show_ui(ask_ui);
  });

  $(AlphaGeo).bind("location-removed", function(e, location) {
    found_ui.find('strong, a span.friendly-name').text('');
    ask_ui.find('input.postcode').val('');
    show_ui(ask_ui);
  });

  form.live('submit', function(e) {
    e.preventDefault();
    form.find('input[type=submit]').attr('disabled','disabled');
    AlphaGeo.locate( form.find('input.postcode').val() );
  });

};

$(document).ready( function() {
  AlphaGeo.initialize();
});
