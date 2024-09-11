import { countryPostalCodeFormatObj } from './locationData.js';

const validator = (form, requiredFields) => {
  const formElement = form instanceof HTMLElement ? form : document.querySelector(form);
  const inputs = requiredFields.reduce((acc, field) => {
    acc[field] = false;
    return acc;
  }, {});
  const isValid = (regExp, testExp) => regExp.test(testExp);
  const isEmpty = (value) => value.length === 0 || value === null;

  const getElement = (selector) => formElement.querySelector(selector);

  const statusIndicator = (
    status,
    inputElement,
    errorElement,
    classes = { valid: false, invalid: false, hideError: false }
  ) => {
    const validClasses = classes.valid || 'valid-input';
    const invalidClasses = classes.invalid || 'invalid-input';
    const hideErrorClasses = classes.error || 'hide';
    if (status === 'valid') {
      inputElement.classList.add(validClasses);
      inputElement.classList.remove(invalidClasses);
      errorElement.classList.add(hideErrorClasses);
    } else if (status === 'empty') {
      inputElement.classList.remove(validClasses, invalidClasses);
      errorElement.classList.add(hideErrorClasses);
    } else if (status === 'invalid') {
      inputElement.classList.add(invalidClasses);
      inputElement.classList.remove(validClasses);
      errorElement.classList.remove(hideErrorClasses);
    }
  };

  const email = (inputSelector, errorSelector = false) => {
    const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
    const emailInput = getElement(inputSelector);
    const emailInputError = errorSelector ? getElement(errorSelector) : emailInput.nextElementSibling;
    emailInput.addEventListener('input', (e) => {
      if (isValid(emailRegExp, emailInput.value)) {
        statusIndicator('valid', emailInput, emailInputError);
        inputs.email = emailInput.value;
      } else if (isEmpty(emailInput.value)) {
        statusIndicator('empty', emailInput, emailInputError);
        inputs.email = false;
      } else {
        statusIndicator('invalid', emailInput, emailInputError);
        inputs.email = false;
      }
    });
  };

  const country = (inputSelector, postalInputSelector, postalErrorMessageSelector = false, errorSelector = false) => {
    const countryInput = getElement(inputSelector);
    const postalInput = getElement(postalInputSelector);
    const countryInputError = errorSelector ? getElement(errorSelector) : countryInput.nextElementSibling;
    const postalInputError = errorSelector ? getElement(postalErrorMessageSelector) : postalInput.nextElementSibling;

    countryInput.addEventListener('change', (e) => {
      postalInput.value = '';
      statusIndicator('empty', postalInput, postalInputError);
      if (countryInput.selectedIndex !== 0) {
        statusIndicator('valid', countryInput, countryInputError);
        inputs.country = countryInput.options[countryInput.selectedIndex].value;
        inputs.postalFormat = countryPostalCodeFormatObj[inputs.country] || /^[0-9]{5}(-[0-9]{4})?$/;
        if (inputs.postalFormat instanceof RegExp) postalInput.removeAttribute('disabled');
        else if (typeof inputs.postalFormat === 'string' || inputs.postalFormat instanceof String) {
          postalInput.setAttribute('disabled', '');
          inputs.postal = '-no code-';
        }
      } else {
        statusIndicator('empty', countryInput, countryInputError);
        postalInput.setAttribute('disabled', '');
        inputs.country = false;
        inputs.postalFormat = false;
      }
    });
  };

  const postal = (inputSelector, countryInputSelector, errorSelector = false) => {
    const postalInput = getElement(inputSelector);
    const postalInputError = errorSelector ? getElement(errorSelector) : postalInput.nextElementSibling;
    postalInput.addEventListener('input', (e) => {
      if (isValid(inputs.postalFormat, postalInput.value)) {
        statusIndicator('valid', postalInput, postalInputError);
        inputs.postal = postalInput.value;
      } else if (isEmpty(postalInput.value)) {
        statusIndicator('empty', postalInput, postalInputError);
        inputs.postal = false;
      } else {
        statusIndicator('invalid', postalInput, postalInputError);
        inputs.postal = false;
      }
    });
  };

  const password = (inputSelector, errorSelector = false) => {
    const passwordReqRegEx = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]:;<>,.?/\\~`'"|=-]).{8,25}$/;
    const passwordInput = getElement(inputSelector);
    const passwordInputError = errorSelector ? getElement(errorSelector) : passwordInput.nextElementSibling;
    passwordInput.addEventListener('input', (e) => {
      if (isValid(passwordReqRegEx, passwordInput.value)) {
        statusIndicator('valid', passwordInput, passwordInputError);
        inputs.testPassword = passwordInput.value;
      } else if (isEmpty(passwordInput.value)) {
        statusIndicator('empty', passwordInput, passwordInputError);
        inputs.testPassword = false;
      } else {
        statusIndicator('invalid', passwordInput, passwordInputError);
        inputs.testPassword = false;
      }
    });
  };

  const confirmPassword = (inputSelector, errorSelector = false) => {
    const confirmInput = getElement(inputSelector);
    const confirmInputError = errorSelector ? getElement(errorSelector) : confirmInput.nextElementSibling;
    confirmInput.addEventListener('input', (e) => {
      if (inputs.testPassword && confirmInput.value === inputs.testPassword) {
        statusIndicator('valid', confirmInput, confirmInputError);
        inputs.password = true;
      } else if (isEmpty(confirmInput.value)) {
        statusIndicator('empty', confirmInput, confirmInputError);
        inputs.password = false;
      } else {
        statusIndicator('invalid', confirmInput, confirmInputError);
        inputs.password = false;
      }
    });
  };

  const progress = (btnSelector, progressMessageSelector) => {
    const progressMessage = getElement(progressMessageSelector);
    const submitBtn = getElement(btnSelector);
    formElement.addEventListener('input', function (e) {
      [...progressMessage.children].forEach((child) => {
        if (inputs[child.dataset.fieldInput]) {
          child.classList.add('input-complete');
          child.classList.remove('input-incomplete');
        } else {
          child.classList.add('input-incomplete');
          child.classList.remove('input-complete');
        }
        if (!Object.values(inputs).includes(false)) submitBtn.removeAttribute('disabled');
        else submitBtn.setAttribute('disabled', '');
      });
    });
  };

  return { email, country, postal, password, confirmPassword, progress };
};

export { validator };
