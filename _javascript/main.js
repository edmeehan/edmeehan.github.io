import SectionManager from './sections_manager';
//import _ from 'lodash';

(function() {
    'use strict';

    let sections,
        // home page stuff
        intro = document.getElementById('intro'),
        about = document.getElementById('about'),
        services = document.getElementById('services'),
        contact = document.getElementById('contact');

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
                event.target.classList.add('active',intro_in);
            });

            intro.addEventListener(end_event, function(event){
                event.target.classList.add(intro_out);
            });
            
            intro.addEventListener('animationend', function (event) {
                event.target.classList.remove(event.animationName);

                if (event.animationName === intro_out && !event.target.classList.contains(intro_in)) {
                    event.target.classList.remove('active');
                }
            });
        }

        if (about) {
            about.addEventListener(start_event, function(event){
                event.target.classList.add('active',about_in);
            });

            about.addEventListener(end_event, function(event){
                event.target.classList.add(about_out);
            });
            
            about.addEventListener('animationend', function (event) {
                event.target.classList.remove(event.animationName);

                if (event.animationName === about_out && !event.target.classList.contains(about_in)) {
                    event.target.classList.remove('active');
                }
            });
        }

        if (services) {
            services.addEventListener(start_event, function(event){
                event.target.classList.add('active',services_in);
            });

            services.addEventListener(end_event, function(event){
                event.target.classList.add(services_out);
            });
            
            services.addEventListener('animationend', function (event) {
                event.target.classList.remove(event.animationName);

                if (event.animationName === services_out && !event.target.classList.contains(services_in)) {
                    event.target.classList.remove('active');
                }
            });
        }

        if (contact) {
            contact.addEventListener(start_event, function(event){
                event.target.classList.add('active',contact_in);
            });

            contact.addEventListener(end_event, function(event){
                event.target.classList.add(contact_out);
            });
            
            contact.addEventListener('animationend', function (event) {
                event.target.classList.remove(event.animationName);

                if (event.animationName === contact_out && event.target.classList.contains(contact_in)) {
                    event.target.classList.remove('active');
                }
            });
        }
    }
    
    // section manager controls background and events when sections become visible
    sections = new SectionManager({
        sections: document.getElementsByClassName('js-scroll-in-view'),
        background: document.getElementById('page-background'),
        randomCeiling: 8
    });
    
})();