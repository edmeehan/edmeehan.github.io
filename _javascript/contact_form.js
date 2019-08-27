import axios from 'axios';

const contactForm = document.getElementById('contact-form'),
  formClass = 'form--';
let formData;

function form_response(isSuccess) {
  const wrapper = document.createElement('div'),
    headline = document.createElement('h3'),
    message = document.createElement('p');
    // button = document.createElement('button');

  wrapper.classList.add('form__response-message');

  headline.appendChild(
    document.createTextNode(isSuccess ? 'Thanks for the message!' : 'Oops!?!')
  );

  message.appendChild(
    document.createTextNode(
      isSuccess
        ? 'I will do my best to responde withen 24 hours.'
        : 'Something went wrong, please try again later or give me a call.'
    )
  );

  wrapper.appendChild(headline);
  wrapper.appendChild(message);
  contactForm.appendChild(wrapper);

  setTimeout(() => {
    wrapper.classList.add('active');
  }, 10);
}

function form_submit(event) {
  event.preventDefault();
  formData = new FormData(contactForm);

  // set visual pending
  contactForm.classList.add(`${formClass}pending`);

  axios
    .post(contactForm.getAttribute('action'), formData)
    .then((response) => {
      window.dataLayer.push({ 'event': 'contact-form-success', 'event_label': 'success' });
      contactForm.classList.add(`${formClass}success`);
      contactForm.classList.remove(`${formClass}pending`);
      form_response(true);
    })
    .catch((error) => {
      window.dataLayer.push({ 'event': 'contact-form-fail', 'event_label': 'fail' });
      contactForm.classList.add(`${formClass}fail`);
      contactForm.classList.remove(`${formClass}pending`);
      form_response(false);
    });
}

if (contactForm) contactForm.addEventListener('submit', form_submit, false);
