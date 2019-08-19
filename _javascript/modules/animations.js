import anime from 'animejs/lib/anime.es';

const defaults = {
  duration: 600,
  delay: 400,
  autoplay: false,
  easing: 'easeOutElastic(1, .8)',
};

class AnimationBlock {
  constructor(config, loopAni, contentAni) {
    this.config = { ...config, ...defaults };
    this.config.complete = (ani) => this.complete(ani);
    this.loop = loopAni;
    this.content = contentAni;
    this.anime = anime(this.config);
  }
}

AnimationBlock.prototype.playIn = function playIn() {
  if (this.anime.reversed) this.anime.reverse();
  this.anime.play();
};

AnimationBlock.prototype.playOut = function playOut() {
  if (!this.anime.reversed) this.anime.reverse();
  this.anime.play();
};

AnimationBlock.prototype.complete = function complete(ani) {
  console.log('prototype complete', this);
};

export const welcome = new AnimationBlock({
  targets: '#svg-emeehan',
  translateX: ['-20%', '-12%'],
  translateY: ['100%', '-2%'],
  scale: [0.5, 1.25],
  opacity: [1, 1],
});

export const origin = new AnimationBlock({
  targets: '#svg-hawaii',
  translateX: ['-20%', '-8%'],
  translateY: ['100%', '7%'],
  scale: [0.5, 1.1],
  opacity: [1, 1],
}, [
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
  }, '-=800'),

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
  }, '-=800'),

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
  }, '-=800'),

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
  }, '-=800'),

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
]);

origin.complete = function complete(ani) {
  this.loop.forEach((item) => {
    if (!ani.reversed) {
      item.play();
    } else {
      item.pause();
    }
  });
};

export const recreation = new AnimationBlock({
  targets: '#svg-surf',
  translateX: ['-20%', '-5%'],
  translateY: ['100%', '0%'],
  scale: [0.5, 1.15],
  opacity: [1, 1],
});

export const family = new AnimationBlock({
  targets: '#svg-ali-tink',
  translateX: ['-20%', '-1%'],
  translateY: ['100%', '6%'],
  scale: [0.5, 1.05],
  opacity: [1, 1],
});

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

// Animations Below - its going to get ugly
const animations = [];




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
