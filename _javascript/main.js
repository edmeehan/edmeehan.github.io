import ChangeBackground from './modules/change_background';
import 'custom-event-polyfill';

const shadow = document.getElementById('page-shadow'),
  docEle = document.getElementById('document'),
  contactFields = document.querySelectorAll('#contact-form input, #contact-form textarea');

// section manager controls background and
// events when sections become visible
window.sections = new ChangeBackground(
  document.getElementsByClassName('js-scroll-in-view'),
  document.getElementById('page-background'),
  window.backgroundCount || 1,
);

function hideEndEvent({ target }) {
  // condtion out bubbled events
  if (this === target) {
    this.style.display = 'none';
    this.removeEventListener('transitionend', hideEndEvent);
    window.activeAside = null;
  }
}

function asideHideEvent({ detail: { target }, element }) {
  const aside = element || document.querySelector(target);
  // add listener for end of transition event
  aside.addEventListener('transitionend', hideEndEvent);
  // add classes to trigger animation
  aside.classList.remove('active');
  docEle.classList.remove('active');
  // locks body to prevent scrolling
  document.body.classList.remove('locked');
}

function asideShowEvent({ detail: { target }, element }) {
  const aside = element || document.querySelector(target),
    labelName = target.substring(1),
    eventName = `show-${labelName}`;

  // handle active aside first
  // - can also toggle
  if (window.activeAside) {
    if (aside === window.activeAside) return;
    asideHideEvent({ element: window.activeAside });
  }

  window.dataLayer.push({ 'event': eventName, 'event_label': labelName });

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

function loadContactScript() {
  const ref = document.getElementsByTagName('script')[0],
    script = document.createElement('script');

  script.src = window.contactScriptPath;
  ref.parentNode.insertBefore(script, ref);
  [...contactFields].forEach((field) => {
    field.removeEventListener('focus', loadContactScript);
  });
}

if (docEle) {
  docEle.addEventListener('aside.show', asideShowEvent);
  docEle.addEventListener('aside.hide', asideHideEvent);

  [...document.getElementsByClassName('js-aside-show')].forEach((asideShow) => {
    asideShow.addEventListener('click', () => {
      docEle.dispatchEvent(
        new CustomEvent('aside.show', {
          bubbles: false,
          detail: asideShow.dataset,
        })
      );
    });
  });

  [...document.getElementsByClassName('js-aside-hide')].forEach((asideHide) => {
    asideHide.addEventListener('click', () => {
      docEle.dispatchEvent(
        new CustomEvent('aside.hide', {
          bubbles: false,
          detail: asideHide.dataset,
        })
      );
    });
  });
}

if (shadow) {
  shadow.addEventListener('click', () => {
    if (window.activeAside) asideHideEvent({ element: window.activeAside });
  });
}

if (contactFields) {
  [...contactFields].forEach((field) => {
    field.addEventListener('focus', loadContactScript);
  });
}
