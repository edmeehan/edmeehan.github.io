import SectionManager from './modules/sections_manager';

(function() {
    'use strict';

    function headerToggleEvent(event) {
        let content = document.getElementById('page-content');
        if (content) {
            this.classList.toggle('active');
            content.classList.toggle('active');
            document.body.classList.toggle('locked');
        }
    }

    function tabsEvent(event) {
        for (let tab_siblings of this.parentElement.children) {
            tab_siblings.classList.remove('active');
        }

        this.classList.add('active');

        let content = document.getElementById(this.dataset.target);

        for (let content_siblings of content.parentElement.children) {
            content_siblings.classList.remove('active');
        }

        content.classList.add('active');
    }

    // header nav toggle
    let headerToggle = document.getElementById('header-nav-toggle');

    if (headerToggle) {
        headerToggle.addEventListener('click', headerToggleEvent);
    }

    // tabs
    for (let tab of document.getElementsByClassName('js-tab')) {
        tab.addEventListener('click', tabsEvent);
    }
    
    // section manager controls background and events when sections become visible
    window.sections = new SectionManager({
        sections: document.getElementsByClassName('js-scroll-in-view'),
        background: document.getElementById('page-background'),
        randomCeiling: window.backgroundCount || 1
    });
    
})();