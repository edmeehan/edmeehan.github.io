(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{10:function(t,e){!function(){if("undefined"!=typeof window)try{var t=new window.CustomEvent("test",{cancelable:!0});if(t.preventDefault(),!0!==t.defaultPrevented)throw new Error("Could not prevent default")}catch(t){var e=function(t,e){var n,i;return(e=e||{}).bubbles=!!e.bubbles,e.cancelable=!!e.cancelable,(n=document.createEvent("CustomEvent")).initCustomEvent(t,e.bubbles,e.cancelable,e.detail),i=n.preventDefault,n.preventDefault=function(){i.call(this);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(t){this.defaultPrevented=!0}},n};e.prototype=window.Event.prototype,window.CustomEvent=e}}()},166:function(t,e,n){"use strict";n.r(e);var i=n(2);function o(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var a=function(){function t(e,n,r){var a=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.backgroundEle=n,this.randomCeiling=r,this.prevRandom=null,this.sectionInFocus=null,i.a.add(e),o(e).forEach(function(t){t.addEventListener(i.a.event,a.isVisible.bind(a))})}var e,n,a;return e=t,(n=[{key:"isVisible",value:function(t){var e=t.target,n=t.detail.focused;this.sectionInFocus!==e&&n&&(this.sectionInFocus=e,this.changeBackground())}},{key:"changeBackground",value:function(){var t,e=document.createElement("div");do{t=Math.floor(Math.random()*this.randomCeiling)+1}while(t===this.prevRandom);this.prevRandom=t,o(this.backgroundEle.children).forEach(function(t){t.classList.remove("background--visible"),t.addEventListener("transitionend",function(t){t.target.remove()})}),e.classList.add("background","".concat("background","__").concat(t)),this.backgroundEle.appendChild(e),setTimeout(function(){e.classList.add("background--visible")},5)}},{key:"active_section",get:function(){return this.sectionInFocus}}])&&r(e.prototype,n),a&&r(e,a),t}(),c=function(t){var e=document.getElementsByTagName("script")[0],n=document.createElement("script");n.src=t,e.parentNode.insertBefore(n,e)};n(10);function s(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var d=document.getElementById("page-shadow"),u=document.getElementById("document"),l=document.querySelectorAll("#contact-form input, #contact-form textarea");function f(t){this===t.target&&(this.style.display="none",this.removeEventListener("transitionend",f),window.activeAside=null)}function h(t){var e=t.detail.target;"#aside-livechat"===(void 0===e?null:e)&&(c(window.liveChatScriptPath),u.removeEventListener("aside.show",h))}function v(t){var e=t.detail,n=(e=void 0===e?{}:e).target,i=void 0===n?null:n,o=t.element||document.querySelector(i);o.addEventListener("transitionend",f),o.classList.remove("active"),u.classList.remove("active"),document.body.classList.remove("locked")}function w(){c(window.contactScriptPath),s(l).forEach(function(t){t.removeEventListener("focus",w)})}window.sections=new a(document.querySelectorAll("[data-change-bkg]"),document.getElementById("page-background"),window.backgroundCount||1);var m=function(t){var e=t.target.dataset.scrollTo,n=document.getElementById(e).getBoundingClientRect(),i=window.pageYOffset||document.documentElement.scrollTop;return window.scrollTo(0,n.top+i),!1};u&&(u.addEventListener("aside.show",function(t){var e=t.detail,n=(e=void 0===e?{}:e).target,i=void 0===n?null:n,o=t.element||document.querySelector(i),r=i.substring(1),a="show-".concat(r);if(window.activeAside){if(o===window.activeAside)return;v({element:window.activeAside})}window.dataLayer.push({event:a,event_label:r}),window.activeAside=o,o.style.display=null,setTimeout(function(){o.classList.add("active"),u.classList.add("active"),document.body.classList.add("locked")},50)}),u.addEventListener("aside.show",h),u.addEventListener("aside.hide",v),s(document.getElementsByClassName("js-aside-show")).forEach(function(t){t.addEventListener("click",function(){u.dispatchEvent(new CustomEvent("aside.show",{bubbles:!1,detail:t.dataset}))})}),s(document.getElementsByClassName("js-aside-hide")).forEach(function(t){t.addEventListener("click",function(){u.dispatchEvent(new CustomEvent("aside.hide",{bubbles:!1,detail:t.dataset}))})})),d&&d.addEventListener("click",function(){window.activeAside&&v({element:window.activeAside})}),l&&s(l).forEach(function(t){t.addEventListener("focus",w)}),s(document.querySelectorAll("[data-scroll-to]")).forEach(function(t){t.addEventListener("click",m)})},2:function(t,e,n){"use strict";n(10);function i(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function o(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var r=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.eventLabel="is_visible",this.watchArray=[],this.rafId=void 0,this.rafActive=!1,this.target=0,this.windowHeight=0,window.addEventListener("scroll",this.scroll.bind(this)),window.addEventListener("resize",this.resized.bind(this))}var e,n,r;return e=t,(n=[{key:"add",value:function(t){var e=this;this.watchArray=this.watchArray.concat(i(t).filter(function(t){return e.watchArray.indexOf(t)<0})),this.setup()}},{key:"remove",value:function(t){this.watchArray=this.watchArray.filter(function(e){return i(t).indexOf(e)<0}),this.setup()}},{key:"setup",value:function(){this.windowHeight=window.innerHeight,this.target=window.scrollY||window.pageYOffset,this.startAnimation()}},{key:"startAnimation",value:function(){!this.rafActive&&this.watchArray.length>0&&(this.rafActive=!0,this.rafId=requestAnimationFrame(this.updateAnimation.bind(this)))}},{key:"updateAnimation",value:function(){var t=this,e=this.windowHeight,n=e/2;this.watchArray.forEach(function(i){var o,r=i.getBoundingClientRect();return r.top<e&&r.bottom>0&&(o=e-r.bottom,o=e-(r.top>0?r.top:0)-(o>0?o:0),i.dispatchEvent(new CustomEvent(t.eventLabel,{bubbles:!1,detail:{rect:r,node:1*(o/r.height).toFixed(3),window:1*(o/e).toFixed(3),focused:r.top<n&&r.bottom>n}})),!0)}),this.rafActive=!1,cancelAnimationFrame(this.rafId)}},{key:"resized",value:function(){this.setup()}},{key:"scroll",value:function(){this.target=window.scrollY||window.pageYOffset,this.startAnimation()}},{key:"event",get:function(){return this.eventLabel}},{key:"watching",get:function(){return this.watchArray}}])&&o(e.prototype,n),r&&o(e,r),t}();e.a=new r}},[[166,0]]]);
//# sourceMappingURL=main.js.map