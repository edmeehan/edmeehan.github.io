import SectionManager from './modules/sections_manager';

(function(sections) {
    'use strict';

    // section manager controls background and
    // events when sections become visible
    window.sections = sections;

    var hideEndEvent = function(event) {
        // condtion out bubbled events
        if(this === event.target){
            this.style.display = 'none';
            this.removeEventListener('transitionend', hideEndEvent);
            window.activeAside = null;
        }
    }

    var asideShowEvent = function({detail, element}) {
        let aside = element || document.querySelector(detail.target);
        
        // handle active aside first
        // - can also toggle
        if (window.activeAside) {
            if (aside === window.activeAside) return;
            asideHideEvent({element:window.activeAside});
        }

        window.activeAside = aside;

        aside.style.display = null;

        setTimeout(function(){
            //add classes to trigger animation
            aside.classList.add('active');
            docEle.classList.add('active');
            // locks body to prevent scrolling
            document.body.classList.add('locked');
        },50);
    }

    var asideHideEvent = function({detail, element}) {
        let aside = element || document.querySelector(detail.target);
        //add listener for end of transition event
        aside.addEventListener('transitionend', hideEndEvent);
        //add classes to trigger animation
        aside.classList.remove('active');
        docEle.classList.remove('active');
        // locks body to prevent scrolling
        document.body.classList.remove('locked');
    }

    let docEle = document.getElementById('document');
    if (docEle) {
        docEle.addEventListener('aside.show', asideShowEvent);
        docEle.addEventListener('aside.hide', asideHideEvent);

        for(let asideShow of document.getElementsByClassName('js-aside-show')){
            asideShow.addEventListener('click', function(event){
                docEle.dispatchEvent(new CustomEvent('aside.show', { bubbles: false, detail: this.dataset }));
            });
        }

        for(let asideHide of document.getElementsByClassName('js-aside-hide')){
            asideHide.addEventListener('click', function(event){
                docEle.dispatchEvent(new CustomEvent('aside.hide', { bubbles: false, detail: this.dataset }));
            });
        }
    }

    let shadow = document.getElementById('page-shadow');
    if (shadow) {
        shadow.addEventListener('click', function(event){
            if(window.activeAside) asideHideEvent({element:window.activeAside});
        })
    }
        
})(
    new SectionManager({
        sections: document.getElementsByClassName('js-scroll-in-view'),
        background: document.getElementById('page-background'),
        randomCeiling: window.backgroundCount || 1
    })
);