const formObj = ({
  id,
  action = '#',
  target = '_self',
  method = 'post',
  validate = true,
  additionalAttributes = {}
} = {}) => {
  return {
    type: 'form',
    attributes: {
      id,
      action,
      target,
      method,
      ...(!validate && { novalidate: '' }),
      ...additionalAttributes
    }
  };
};

const labelObj = ({ forAttr, text, additionalAttributes = false }) => {
  return {
    type: 'label',
    text,
    attributes: {
      for: forAttr,
      ...(additionalAttributes && { additionalAttributes })
    }
  };
};

/** TextFieldInputObj
 *  Used for input types: text, password, email, url,
 *                        search, tel, number, date, time,
 *                        month, week, datetime-local, range
 */
const inputObj = ({
  id,
  type = 'text',
  disabled = false,
  maxlength = false,
  minlength = false,
  required = false,
  value = false,
  autofocus = false,
  autocomplete = false,
  multiple = false,
  placeholder = false,
  pattern = false,
  step = false,
  additionalAttributes = {}
} = {}) => {
  const validInputTypes = new Set([
    'text',
    'password',
    'email',
    'url',
    'search',
    'tel',
    'number',
    'date',
    'time',
    'month',
    'week',
    'datetime-local',
    'range'
  ]);
  const lowerType = type.toLowerCase();
  if (validInputTypes.has(lowerType)) {
    return {
      type: 'input',
      attributes: {
        type,
        id,
        ...(placeholder && { placeholder }),
        ...(step && { step }),
        ...(autocomplete && { autocomplete: 'on' }),
        ...(maxlength && { maxlength }),
        ...(minlength && { minlength }),
        ...(pattern && { pattern }),
        ...(value && { value }),
        ...additionalAttributes,
        ...(autofocus && { autofocus: '' }),
        ...(multiple && { multiple: '' }),
        ...(disabled && { disabled: '' }),
        ...(required && { required: '' })
      }
    };
  } else return null;
};

const selectInputObj = ({
  form,
  id,
  required = false,
  autofocus = false,
  disabled = false,
  multiple = false,
  size = false,
  additionalAttributes = {}
} = {}) => {
  return {
    type: 'select',
    attributes: {
      form,
      id,
      ...(size && { size }),
      ...(autofocus && { autofocus: '' }),
      ...(multiple && { multiple: '' }),
      ...(disabled && { disabled: '' }),
      ...(required && { required: '' }),
      ...additionalAttributes
    }
  };
};

const selectOptionObj = ({
  value,
  disabled = false,
  selected = false,
  label = value,
  additionalAttributes = {}
} = {}) => {
  return {
    type: 'option',
    attributes: {
      value,
      label,
      ...additionalAttributes,
      ...(selected && { selected: '' }),
      ...(disabled && { disabled: '' })
    }
  };
};

const inputSpanErrorObj = (errorText = '', additionalAttributes = {}) => {
  return {
    type: 'span',
    text: errorText,
    attributes: {
      ...additionalAttributes
    }
  };
};

const inputCharCounterObj = (maxChars, additionalAttributes = {}) => {
  return {
    type: 'div',
    attributes: {
      ...additionalAttributes
    },
    children: [
      { type: 'span', text: '0', attributes: { class: 'current-chars' } },
      { type: 'span', text: `/${maxChars}`, attributes: { class: 'max-chars' } }
    ]
  };
};

const divObj = ({ text = '', attributes = {} } = {}) => {
  return {
    type: 'div',
    text,
    attributes
  };
};
const spanObj = (text, attributes = {}) => {
  return {
    type: 'span',
    text,
    attributes
  };
};

const btnObj = ({ text, attributes = {} } = {}) => {
  return {
    type: 'button',
    text,
    attributes
  };
};

export {
  formObj,
  inputObj,
  labelObj,
  selectInputObj,
  selectOptionObj,
  inputSpanErrorObj,
  inputCharCounterObj,
  divObj,
  spanObj,
  btnObj
};
