import SectionManager from './modules/sections_manager';

(function(sections) {
    'use strict';

    // section manager controls background and events when sections become visible
    window.sections = sections;

    function asideToggleEvent(event) {
        console.log(event);
        // let content = document.getElementById('page-content');
        // if (content) {
        //     this.classList.toggle('active');
        //     content.classList.toggle('active');
        //     document.body.classList.toggle('locked');
        // }
    }

    // aside toggle clicks
    for(let aside of document.getElementsByClassName('js-page-aside-toggle')){
        aside.addEventListener('click', asideToggleEvent);
    }
    
})(
    new SectionManager({
        sections: document.getElementsByClassName('js-scroll-in-view'),
        background: document.getElementById('page-background'),
        randomCeiling: window.backgroundCount || 1
    })
);