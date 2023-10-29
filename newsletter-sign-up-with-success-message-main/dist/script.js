const EMAIL_REGUEX = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/

const email = document.querySelector('#email')
const form = document.querySelector('#form')
const formFeedback = document.querySelector('.form__feedback')
const newsletter = document.querySelector('.newsletter')
const feedback = document.querySelector('.feedback')
const btnFeedback = document.querySelector('#feedback-btn')

form.addEventListener('submit', (event) => {
  event.preventDefault()

  if(!email.value) {
    formFeedback.textContent = 'Email is required'
    email.classList.add('form__input--invalid')
    return
  }

  if(!EMAIL_REGUEX.test(email.value)) {
    formFeedback.textContent = 'Valid email required'
    email.classList.add('form__input--invalid')
    return
  }

  newsletter.classList.add('is-hide')
  feedback.classList.remove('is-hide')
})

btnFeedback.addEventListener('click', () => {
  feedback.classList.add('is-hide')
  newsletter.classList.remove('is-hide')
})