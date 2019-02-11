import SectionManager from './modules/sections_manager';

(function() {
    'use strict';

    let sections,
        headerToggle = document.getElementById('header-nav-toggle'),
        headerNav = document.getElementById('header-nav'),
        tabs = document.getElementsByClassName('js-tab');

    // header nav toggle
    {
        headerToggle.addEventListener('click', function(event){
            this.classList.toggle('active');
            if (headerNav) {
                headerNav.classList.toggle('active');
            }
        });

        for (let link of headerNav.getElementsByTagName('a')) {
            link.addEventListener('click', function(){
                if(headerNav.classList.contains('active')){
                    headerToggle.classList.remove('active');
                    headerNav.classList.remove('active');
                };
            })
        }
    }

    // tabs
    {
        for (let tab of tabs) {
            tab.addEventListener('click', function(event){
                for (let tab_siblings of this.parentElement.children) {
                    tab_siblings.classList.remove('active');
                }

                this.classList.add('active');

                let content = document.getElementById(this.dataset.target);

                for (let content_siblings of content.parentElement.children) {
                    content_siblings.classList.remove('active');
                }

                content.classList.add('active');
                
            });
        }
    }
    
    // section manager controls background and events when sections become visible
    sections = new SectionManager({
        sections: document.getElementsByClassName('js-scroll-in-view'),
        background: document.getElementById('page-background'),
        randomCeiling: window.backgroundCount || 1
    });
    
})();