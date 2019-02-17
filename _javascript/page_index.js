(function() {
    'use strict';

    let intro = document.getElementById('intro'),
        // about = document.getElementById('about'),
        services = document.getElementById('services'),
        // contact = document.getElementById('contact'),

        // homepage scripts
        start_event = 'view_event_focus',
        end_event = 'view_event_blur',
        // intro
        intro_in = 'bounceIn',
        intro_out = 'bounceOut',
        // about
        // about_in = 'bounceInLeft',
        // about_out = 'bounceOutRight',
        // services
        services_in = 'bounceInRight',
        services_out = 'bounceOutLeft';
        // contact
        // contact_in = 'bounceInLeft',
        // contact_out = 'bounceOutRight';

    if (intro) {
        intro.addEventListener(start_event, function(event){
            event.target.classList.add('animate','active',intro_in);
        });

        intro.addEventListener(end_event, function(event){
            event.target.classList.remove('active');
        });
    }

    // if (about) {
    //     about.addEventListener(start_event, function(event){
    //         event.target.classList.add('animate','active',about_in);
    //     });

    //     about.addEventListener(end_event, function(event){
    //         event.target.classList.remove('active');
    //     });
    // }

    if (services) {
        services.addEventListener(start_event, function(event){
            event.target.classList.add('animate','active',services_in);
        });

        services.addEventListener(end_event, function(event){
            event.target.classList.remove('active');
        });
    }

    // if (contact) {
    //     contact.addEventListener(start_event, function(event){
    //         event.target.classList.add('animate','active',contact_in);
    //     });

    //     contact.addEventListener(end_event, function(event){
    //         event.target.classList.remove('active');
    //     });
    // }

    // trigger event - an init event
    window.sections.active_section.dispatchEvent(new CustomEvent(start_event, { bubbles: false }));

})();