import SectionManager from './modules/sections_manager';

// section manager controls background and
// events when sections become visible
window.sections = new SectionManager(
  document.getElementsByClassName('js-scroll-in-view'),
  document.getElementById('page-background'),
  window.backgroundCount || 1,
);

const docEle = document.getElementById('document');
if (docEle) {
  docEle.addEventListener('aside.show', asideShowEvent);
  docEle.addEventListener('aside.hide', asideHideEvent);

  for (let asideShow of document.getElementsByClassName('js-aside-show')) {
    asideShow.addEventListener('click', function(event) {
      docEle.dispatchEvent(
        new CustomEvent('aside.show', {
          bubbles: false,
          detail: this.dataset,
        })
      );
    });
  }

  for (let asideHide of document.getElementsByClassName('js-aside-hide')) {
    asideHide.addEventListener('click', function(event) {
      docEle.dispatchEvent(
        new CustomEvent('aside.hide', {
          bubbles: false,
          detail: this.dataset,
        })
      );
    });
  }
}

const shadow = document.getElementById('page-shadow');
if (shadow) {
  shadow.addEventListener('click', () => {
    if (window.activeAside) asideHideEvent({ element: window.activeAside });
  });
}

function hideEndEvent(event) {
  // condtion out bubbled events
  if (this === event.target) {
    this.style.display = 'none';
    this.removeEventListener('transitionend', hideEndEvent);
    window.activeAside = null;
  }
}

function asideHideEvent({ detail, element }) {
  const aside = element || document.querySelector(detail.target);
  // add listener for end of transition event
  aside.addEventListener('transitionend', hideEndEvent);
  // add classes to trigger animation
  aside.classList.remove('active');
  docEle.classList.remove('active');
  // locks body to prevent scrolling
  document.body.classList.remove('locked');
}

function asideShowEvent({ detail, element }) {
  const aside = element || document.querySelector(detail.target);

  // handle active aside first
  // - can also toggle
  if (window.activeAside) {
    if (aside === window.activeAside) return;
    asideHideEvent({ element: window.activeAside });
  }

  window.activeAside = aside;

  aside.style.display = null;

  setTimeout(() => {
    // add classes to trigger animation
    aside.classList.add('active');
    docEle.classList.add('active');
    // locks body to prevent scrolling
    document.body.classList.add('locked');
  }, 50);
}
