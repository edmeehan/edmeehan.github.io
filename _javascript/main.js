import "custom-event-polyfill";
import ViewEvents from './modules/scrolling_in_view';
//import _ from 'lodash';

(function() {
    //'use strict';

    let sectionElements = document.getElementsByClassName('js-scroll-in-view'),
        backgroundElement = document.getElementById('page-background'),
        viewEvents = new ViewEvents({elements:sectionElements}),
        currentSection,
        backgroundNumber;

    function isVisible(event) {

        if (
            currentSection !== this &&
            event.detail.element.top < event.detail.window.middle &&
            event.detail.element.bottom > event.detail.window.middle
        ) {
            currentSection = this;

            changeBackground(true);
        }        
    }

    function changeBackground() {
        let div = document.createElement('div'),
            random;

        // get a new random number differnt from the last
        do
          random = Math.floor(Math.random() * 5) + 1;
        while (random === backgroundNumber);

        backgroundNumber = random;

        div.classList.add('background', 'background__' + random);

        // find and remove old backgrounds
        for (let oldbackground of backgroundElement.children) {
            oldbackground.classList.remove('background--visible');
            oldbackground.addEventListener('transitionend', function(){
                this.remove();
            });
        }

        backgroundElement.appendChild(div);

        setTimeout(function(){
            div.classList.add('background--visible');
        }, 5);

        
    }

    // add visibile listener
    for (let item of sectionElements) {
        item.addEventListener('is_visible', isVisible);
    }

    viewEvents.scroll();

})();