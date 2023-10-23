const form = document.querySelector('form');
const container1 = document.querySelector('.container');
const container2 = document.querySelector('.success');
const emailInput = document.getElementById('email');
const errorMessage = document.getElementById('email-error');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const emailValue = emailInput.value.trim();
    const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+/;

    if (emailValue === '' || !emailFormat.test(emailValue)) {
        
        errorMessage.classList.remove('hide');

        
        emailInput.classList.add('invalid');
    } else {
        container1.classList.add('hide');
        container2.classList.remove('hide');

       
        errorMessage.classList.add('hide');
        emailInput.classList.remove('invalid');
    }
});
