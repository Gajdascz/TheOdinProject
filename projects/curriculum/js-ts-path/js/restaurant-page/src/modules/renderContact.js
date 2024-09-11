import { buildElementTree } from "./functions";

function renderContactPage() {
  const contactContentContainer = buildElementTree({ type: 'div', attributes: {class: 'content-container'}});
  contactContentContainer.append(buildMain());
  return contactContentContainer;
}

const buildMain = () => buildElementTree(
  { type: 'main', attributes: {class: 'contact-container'}, 
    children: [
      createInfoSection(),
      createFormSection()
    ]}
);



function createFormField(name,title,type,required,placeholder) {
  return { type: 'div', attributes: {class:`${name}-input`},
           children: [
            {type: 'input', attributes: {type: type, id: name, placeholder: placeholder, required: required}},
            {type: 'label', text: `${required ? '*' : ''}${title}`,attributes: {for: name, class: required ? 'highlight-purple':''}}
           ]}
}

function createInfoSection() {
  return { type: 'section', attributes: { id: 'contact-information'}, 
  children: [
    { type: 'h1', text: 'CONTACT API',attributes: {class: 'contact-api-title'}},
    createInfoContainer('hours'),
    createInfoContainer('authentication'),
    createInfoContainer('endpoints'),
    createInfoContainer('methods'),
    createInfoContainer('response')
  ]};
};

function createInfoContainer(containerName) {
  let containerChildren = [];
  switch (containerName) {
    case 'hours':
      containerChildren = createHoursList();
      break;
    case 'authentication':
      containerChildren = createAuthenticationContent();
      break;
    case 'endpoints':
      containerChildren = createEndpointsContainer();
      break;
    case 'methods':
      containerChildren = createMethodsContainer();
      break;
    case 'response':
      containerChildren = createResponseList()
    
  }
  return { type: 'div', attributes: {class: `${containerName}-container`},
           children: [
            {type: 'h2', text: containerName.toUpperCase(), attributes: { class: 'contact-section-title'}},
            containerChildren
           ]}
}

function createHoursList() {
  return {type: 'ul', attributes: {class: 'hours-list'},
          children: [
            {type: 'li', children: [
              { type: 'div', text: 'Monday-Thursday', attributes: {class: 'highlight-purple'}},
              { type: 'div', text: '2pm - 11pm' }
            ]},
            {type: 'li', children: [
              { type: 'div', text: 'Friday-Saturday', attributes: {class: 'highlight-purple'}},
              { type: 'div', text: '12pm - 2am' }
            ]},
            {type: 'li', children: [
              { type: 'div', text: 'Sunday', attributes: {class: 'highlight-purple'}},
              { type: 'div', text: '12pm - 12am' }
            ]}
          ]}
}

function createAuthenticationContent() {
  return { type: 'p', text: 'We provide authentic responses and maintain your privacy to the fullest extent\
                             through our secured communication line which ensures message integrity.', 
                      attributes: {class: 'authentication-description'}}
}

/* ENDPOINTs CONTAINER */
function createEndpointsContainer() {
  return {  type: 'div', attributes: {class: 'endpoints-content-container'},
            children: [
              { type: 'p', text: 'You can send a request using any of the following methods of communications.\
              To have your message directed to the correct department and GET a response within 24 hrs please use the form below.',
              attributes: {class: 'endpoints-description'}},
              createLocationContainer(),
              createEmailsContainer(),
              createTelephoneContainer()
            ]}
}
function createLocationContainer() {
  return { type: 'div', attributes: { class: 'location-container'},
           children: [
            {type: 'h3', text: 'Location', attributes: {class: 'contact-subheader'}},
            {type: 'ul', attributes: {class: 'location-information'},
             children: [
              {type: 'li', text: 'Async Alley, Node.js Nexus'},
              {type: 'li', text: '0x1F4A9 Heap Boulevard'},
              {type: 'li', text: 'Exception Heights, ES6 District'},
              {type: 'li', text: 'Runtime, JS'}
             ]}
           ]}
}
function createEmailsContainer() {
  return { type: 'div', attributes: {class: 'emails-container'},
           children: [
            { type: 'h3', text: 'Emails', attributes: {class: 'contact-subheader'}},
            { type: 'ul', attributes: {class: 'emails-list'}, 
              children: [
                { type: 'li', 
                  children:[
                    {type: 'span', text: 'Support: ', attributes: {class: 'highlight-purple'}},
                    {type: 'span', text: 'debugging@programmerspantry.com'}
                  ]},
                  { type: 'li', 
                  children:[
                    {type: 'span', text: 'Events: ', attributes: {class: 'highlight-purple'}},
                    {type: 'span', text: 'listener@programmerspantry.com'}
                  ]},                { type: 'li', 
                  children:[
                    {type: 'span', text: 'Media: ', attributes: {class: 'highlight-purple'}},
                    {type: 'span', text: 'request@programmerspantry.com'}
                  ]}
              ]}
           ]}
}
function createTelephoneContainer() {
  return { type: 'div', attributes: {class: 'telephone-numbers-container'},
           children: [
            { type: 'h3', text:'Phone Numbers', attributes: {class: 'contact-subheader'}},
            { type: 'ul', attributes: {class: 'numbers-list'},
              children: [
                { type: 'li',
                  children:[
                    {type: 'span', text: 'General: ', attributes: {class: 'highlight-purple'}},
                    {type: 'span', text: '(127)-001-LOCL'}
                  ]},
                  { type: 'li', 
                    children:[
                    {type: 'span', text: 'Events: ', attributes: {class: 'highlight-purple'}},
                    {type: 'span', text: '(503)-404-SRVC'}
                  ]},                
                  { type: 'li', 
                    children:[
                    {type: 'span', text: 'Media: ', attributes: {class: 'highlight-purple'}},
                    {type: 'span', text: '(214)-748-3647'}
                  ]}
              ]}
           ]}
}
function createMethodsContainer() {
  return {  type: 'div', attributes: { class: 'post-get-methods-container'},
            children: [
              { type: 'div', attributes: {class: 'post-method'},
                children: [
                  { type: 'h3', text: 'POST', attributes: { class:'contact-subheader'}},
                  { type: 'p',  text: 'A request by sending us a message using any of the mentioned communication channels.\
                                      For best service, consider using the form below.',
                                attributes: {class:'methods-description'}},
                ]},
                { type: 'div', attributes: {class: 'get-method'},
                children: [
                  { type: 'h3', text: 'GET', attributes: { class:'contact-subheader'}},
                  { type: 'p',  attributes: {class:'methods-description'},
                    children: [
                      {type:'span', text: ' IF ', attributes: {class: 'highlight-purple'}},
                      {type:'span', text: 'we receive the request within working hours, expect a response from our team within 12-24 hours.'},
                      {type:'span', text: ' ELSE ', attributes: {class: 'highlight-purple'}},
                      {type:'span', text: 'expect a response from our team within 24 hours of the next working day.'}
                    ]},
                ]}
            ]}
}

function createResponseList() {
  return { type: 'ul', attributes: { class: 'response-list'},
           children: [
            createResponse('200', 'OK','Sent during working hours, expect a response soon.'),
            createResponse('201', 'Created','Sent during closed hours. Request added to our queue, expect a response on our next working day.'),
            createResponse('500', 'Error', 'Woops! Something went wrong. Please try another communication method.')
           ]};
};
function createResponse(number, status, message) {
return  { type:'li', attributes: {class:'response'}, 
          children: [
            {type: 'p', text: '{'},
            {type: 'div', text: `"statusCode": ${number}`, attributes: {class:'highlight-yellow'}},
            {type: 'div', text: `"statusText": "${status}"`, attributes: {class: 'highlight-purple'}},
            {type: 'div', text: `"message": "${message}"`},
            {type: 'p', text: '}'}
            ]};
};

function createFormSection() {
  return {  type: 'section', attributes: {id: 'contact-form-section'},
            children: [
              { type:'form', attributes: {action: '', id: 'contact-form'},
                children: [
                  { type:'h1', text:'POST YOUR REQUEST' },
                  createFormRow0(),
                  createFormRow1(),
                  {type: 'textarea', attributes: {name: 'contact-message', id: 'contact-message', placeholder: 'Kindly Enter Your Request Here.', required: 'true'}},
                  {type: 'button', text: 'POST', attributes: {type: 'submit', class: 'contact-submit'}}
                ]}
          ]}
}
function createFormRow0() {
  return { type: 'div', attributes: {class: `form-row-0`},
           children: [
            createFormField('first-name','First Name', 'text', true, 'Dennis'),
            createFormField('last-name', 'Last Name', 'text', true, 'Ritchie')
           ]}
}
function createFormRow1() {
  return { type: 'div', attributes: {class: `form-row-1`},
           children: [
            createFormField('email','Email', 'text', true, 'I@invented.c'),
            createFormField('telephone', 'Telephone Number', 'tel', false, '(214)-748-3647')
           ]}
}


export { renderContactPage }