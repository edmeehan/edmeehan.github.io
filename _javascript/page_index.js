import scroll from './modules/scroll_into_view';
import * as ani from './modules/animations';

const introScrollerNode = document.getElementById('intro-scroll'),
  introScrollerContentNodes = introScrollerNode.getElementsByClassName('intro__content'),
  isMobileMQ = window.matchMedia('(max-width: 767px)');
let fakeScrollNode,
  contentNodeOfFocus = false,
  wrapperFixed = true;

/**
 * we need to build a block to displace for our scroller
 * this function will make it or modify the node if passed
 * back as an argument
 * @param {Element} node prepFake DOM node
 * @returns {Element} prepFake DOM node
 */
const prepFakeScroll = (node) => {
  const fakeScroll = node || document.createElement('div');
  // build the scroll height from the content
  if (node) {
    [...introScrollerContentNodes].forEach((item, index) => {
      const scrollShim = node.children[index];
      scrollShim.style.height = `${item.getBoundingClientRect().height}px`;
    });
  } else {
    [...introScrollerContentNodes].forEach((item) => {
      const scrollShim = document.createElement('div');
      scrollShim.style.height = `${item.getBoundingClientRect().height}px`;
      scrollShim.className = 'scroll-shim';
      scrollShim.dataset.scroll = item.dataset.scroll;
      fakeScroll.appendChild(scrollShim);
    });
  }
  // only if node was not passed to we insert in DOM
  if (!node) {
    fakeScroll.className = 'hidden';
    introScrollerNode.appendChild(fakeScroll);
  }
  // just return the element node, because why not
  return fakeScroll;
};

/**
 * we need to do some prep for animations
 * like moving the transform origin location
 * and other things
 */
const prepForAnimation = () => {
  const animationNodes = introScrollerNode.getElementsByClassName('ani-block');

  // check if mobile break point
  // if not mobile then do some math
  if (!isMobileMQ.matches) {
    const computedStyles = getComputedStyle(introScrollerContentNodes[0]),
      leftMargin = parseInt(computedStyles.marginLeft, 0),
      leftPadding = parseInt(computedStyles.paddingLeft, 0);

    // setting transform origin for animation blocks
    [...animationNodes].forEach((item) => {
      item.style.transformOrigin = `-${(leftMargin / 2) + leftPadding}px 50%`;
    });
  } else { // else lets do some stuff for the mobile layout
    [...animationNodes].forEach((item) => {
      item.style.transformOrigin = '50% -100px';
    });
  }
};

/**
 * attached to scroll listener and fires when
 * dom node is visible on screen
 * @param {Event} event listener object
 */
const introScrollerVisibleListener = (event) => {
  const name = event.target.dataset.scroll;
  // controls which scroll element is in focus
  // we do some class toggles to make text and buttons clickable
  if (event.detail.focused && name !== contentNodeOfFocus) {
    if (contentNodeOfFocus) {
      introScrollerNode.querySelector(`[data-scroll="${contentNodeOfFocus}"]`).classList.remove('intro__content--focus');
      ani[contentNodeOfFocus].playOut();
    }
    contentNodeOfFocus = name;
    introScrollerNode.querySelector(`[data-scroll="${name}"]`).classList.add('intro__content--focus');
    ani[name].playIn();
  }
  // when we scroll off screen we need to switch from
  // position fixed so the elements will go off screen
  if (event.target === fakeScrollNode.lastChild) {
    if (event.detail.rect.bottom <= event.detail.rect.height && wrapperFixed) {
      wrapperFixed = false;
      introScrollerNode.classList.add('intro--not-fixed');
    }
    if (event.detail.rect.bottom > event.detail.rect.height && !wrapperFixed) {
      wrapperFixed = true;
      introScrollerNode.classList.remove('intro--not-fixed');
    }
  }
};

/**
 * something changed so we need to
 * figure out the new dimensions
 */
const recalculate = () => {
  prepFakeScroll(fakeScrollNode);
  prepForAnimation();
};

/**
 * this is what gets the whole party started!
 */
const init = () => {
  fakeScrollNode = prepFakeScroll();
  prepForAnimation();
  // setup the scroller events
  scroll.add(fakeScrollNode.children);
  // setup the scroller listeners
  [...fakeScrollNode.children].forEach((item) => {
    item.addEventListener(scroll.event, introScrollerVisibleListener);
  });
  // listen for change to recalculate
  window.addEventListener('resize', recalculate);
};

/**
 * must be at bottom
 * this kicks off the party!
 */
init();
