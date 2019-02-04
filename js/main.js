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
/* harmony import */ var custom_event_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! custom-event-polyfill */ "./node_modules/custom-event-polyfill/polyfill.js");
/* harmony import */ var custom_event_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(custom_event_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_scrolling_in_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/scrolling_in_view */ "./_javascript/modules/scrolling_in_view.js");

 //import _ from 'lodash';

(function () {
  //'use strict';
  var sectionElements = document.getElementsByClassName('js-scroll-in-view'),
      backgroundElement = document.getElementById('page-background'),
      viewEvents = new _modules_scrolling_in_view__WEBPACK_IMPORTED_MODULE_1__["default"]({
    elements: sectionElements
  }),
      currentSection,
      backgroundNumber;

  function isVisible(event) {
    if (currentSection !== this && event.detail.element.top < event.detail.window.middle && event.detail.element.bottom > event.detail.window.middle) {
      currentSection = this;
      changeBackground(true);
    }
  }

  function changeBackground() {
    var div = document.createElement('div'),
        random; // get a new random number differnt from the last

    do {
      random = Math.floor(Math.random() * 8) + 1;
    } while (random === backgroundNumber);

    backgroundNumber = random;
    div.classList.add('background', 'background__' + random); // find and remove old backgrounds

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = backgroundElement.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var oldbackground = _step.value;
        oldbackground.classList.remove('background--visible');
        oldbackground.addEventListener('transitionend', function () {
          this.remove();
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

    backgroundElement.appendChild(div);
    setTimeout(function () {
      div.classList.add('background--visible');
    }, 5);
  } // add visibile listener


  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = sectionElements[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var item = _step2.value;
      item.addEventListener('is_visible', isVisible);
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

  viewEvents.scroll();
})();

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
  function _default(_ref) {
    var _this = this;

    var elements = _ref.elements;

    _classCallCheck(this, _default);

    var that = this,
        raf = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame; // set some property values

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

          this.elements[elements[i].index].dispatchEvent(new CustomEvent('is_visible', {
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