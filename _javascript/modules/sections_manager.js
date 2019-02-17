import "custom-event-polyfill";
import ViewEvents from './scrolling_in_view';

export default class {

    constructor(
        {sections, background, randomCeiling},
        eventLabel = 'view_event',
        backgroundClass = 'background',
        backgroundVisibleClass = 'visible',
        sectionActiveClass = 'active'
    ) {

        this.backgroundClass = backgroundClass;
        this.backgroundVisibleClass = backgroundVisibleClass;
        this.eventLabel = eventLabel;
        this.sectionsEle = sections;
        this.backgroundEle = background;
        this.viewEvents = new ViewEvents(sections, `${eventLabel}_visible`);
        this.randomCeiling = randomCeiling;
        this.prevRandom = null;
        this.sectionInFocus = null;
        this.sectionInFocusClass = sectionActiveClass;

        // add visibile listener
        for (let item of sections) {
            item.addEventListener(`${this.eventLabel}_visible`, this.isVisible.bind(this));
        }

        // init scroll to get started
        this.viewEvents.scroll();
    }

    get sections() {
        return this.sectionsEle;
    }

    get background() {
        return this.backgroundEle;
    }

    get active_section() {
        return this.sectionInFocus;
    }

    get view_event() {
        return this.viewEvents;
    }

    isVisible(event) {
        if (
            this.sectionInFocus !== event.target &&
            event.detail.element.top < event.detail.window.middle &&
            event.detail.element.bottom > event.detail.window.middle
        ) {
            // check if hass classList - not the null value form init
            if (this.sectionInFocus !== null) {
                this.sectionInFocus.dispatchEvent(new CustomEvent(`${this.eventLabel}_blur`, { bubbles: false }));
            }
            
            this.sectionInFocus = event.target;
            this.changeBackground();
            
            this.sectionInFocus.dispatchEvent(new CustomEvent(`${this.eventLabel}_focus`, { bubbles: false }));
        }        
    }

    changeBackground() {
        let div = document.createElement('div'),
            random;

        // get a new random number differnt from the last
        do
          random = Math.floor(Math.random() * this.randomCeiling) + 1;
        while (random === this.prevRandom);

        this.prevRandom = random;

        div.classList.add(this.backgroundClass, `${this.backgroundClass}__${random}`);

        // find and remove old backgrounds
        for (let children of this.backgroundEle.children) {
            children.classList.remove(`${this.backgroundClass}--${this.backgroundVisibleClass}`);
            children.addEventListener('transitionend', function(){
                this.remove();
            });
        }

        // add new background
        this.backgroundEle.appendChild(div);

        // add the class to trigger transition
        setTimeout(function(){
            div.classList.add(`${this.backgroundClass}--${this.backgroundVisibleClass}`);
        }.bind(this), 5);
    }
}