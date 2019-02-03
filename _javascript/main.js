// require('./util.js');
// require('./contact_form.js');
//import "core-js/fn/promise";

import "custom-event-polyfill";
import ViewEvents from './modules/scrolling_in_view';

(function() {

    let sectionElements = document.getElementsByClassName('js-scroll-in-view'),
        viewEvents = new ViewEvents({elements:sectionElements});

    function isVisible(event) {
        console.log(event);
    }

    // add visibile listener
    for (let item of sectionElements) {
        item.addEventListener('is_visible', isVisible);
    }

})(
    // jQuery || {},
    // new ViewEvents({
    //     elements: document.getElementsByClassName('js-scroll-in-view')
    // })
);