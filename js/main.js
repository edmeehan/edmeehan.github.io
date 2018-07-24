/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

/*
    Altitude by Pixelarity
    pixelarity.com | hello@pixelarity.com
    License: pixelarity.com/license
*/

var settings = {

    slider: {

        // Transition speed (in ms)
        // For timing purposes only. It *must* match the transition speed of ".slider > article".
        speed: 1500,

        // Transition delay (in ms)
        delay: 4000

    },

    carousel: {

        // Transition speed (in ms)
        // For timing purposes only. It *must* match the transition speed of ".carousel > article".
        speed: 350

    }

};

(function ($) {

    skel.breakpoints({
        xlarge: '(max-width: 1680px)',
        large: '(max-width: 1280px)',
        medium: '(max-width: 980px)',
        small: '(max-width: 736px)',
        xsmall: '(max-width: 480px)',
        xxsmall: '(max-width: 360px)'
    });

    /**
     * Custom slider for Altitude.
     * @return {jQuery} jQuery object.
     */
    $.fn._slider = function (options) {

        var $window = $(window),
            $this = $(this);

        // Handle no/multiple elements.
        if (this.length == 0) return $this;

        if (this.length > 1) {

            for (var i = 0; i < this.length; i++) {
                $(this[i])._slider(options);
            }return $this;
        }

        // Vars.
        var current = 0,
            pos = 0,
            lastPos = 0,
            slides = [],
            $slides = $this.children('article'),
            intervalId,
            isLocked = false,
            i = 0;

        // Functions.
        $this._switchTo = function (x, stop) {

            // Handle lock.
            if (isLocked || pos == x) return;

            isLocked = true;

            // Stop?
            if (stop) window.clearInterval(intervalId);

            // Update positions.
            lastPos = pos;
            pos = x;

            // Hide last slide.
            slides[lastPos].removeClass('top');

            // Show new slide.
            slides[pos].addClass('visible').addClass('top');

            // Finish hiding last slide after a short delay.
            window.setTimeout(function () {

                slides[lastPos].addClass('instant').removeClass('visible');

                window.setTimeout(function () {

                    slides[lastPos].removeClass('instant');
                    isLocked = false;
                }, 100);
            }, options.speed);
        };

        // Slides.
        $slides.each(function () {

            var $slide = $(this);

            // Add to slides.
            slides.push($slide);

            i++;
        });

        // Initial slide.
        slides[pos].addClass('visible').addClass('top');

        // Bail if we only have a single slide.
        if (slides.length == 1) return;

        // Main loop.
        intervalId = window.setInterval(function () {

            // Increment.
            current++;

            if (current >= slides.length) current = 0;

            // Switch.
            $this._switchTo(current);
        }, options.delay);
    };

    /**
     * Custom carousel for Altitude.
     * @return {jQuery} jQuery object.
     */
    $.fn._carousel = function (options) {

        var $window = $(window),
            $this = $(this);

        // Handle no/multiple elements.
        if (this.length == 0) return $this;

        if (this.length > 1) {

            for (var i = 0; i < this.length; i++) {
                $(this[i])._slider(options);
            }return $this;
        }

        // Vars.
        var current = 0,
            pos = 0,
            lastPos = 0,
            slides = [],
            $slides = $this.children('article'),
            intervalId,
            isLocked = false,
            i = 0;

        // Functions.
        $this._switchTo = function (x, stop) {

            // Handle lock.
            if (isLocked || pos == x) return;

            isLocked = true;

            // Stop?
            if (stop) window.clearInterval(intervalId);

            // Update positions.
            lastPos = pos;
            pos = x;

            // Hide last slide.
            slides[lastPos].removeClass('visible');

            // Finish hiding last slide after a short delay.
            window.setTimeout(function () {

                // Hide last slide (display).
                slides[lastPos].hide();

                // Show new slide (display).
                slides[pos].show();

                // Show new new slide.
                window.setTimeout(function () {
                    slides[pos].addClass('visible');
                }, 25);

                // Unlock after sort delay.
                window.setTimeout(function () {
                    isLocked = false;
                }, options.speed);
            }, options.speed);
        };

        // Slides.
        $slides.each(function () {

            var $slide = $(this);

            // Add to slides.
            slides.push($slide);

            // Hide.
            $slide.hide();

            i++;
        });

        // Nav.
        $this.on('click', '.next', function (event) {

            // Prevent default.
            event.preventDefault();
            event.stopPropagation();

            // Increment.
            current++;

            if (current >= slides.length) current = 0;

            // Switch.
            $this._switchTo(current);
        }).on('click', '.previous', function (event) {

            // Prevent default.
            event.preventDefault();
            event.stopPropagation();

            // Decrement.
            current--;

            if (current < 0) current = slides.length - 1;

            // Switch.
            $this._switchTo(current);
        });

        // Initial slide.
        slides[pos].show().addClass('visible');

        // Bail if we only have a single slide.
        if (slides.length == 1) return;
    };

    $(function () {

        var $window = $(window),
            $body = $('body');

        // Disable animations/transitions until the page has loaded.
        $body.addClass('is-loading');

        $window.on('load', function () {
            window.setTimeout(function () {
                $body.removeClass('is-loading');
            }, 100);
        });

        // Fix: Placeholder polyfill.
        $('form').placeholder();

        // Prioritize "important" elements on medium.
        skel.on('+medium -medium', function () {
            $.prioritize('.important\\28 medium\\29', skel.breakpoint('medium').active);
        });

        // Fix: Object-fit (pseudo) polyfill.
        if (!skel.canUse('object-fit')) $('img[data-position]').each(function () {

            var $this = $(this),
                $parent = $this.parent();

            // Apply img's src to parent.
            $parent.css('background-image', 'url("' + $this.attr('src') + '")').css('background-size', 'cover').css('background-repeat', 'no-repeat').css('background-position', $this.data('position'));

            // Hide img.
            $this.css('opacity', '0');
        });

        // Sliders.
        $('.slider')._slider(settings.slider);

        // Carousels.
        $('.carousel')._carousel(settings.carousel);

        // Menu.
        $('#menu').append('<a href="#menu" class="close"></a>').appendTo($body).panel({
            delay: 500,
            hideOnClick: true,
            hideOnSwipe: true,
            resetScroll: true,
            resetForms: true,
            target: $body,
            visibleClass: 'is-menu-visible',
            side: 'right'
        });
    });
})(jQuery);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function ($) {

	/**
  * Generate an indented list of links from a nav. Meant for use with panel().
  * @return {jQuery} jQuery object.
  */
	$.fn.navList = function () {

		var $this = $(this);
		$a = $this.find('a'), b = [];

		$a.each(function () {

			var $this = $(this),
			    indent = Math.max(0, $this.parents('li').length - 1),
			    href = $this.attr('href'),
			    target = $this.attr('target');

			b.push('<a ' + 'class="link depth-' + indent + '"' + (typeof target !== 'undefined' && target != '' ? ' target="' + target + '"' : '') + (typeof href !== 'undefined' && href != '' ? ' href="' + href + '"' : '') + '>' + '<span class="indent-' + indent + '"></span>' + $this.text() + '</a>');
		});

		return b.join('');
	};

	/**
  * Panel-ify an element.
  * @param {object} userConfig User config.
  * @return {jQuery} jQuery object.
  */
	$.fn.panel = function (userConfig) {

		// No elements?
		if (this.length == 0) return $this;

		// Multiple elements?
		if (this.length > 1) {

			for (var i = 0; i < this.length; i++) {
				$(this[i]).panel(userConfig);
			}return $this;
		}

		// Vars.
		var $this = $(this),
		    $body = $('body'),
		    $window = $(window),
		    id = $this.attr('id'),
		    config;

		// Config.
		config = $.extend({

			// Delay.
			delay: 0,

			// Hide panel on link click.
			hideOnClick: false,

			// Hide panel on escape keypress.
			hideOnEscape: false,

			// Hide panel on swipe.
			hideOnSwipe: false,

			// Reset scroll position on hide.
			resetScroll: false,

			// Reset forms on hide.
			resetForms: false,

			// Side of viewport the panel will appear.
			side: null,

			// Target element for "class".
			target: $this,

			// Class to toggle.
			visibleClass: 'visible'

		}, userConfig);

		// Expand "target" if it's not a jQuery object already.
		if (typeof config.target != 'jQuery') config.target = $(config.target);

		// Panel.

		// Methods.
		$this._hide = function (event) {

			// Already hidden? Bail.
			if (!config.target.hasClass(config.visibleClass)) return;

			// If an event was provided, cancel it.
			if (event) {

				event.preventDefault();
				event.stopPropagation();
			}

			// Hide.
			config.target.removeClass(config.visibleClass);

			// Post-hide stuff.
			window.setTimeout(function () {

				// Reset scroll position.
				if (config.resetScroll) $this.scrollTop(0);

				// Reset forms.
				if (config.resetForms) $this.find('form').each(function () {
					this.reset();
				});
			}, config.delay);
		};

		// Vendor fixes.
		$this.css('-ms-overflow-style', '-ms-autohiding-scrollbar').css('-webkit-overflow-scrolling', 'touch');

		// Hide on click.
		if (config.hideOnClick) {

			$this.find('a').css('-webkit-tap-highlight-color', 'rgba(0,0,0,0)');

			$this.on('click', 'a', function (event) {

				var $a = $(this),
				    href = $a.attr('href'),
				    target = $a.attr('target');

				if (!href || href == '#' || href == '' || href == '#' + id) return;

				// Cancel original event.
				event.preventDefault();
				event.stopPropagation();

				// Hide panel.
				$this._hide();

				// Redirect to href.
				window.setTimeout(function () {

					if (target == '_blank') window.open(href);else window.location.href = href;
				}, config.delay + 10);
			});
		}

		// Event: Touch stuff.
		$this.on('touchstart', function (event) {

			$this.touchPosX = event.originalEvent.touches[0].pageX;
			$this.touchPosY = event.originalEvent.touches[0].pageY;
		});

		$this.on('touchmove', function (event) {

			if ($this.touchPosX === null || $this.touchPosY === null) return;

			var diffX = $this.touchPosX - event.originalEvent.touches[0].pageX,
			    diffY = $this.touchPosY - event.originalEvent.touches[0].pageY,
			    th = $this.outerHeight(),
			    ts = $this.get(0).scrollHeight - $this.scrollTop();

			// Hide on swipe?
			if (config.hideOnSwipe) {

				var result = false,
				    boundary = 20,
				    delta = 50;

				switch (config.side) {

					case 'left':
						result = diffY < boundary && diffY > -1 * boundary && diffX > delta;
						break;

					case 'right':
						result = diffY < boundary && diffY > -1 * boundary && diffX < -1 * delta;
						break;

					case 'top':
						result = diffX < boundary && diffX > -1 * boundary && diffY > delta;
						break;

					case 'bottom':
						result = diffX < boundary && diffX > -1 * boundary && diffY < -1 * delta;
						break;

					default:
						break;

				}

				if (result) {

					$this.touchPosX = null;
					$this.touchPosY = null;
					$this._hide();

					return false;
				}
			}

			// Prevent vertical scrolling past the top or bottom.
			if ($this.scrollTop() < 0 && diffY < 0 || ts > th - 2 && ts < th + 2 && diffY > 0) {

				event.preventDefault();
				event.stopPropagation();
			}
		});

		// Event: Prevent certain events inside the panel from bubbling.
		$this.on('click touchend touchstart touchmove', function (event) {
			event.stopPropagation();
		});

		// Event: Hide panel if a child anchor tag pointing to its ID is clicked.
		$this.on('click', 'a[href="#' + id + '"]', function (event) {

			event.preventDefault();
			event.stopPropagation();

			config.target.removeClass(config.visibleClass);
		});

		// Body.

		// Event: Hide panel on body click/tap.
		$body.on('click touchend', function (event) {
			$this._hide(event);
		});

		// Event: Toggle.
		$body.on('click', 'a[href="#' + id + '"]', function (event) {

			event.preventDefault();
			event.stopPropagation();

			config.target.toggleClass(config.visibleClass);
		});

		// Window.

		// Event: Hide on ESC.
		if (config.hideOnEscape) $window.on('keydown', function (event) {

			if (event.keyCode == 27) $this._hide(event);
		});

		return $this;
	};

	/**
  * Apply "placeholder" attribute polyfill to one or more forms.
  * @return {jQuery} jQuery object.
  */
	$.fn.placeholder = function () {

		// Browser natively supports placeholders? Bail.
		if (typeof document.createElement('input').placeholder != 'undefined') return $(this);

		// No elements?
		if (this.length == 0) return $this;

		// Multiple elements?
		if (this.length > 1) {

			for (var i = 0; i < this.length; i++) {
				$(this[i]).placeholder();
			}return $this;
		}

		// Vars.
		var $this = $(this);

		// Text, TextArea.
		$this.find('input[type=text],textarea').each(function () {

			var i = $(this);

			if (i.val() == '' || i.val() == i.attr('placeholder')) i.addClass('polyfill-placeholder').val(i.attr('placeholder'));
		}).on('blur', function () {

			var i = $(this);

			if (i.attr('name').match(/-polyfill-field$/)) return;

			if (i.val() == '') i.addClass('polyfill-placeholder').val(i.attr('placeholder'));
		}).on('focus', function () {

			var i = $(this);

			if (i.attr('name').match(/-polyfill-field$/)) return;

			if (i.val() == i.attr('placeholder')) i.removeClass('polyfill-placeholder').val('');
		});

		// Password.
		$this.find('input[type=password]').each(function () {

			var i = $(this);
			var x = $($('<div>').append(i.clone()).remove().html().replace(/type="password"/i, 'type="text"').replace(/type=password/i, 'type=text'));

			if (i.attr('id') != '') x.attr('id', i.attr('id') + '-polyfill-field');

			if (i.attr('name') != '') x.attr('name', i.attr('name') + '-polyfill-field');

			x.addClass('polyfill-placeholder').val(x.attr('placeholder')).insertAfter(i);

			if (i.val() == '') i.hide();else x.hide();

			i.on('blur', function (event) {

				event.preventDefault();

				var x = i.parent().find('input[name=' + i.attr('name') + '-polyfill-field]');

				if (i.val() == '') {

					i.hide();
					x.show();
				}
			});

			x.on('focus', function (event) {

				event.preventDefault();

				var i = x.parent().find('input[name=' + x.attr('name').replace('-polyfill-field', '') + ']');

				x.hide();

				i.show().focus();
			}).on('keypress', function (event) {

				event.preventDefault();
				x.val('');
			});
		});

		// Events.
		$this.on('submit', function () {

			$this.find('input[type=text],input[type=password],textarea').each(function (event) {

				var i = $(this);

				if (i.attr('name').match(/-polyfill-field$/)) i.attr('name', '');

				if (i.val() == i.attr('placeholder')) {

					i.removeClass('polyfill-placeholder');
					i.val('');
				}
			});
		}).on('reset', function (event) {

			event.preventDefault();

			$this.find('select').val($('option:first').val());

			$this.find('input,textarea').each(function () {

				var i = $(this),
				    x;

				i.removeClass('polyfill-placeholder');

				switch (this.type) {

					case 'submit':
					case 'reset':
						break;

					case 'password':
						i.val(i.attr('defaultValue'));

						x = i.parent().find('input[name=' + i.attr('name') + '-polyfill-field]');

						if (i.val() == '') {
							i.hide();
							x.show();
						} else {
							i.show();
							x.hide();
						}

						break;

					case 'checkbox':
					case 'radio':
						i.attr('checked', i.attr('defaultValue'));
						break;

					case 'text':
					case 'textarea':
						i.val(i.attr('defaultValue'));

						if (i.val() == '') {
							i.addClass('polyfill-placeholder');
							i.val(i.attr('placeholder'));
						}

						break;

					default:
						i.val(i.attr('defaultValue'));
						break;

				}
			});
		});

		return $this;
	};

	/**
  * Moves elements to/from the first positions of their respective parents.
  * @param {jQuery} $elements Elements (or selector) to move.
  * @param {bool} condition If true, moves elements to the top. Otherwise, moves elements back to their original locations.
  */
	$.prioritize = function ($elements, condition) {

		var key = '__prioritize';

		// Expand $elements if it's not already a jQuery object.
		if (typeof $elements != 'jQuery') $elements = $($elements);

		// Step through elements.
		$elements.each(function () {

			var $e = $(this),
			    $p,
			    $parent = $e.parent();

			// No parent? Bail.
			if ($parent.length == 0) return;

			// Not moved? Move it.
			if (!$e.data(key)) {

				// Condition is false? Bail.
				if (!condition) return;

				// Get placeholder (which will serve as our point of reference for when this element needs to move back).
				$p = $e.prev();

				// Couldn't find anything? Means this element's already at the top, so bail.
				if ($p.length == 0) return;

				// Move element to top of parent.
				$e.prependTo($parent);

				// Mark element as moved.
				$e.data(key, $p);
			}

			// Moved already?
			else {

					// Condition is true? Bail.
					if (condition) return;

					$p = $e.data(key);

					// Move element back to its original location (using our placeholder).
					$e.insertAfter($p);

					// Unmark element as moved.
					$e.removeData(key);
				}
		});
	};
})(jQuery);

/***/ })
/******/ ]);