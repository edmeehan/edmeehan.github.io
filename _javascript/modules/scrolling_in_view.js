export default class {

    constructor ( elements, eventLabel ) {
        let that = this,
            raf = window.requestAnimationFrame;

        // set some property values
        this.eventLabel = eventLabel;
        this.elements = elements;
        this.boundaryArray = [];
        this.scrollTop = window.scrollY || window.pageYOffset;
        
        // if we have scroll elements, then lets do this.
        if (elements.length > 0) {
            // call function to get some measurements        
            this.resized();

            // resize listener
            window.addEventListener('resize', (event) => {
                this.resized();
            });

            if (raf) loop();
        }

        function loop() {
            let scrollTop = window.scrollY || window.pageYOffset;

            if (that.scrollTop === scrollTop) {
                raf(loop);
                return;
            } else {
                that.scrollTop = scrollTop;
                that.scroll();
                raf(loop);
            }
        }
    }

    get boundary() {
        return this.boundaryArray;
    }

    resized() {
        this.windowHeight = window.innerHeight;
        this.windowHalf = Math.round(this.windowHeight * 0.5);
        this.documentHeight = document.body.offsetHeight;
        this.documentHalf = Math.round(this.documentHeight * 0.5);
        this.measure();
    }

    measure(updatedElements) {
        if (updatedElements && Array.isArray(updatedElements)) {
            this.elements = updatedElements;
        }
        for (let i = this.elements.length; i--;) {
            let top = this.elements[i].offsetTop,
                height = this.elements[i].offsetHeight,
                bottom = top + height;

            this.boundaryArray[i] = {
                top,
                height,
                bottom,
                index: i
            };
        }
    }

    scroll() {
        // clone array
        let elements = this.boundaryArray.slice(0),
            flipped = false,
            scrollBottom = this.scrollTop + this.windowHeight,
            windowMiddle = this.scrollTop + this.windowHalf,
            visibility;
        // check how far we scrolled - and flip the array to make
        // searching faster
        if ((this.scrollTop + this.windowHalf) < this.documentHalf) {
            flipped = true;
            elements.reverse();
        }

        for (let i = elements.length; i--;) {
            // check if all other elements our out of the window
            // and exit the loop to save some resources
            if (flipped && scrollBottom < elements[i].top) break;
            if (!flipped && this.scrollTop > elements[i].bottom) break;
            // okay now check if the element is visible and by how much

            // in order to be visible these basic rules must be true
            if (elements[i].top < scrollBottom && elements[i].bottom > this.scrollTop) {

                if (elements[i].top < this.scrollTop) {
                    if (elements[i].bottom < scrollBottom) {
                        // visible but off the top
                        visibility = 'top';
                    } else {
                        // visible but bigger then screen
                        visibility = 'large';
                    }
                } else {
                    if (elements[i].bottom < scrollBottom) {
                        // visible but smaller then screen
                        visibility = 'small';
                    } else {
                        // visible but off bottom
                        visibility = 'bottom';
                    }
                }

                this.elements[elements[i].index].dispatchEvent(new CustomEvent(this.eventLabel, {
                    bubbles: false,
                    detail: {
                        visibility,
                        window: {
                            top: this.scrollTop,
                            bottom: scrollBottom,
                            middle: windowMiddle,
                            height: this.windowHeight,
                        },
                        element: {
                            top: elements[i].top,
                            bottom: elements[i].bottom,
                            height: elements[i].height
                        }
                    }
                }));
            }
        }
    }
}