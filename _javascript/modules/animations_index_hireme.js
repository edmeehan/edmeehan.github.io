import anime from 'animejs/lib/anime.es';

const defaults = {
  duration: 1400,
  opacity: [0, 1],
  autoplay: false
};

class AnimationBlock {
  constructor(config) {
    this.config = { ...config, ...defaults };
    // this.config.complete = (ani) => this.complete(ani);
    this.anime = anime(this.config);
  }
}

AnimationBlock.prototype.play = function play() {
  if (!this.started) this.anime.play();
};

// AnimationBlock.prototype.complete = function complete(ani) {
//   // console.log(ani);
// };

export const intro = new AnimationBlock({
  targets: '.hireme__intro > *',
  translateY: ['25px', 0],
  scale: [1.1, 1],
  delay: anime.stagger(500)
});

export const notes = new AnimationBlock({
  targets: '.hireme__notes-item',
  translateY: ['25px', 0],
  scale: [1.5, 1],
  delay: anime.stagger(250)
});

export const frontend = new AnimationBlock({
  targets: '.hireme__frontend > *',
  translateY: ['25px', 0],
  scale: [1.5, 1],
  delay: anime.stagger(250)
});

export const cro = new AnimationBlock({
  targets: '.hireme__cro > *',
  translateY: ['25px', 0],
  scale: [1.5, 1],
  delay: anime.stagger(250)
});

export const ga = new AnimationBlock({
  targets: '.hireme__ga > *',
  translateY: ['25px', 0],
  scale: [1.5, 1],
  delay: anime.stagger(250)
});
