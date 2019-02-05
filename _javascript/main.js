import SectionManager from './sections_manager';
//import _ from 'lodash';

(function() {
    'use strict';

    let sections = new SectionManager({
        sections: document.getElementsByClassName('js-scroll-in-view'),
        background: document.getElementById('page-background'),
        randomCeiling: 8
    });
    
})();