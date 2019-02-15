import SectionManager from './modules/sections_manager';

(function(sections) {
    'use strict';

    // section manager controls background and
    // events when sections become visible
    window.sections = sections;

    var getClosest = function(elem, selector) {
        for ( ; elem && elem !== document; elem = elem.parentNode ) {
            if ( elem.matches( selector ) ) return elem;
        }
        return null;
    };

    var getSibling = function (elem, selector) {
        return elem.parentElement.querySelector(selector);
    };

    var asideClosedEvent = function(event) {
        // condtion out bubbled events
        if(this === event.target){
            window.activeAside = null;
            this.style.zIndex = null;
            this.querySelector('.page__aside-content').style.display = 'none';
            this.removeEventListener('transitionend', asideClosedEvent);
        }
    }

    var asideToggleEvent = function (event) {
        let act = 'active',
            aside = getClosest(this, '.page__aside'), // aside element to display
            wrapper = getSibling(aside, '.page__wrapper'), // page wrapper to push around
            toggleClass = this.dataset.toggleClass,
            content = aside.querySelector('.page__aside-content');

        toggleClass = toggleClass.split(' ') || [];
        toggleClass.push(act);

        if(content && toggleClass && !aside.classList.contains(act) && !wrapper.classList.contains(act)){
            if(window.activeAside){
                console.log('aside active already - stuff is going to break');
            }
            // no state - so hack dat shit
            window.activeAside = aside;
            // make visible before transition
            content.style.display = null;
            //add classes to trigger animation
            aside.classList.add(act);
            aside.style.zIndex = 100;
            for (let item of toggleClass) {
                wrapper.classList.add(item);
            }
            // locks body to prevent scrolling
            document.body.classList.add('locked');
        } else {
            // hide visibility after transtion with listener
            aside.addEventListener('transitionend', asideClosedEvent);
            //remove classes to trigger transitions
            aside.classList.remove(act);
            for (let item of toggleClass) {
                wrapper.classList.remove(item);
            }
            // unlock body to allow scrolling
            document.body.classList.remove('locked');
        }
    }

    // aside toggle clicks
    for(let asideEle of document.getElementsByClassName('js-page-aside-toggle')){
        asideEle.addEventListener('click', asideToggleEvent);
    }
    
})(
    new SectionManager({
        sections: document.getElementsByClassName('js-scroll-in-view'),
        background: document.getElementById('page-background'),
        randomCeiling: window.backgroundCount || 1
    })
);