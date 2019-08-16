import ViewEvents from './scroll_into_view';

export default class {
  constructor(sections, background, randomCeiling) {
    const event = 'view_event_visible';
    // Set arguments to properties
    this.sectionsArray = [...sections];
    this.backgroundEle = background;
    this.randomCeiling = randomCeiling;
    // some other properties
    this.prevRandom = null;
    this.sectionInFocus = null;
    // set the events
    this.viewEvents = new ViewEvents(sections, event);
    // add visibile listener
    this.sectionsArray.forEach((item) => {
      item.addEventListener(event, this.isVisible.bind(this));
    });
  }

  get sections() {
    return this.sectionsArray;
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
    if (this.sectionInFocus !== event.target && event.detail.focused) {
      this.sectionInFocus = event.target;
      this.changeBackground();
    }
  }

  changeBackground() {
    const div = document.createElement('div'),
      backgroundClass = 'background',
      backgroundVisibleClass = 'background--visible';
    let random;

    // get a new random number differnt from the last
    do random = Math.floor(Math.random() * this.randomCeiling) + 1;
    while (random === this.prevRandom);

    this.prevRandom = random;

    // find and remove old backgrounds element when
    // transition has finished
    [...this.backgroundEle.children].forEach((child) => {
      child.classList.remove(backgroundVisibleClass);
      child.addEventListener('transitionend', (item) => {
        item.target.remove();
      });
    });

    // add new background
    div.classList.add(backgroundClass, `${backgroundClass}__${random}`);
    this.backgroundEle.appendChild(div);

    // add the class to trigger transition
    setTimeout(() => {
      div.classList.add(backgroundVisibleClass);
    }, 5);
  }
}
