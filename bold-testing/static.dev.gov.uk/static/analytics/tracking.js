var GOVUK = GOVUK || {};
GOVUK.Analytics = GOVUK.Analytics || {};
var _gaq = _gaq || [];

GOVUK.sendToAnalytics = function (analyticsData) {
    _gaq.push(analyticsData);
};

GOVUK.Analytics.isTheSameArtefact = function(currentUrl, previousUrl, slugLocation) {
    var rootOfArtefact = function(url) {
        return url.split("/").slice(0, 4 + slugLocation).join("/");
    };

    var currentSlug = rootOfArtefact(currentUrl).replace(/#.*$/, '');
    var previousSlug = rootOfArtefact(previousUrl).replace(/#.*$/, '');
    return currentSlug === previousSlug;
};

GOVUK.Analytics.getSlug = function(url, slugLocation) {
    return url.split('/')[3 + slugLocation].split("#")[0].split("?")[0];
};

GOVUK.Analytics.isRootOfArtefact = function(url, slugLocation) {
    return url.replace(/\/$/, "").split("/").slice(3 + slugLocation).length === 1;
};

GOVUK.Analytics.isLinkToFragmentInCurrentDocument = function(anchorElement) {
    var linksToCurrentDocument = anchorElement.href.split("#")[0] === document.URL.split("#")[0];
    var hasFragment = anchorElement.hash !== "";
    return linksToCurrentDocument && hasFragment;
}

GOVUK.Analytics.startAnalytics = function () {
    var ENTER_KEYCODE = 13;
    var success = false;
    var prefix = 'none';
    var format = GOVUK.Analytics.Format,
        trackingStrategy = GOVUK.Analytics.Trackers[format];

    /**
     * Decide whether we should track an event based on a condition function.
     * If the condition function isn't defined then the default condition is used.
     *
     * @param condition, an optional function that returns a boolean
     * @return bool
     */
    var shouldTrackEvent = function(condition, defaultValue) {
        if (typeof condition === "function") {
            return condition();
        } else {
            return defaultValue;
        }
    };

    var createEvent = function(type, isNonInteraction) {
        var slug = GOVUK.Analytics.getSlug(document.URL, trackingStrategy.slugLocation);
        return ['_trackEvent', prefix + GOVUK.Analytics.Format, slug, type, 0, isNonInteraction];
    };

    var handleExternalLink = function() {
        if (success) return;
        success = true;
        var slug = encodeURIComponent(GOVUK.Analytics.getSlug(document.URL, trackingStrategy.slugLocation)),
            exitLink = '/exit?slug=' + slug + '&format=' + GOVUK.Analytics.Format;

        $(this).prop('href', exitLink);
    };

    var handleInternalLink = function () {
        if (success) return;
        success = true;
        var event = createEvent("Success", false);
        if (GOVUK.Analytics.isLinkToFragmentInCurrentDocument(this)) {
            GOVUK.sendToAnalytics(event);
        } else {
            GOVUK.Analytics.internalSiteEvents.push(event);
        }
    };

    var trackLinks = function(selection, trackExternal) {
        // TODO: refactor this to use jQuery("#content").on("click", "a", fireFunction)
        selection.each(function () {
            var linkToTrack = $(this),
                trackingFunction;

            if (this.hostname === window.location.hostname) {
                trackingFunction = handleInternalLink;
            } else if (trackExternal) {
                trackingFunction = handleExternalLink;
            }
            if (trackingFunction) {
                linkToTrack.click(trackingFunction);
                linkToTrack.keydown(function(e) {
                    if (e.which === ENTER_KEYCODE) {
                        trackingFunction.call(this, e);
                    }
                });
            }
        });
    };

    var trackingApi = {
        trackSuccessFunc: function(isNonInteraction) {
            if (isNonInteraction === undefined) {
                isNonInteraction = false;
            }
            return function() {
                trackingApi.trackSuccess(isNonInteraction);
            };
        },
        trackSuccess: function (isNonInteraction) {
            if (isNonInteraction === undefined) {
                isNonInteraction = false;
            }
            if (success) return;
            success = true;
            GOVUK.sendToAnalytics(createEvent("Success", isNonInteraction));
        },
        trackInternalLinks: function(selection) {
            trackLinks(selection, false);
        },
        trackLinks:function (selection) {
            trackLinks(selection, true);
        },
        trackTimeBasedSuccess:function (time) {
            setTimeout(trackingApi.trackSuccessFunc(true), time);
        }
    };

    if (GOVUK.Analytics.Trackers[format] !== undefined) prefix = GOVUK.Analytics.Trackers[format].prefix;
    if (typeof trackingStrategy === "function") {
      var isTheSameArtefact = GOVUK.Analytics.isTheSameArtefact(document.URL, document.referrer, trackingStrategy.slugLocation);
      if (shouldTrackEvent(trackingStrategy.shouldTrackEntry, !isTheSameArtefact)) {
          GOVUK.sendToAnalytics(createEvent("Entry", true));
          GOVUK.Analytics.entryTokens.assignToken();
      }
      if (shouldTrackEvent(trackingStrategy.shouldTrackSuccess, !isTheSameArtefact)) {
          trackingStrategy(trackingApi);
          GOVUK.Analytics.entryTokens.revokeToken();
      }
    }

    GOVUK.Analytics.internalSiteEvents.sendAll();

    return trackingApi;
};

$(GOVUK.Analytics.startAnalytics);
