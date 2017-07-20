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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


document.addEventListener("DOMContentLoaded", locknload);

/**
 * page init function
 * fires on document loaded
 */
function locknload(event) {
    textAnimation();
}

function textAnimation() {
    var element = document.getElementById('text-spinner'),
        textArray = element.dataset.text.split(','),
        characterAnimation = 200,
        delayOffset = 1500,
        letterInterval,
        currentIndex;

    // add current text to the loop array
    textArray.push(element.textContent);
    // get this party started
    setTimeout(removeText, delayOffset);
    // animates the text
    function removeText() {
        currentIndex = textArray.indexOf(element.textContent);
        letterInterval = setInterval(function () {
            if (element.textContent.length > 0) {
                element.textContent = element.textContent.substring(0, element.textContent.length - 1);
            } else {
                clearInterval(letterInterval);
                writeText();
            }
        }, characterAnimation);
    }

    function writeText() {
        var currentText = currentIndex === textArray.length - 1 ? textArray[0] : textArray[currentIndex + 1];
        letterInterval = setInterval(function () {
            if (element.textContent.length !== currentText.length) {
                element.textContent = currentText.substring(0, element.textContent.length + 1);
            } else {
                clearInterval(letterInterval);
                setTimeout(removeText, delayOffset);
            }
        }, characterAnimation);
    }
}

/***/ })
/******/ ]);