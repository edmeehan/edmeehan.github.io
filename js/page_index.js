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
/******/ 	return __webpack_require__(__webpack_require__.s = "./_javascript/page-index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./_javascript/page-index.js":
/*!***********************************!*\
  !*** ./_javascript/page-index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  'use strict';

  var intro = document.getElementById('intro'),
      about = document.getElementById('about'),
      services = document.getElementById('services'),
      contact = document.getElementById('contact'); // sets the nav to the current page
  // mostly used on the homepage

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
})();

/***/ })

/******/ });
//# sourceMappingURL=page_index.js.map