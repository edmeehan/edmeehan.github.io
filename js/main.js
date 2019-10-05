(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./_javascript/main.js":
/*!*****************************!*\
  !*** ./_javascript/main.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_change_background__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/change_background */ "./_javascript/modules/change_background.js");
/* harmony import */ var custom_event_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! custom-event-polyfill */ "./node_modules/custom-event-polyfill/polyfill.js");
/* harmony import */ var custom_event_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(custom_event_polyfill__WEBPACK_IMPORTED_MODULE_1__);


const shadow = document.getElementById('page-shadow'),
      docEle = document.getElementById('document'),
      contactFields = document.querySelectorAll('#contact-form input, #contact-form textarea'); // section manager controls background and
// events when sections become visible

window.sections = new _modules_change_background__WEBPACK_IMPORTED_MODULE_0__["default"](document.querySelectorAll('[data-change-bkg]'), document.getElementById('page-background'), window.backgroundCount || 1);

function hideEndEvent({
  target
}) {
  // condtion out bubbled events
  if (this === target) {
    this.style.display = 'none';
    this.removeEventListener('transitionend', hideEndEvent);
    window.activeAside = null;
  }
}

function asideHideEvent({
  detail: {
    target
  },
  element
}) {
  const aside = element || document.querySelector(target); // add listener for end of transition event

  aside.addEventListener('transitionend', hideEndEvent); // add classes to trigger animation

  aside.classList.remove('active');
  docEle.classList.remove('active'); // locks body to prevent scrolling

  document.body.classList.remove('locked');
}

function asideShowEvent({
  detail: {
    target
  },
  element
}) {
  const aside = element || document.querySelector(target),
        labelName = target.substring(1),
        eventName = `show-${labelName}`; // handle active aside first
  // - can also toggle

  if (window.activeAside) {
    if (aside === window.activeAside) return;
    asideHideEvent({
      element: window.activeAside
    });
  }

  window.dataLayer.push({
    'event': eventName,
    'event_label': labelName
  });
  window.activeAside = aside;
  aside.style.display = null;
  setTimeout(() => {
    // add classes to trigger animation
    aside.classList.add('active');
    docEle.classList.add('active'); // locks body to prevent scrolling

    document.body.classList.add('locked');
  }, 50);
}

function loadContactScript() {
  const ref = document.getElementsByTagName('script')[0],
        script = document.createElement('script');
  script.src = window.contactScriptPath;
  ref.parentNode.insertBefore(script, ref);
  [...contactFields].forEach(field => {
    field.removeEventListener('focus', loadContactScript);
  });
}

const scrollToTargetListerner = ({
  target
}) => {
  const name = target.dataset.scrollTo,
        targetNode = document.getElementById(name),
        rect = targetNode.getBoundingClientRect(),
        offset = window.pageYOffset || document.documentElement.scrollTop;
  window.scrollTo(0, rect.top + offset);
  return false;
};

if (docEle) {
  docEle.addEventListener('aside.show', asideShowEvent);
  docEle.addEventListener('aside.hide', asideHideEvent);
  [...document.getElementsByClassName('js-aside-show')].forEach(asideShow => {
    asideShow.addEventListener('click', () => {
      docEle.dispatchEvent(new CustomEvent('aside.show', {
        bubbles: false,
        detail: asideShow.dataset
      }));
    });
  });
  [...document.getElementsByClassName('js-aside-hide')].forEach(asideHide => {
    asideHide.addEventListener('click', () => {
      docEle.dispatchEvent(new CustomEvent('aside.hide', {
        bubbles: false,
        detail: asideHide.dataset
      }));
    });
  });
}

if (shadow) {
  shadow.addEventListener('click', () => {
    if (window.activeAside) asideHideEvent({
      element: window.activeAside
    });
  });
}

if (contactFields) {
  [...contactFields].forEach(field => {
    field.addEventListener('focus', loadContactScript);
  });
} // scroll to triggers


[...document.querySelectorAll('[data-scroll-to]')].forEach(item => {
  item.addEventListener('click', scrollToTargetListerner);
});

/***/ }),

/***/ "./_javascript/modules/change_background.js":
/*!**************************************************!*\
  !*** ./_javascript/modules/change_background.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scroll_into_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scroll_into_view */ "./_javascript/modules/scroll_into_view.js");

/* harmony default export */ __webpack_exports__["default"] = (class {
  constructor(sections, background, randomCeiling) {
    // Set arguments to properties
    this.backgroundEle = background;
    this.randomCeiling = randomCeiling; // some other properties

    this.prevRandom = null;
    this.sectionInFocus = null; // add the elements to watch to start firing events

    _scroll_into_view__WEBPACK_IMPORTED_MODULE_0__["default"].add(sections); // add visibile listener

    [...sections].forEach(item => {
      item.addEventListener(_scroll_into_view__WEBPACK_IMPORTED_MODULE_0__["default"].event, this.isVisible.bind(this));
    });
  }

  get active_section() {
    return this.sectionInFocus;
  }
  /**
   * bound to custom event listener
   * called when element comes into view
   */


  isVisible({
    target,
    detail: {
      focused
    }
  }) {
    if (this.sectionInFocus !== target && focused) {
      this.sectionInFocus = target;
      this.changeBackground();
    }
  }
  /**
   * changes background graphic by random
   * TODO: maybe make more options here and break up
   */


  changeBackground() {
    const div = document.createElement('div'),
          backgroundClass = 'background',
          backgroundVisibleClass = 'background--visible';
    let random; // get a new random number differnt from the last

    do random = Math.floor(Math.random() * this.randomCeiling) + 1; while (random === this.prevRandom);

    this.prevRandom = random; // find and remove old backgrounds element when
    // transition has finished

    [...this.backgroundEle.children].forEach(child => {
      child.classList.remove(backgroundVisibleClass);
      child.addEventListener('transitionend', item => {
        item.target.remove();
      });
    }); // add new background

    div.classList.add(backgroundClass, `${backgroundClass}__${random}`);
    this.backgroundEle.appendChild(div); // add the class to trigger transition

    setTimeout(() => {
      div.classList.add(backgroundVisibleClass);
    }, 5);
  }

});

/***/ }),

/***/ "./_javascript/modules/scroll_into_view.js":
/*!*************************************************!*\
  !*** ./_javascript/modules/scroll_into_view.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var custom_event_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! custom-event-polyfill */ "./node_modules/custom-event-polyfill/polyfill.js");
/* harmony import */ var custom_event_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(custom_event_polyfill__WEBPACK_IMPORTED_MODULE_0__);


class ScrollIntoView {
  constructor() {
    // Set arguments to properties
    this.eventLabel = 'is_visible';
    this.watchArray = []; // Utility variables for `requestAnimationFrame`

    this.rafId = undefined;
    this.rafActive = false; // Stuff

    this.target = 0;
    this.windowHeight = 0; // Add listeners and start this party

    window.addEventListener('scroll', this.scroll.bind(this));
    window.addEventListener('resize', this.resized.bind(this));
  }

  get event() {
    return this.eventLabel;
  }

  get watching() {
    return this.watchArray;
  }
  /**
   * add elements to watch and trigger events from
   * does not work with single node return and must be
   * a nodeList or htmlcollection
   * TODO: make work for single or collection of nodes
   */


  add(nodeList) {
    this.watchArray = this.watchArray.concat( // make sure not to add duplicates
    [...nodeList].filter(item => this.watchArray.indexOf(item) < 0));
    this.setup();
  }
  /**
   * remove elements from watch
   */


  remove(nodeList) {
    this.watchArray = this.watchArray.filter(item => [...nodeList].indexOf(item) < 0);
    this.setup();
  }
  /**
   * getting dimensions info
   * and other layout information
   */


  setup() {
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


  startAnimation() {
    if (!this.rafActive && this.watchArray.length > 0) {
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


  updateAnimation() {
    const height = this.windowHeight,
          half = height / 2; // loops array and filters out visable elements
    // and adds some info to use in the UI

    this.watchArray.forEach(item => {
      const rect = item.getBoundingClientRect(),
            isVisable = rect.top < height && rect.bottom > 0;
      let pixels;
      if (!isVisable) return false; // simple math to show % of visable element on screen

      pixels = height - rect.bottom;
      pixels = height - (rect.top > 0 ? rect.top : 0) - (pixels > 0 ? pixels : 0);
      item.dispatchEvent(new CustomEvent(this.eventLabel, {
        bubbles: false,
        detail: {
          rect,
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


  resized() {
    this.setup();
  } // bound to scroll event


  scroll() {
    this.target = window.scrollY || window.pageYOffset;
    this.startAnimation();
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new ScrollIntoView());

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
(function () {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    var ce = new window.CustomEvent('test', {
      cancelable: true
    });
    ce.preventDefault();

    if (ce.defaultPrevented !== true) {
      // IE has problems with .preventDefault() on custom events
      // http://stackoverflow.com/questions/23349191
      throw new Error('Could not prevent default');
    }
  } catch (e) {
    var CustomEvent = function (event, params) {
      var evt, origPrevent;
      params = params || {};
      params.bubbles = !!params.bubbles;
      params.cancelable = !!params.cancelable;
      evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
      origPrevent = evt.preventDefault;

      evt.preventDefault = function () {
        origPrevent.call(this);

        try {
          Object.defineProperty(this, 'defaultPrevented', {
            get: function () {
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

},[["./_javascript/main.js","commons"]]]);
//# sourceMappingURL=main.js.map