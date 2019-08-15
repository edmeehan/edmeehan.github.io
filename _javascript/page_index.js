import anime from 'animejs/lib/anime.es';

const introScrollEle = document.getElementById('intro-scroll'),
  introScrollWrapperEle = introScrollEle.getElementsByClassName('intro__content'),
  introScrollBlockEle = introScrollEle.getElementsByClassName('ani-block'),
  fakeScroll = document.createElement('div');

function setup() {
  const height = (
      introScrollWrapperEle[0].getBoundingClientRect().height * introScrollWrapperEle.length
    ),
    computedStyles = getComputedStyle(introScrollWrapperEle[0]),
    leftMargin = parseInt(computedStyles.marginLeft, 0),
    leftPadding = parseInt(computedStyles.paddingLeft, 0);

  // eslint-disable-next-line no-restricted-syntax
  for (const item of introScrollBlockEle) {
    item.style.transformOrigin = `-${(leftMargin / 2) + leftPadding}px 50%`;
  }

  fakeScroll.style.height = `${height}px`;
}

// setup fakeScroll element
fakeScroll.className = 'hidden';
introScrollEle.appendChild(fakeScroll);

setup();
window.addEventListener('resize', setup);

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

/*
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
*/

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

/*

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
