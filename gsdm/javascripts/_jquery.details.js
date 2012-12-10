/*!Denis Sokolov, http://akral.bitbucket.org/details-tag/, denis@sokolov.cc. GPL, MIT */
(function($){
	// Chrome 10 will fail this detection, but Chrome 10 is no longer existing
	var support = 'open' in document.createElement('details'),
		init;

	// API
	$.fn.details = function(command) {
		if (command == 'open')
		{
			if (support)
				this.prop('open', true);
			else
				this.trigger('open');
		}

		if (command == 'close')
		{
			if (support)
				this.prop('open', false);
			else
				this.trigger('close');
		}

		if (command == 'init')
			init($(this));

		if (!command)
			return support ? this.open : this.hasClass('open');
	};

	init = function(elements) {

		/* Animated tags */
		elements.filter('.animated').each(function(){
			var me = $(this);
			var summary = me.children('summary').remove();
			me.html('<div class=details-wrapper>'+me.html()+'</div>').prepend(summary);
		}).on('open.details', function(){
			var details = $(this);
			var wrapper = details.children('.details-wrapper');
			wrapper.hide();
			setTimeout(function(){ // Simple .height() redraw is not enough for Chrome
				wrapper.slideDown(details.data('animation-speed'));
			}, 0);
		}).on('close.details', function(){
			var details = $(this);
			var wrapper = details.children('.details-wrapper');
			setTimeout(function(){
				details.prop('open', true).addClass('open');
				wrapper.slideUp(details.data('animation-speed'), function(){
					details.prop('open', false).removeClass('open');
				});
			}, 0);
		});

		if (support)
		{
			// Add our triggers on native implementation
			$('body').on('click', 'summary', function(){
				var details = $(this).parent();
				if (details.prop('open'))
					details.trigger('close');
				else
					details.trigger('open');
			});
			return;
		}
		
		$('html').addClass('no-details');

		$('head').prepend('<style>'+
			// Style
			'details{display:block}'+
			'summary{cursor:pointer}'+
			'details>summary::before{content:"►"}'+
			'details.open>summary::before{content:"▼"}'+

			// Behaviour
			'details:not(.open)>:not(summary){display:none}'+
			'</style>');

		elements
			// Main toggle action
			.on('open.details', function(){
				$(this).addClass('open').trigger('change.details');
			})
			.on('close.details', function(){
				$(this).removeClass('open').trigger('change.details');
			})
			.on('toggle.details', function(){
				var me = $(this);
				if (me.hasClass('open'))
					me.trigger('close');
				else
					me.trigger('open');
			})

			// Add missing summary tags
			.each(function(){
				var me = $(this);
				if (!me.children('summary').length)
					me.prepend('<summary>Details</summary>');
			})

			// Make summary toggle details
			.children('summary')
				// Clicks
				.click(function(){
					$(this).parent().trigger('toggle');
				})

				// Keyboard
				.filter(':not(tabindex)').attr('tabindex', 0).end()
				.keyup(function(e){
					// 32 - space
					// 13 - Enter. Opera triggers .click()
					if (e.keyCode == 32 || (e.keyCode == 13 && !$.browser.opera))
						$(this).parent().trigger('toggle');
				})
			.end()

			// Wrap plain text nodes in spans for CSS visibility
			.contents(':not(summary)').filter(function(){
					return (this.nodeType === 3) && (/[^\t\n\r ]/.test(this.data));
				})
				.wrap('<span>')
			.end().end()

			// Initial positions
			.filter(':not([open])')
				.prop('open', false)
			.end()
			.filter('[open]')
				.addClass('open')
				.prop('open', true)
			.end();
		
			
		// IE7-8 does not support :not selector.
		if ($.browser.msie && $.browser.msie < 9)
		{
			elements
				.on('open.details', function(){
					$(this).children().not('summary').show();
				})
				.on('close.details', function(){
					$(this).children().not('summary').hide();
				})
				.filter(':not(.open)').children().not('summary').hide();
		}
	};

	init($('details'));
})(jQuery);
