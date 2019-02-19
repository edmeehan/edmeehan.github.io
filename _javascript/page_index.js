(function() {
    'use strict';

    let intro = document.getElementById('intro'),
        services = document.getElementById('services'),

        // homepage scripts
        start_event = 'view_event_focus',
        end_event = 'view_event_blur',
        // intro
        intro_in = 'bounceIn',
        intro_out = 'bounceOut',
        // services
        services_in = 'bounceInRight',
        services_out = 'bounceOutLeft';

    if (intro) {
        intro.addEventListener(start_event, function(event){
            event.target.classList.add('animate','active',intro_in);
        });

        intro.addEventListener(end_event, function(event){
            event.target.classList.remove('active');
        });
    }

    if (services) {
        services.addEventListener(start_event, function(event){
            event.target.classList.add('animate','active',services_in);
        });

        services.addEventListener(end_event, function(event){
            event.target.classList.remove('active');
        });
    }

    // trigger event - an init event
    if (window.sections.active_section) window.sections.active_section.dispatchEvent(new CustomEvent(start_event, { bubbles: false }));

})();