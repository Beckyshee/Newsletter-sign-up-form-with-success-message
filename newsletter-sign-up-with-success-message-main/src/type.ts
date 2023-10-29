const EMAIL_REGEX: RegExp = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

const email: HTMLInputElement | null = document.querySelector('#email');
const form: HTMLFormElement | null = document.querySelector('#form');
const formFeedback: HTMLParagraphElement | null = document.querySelector('.form__feedback');
const newsletter: HTMLDivElement | null = document.querySelector('.newsletter');
const feedback: HTMLDivElement | null = document.querySelector('.feedback');
const btnFeedback: HTMLButtonElement | null = document.querySelector('#feedback-btn');

if (form && email && formFeedback && newsletter && feedback && btnFeedback) {
  form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    if (!email.value) {
      if (formFeedback) {
        formFeedback.textContent = 'Email is required';
      }
      if (email) {
        email.classList.add('form__input--invalid');
      }
      return;
    }

    if (email && !EMAIL_REGEX.test(email.value)) {
      if (formFeedback) {
        formFeedback.textContent = 'Valid email required';
      }
      if (email) {
        email.classList.add('form__input--invalid');
      }
      return;
    }

    if (newsletter) {
      newsletter.classList.add('is-hide');
    }
    if (feedback) {
      feedback.classList.remove('is-hide');
    }
  });

  if (btnFeedback) {
    btnFeedback.addEventListener('click', () => {
      if (feedback) {
        feedback.classList.add('is-hide');
      }
      if (newsletter) {
        newsletter.classList.remove('is-hide');
      }
    });
  }
}
