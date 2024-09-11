import {
  btnObj,
  divObj,
  formObj,
  inputCharCounterObj,
  inputObj,
  inputSpanErrorObj,
  labelObj,
  selectInputObj,
  selectOptionObj,
  spanObj
} from '../utility/formObjs.js';
import { buildElementTree } from '../utility/domHelpers.js';
import { validator } from '../utility/inputValidators.js';
import { countryListObj } from '../utility/locationData.js';

const inputLabelObj = (inputID, text) => labelObj({ forAttr: inputID, text });
const getInputSpanErrorObj = (msg, additionalClasses) =>
  inputSpanErrorObj(msg, { class: `input-error-message hide ${additionalClasses}` });

const emailInputObj = () => {
  const emailInput = inputObj({
    type: 'text',
    placeholder: 'Enter your email eg. email@example.io',
    id: 'email-input',
    autofill: false,
    additionalAttributes: { class: 'email-input' }
  });
  const emailLabel = inputLabelObj('email-input');
  return [emailLabel, emailInput, getInputSpanErrorObj('Please enter a valid email address.')];
};

const countryInputObj = () => {
  const selectMenu = selectInputObj({
    form: 'validation-demo-form',
    id: 'country-select-menu',
    additionalAttributes: { class: 'country-select-menu' }
  });
  selectMenu.children = [];
  selectMenu.children.push(selectOptionObj({ value: null, label: 'Select Country', selected: true, disabled: true }));
  Object.entries(countryListObj).forEach(([countryCode, countryName]) =>
    selectMenu.children.push(selectOptionObj({ value: countryCode, label: countryName }))
  );
  const countryLabel = inputLabelObj('country-select-menu');
  return [countryLabel, selectMenu];
};
const zipCodeInputObj = () => {
  const zipCodeInput = inputObj({
    type: 'text',
    placeholder: 'Enter postal code eg. 01234',
    id: 'zip-code-input',
    disabled: true,
    additionalAttributes: { class: 'zip-code-input' }
  });
  const zipCodeLabel = inputLabelObj('zip-code-input');
  return [zipCodeLabel, zipCodeInput, getInputSpanErrorObj('Please enter a valid postal code.')];
};
const passwordInputObj = (maxLength, minLength) => {
  const passwordInput = inputObj({
    type: 'password',
    id: 'password-input',
    placeholder: 'Enter password',
    additionalAttributes: { class: 'password-input' }
  });
  const passwordLabel = inputLabelObj('password-input');
  const passwordWithCounterContainer = { type: 'div', attributes: { class: 'password-with-counter-container' } };
  passwordWithCounterContainer.children = [passwordInput, passwordCharCounterObj(passwordInput, maxLength)];
  return [
    passwordLabel,
    passwordWithCounterContainer,
    getInputSpanErrorObj(
      'Password must contain: between 8 and 25 characters, one uppercase letter, one lowercase letter, one number, and one symbol',
      'password-input-error'
    )
  ];
};
const confirmPasswordInputObj = (maxLength, minLength) => {
  const confirmPasswordInput = inputObj({
    type: 'password',
    id: 'confirm-password-input',
    placeholder: 'Confirm password',
    additionalAttributes: { class: 'confirm-password-input' }
  });
  const confirmPasswordLabel = inputLabelObj('confirm-password-input');
  const passwordWithCounterContainer = { type: 'div', attributes: { class: 'password-with-counter-container' } };
  passwordWithCounterContainer.children = [
    confirmPasswordInput,
    passwordCharCounterObj(confirmPasswordInput, maxLength)
  ];
  return [
    confirmPasswordLabel,
    passwordWithCounterContainer,
    getInputSpanErrorObj('Passwords do not match.', 'confirm-password-input-error')
  ];
};

const passwordCharCounterObj = (inputObj, maxChars) => {
  const charCounter = inputCharCounterObj(maxChars, { class: 'char-counter' });
  inputObj.listeners = {
    input: function (e) {
      this.nextElementSibling.querySelector('.current-chars').textContent = this.value.length;
    },
    keydown: function (e) {
      if (this.value.length >= maxChars && e.key !== 'Backspace' && e.key !== 'Delete') {
        e.preventDefault();
      }
    }
  };
  return charCounter;
};

const submitBtnObj = () => {
  return {
    type: 'button',
    text: 'Submit',
    attributes: {
      type: 'submit',
      class: 'validate-demo-form-submit',
      disabled: ''
    },
    listeners: {
      click: function (e) {
        e.preventDefault();
        this.form.querySelectorAll('input').forEach((input) => input.setAttribute('disabled', ''));
        this.form.querySelector('select').setAttribute('disabled', '');
        this.form.classList.add('submitted-form');
        this.setAttribute('disabled', '');
        document.querySelector('.form-submit-message').classList.remove('hide');
      }
    }
  };
};

const formSubmitMessage = () => {
  const submitMessage = divObj({ text: 'Form submitted. ', attributes: { class: 'form-submit-message hide' } });
  const highFiveBtn = btnObj({
    text: 'Virtual High Five!',
    attributes: { class: 'form-submit-message-high-five-button' }
  });
  highFiveBtn.listeners = {
    click: function (e) {
      this.classList.add('high-fived');
      this.textContent = '*clap*';
      this.setAttribute('disabled', '');
    }
  };
  submitMessage.children = [highFiveBtn];
  return submitMessage;
};

const form = (formSelector) => {
  const maxLength = 25;
  const minLength = 8;
  const formObject = formObj({ validate: false, id: formSelector });
  const passwordInputContainer = { type: 'div', attributes: { class: 'password-input-container' } };
  const requiredFields = ['email', 'country', 'postal', 'password'];
  const progressMessage = divObj({ attributes: { class: 'form-progress-message' } });
  progressMessage.text = 'Required Fields:';
  progressMessage.children = requiredFields.map((field, index) => {
    const spanText = index === requiredFields.length - 1 ? `${field}.` : `${field},`;
    return spanObj(spanText, { class: `${field}-progress input-incomplete`, 'data-field-input': field });
  });
  passwordInputContainer.children = [
    ...passwordInputObj(maxLength, minLength),
    ...confirmPasswordInputObj(maxLength, minLength)
  ];
  formObject.children = [
    ...emailInputObj(),
    ...countryInputObj(),
    ...zipCodeInputObj(),
    passwordInputContainer,
    submitBtnObj(),
    progressMessage,
    formSubmitMessage()
  ];
  const initValidators = () => {
    const formValidator = validator(formElement, requiredFields);
    formValidator.email('.email-input');
    formValidator.country('.country-select-menu', '.zip-code-input');
    formValidator.postal('.zip-code-input');
    formValidator.password('.password-input', '.password-input-error');
    formValidator.confirmPassword('.confirm-password-input', '.confirm-password-input-error');
    formValidator.progress('.validate-demo-form-submit', '.form-progress-message');
  };
  const formElement = buildElementTree(formObject);

  return { element: formElement, initValidators };
};

export { form };
