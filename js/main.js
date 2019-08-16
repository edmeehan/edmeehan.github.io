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
 // section manager controls background and
// events when sections become visible

window.sections = new _modules_sections_manager__WEBPACK_IMPORTED_MODULE_0__["default"](document.getElementsByClassName('js-scroll-in-view'), document.getElementById('page-background'), window.backgroundCount || 1);
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
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
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
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
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
  shadow.addEventListener('click', function () {
    if (window.activeAside) asideHideEvent({
      element: window.activeAside
    });
  });
}

function hideEndEvent(event) {
  // condtion out bubbled events
  if (this === event.target) {
    this.style.display = 'none';
    this.removeEventListener('transitionend', hideEndEvent);
    window.activeAside = null;
  }
}

function asideHideEvent(_ref) {
  var detail = _ref.detail,
      element = _ref.element;
  var aside = element || document.querySelector(detail.target); // add listener for end of transition event

  aside.addEventListener('transitionend', hideEndEvent); // add classes to trigger animation

  aside.classList.remove('active');
  docEle.classList.remove('active'); // locks body to prevent scrolling

  document.body.classList.remove('locked');
}

function asideShowEvent(_ref2) {
  var detail = _ref2.detail,
      element = _ref2.element;
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
    // add classes to trigger animation
    aside.classList.add('active');
    docEle.classList.add('active'); // locks body to prevent scrolling

    document.body.classList.add('locked');
  }, 50);
}

/***/ }),

/***/ "./_javascript/modules/scroll_into_view.js":
/*!*************************************************!*\
  !*** ./_javascript/modules/scroll_into_view.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var custom_event_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! custom-event-polyfill */ "./node_modules/custom-event-polyfill/polyfill.js");
/* harmony import */ var custom_event_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(custom_event_polyfill__WEBPACK_IMPORTED_MODULE_0__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var _default =
/*#__PURE__*/
function () {
  function _default(elements, eventLabel) {
    _classCallCheck(this, _default);

    // Set arguments to properties
    this.eventLabel = eventLabel;
    this.elemArray = _toConsumableArray(elements); // convert nodelist or html collection to array
    // Utility variables for `requestAnimationFrame`

    this.rafId = undefined;
    this.rafActive = false; // Stuff

    this.target = 0;
    this.windowHeight = 0; // Add listeners and start this party

    window.addEventListener('scroll', this.scroll.bind(this));
    window.addEventListener('resize', this.resized.bind(this)); // Now we are ready

    this.setup();
  }
  /**
   * getting dimensions info
   * and other layout information
   */


  _createClass(_default, [{
    key: "setup",
    value: function setup() {
      this.windowHeight = window.innerHeight;
      this.target = window.scrollY || window.pageYOffset;
      this.startAnimation();
    }
    /**
     * Acts as a throttle for scrolling listener
     * checks to see if animation frame has been
     * requested and if so then let it handle the
     * callback
     */

  }, {
    key: "startAnimation",
    value: function startAnimation() {
      if (!this.rafActive) {
        this.rafActive = true;
        this.rafId = requestAnimationFrame(this.updateAnimation.bind(this));
      }
    }
    /**
     * Request Animation Frame Callback
     * This is the work horse function
     * safe to place more complex logic
     * here - but don't be greedy
     */

  }, {
    key: "updateAnimation",
    value: function updateAnimation() {
      var _this = this;

      var height = this.windowHeight,
          half = height / 2; // loops array and filters out visable elements
      // and adds some info to use in the UI

      this.elemArray.forEach(function (item) {
        var rect = item.getBoundingClientRect(),
            isVisable = rect.top < height && rect.bottom > 0;
        var pixels;
        if (!isVisable) return false; // simple math to show % of visable element on screen

        pixels = height - rect.bottom;
        pixels = height - (rect.top > 0 ? rect.top : 0) - (pixels > 0 ? pixels : 0);
        item.dispatchEvent(new CustomEvent(_this.eventLabel, {
          bubbles: false,
          detail: {
            node: (pixels / rect.height).toFixed(3) * 1,
            window: (pixels / height).toFixed(3) * 1,
            focused: rect.top < half && rect.bottom > half
          }
        }));
        return true;
      });
      this.rafActive = false;
      cancelAnimationFrame(this.rafId);
    } // bound to resize event

  }, {
    key: "resized",
    value: function resized() {
      this.setup();
    } // bound to scroll event

  }, {
    key: "scroll",
    value: function scroll() {
      this.target = window.scrollY || window.pageYOffset;
      this.startAnimation();
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
/* harmony import */ var _scroll_into_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scroll_into_view */ "./_javascript/modules/scroll_into_view.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var _default =
/*#__PURE__*/
function () {
  function _default(sections, background, randomCeiling) {
    var _this = this;

    _classCallCheck(this, _default);

    var event = 'view_event_visible'; // Set arguments to properties

    this.sectionsArray = _toConsumableArray(sections);
    this.backgroundEle = background;
    this.randomCeiling = randomCeiling; // some other properties

    this.prevRandom = null;
    this.sectionInFocus = null; // set the events

    this.viewEvents = new _scroll_into_view__WEBPACK_IMPORTED_MODULE_0__["default"](sections, event); // add visibile listener

    this.sectionsArray.forEach(function (item) {
      item.addEventListener(event, _this.isVisible.bind(_this));
    });
  }

  _createClass(_default, [{
    key: "isVisible",
    value: function isVisible(event) {
      if (this.sectionInFocus !== event.target && event.detail.focused) {
        this.sectionInFocus = event.target;
        this.changeBackground();
      }
    }
  }, {
    key: "changeBackground",
    value: function changeBackground() {
      var div = document.createElement('div'),
          backgroundClass = 'background',
          backgroundVisibleClass = 'background--visible';
      var random; // get a new random number differnt from the last

      do {
        random = Math.floor(Math.random() * this.randomCeiling) + 1;
      } while (random === this.prevRandom);

      this.prevRandom = random; // find and remove old backgrounds element when
      // transition has finished

      _toConsumableArray(this.backgroundEle.children).forEach(function (child) {
        child.classList.remove(backgroundVisibleClass);
        child.addEventListener('transitionend', function (item) {
          item.target.remove();
        });
      }); // add new background


      div.classList.add(backgroundClass, "".concat(backgroundClass, "__").concat(random));
      this.backgroundEle.appendChild(div); // add the class to trigger transition

      setTimeout(function () {
        div.classList.add(backgroundVisibleClass);
      }, 5);
    }
  }, {
    key: "sections",
    get: function get() {
      return this.sectionsArray;
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
      params = params || {};
      params.bubbles = !!params.bubbles;
      params.cancelable = !!params.cancelable;

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