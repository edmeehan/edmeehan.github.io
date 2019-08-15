export default class {
  constructor() {
    // Current scroll position
    this.current = 0;

    // Target scroll position
    this.target = 0;

    // Utility variables for `requestAnimationFrame`
    this.rafId = undefined;
    this.rafActive = false;

    // Listen for `resize` event to recalculate dimmensions
    window.addEventListener('resize', this.setup.bind(this));

    // Listen for `scroll` event to update `target` scroll position
    window.addEventListener('scroll', this.scroll.bind(this));

    // init the whole mess
    this.setup();
  }

  // used to calculate dimmensions
  setup() {
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
    console.log('running animation');
    // const diff = this.target - this.current;
    // const delta = 0;

    // if (delta) { // If `delta !== 0`
    //   // Update `current` scroll position
    //   this.current += delta;
    //   // Round value for better performance
    //   this.current = parseFloat(this.current.toFixed(2));
    //   // Call `update` again, using `requestAnimationFrame`
    //   this.rafId = requestAnimationFrame(this.updateAnimation);
    // } else { // If `delta === 0`
    //   // Update `current`, and finish the animation loop
    //   this.current = this.target;
      this.rafActive = false;
      cancelAnimationFrame(this.rafId);
    // }
  }
}
