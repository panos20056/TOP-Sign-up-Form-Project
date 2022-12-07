const password = document.querySelector('#password');
const passConfirmation = document.querySelector('#password-confirmation');
const passPara = document.querySelector('#pass-container');


const checkPassword = () => {
    if (passConfirmation.value === password.value) {
    passPara.classList.remove('not-matching');
    passPara.classList.remove('invalid');
    return;
    }
    else if (passConfirmation.value !== password.value) {
        passPara.classList.add('not-matching');
        passPara.classList.add('invalid');
        return;
    }
}


password.addEventListener('input', checkPassword);
passConfirmation.addEventListener('input', checkPassword);
