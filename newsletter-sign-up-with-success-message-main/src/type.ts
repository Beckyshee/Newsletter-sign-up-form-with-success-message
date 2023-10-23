// const myForm = document.querySelector('form') as HTMLFormElement;
// const container1 = document.querySelector('.container') as HTMLElement;
// const container2 = document.querySelector('.success') as HTMLElement;

// myForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     container1.classList.add("hide");
//     container2.classList.remove("hide");
// });







const form = document.querySelector('form') as HTMLFormElement;
const container1 = document.querySelector('.container') as HTMLElement;
const container2 = document.querySelector('.success') as HTMLElement;
const emailInput = document.getElementById('email') as HTMLInputElement; // Get the email input element

const displayErrorMessage = (message: string) => {
    const errorMessage = document.querySelector('.error-message') as HTMLElement;
    errorMessage.textContent = message;
    errorMessage.classList.remove('hide');
};

const validateEmail = (email: string): boolean => {
    
    const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+/;
    return emailFormat.test(email);
};

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const emailValue = emailInput.value.trim();

    if (emailValue === '' || !validateEmail(emailValue)) {
        displayErrorMessage('Valid email address is required');
    } else {
        container1.classList.add('hide');
        container2.classList.remove('hide');

        const errorMessage = document.querySelector('.error-message') as HTMLElement;
        errorMessage.classList.add('hide');
    }
});
