import scroll from './scroll_into_view';

export default class {
  constructor(sections, background, randomCeiling) {
    // Set arguments to properties
    this.backgroundEle = background;
    this.randomCeiling = randomCeiling;
    // some other properties
    this.prevRandom = null;
    this.sectionInFocus = null;
    // add the elements to watch to start firing events
    scroll.add(sections);
    // add visibile listener
    [...sections].forEach((item) => {
      item.addEventListener(scroll.event, this.isVisible.bind(this));
    });
  }

  get active_section() {
    return this.sectionInFocus;
  }

  /**
   * bound to custom event listener
   * called when element comes into view
   */
  isVisible({ target, detail: { focused } }) {
    if (this.sectionInFocus !== target && focused) {
      this.sectionInFocus = target;
      this.changeBackground();
    }
  }

  /**
   * changes background graphic by random
   * TODO: maybe make more options here and break up
   */
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
