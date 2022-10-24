window.addEventListener('load', () => {
    const form = document.getElementById('form');
    const email = document.getElementById('email');
    const emailError = document.getElementById('email-error');
    const password = document.getElementById('password');
    const passwordError = document.getElementById('password-error');
    const formButton = document.getElementById('button');
    const popup = document.getElementById('popup');
    const userEmailHtml = document.getElementsByClassName('user-email');
    const popupButtonCancel = document.getElementById('popup-button-cancel');
    const popupButtonConfirm = document.getElementById('popup-button-confirm');
    const userContent = document.getElementById('user-content');
    let emailCorrect = false;
    let passwordCorrect = false;

    function emailValidation (value) {
        let emailValidation = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        if (value == '') {
            emailError.classList.add('form__error_show');
            emailError.textContent = 'This is a required field';
            emailCorrect = false;
        } else if (emailValidation.test(value) == false) {
            emailError.classList.add('form__error_show');
            emailError.textContent = 'Please enter a correct email';
            emailCorrect = false;
        } else {
            emailError.classList.remove('form__error_show');
            emailCorrect = true;
        }
    }

    email.addEventListener('input', () => {
        emailValidation(email.value);
    })

    function passwordValidation(value) {
        if (value == '') {
            passwordError.classList.add('form__error_show');
            passwordError.textContent = 'This is a required field';
            passwordCorrect = false;
        } else {
            passwordError.classList.remove('form__error_show');
            passwordCorrect = true;
        }
    }

    password.addEventListener('input', () => {
       passwordValidation(password.value);
    })

    formButton.addEventListener('click', () => {
        emailValidation(email.value);
        passwordValidation(password.value);
        if (emailCorrect && passwordCorrect) {
            for (let i = 0; i < userEmailHtml.length; i++) {
                userEmailHtml[i].textContent = email.value;
            }
            popup.classList.add('popup__show');
        }
    })

    popupButtonCancel.addEventListener('click', () => {
        popup.classList.remove('popup__show');
    })

    popupButtonConfirm.addEventListener('click', () => {
        popup.classList.remove('popup__show');
        form.classList.add('content__hidden');
        userContent.classList.remove('content__hidden');
    })
});

