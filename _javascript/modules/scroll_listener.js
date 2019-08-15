class ScollListener {
  constructor() {
    // Utility variables for `requestAnimationFrame`
    this.rafId = undefined;
    this.rafActive = false;
    this.target = 0;
    this.callBack = () => {};
  }

  init(method) {
    this.callBack = method;
    // Listen for `scroll` event to update `target` scroll position
    window.addEventListener('scroll', this.scroll.bind(this));
    // init the whole mess
    this.startAnimation();
  }

  // bound to scroll event
  scroll() {
    this.target = window.scrollY || window.pageYOffset;
    this.startAnimation();
  }

  startAnimation() {
    if (!this.rafActive) {
      this.rafActive = true;
      this.rafId = requestAnimationFrame(this.updateAnimation.bind(this));
    }
  }

  updateAnimation() {
    this.callBack();
    this.rafActive = false;
    cancelAnimationFrame(this.rafId);
  }
}

export default new ScollListener();
