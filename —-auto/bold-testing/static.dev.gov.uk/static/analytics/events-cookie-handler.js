var GOVUK = GOVUK || {};
GOVUK.Analytics = GOVUK.Analytics || {};

GOVUK.Analytics.internalSiteEvents = function () {

    var COOKIE_NAME = "GDS_successEvents";
    var eventQueue = [];

    var loadCookie = function () {
        var value = Alphagov.read_cookie(COOKIE_NAME);
        if (value) {
            value = jQuery.parseJSON(jQuery.base64Decode(value));
        } else {
            value = [];
        }
        eventQueue = value;
    };

    var sendCookieEvents = function () {
        loadCookie();
        $(eventQueue).each(function () {
            GOVUK.sendToAnalytics(this);
        });
        eventQueue = [];
        Alphagov.delete_cookie(COOKIE_NAME);
    };

    var pushCookieEvent = function (event) {
        eventQueue.push(event);
        Alphagov.write_cookie(COOKIE_NAME, jQuery.base64Encode(JSON.stringify(eventQueue)));
    };

    return {
        push:pushCookieEvent,
        sendAll:sendCookieEvents
    };
}();

GOVUK.Analytics.entryTokens = function () {

    var COOKIE_NAME = "GDS_analyticsTokens";

    var valueIsInArray = function (value, arr) {
        return $.inArray(value, arr) !== -1;
    };

    var uniqueIdentifierOfArtifact = function () {
        return GOVUK.Analytics.getSlug(document.URL, GOVUK.Analytics.Trackers[GOVUK.Analytics.Format].slugLocation);
    };

    var assignToken = function () {
        var tokens = JSON.parse(Alphagov.read_cookie(COOKIE_NAME));
        if (!tokens) tokens = [];
        if (!valueIsInArray(uniqueIdentifierOfArtifact(), tokens))
        {
            tokens.push(uniqueIdentifierOfArtifact());
            Alphagov.write_cookie(COOKIE_NAME, JSON.stringify(tokens));
        }
    };

    var revokeToken = function () {
        var tokens = JSON.parse(Alphagov.read_cookie(COOKIE_NAME));
        var positionOfToken = $.inArray(uniqueIdentifierOfArtifact(),tokens);
        if (positionOfToken !== -1) {
            tokens.splice(positionOfToken,1);
            Alphagov.write_cookie(COOKIE_NAME, JSON.stringify(tokens));
        }
    };

    var tokenExists = function () {
        var tokens = JSON.parse(Alphagov.read_cookie(COOKIE_NAME));
        return valueIsInArray(uniqueIdentifierOfArtifact(), tokens);
    };

    return {
        assignToken:assignToken,
        revokeToken:revokeToken,
        tokenExists:tokenExists
    };
}();
