import SectionManager from './modules/sections_manager';

(function(sections) {
    'use strict';

    // section manager controls background and
    // events when sections become visible
    window.sections = sections;

    var asideShowEvent = function({detail, element}) {
        let aside = element || document.querySelector(detail.target),
            toggleClass = aside.dataset.toggleClass;
        toggleClass = toggleClass.split(' ') || [];
        toggleClass.push('active');
        
        // handle active aside first
        // - can also toggle
        if (window.activeAside) {
            if (aside === window.activeAside && detail.toggle === undefined) return;
            asideHideEvent({element:window.activeAside});
            if(detail.toggle === '' || detail.toggle === 'true') return;
        }

        window.activeAside = aside;
        //add classes to trigger animation
        aside.classList.add('active');
        for (let item of toggleClass) {
            docEle.classList.add(item);
        }
        // locks body to prevent scrolling
        document.body.classList.add('locked');
    }

    var asideHideEvent = function({detail, element}) {
        let aside = element || document.querySelector(detail.target),
            toggleClass = aside.dataset.toggleClass;
        toggleClass = toggleClass.split(' ') || [];
        toggleClass.push('active');
        // clear activeAside
        window.activeAside = null;
        //add classes to trigger animation
        aside.classList.remove('active');
        for (let item of toggleClass) {
            docEle.classList.remove(item);
        }
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
        
})(
    new SectionManager({
        sections: document.getElementsByClassName('js-scroll-in-view'),
        background: document.getElementById('page-background'),
        randomCeiling: window.backgroundCount || 1
    })
);