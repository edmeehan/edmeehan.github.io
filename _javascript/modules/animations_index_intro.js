import anime from 'animejs/lib/anime.es';

const defaults = {
    duration: 600,
    delay: 400,
    autoplay: false,
    easing: 'easeOutElastic(1, .8)',
  },
  contentIn = {
    delay: 500,
    duration: 900,
    rotate: [40, 0],
    opacity: [0, 1],
    easing: 'easeOutElastic'
  },
  contentOut = {
    duration: 600,
    rotate: [0, -40],
    opacity: [1, 0],
    easing: 'easeInQuint'
  };

class AnimationBlock {
  constructor(config, loopAni = false, contentAni = false) {
    // main animation
    this.config = { ...config, ...defaults };
    this.config.complete = (ani) => this.complete(ani);
    this.anime = anime(this.config);
    // loop animation - plays on complete of main
    this.loop = Array.isArray(loopAni) ? loopAni : [loopAni];
    // content animation
    this.content = contentAni;
    this.contentAnime = false;
  }
}

AnimationBlock.prototype.playIn = function playIn() {
  if (this.anime.reversed) this.anime.reverse();
  this.anime.play();
  if (this.content) {
    if (this.contentAnime) this.contentAnime.pause();
    this.contentAnime = anime({ ...this.content, ...contentIn });
  }
};

AnimationBlock.prototype.playOut = function playOut() {
  if (!this.anime.reversed) this.anime.reverse();
  this.anime.play();
  if (this.content) {
    if (this.contentAnime) this.contentAnime.pause();
    this.contentAnime = anime({ ...this.content, ...contentOut });
  }
};

AnimationBlock.prototype.complete = function complete(ani) {
  if (this.loop) {
    this.loop.forEach((item) => {
      if (item) {
        if (!ani.reversed) {
          item.play();
        } else {
          item.restart();
          item.pause();
        }
      }
    });
  }
};

export const welcome = new AnimationBlock(
  {
    targets: '#svg-emeehan',
    translateX: ['-20%', '-12%'],
    translateY: ['100%', '-2%'],
    scale: [0.5, 1.25],
    opacity: [1, 1],
  },
  false,
  {
    targets: '.intro__content--welcome .ani-block'
  }
);

export const origin = new AnimationBlock(
  {
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
      targets: '#waves .wave-left',
      translateX: '2%',
      opacity: [{ value: 1 }, { value: 0 }],
      delay: anime.stagger(800, { from: 'last' })
    }).add({
      targets: '#waves .wave-right',
      translateX: '-2%',
      opacity: [{ value: 1 }, { value: 0 }],
      delay: anime.stagger(800, { from: 'last' })
    }, '-=1400'),
    anime.timeline({
      duration: 300,
      easing: 'linear',
      autoplay: false,
    }).add({
      targets: '#pin',
      translateX: ['3%', '0%'],
      translateY: ['-18%', '0%'],
      opacity: [0, 1],
    }, 0).add({
      targets: '#pin-shadow',
      translateX: ['10%', '0%'],
      translateY: ['7%', '0%'],
      opacity: [0, 0.3],
    }, 0)
  ], {
    targets: '.intro__content--origin .ani-block',
  }
);

export const recreation = new AnimationBlock(
  {
    targets: '#svg-surf',
    translateX: ['-20%', '-5%'],
    translateY: ['100%', '0%'],
    scale: [0.5, 1.15],
    opacity: [1, 1],
  }, anime({
    targets: '#leash-hang',
    rotate: [5, -3],
    easing: 'easeInOutQuad',
    loop: true,
    direction: 'alternate',
    duration: 1200,
    autoplay: false,
  }), {
    targets: '.intro__content--recreation .ani-block'
  }
);

export const family = new AnimationBlock(
  {
    targets: '#svg-ali-tink',
    translateX: ['-20%', '-1%'],
    translateY: ['100%', '6%'],
    scale: [0.5, 1.05],
    opacity: [1, 1],
  }, [
    anime({
      targets: '#tink-tail',
      loop: true,
      easing: 'linear',
      direction: 'alternate',
      duration: 1400,
      endDelay: 1100,
      autoplay: false,
      rotate: [12, -2, 7, -2, 7, -2, 2, -2]
    }),
    anime({
      targets: '#tink-head',
      loop: true,
      easing: 'linear',
      direction: 'alternate',
      duration: 450,
      delay: 4200,
      endDelay: 500,
      rotate: 5,
      autoplay: false,
    }),
    anime({
      duration: 1000,
      endDelay: 1000,
      delay: 8000,
      easing: 'steps(1)',
      loop: true,
      autoplay: false,
      targets: '#ali-face-resting',
      opacity: 0
    }),
    anime({
      delay: 8000,
      duration: 1000,
      endDelay: 1000,
      easing: 'steps(1)',
      loop: true,
      autoplay: false,
      targets: '#ali-face-smile',
      opacity: [0, 1]
    })
  ], {
    targets: '.intro__content--family .ani-block'
  }
);
