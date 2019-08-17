import anime from 'animejs/lib/anime.es';
import scroll from './modules/scroll_into_view';

const introScrollerNode = document.getElementById('intro-scroll'),
  introScrollerContentNodes = introScrollerNode.getElementsByClassName('intro__content');
let fakeScrollNode,
  contentNodeOfFocus = false;

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
    [...introScrollerContentNodes].forEach((item) => {
      const scrollShim = node.querySelector(`.${item.dataset.scroll}-shim`);
      scrollShim.style.height = `${item.getBoundingClientRect().height}px`;
    });
  } else {
    [...introScrollerContentNodes].reverse().forEach((item) => {
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
  const animationNodes = introScrollerNode.getElementsByClassName('ani-block'),
    computedStyles = getComputedStyle(introScrollerContentNodes[0]),
    leftMargin = parseInt(computedStyles.marginLeft, 0),
    leftPadding = parseInt(computedStyles.paddingLeft, 0);

  // setting transform origin for animation blocks
  [...animationNodes].forEach((item) => {
    item.style.transformOrigin = `-${(leftMargin / 2) + leftPadding}px 50%`;
  });
};

/**
 * triggers the play into focus animation
 * @param {String} scrollName name of animation
 */
const playIntoFocus = (scrollName) => {
  console.log('play in', scrollName);
};

/**
 * triggers the play out of focus animation
 * @param {String} scrollName name of animation
 */
const playOutOfFocus = (scrollName) => {
  console.log('play out', scrollName);
};

/**
 * attached to scroll listener and fires when
 * dom node is visible on screen
 * @param {Event} event listener object
 */
const introScrollerVisibleListener = (event) => {
  const name = event.target.dataset.scroll;
  if (event.detail.focused && name !== contentNodeOfFocus) {
    playIntoFocus(name);
    if (contentNodeOfFocus) playOutOfFocus(contentNodeOfFocus);
    contentNodeOfFocus = name;
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
  // setup the scroller and listeners
  scroll.add(fakeScrollNode.children);
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


// scroll.add(document.querySelectorAll('.intro'));
// scroll.add(document.getElementsByClassName('js-scroll-in-view'));

// [...sections].forEach((item) => {
//   item.addEventListener(scroll.event, this.isVisible.bind(this));
// });

// window.addEventListener('resize', setup);

/*
anime.timeline({
  targets: '.intro__content--welcome .ani-block',
}).add({
  delay: 400,
  duration: 1400,
  rotate: [40, 0],
  opacity: [0, 1],
  easing: 'easeOutElastic'
}).add({
  delay: 3000,
  duration: 800,
  rotate: -40,
  opacity: 0,
  easing: 'easeInQuint'
});

const intro = document.getElementById('intro'),
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
  intro.addEventListener(start_event, (event) => {
    event.target.classList.add('animate', 'active', intro_in);
  });

  intro.addEventListener(end_event, (event) => {
    event.target.classList.remove('active');
  });
}

if (services) {
  services.addEventListener(start_event, (event) => {
    event.target.classList.add('animate', 'active', services_in);
  });

  services.addEventListener(end_event, (event) => {
    event.target.classList.remove('active');
  });
}

// trigger event - an init event
if (window.sections.active_section) {
  window.sections.active_section.dispatchEvent(
    new CustomEvent(start_event, { bubbles: false })
  );
}

// Animations Below - its going to get ugly
const animations = [];

animations.push(
  anime.timeline({
    duration: 2800,
    easing: 'linear',
    loop: true,
    autoplay: false,
  }).add({
    targets: '#wave-7',
    translateX: '2%',
    opacity: [{ value: 1 }, { value: 0 }],
  }).add({
    targets: '#wave-8',
    translateX: '2%',
    endDelay: 5000,
    opacity: [{ value: 1 }, { value: 0 }],
  }, '-=800')
);

animations.push(
  anime.timeline({
    duration: 2800,
    easing: 'linear',
    loop: true,
    autoplay: false,
  }).add({
    targets: '#wave-3',
    translateX: '2%',
    delay: 3000,
    opacity: [{ value: 1 }, { value: 0 }],
  }).add({
    targets: '#wave-4',
    translateX: '2%',
    endDelay: 8000,
    opacity: [{ value: 1 }, { value: 0 }],
  }, '-=800')
);

animations.push(
  anime.timeline({
    duration: 2800,
    easing: 'linear',
    loop: true,
    autoplay: false,
  }).add({
    targets: '#wave-5',
    translateX: '-2%',
    delay: 1200,
    opacity: [{ value: 1 }, { value: 0 }],
  }).add({
    targets: '#wave-6',
    translateX: '-2%',
    endDelay: 3000,
    opacity: [{ value: 1 }, { value: 0 }],
  }, '-=800')
);

animations.push(
  anime.timeline({
    duration: 2800,
    easing: 'linear',
    loop: true,
    autoplay: false,
  }).add({
    targets: '#wave-1',
    translateX: '-2%',
    delay: 2200,
    opacity: [{ value: 1 }, { value: 0 }],
  }).add({
    targets: '#wave-2',
    translateX: '-2%',
    endDelay: 9000,
    opacity: [{ value: 1 }, { value: 0 }],
  }, '-=800')
);

animations.push(
  anime.timeline({
    duration: 400,
    easing: 'linear',
    autoplay: false,
    direction: 'reverse',
    endDelay: 1500,
  }).add({
    targets: '#pin',
    translateX: '3%',
    translateY: '-18%',
    opacity: 0,
    // delay: 1500,
  }, 0).add({
    targets: '#pin-shadow',
    translateX: '10%',
    translateY: '7%',
    opacity: 0,
  }, 0)
);


let island = anime({
  targets: '.svg-canvas',
  delay: 800,
  duration: 1500,
  translateX: ['-20%', '-3%'],
  translateY: ['100%', '-2%'],
  scale: [0.5, 1.1],
  easing: 'easeOutElastic(1, .8)',
  complete: (anim) => {
    animations.forEach((item) => {
      item.play();
    });
  }
});

anime({
    targets: '#leash-hang',
    rotate: [
        5,
        -3,
    ],
    easing: 'easeInOutQuad',
    loop: true,
    direction: 'alternate',
    duration: 1200,
})

anime({
    targets: '#tink-tail',
    loop: true,
    easing: 'linear',
    direction: 'alternate',
    duration: 1400,
    endDelay: 1100,
    rotate: [
        12,
        -2,
        7,
        -2,
        7,
        -2,
        2,
        -2
    ]
})

anime({
    targets: '#tink-head',
    loop: true,
    easing: 'linear',
    direction: 'alternate',
    duration: 450,
    delay: 4200,
    endDelay: 500,
    rotate: 5,
})

let faceResting = document.getElementById('ali-face-resting');
let faceSmile = document.getElementById('ali-face-smile');

let smile = () => {
    faceSmile.style.opacity = 1;
    faceResting.style.opacity = 0;
    setTimeout(resting, 2000);
}

let resting = () => {
    faceSmile.style.opacity = 0;
    faceResting.style.opacity = 1;
    setTimeout(smile, 12000);
}

setTimeout(smile, 6000);

*/
