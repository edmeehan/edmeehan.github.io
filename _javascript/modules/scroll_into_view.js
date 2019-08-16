import 'custom-event-polyfill';

export default class {
  constructor(elements, eventLabel) {
    // Set arguments to properties
    this.eventLabel = eventLabel;
    this.elemArray = [...elements]; // convert nodelist or html collection to array
    // Utility variables for `requestAnimationFrame`
    this.rafId = undefined;
    this.rafActive = false;
    // Stuff
    this.target = 0;
    this.windowHeight = 0;
    // Add listeners and start this party
    window.addEventListener('scroll', this.scroll.bind(this));
    window.addEventListener('resize', this.resized.bind(this));
    // Now we are ready
    this.setup();
  }

  /**
   * getting dimensions info
   * and other layout information
   */
  setup() {
    this.windowHeight = window.innerHeight;
    this.target = window.scrollY || window.pageYOffset;

    this.startAnimation();
  }

  /**
   * Acts as a throttle for scrolling listener
   * checks to see if animation frame has been
   * requested and if so then let it handle the
   * callback
   */
  startAnimation() {
    if (!this.rafActive) {
      this.rafActive = true;
      this.rafId = requestAnimationFrame(this.updateAnimation.bind(this));
    }
  }

  /**
   * Request Animation Frame Callback
   * This is the work horse function
   * safe to place more complex logic
   * here - but don't be greedy
   */
  updateAnimation() {
    const height = this.windowHeight,
      half = (height / 2);
    // loops array and filters out visable elements
    // and adds some info to use in the UI
    this.elemArray.forEach((item) => {
      const rect = item.getBoundingClientRect(),
        isVisable = rect.top < height && rect.bottom > 0;
      let pixels;

      if (!isVisable) return false;

      // simple math to show % of visable element on screen
      pixels = height - rect.bottom;
      pixels = height - (rect.top > 0 ? rect.top : 0) - (pixels > 0 ? pixels : 0);

      item.dispatchEvent(
        new CustomEvent(this.eventLabel, {
          bubbles: false,
          detail: {
            node: (pixels / rect.height).toFixed(3) * 1,
            window: (pixels / height).toFixed(3) * 1,
            focused: rect.top < half && rect.bottom > half
          }
        })
      );

      return true;
    });

    this.rafActive = false;
    cancelAnimationFrame(this.rafId);
  }

  // bound to resize event
  resized() {
    this.setup();
  }

  // bound to scroll event
  scroll() {
    this.target = window.scrollY || window.pageYOffset;
    this.startAnimation();
  }
}
