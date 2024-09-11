const passwordField = document.querySelectorAll(`input[type='password']`);
const passwordLabel = document.querySelector(`label[for='password']`);
const confirmPasswordLabel = document.querySelector(`label[for='confirm-password']`);
const passwordMatchErrorSpan = document.querySelector(`.password-match-error`);

passwordField.forEach((input) => {
  input.addEventListener(`keyup`, (e) => {
    if(passwordField[0].value !== passwordField[1].value ||
       passwordField[0].value === "" || passwordField[0] === null ||
       passwordField[1].value === "" || passwordField[1] === null
      ){
      passwordField[0].classList.add(`field-error`);
      passwordField[1].classList.add(`field-error`);
      confirmPasswordLabel.classList.add(`label-error`);
      passwordLabel.classList.add(`label-error`);
      passwordField[0].classList.remove(`field-match`);
      passwordField[1].classList.remove(`field-match`);
      confirmPasswordLabel.classList.remove(`label-match`);
      passwordLabel.classList.remove(`label-match`);
      passwordMatchErrorSpan.textContent="*Error! Passwords Must Match.";
    } else {
      passwordField[0].classList.remove(`field-error`);
      passwordField[1].classList.remove(`field-error`);
      confirmPasswordLabel.classList.remove(`label-error`);
      passwordLabel.classList.remove(`label-error`);
      passwordField[0].classList.add(`field-match`);
      passwordField[1].classList.add(`field-match`);
      confirmPasswordLabel.classList.add(`label-match`);
      passwordLabel.classList.add(`label-match`);
      passwordMatchErrorSpan.textContent = ``;
    }
  });
});