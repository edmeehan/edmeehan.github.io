import SectionManager from './modules/sections_manager';

(function() {
    'use strict';

    let headerToggle = document.getElementById('header-nav-toggle'),
        headerNav = document.getElementById('header-nav');

    function headerToggleEvent(event) {
        this.classList.toggle('active');
        if (headerNav) {
            headerNav.classList.toggle('active');
        }
    }

    function headerLinkEvent(event) {
        if(headerNav.classList.contains('active')){
            headerToggle.classList.remove('active');
            headerNav.classList.remove('active');
        };
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
    headerToggle.addEventListener('click', headerToggleEvent);

    for (let link of headerNav.getElementsByTagName('a')) {
        link.addEventListener('click', headerLinkEvent);
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