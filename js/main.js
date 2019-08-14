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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./_javascript/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./_javascript/main.js":
/*!*****************************!*\
  !*** ./_javascript/main.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_sections_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/sections_manager */ "./_javascript/modules/sections_manager.js");


(function (sections) {
  'use strict'; // section manager controls background and
  // events when sections become visible

  window.sections = sections;

  var hideEndEvent = function hideEndEvent(event) {
    // condtion out bubbled events
    if (this === event.target) {
      this.style.display = 'none';
      this.removeEventListener('transitionend', hideEndEvent);
      window.activeAside = null;
    }
  };

  var asideShowEvent = function asideShowEvent(_ref) {
    var detail = _ref.detail,
        element = _ref.element;
    var aside = element || document.querySelector(detail.target); // handle active aside first
    // - can also toggle

    if (window.activeAside) {
      if (aside === window.activeAside) return;
      asideHideEvent({
        element: window.activeAside
      });
    }

    window.activeAside = aside;
    aside.style.display = null;
    setTimeout(function () {
      //add classes to trigger animation
      aside.classList.add('active');
      docEle.classList.add('active'); // locks body to prevent scrolling

      document.body.classList.add('locked');
    }, 50);
  };

  var asideHideEvent = function asideHideEvent(_ref2) {
    var detail = _ref2.detail,
        element = _ref2.element;
    var aside = element || document.querySelector(detail.target); //add listener for end of transition event

    aside.addEventListener('transitionend', hideEndEvent); //add classes to trigger animation

    aside.classList.remove('active');
    docEle.classList.remove('active'); // locks body to prevent scrolling

    document.body.classList.remove('locked');
  };

  var docEle = document.getElementById('document');

  if (docEle) {
    docEle.addEventListener('aside.show', asideShowEvent);
    docEle.addEventListener('aside.hide', asideHideEvent);
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = document.getElementsByClassName('js-aside-show')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var asideShow = _step.value;
        asideShow.addEventListener('click', function (event) {
          docEle.dispatchEvent(new CustomEvent('aside.show', {
            bubbles: false,
            detail: this.dataset
          }));
        });
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = document.getElementsByClassName('js-aside-hide')[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var asideHide = _step2.value;
        asideHide.addEventListener('click', function (event) {
          docEle.dispatchEvent(new CustomEvent('aside.hide', {
            bubbles: false,
            detail: this.dataset
          }));
        });
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }
  }

  var shadow = document.getElementById('page-shadow');

  if (shadow) {
    shadow.addEventListener('click', function (event) {
      if (window.activeAside) asideHideEvent({
        element: window.activeAside
      });
    });
  }
})(new _modules_sections_manager__WEBPACK_IMPORTED_MODULE_0__["default"]({
  sections: document.getElementsByClassName('js-scroll-in-view'),
  background: document.getElementById('page-background'),
  randomCeiling: window.backgroundCount || 1
}));

/***/ }),

/***/ "./_javascript/modules/scrolling_in_view.js":
/*!**************************************************!*\
  !*** ./_javascript/modules/scrolling_in_view.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _default =
/*#__PURE__*/
function () {
  function _default(elements, eventLabel) {
    var _this = this;

    _classCallCheck(this, _default);

    var that = this,
        raf = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame; // set some property values

    this.eventLabel = eventLabel;
    this.elements = elements;
    this.boundaryArray = [];
    this.scrollTop = window.scrollY || window.pageYOffset; // if we have scroll elements, then lets do this.

    if (elements.length > 0) {
      // call function to get some measurements        
      this.resized(); // resize listener

      window.addEventListener('resize', function (event) {
        _this.resized();
      });
      if (raf) loop();
    }

    function loop() {
      var scrollTop = window.scrollY || window.pageYOffset;

      if (that.scrollTop === scrollTop) {
        raf(loop);
        return;
      } else {
        that.scrollTop = scrollTop;
        that.scroll();
        raf(loop);
      }
    }
  }

  _createClass(_default, [{
    key: "resized",
    value: function resized() {
      this.windowHeight = window.innerHeight;
      this.windowHalf = Math.round(this.windowHeight * 0.5);
      this.documentHeight = document.body.offsetHeight;
      this.documentHalf = Math.round(this.documentHeight * 0.5);
      this.measure();
    }
  }, {
    key: "measure",
    value: function measure(updatedElements) {
      if (updatedElements && Array.isArray(updatedElements)) {
        this.elements = updatedElements;
      }

      for (var i = this.elements.length; i--;) {
        var top = this.elements[i].offsetTop,
            height = this.elements[i].offsetHeight,
            bottom = top + height;
        this.boundaryArray[i] = {
          top: top,
          height: height,
          bottom: bottom,
          index: i
        };
      }
    }
  }, {
    key: "scroll",
    value: function scroll() {
      // clone array
      var elements = this.boundaryArray.slice(0),
          flipped = false,
          scrollBottom = this.scrollTop + this.windowHeight,
          windowMiddle = this.scrollTop + this.windowHalf,
          visibility; // check how far we scrolled - and flip the array to make
      // searching faster

      if (this.scrollTop + this.windowHalf < this.documentHalf) {
        flipped = true;
        elements.reverse();
      }

      for (var i = elements.length; i--;) {
        // check if all other elements our out of the window
        // and exit the loop to save some resources
        if (flipped && scrollBottom < elements[i].top) break;
        if (!flipped && this.scrollTop > elements[i].bottom) break; // okay now check if the element is visible and by how much
        // in order to be visible these basic rules must be true

        if (elements[i].top < scrollBottom && elements[i].bottom > this.scrollTop) {
          if (elements[i].top < this.scrollTop) {
            if (elements[i].bottom < scrollBottom) {
              // visible but off the top
              visibility = 'top';
            } else {
              // visible but bigger then screen
              visibility = 'large';
            }
          } else {
            if (elements[i].bottom < scrollBottom) {
              // visible but smaller then screen
              visibility = 'small';
            } else {
              // visible but off bottom
              visibility = 'bottom';
            }
          }

          this.elements[elements[i].index].dispatchEvent(new CustomEvent(this.eventLabel, {
            bubbles: false,
            detail: {
              visibility: visibility,
              window: {
                top: this.scrollTop,
                bottom: scrollBottom,
                middle: windowMiddle,
                height: this.windowHeight
              },
              element: {
                top: elements[i].top,
                bottom: elements[i].bottom,
                height: elements[i].height
              }
            }
          }));
        }
      }
    }
  }, {
    key: "boundary",
    get: function get() {
      return this.boundaryArray;
    }
  }]);

  return _default;
}();



/***/ }),

/***/ "./_javascript/modules/sections_manager.js":
/*!*************************************************!*\
  !*** ./_javascript/modules/sections_manager.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var custom_event_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! custom-event-polyfill */ "./node_modules/custom-event-polyfill/polyfill.js");
/* harmony import */ var custom_event_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(custom_event_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scrolling_in_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scrolling_in_view */ "./_javascript/modules/scrolling_in_view.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var _default =
/*#__PURE__*/
function () {
  function _default(_ref) {
    var sections = _ref.sections,
        background = _ref.background,
        randomCeiling = _ref.randomCeiling;
    var eventLabel = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'view_event';
    var backgroundClass = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'background';
    var backgroundVisibleClass = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'visible';
    var sectionActiveClass = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'active';

    _classCallCheck(this, _default);

    this.backgroundClass = backgroundClass;
    this.backgroundVisibleClass = backgroundVisibleClass;
    this.eventLabel = eventLabel;
    this.sectionsEle = sections;
    this.backgroundEle = background;
    this.viewEvents = new _scrolling_in_view__WEBPACK_IMPORTED_MODULE_1__["default"](sections, "".concat(eventLabel, "_visible"));
    this.randomCeiling = randomCeiling;
    this.prevRandom = null;
    this.sectionInFocus = null;
    this.sectionInFocusClass = sectionActiveClass; // add visibile listener

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = sections[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var item = _step.value;
        item.addEventListener("".concat(this.eventLabel, "_visible"), this.isVisible.bind(this));
      } // init scroll to get started

    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    this.viewEvents.scroll();
  }

  _createClass(_default, [{
    key: "isVisible",
    value: function isVisible(event) {
      if (this.sectionInFocus !== event.target && event.detail.element.top < event.detail.window.middle && event.detail.element.bottom > event.detail.window.middle) {
        // check if hass classList - not the null value form init
        if (this.sectionInFocus !== null) {
          this.sectionInFocus.dispatchEvent(new CustomEvent("".concat(this.eventLabel, "_blur"), {
            bubbles: false
          }));
        }

        this.sectionInFocus = event.target;
        this.changeBackground();
        this.sectionInFocus.dispatchEvent(new CustomEvent("".concat(this.eventLabel, "_focus"), {
          bubbles: false
        }));
      }
    }
  }, {
    key: "changeBackground",
    value: function changeBackground() {
      var div = document.createElement('div'),
          random; // get a new random number differnt from the last

      do {
        random = Math.floor(Math.random() * this.randomCeiling) + 1;
      } while (random === this.prevRandom);

      this.prevRandom = random;
      div.classList.add(this.backgroundClass, "".concat(this.backgroundClass, "__").concat(random)); // find and remove old backgrounds

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.backgroundEle.children[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var children = _step2.value;
          children.classList.remove("".concat(this.backgroundClass, "--").concat(this.backgroundVisibleClass));
          children.addEventListener('transitionend', function () {
            this.remove();
          });
        } // add new background

      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      this.backgroundEle.appendChild(div); // add the class to trigger transition

      setTimeout(function () {
        div.classList.add("".concat(this.backgroundClass, "--").concat(this.backgroundVisibleClass));
      }.bind(this), 5);
    }
  }, {
    key: "sections",
    get: function get() {
      return this.sectionsEle;
    }
  }, {
    key: "background",
    get: function get() {
      return this.backgroundEle;
    }
  }, {
    key: "active_section",
    get: function get() {
      return this.sectionInFocus;
    }
  }, {
    key: "view_event",
    get: function get() {
      return this.viewEvents;
    }
  }]);

  return _default;
}();



/***/ }),

/***/ "./node_modules/custom-event-polyfill/polyfill.js":
/*!********************************************************!*\
  !*** ./node_modules/custom-event-polyfill/polyfill.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Polyfill for creating CustomEvents on IE9/10/11

// code pulled from:
// https://github.com/d4tocchini/customevent-polyfill
// https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent#Polyfill

(function() {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    var ce = new window.CustomEvent('test', { cancelable: true });
    ce.preventDefault();
    if (ce.defaultPrevented !== true) {
      // IE has problems with .preventDefault() on custom events
      // http://stackoverflow.com/questions/23349191
      throw new Error('Could not prevent default');
    }
  } catch (e) {
    var CustomEvent = function(event, params) {
      var evt, origPrevent;
      params = params || {
        bubbles: false,
        cancelable: false,
        detail: undefined
      };

      evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(
        event,
        params.bubbles,
        params.cancelable,
        params.detail
      );
      origPrevent = evt.preventDefault;
      evt.preventDefault = function() {
        origPrevent.call(this);
        try {
          Object.defineProperty(this, 'defaultPrevented', {
            get: function() {
              return true;
            }
          });
        } catch (e) {
          this.defaultPrevented = true;
        }
      };
      return evt;
    };

    CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = CustomEvent; // expose definition to window
  }
})();


/***/ })

/******/ });
//# sourceMappingURL=main.js.map