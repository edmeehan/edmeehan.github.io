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
/* harmony import */ var _sections_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sections_manager */ "./_javascript/sections_manager.js");
 //import _ from 'lodash';

(function () {
  'use strict';

  var sections,
      // home page stuff
  intro = document.getElementById('intro'),
      about = document.getElementById('about'),
      services = document.getElementById('services'),
      contact = document.getElementById('contact'),
      tabs = document.getElementsByClassName('js-tab');

  function headerNavUpdate(element) {
    var target = document.getElementById('header-link-' + element.id),
        links = document.querySelectorAll('.site-header__nav-links > li');
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = links[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var link = _step.value;
        link.classList.remove('active');
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

    if (target) {
      target.classList.add('active');
    }
  }

  ; // homepage scripts

  {
    var start_event = 'view_event_focus',
        end_event = 'view_event_blur',
        // intro
    intro_in = 'bounceIn',
        intro_out = 'bounceOut',
        // about
    about_in = 'bounceInLeft',
        about_out = 'bounceOutRight',
        // services
    services_in = 'bounceInRight',
        services_out = 'bounceOutLeft',
        // contact
    contact_in = 'bounceInLeft',
        contact_out = 'bounceOutRight';

    if (intro) {
      intro.addEventListener(start_event, function (event) {
        event.target.classList.add('animate', 'active', intro_in);
        headerNavUpdate(this);
      });
      intro.addEventListener(end_event, function (event) {
        event.target.classList.remove('active');
      });
    }

    if (about) {
      about.addEventListener(start_event, function (event) {
        event.target.classList.add('animate', 'active', about_in);
        headerNavUpdate(this);
      });
      about.addEventListener(end_event, function (event) {
        event.target.classList.remove('active');
      });
    }

    if (services) {
      services.addEventListener(start_event, function (event) {
        event.target.classList.add('animate', 'active', services_in);
        headerNavUpdate(this);
      });
      services.addEventListener(end_event, function (event) {
        event.target.classList.remove('active');
      });
    }

    if (contact) {
      contact.addEventListener(start_event, function (event) {
        event.target.classList.add('animate', 'active', contact_in);
        headerNavUpdate(this);
      });
      contact.addEventListener(end_event, function (event) {
        event.target.classList.remove('active');
      });
    }
  } // tabs

  {
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = tabs[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var tab = _step2.value;
        tab.addEventListener('click', function (event) {
          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;

          try {
            for (var _iterator3 = this.parentElement.children[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var tab_siblings = _step3.value;
              tab_siblings.classList.remove('active');
            }
          } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                _iterator3.return();
              }
            } finally {
              if (_didIteratorError3) {
                throw _iteratorError3;
              }
            }
          }

          this.classList.add('active');
          var content = document.getElementById(this.dataset.target);
          var _iteratorNormalCompletion4 = true;
          var _didIteratorError4 = false;
          var _iteratorError4 = undefined;

          try {
            for (var _iterator4 = content.parentElement.children[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
              var content_siblings = _step4.value;
              content_siblings.classList.remove('active');
            }
          } catch (err) {
            _didIteratorError4 = true;
            _iteratorError4 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                _iterator4.return();
              }
            } finally {
              if (_didIteratorError4) {
                throw _iteratorError4;
              }
            }
          }

          content.classList.add('active');
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
  } // section manager controls background and events when sections become visible

  sections = new _sections_manager__WEBPACK_IMPORTED_MODULE_0__["default"]({
    sections: document.getElementsByClassName('js-scroll-in-view'),
    background: document.getElementById('page-background'),
    randomCeiling: 7
  });
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

/***/ "./_javascript/sections_manager.js":
/*!*****************************************!*\
  !*** ./_javascript/sections_manager.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var custom_event_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! custom-event-polyfill */ "./node_modules/custom-event-polyfill/polyfill.js");
/* harmony import */ var custom_event_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(custom_event_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_scrolling_in_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/scrolling_in_view */ "./_javascript/modules/scrolling_in_view.js");
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
    this.viewEvents = new _modules_scrolling_in_view__WEBPACK_IMPORTED_MODULE_1__["default"](sections, "".concat(eventLabel, "_visible"));
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