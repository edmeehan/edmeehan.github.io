import SectionManager from './sections_manager';
//import _ from 'lodash';

(function() {
    'use strict';

    let sections,
        // home page stuff
        intro = document.getElementById('intro'),
        about = document.getElementById('about'),
        services = document.getElementById('services'),
        contact = document.getElementById('contact'),
        tabs = document.getElementsByClassName('js-tab');

    function headerNavUpdate(element){
        let target = document.getElementById('header-link-' + element.id),
            links = document.querySelectorAll('.site-header__nav-links > li');

        for(let link of links){
            link.classList.remove('active');
        }

        if (target) {
            target.classList.add('active');
        }
        
    };

    // homepage scripts
    {
        let start_event = 'view_event_focus',
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
            intro.addEventListener(start_event, function(event){
                event.target.classList.add('animate','active',intro_in);
                headerNavUpdate(this);
            });

            intro.addEventListener(end_event, function(event){
                event.target.classList.remove('active');
            });
            
        }

        if (about) {
            about.addEventListener(start_event, function(event){
                event.target.classList.add('animate','active',about_in);
                headerNavUpdate(this);
            });

            about.addEventListener(end_event, function(event){
                event.target.classList.remove('active');
            });
            
        }

        if (services) {
            services.addEventListener(start_event, function(event){
                event.target.classList.add('animate','active',services_in);
                headerNavUpdate(this);
            });

            services.addEventListener(end_event, function(event){
                event.target.classList.remove('active');
            });
            
        }

        if (contact) {
            contact.addEventListener(start_event, function(event){
                event.target.classList.add('animate','active',contact_in);
                headerNavUpdate(this);
            });

            contact.addEventListener(end_event, function(event){
                event.target.classList.remove('active');
            });
            
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
        randomCeiling: 7
    });
    
})();