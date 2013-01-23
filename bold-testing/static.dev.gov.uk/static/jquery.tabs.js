/**
 * --------------------------------------------------------------------
 * jQuery tabs plugin
 * Author: Scott Jehl, scott@filamentgroup.com
 * Copyright (c) 2009 Filament Group 
 * licensed under MIT (filamentgroup.com/examples/mit-license.txt)
 * --------------------------------------------------------------------
 */

/*
 * Edited to support GOV.UK markup and add acccessibility features
*/


jQuery.fn.tabs = function(settings){
	//configurable options
	var o = $.extend({
		trackState: true, //track tabs in history, url hash, back button, page load
		srcPath: 'jQuery.history.blank.html',
		autoRotate: false,
		alwaysScrollToTop: true,
		selected: null,
		wrapperTag : 'section',
		defaultTab : null
	},settings);

	var tabFormat = 'tabset',
	    checkFormat = function ($tabsNav) {
	        var format = tabFormat,
                    $navContainer = $tabsNav.closest('nav');

            if ($navContainer.hasClass('programme-progression')) {
                if ($tabsNav.closest('nav').css('float') === 'none') {
                    format = 'accordion';
                }
            } else { // is transaction start page tabs
                if ($tabsNav.find('li').css('float') === 'none') {
                    format = 'accordion';
                }
            }

            // accordions default to all tabs closed, tabsets to open at the 1st
            if (format === 'accordion') {
                if (o.defaultTab === null) {
                  o.defaultTab = -1;
                }
            } else {
                if (o.defaultTab === null) {
                  o.defaultTab = 0;
                }
            }

            return format; 
        };

    var setTabItems = function ($tabsBody, $tabsNav) {
        if (tabFormat === 'accordion') {
            return $tabsBody.find('header.js-heading-tab');
        }

        return $tabsNav.find('li');
    };

	var adapt = function ($tabs, $tabsNav, $tabsBody) {
        var $tabItems = $tabsNav.find('li'),
            $container = $tabsNav.closest('nav').parent(),
            $relatedArticle, 
            $articleHeading,
            $articleInner;

        $.each($tabItems, function (idx) {
            var $tabAnchor = $(this).find('a'),
                tabId = $tabAnchor.attr('href').split('#')[1],
                $shiftLink = $('<a href="#' + tabId  + '" class="tab-shiftlink">Return to top of section ↑</a>');

            $relatedArticle = $container.find('#' + tabId);

            // get heading & store
            $articleHeading = $relatedArticle.find('header');

            if (!$articleHeading.length) {
                $articleHeading = $('<header><h1 /></header>');
            } else {
                $articleHeading = $articleHeading.remove();
            }

            $articleHeading
                .addClass('js-heading-tab')
                .removeClass('visuallyhidden')

            $articleHeading.children().html('').append($tabAnchor);

            // get div.inner
            $articleInner = $relatedArticle.find('.inner');

            // if article has no inner div, add one & move the content into it
            if (!$articleInner.length) {
                $articleInner = $('<div class="inner js-tab-pane" />').html($relatedArticle.html());
            } else {
                $articleInner.addClass('js-tab-pane');
            }

            $articleInner.attr('id', tabId);

            // create a new blank article with the original's inner div
            $relatedArticle.replaceWith($('<' + o.wrapperTag  + ' />').append($articleInner));
            $relatedArticle = $articleInner.parent();
            $relatedArticle.prepend($articleHeading)
                .attr('id', tabId);
            $relatedArticle.addClass('js-tab-container');
            $articleInner.append($shiftLink);
        });

        $tabsNav.closest('nav').remove();
    };
	
	return $(this).each(function(){
		//reference to tabs container
		var tabs = $(this);

		//set app mode
		//if( !$('body').is('[role]') ){ $('body').attr('role','application'); }
		
		//nav is first ul or ol
		var tabsNav = tabs.find('.js-tabs ul, .js-tabs ol');

        // exit early if there isn't anything to click
        if (tabsNav.length === 0) {
          return tabs;
        }

		//body is nav's next sibling
		var tabsBody = $(".js-tab-content");

		var tabIDprefix = 'tab-';

		var tabIDsuffix = '-enhanced';

		tabsBody
			.addClass('tabs-body')
			.attr('aria-live', 'polite');

        // check for mobile and adapt DOM if required
        tabFormat = checkFormat(tabsNav);        
        if (tabFormat === 'accordion') {
            adapt(tabs, tabsNav);
        } else {
            //add class to nav, tab body
            tabsNav
                .addClass('tabs-nav')
                .attr('role','tablist');
	    }
		
		//find tab panels, add class and aria
		tabsBody.find('.js-tab-pane').each(function(){
			$(this)
				.addClass('tabs-panel')
				.attr('role','tabpanel')
				.attr('aria-hidden', true)
				.attr('aria-expanded', false)
				.attr('aria-labelledby', tabIDprefix + $(this).attr('id'))
				.attr('id', $(this).attr('id') + tabIDsuffix)
				.hide();
		});
		
        var tabItems = setTabItems(tabsBody, tabsNav);

		//set role of each tab
		tabItems.find('a').each(function(idx){
		    var id = $(this).attr('href').split('#')[1];

			$(this)
				.attr('role','tab')
				.attr('id', tabIDprefix + id)
				.attr('aria-controls', id)
				.attr('aria-flowto', id);
		});
		
		//generic select tab function
		function selectTab(tab,fromHashChange){
			if(o.trackState && !fromHashChange){
				var anchor = tab.attr('href').split('#')[1];
				$.historyLoad(anchor);
			} else {
				//unselect tabs
				tabItems.find('a')
					.attr('aria-selected', false)
					.attr('tabindex', -1);
                if (tabFormat === 'accordion') {
                    tabItems.find('a').closest('.js-heading-tab').removeClass('active');
                } else {
					tabItems.find('a').parent().filter('.active').removeClass('active');
                }
				//set selected tab item
				tab
					.attr('aria-selected', true)
					.attr('tabindex', 0);
                if (tabFormat === 'accordion') {
                    tab.closest('.js-heading-tab').addClass('active');
                } else {
					tab.parent().addClass('active');
                }
				//unselect panels
				tabsBody.find('.tabs-panel-selected')
					.attr('aria-hidden',true)
					.attr('aria-expanded', false)
					.removeClass('tabs-panel-selected')
					.hide();
					
				//select active panel
				var anchor = tab.attr('href').split('#')[1];

				$( "#" + anchor + tabIDsuffix )
					.addClass('tabs-panel-selected')
					.attr('aria-hidden',false)
					.attr('aria-expanded', true)
					.show();

				// set selected index
				o.selected = tabItems.find('a').index(tab);

				// fire tab changed event
				tabs.trigger('tabChanged', anchor);

			}
		}

		//deselect tab function
		function deselectTab(tab){
            tabItems.find('a')
                .attr('aria-selected', false)
                .attr('tabindex', -1);

            tabItems.find('a').closest('.js-heading-tab').removeClass('active');

            //unselect panels
            tabsBody.find('.tabs-panel-selected')
                .attr('aria-hidden',true)
                .attr('aria-expanded', false)
                .removeClass('tabs-panel-selected')
                .hide();
		}

		// keyboard navigation
		tabs.on('keydown', function(event) {
			if (event.keyCode < $.ui.keyCode.PAGE_UP || event.keyCode > $.ui.keyCode.DOWN)
				return;

			var selectedIndex,
			    selectedTabItem;

			switch (event.keyCode) {
				case $.ui.keyCode.RIGHT:
				event.preventDefault();
				selectedIndex = o.selected + 1;
				break;
				case $.ui.keyCode.DOWN:
				selectedIndex = o.selected + 1;
				break;
				case $.ui.keyCode.UP:
				selectedIndex = o.selected - 1;
				break;
				case $.ui.keyCode.LEFT:
				selectedIndex = o.selected - 1;
				break;
				case $.ui.keyCode.END:
				selectedIndex = tabItems.length - 1;
				break;
				case $.ui.keyCode.HOME:
				selectedIndex = 0;
				break;
				case $.ui.keyCode.PAGE_UP:
				if (!event.ctrlKey)
					return;
				selectedIndex = o.selected + 1;
				break;
				case $.ui.keyCode.PAGE_DOWN:
				if (!event.ctrlKey)
					return;
				selectedIndex = o.selected + 1;
				if (!event.ctrlKey)
					return;
				selectedIndex = o.selected - 1;
				break;
			}
			event.preventDefault();
			event.stopPropagation();

			if (selectedIndex !== undefined) {
				selectedIndex = selectedIndex >= tabItems.length ? 0 : selectedIndex < 0 ? tabItems.length - 1 : selectedIndex;
                
                selectedTabItem = tabItems.find('a').eq(selectedIndex);
			    selectedTabItem.focus();
			    o.selected = selectedIndex;
			}

			return false;
		});

		//if tabs are rotating, stop them upon user events	
		tabs.bind('click keydown focus',function(){
	        if(o.autoRotate){ clearInterval(tabRotator); }
		});
		
		//function to select a tab from the url hash
		function selectTabFromHash(hash){
			var currHash = hash || window.location.hash;
			if(currHash.indexOf("#") == 0){
              currHash = currHash.split("#")[1];
            }
			var hashedTab = tabItems.find('a[href$=#' +  currHash + ']');

            if(hashedTab.size() > 0){
                selectTab(hashedTab,true);
            }
            else {
                if (o.defaultTab > -1) {
                  selectTab( tabItems.find('a').eq(o.defaultTab), true);
                }
            }
            //return true/false
            return !!hashedTab.size();
		}
		
		//if state tracking is enabled, set up the callback
		if(o.trackState){ $.historyInit(selectTabFromHash, o.srcPath); }

		//set tab from hash at page load, if no tab hash, select first tab
		selectTabFromHash(null, true);
		
		tabItems.on('click', 'a', function(){
		    if ($(this).closest('.js-heading-tab').hasClass('active')) {
		        deselectTab($(this));
            } else {
                selectTab($(this));
            }
			$(this).focus();
			return false;
		});
		
		if(o.alwaysScrollToTop){
			$(window)[0].scrollTo(0,0);
		}
	
            // related content box needs to know the top position of the footer
            // this changes when content is split into tabs
            if (typeof GOVUK.stopScrollingAtFooter !== 'undefined') {
                    GOVUK.stopScrollingAtFooter.updateFooterTop();
            }
	});
};
