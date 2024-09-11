import { buildElementTree } from "./functions.js";
import hero from '../../src/components/restaurant-components/images/programmers-pantry-hero.png'
import tasteMstrLogo from '../../src/components/restaurant-components/images/taste-mastr.png'
import flavorJourneyLogo from '../../src/components/restaurant-components/images/flavor-journey.png'
import goourmentGazeLogo from '../../src/components/restaurant-components/images/goourmet-gaze.png'
import culinaryChroniclesLogo from '../../src/components/restaurant-components/images/culinary-chronicles.png'
import tasteSphereLogo from '../../src/components/restaurant-components/images/taste-sphere.png'

const SVGNS = "http://www.w3.org/2000/svg";

function renderIndexPage() {
  const indexContentContainer = buildElementTree({ type: 'div', attributes: {class: 'content-container'}});
  indexContentContainer.appendChild(buildMain());
  indexContentContainer.appendChild(buildNewsLetter());
  return indexContentContainer;
};

const buildMain = () => buildElementTree(
  { type: 'main', attributes: { id: 'index-container' }, children: [
    createHeroObj(),
    { type: 'div', attributes: {id: 'reviews-container'}, children: [
      createCriticReviewObj(),
      { type: 'section', attributes: { id: 'total-and-customer-review' }, 
        children: [
          createTotalReviewsObj(),
          createCustomerReviewObj(),
        ]},
      createFeaturedInObj()
    ]},
  ]}
);

function createHeroObj() {
  const heroImgAlt = "Programmers Pantry's open kitchen with chefs preparing meals.";
  const heroObj = {
    type: 'section', attributes: { id: 'hero-container' },
    children: [
      { type: 'img', attributes: { class: 'hero-image', src: hero, alt: heroImgAlt } },
      { type: 'div', attributes: { class: 'hero-overlay' },
        children: [
          { type: 'h2', text: "Prevent Stack Overflow" },
          { type: 'p', text: "Reserve a spot for your next visit." },
          { type: 'button', text: "Book Now" }
        ]
      }
    ]
  }
  return heroObj
};

function createCriticReviewObj() {
  const criticIconPath = "M12 3C14.21 3 16 4.79 16 7S14.21 11 12 11 8 9.21 8 7 9.79 3 12 3M16 13.54C16 14.6 15.72 17.07 13.81 19.83L13 15L13.94 13.12C13.32 13.05 12.67 13 12 13S10.68 13.05 10.06 13.12L11 15L10.19 19.83C8.28 17.07 8 14.6 8 13.54C5.61 14.24 4 15.5 4 17V21H20V17C20 15.5 18.4 14.24 16 13.54Z";
  const criticReview = "Dining at Programmer's Pantry was certainly a unique experience.\
                        The Encapsulated Beef Wellington was not only a culinary masterpiece but also a lesson in object-oriented design.\
                        Who knew learning about algorithms and data structures could be so delicious? \
                        I can't wait to come back to try the C-Sharp Cheddar Boolean Burger ! No question about it, 5 stars and highly recommended.";
  const criticSignature = { type: 'div', attributes: { class: 'critic-signature' }, text: "-Definitely A Real Food Critic",
                            children: [{ type: 'svg', nameSpace: SVGNS, attributes: { class: 'critic-icon', viewBox: '0 0 24 24' }, children: [ { type: 'path', nameSpace: SVGNS, attributes: { d: criticIconPath } } ] } ]
                          }
  return { type: 'section', attributes: { id: 'critic-review' }, text: criticReview, children: [ criticSignature ] };
};

function createTotalReviewsObj() {
  const SVGNS = "http://www.w3.org/2000/svg";
  const starIconPath   = "M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z";
  const starIcons = { type: 'div', attributes: {class: 'star-icons-container'},
                      children: [
                        { type: 'svg', nameSpace: SVGNS, attributes: { class: 'star-icon', viewBox: '0 0 24 24' },
                          children: [ { type: 'path', nameSpace: SVGNS, attributes: { d: starIconPath } } ]
                        },
                        { type: 'svg', nameSpace: SVGNS, attributes: { class: 'star-icon', viewBox: '0 0 24 24' },
                          children: [ { type: 'path', nameSpace: SVGNS, attributes: { d: starIconPath } } ]
                        },
                        { type: 'svg', nameSpace: SVGNS, attributes: { class: 'star-icon', viewBox: '0 0 24 24' },
                          children: [ { type: 'path', nameSpace: SVGNS, attributes: { d: starIconPath } } ]
                        },
                        { type: 'svg', nameSpace: SVGNS, attributes: { class: 'star-icon', viewBox: '0 0 24 24' },
                          children: [ { type: 'path', nameSpace: SVGNS, attributes: { d: starIconPath } } ]
                        },
                        { type: 'svg', nameSpace: SVGNS, attributes: { class: 'star-icon', viewBox: '0 0 24 24' },
                          children: [ { type: 'path', nameSpace: SVGNS, attributes: { d: starIconPath } } ]
                        }
                      ] 
                    };
  const totalReviewsObj = { type: 'div', attributes: {class: 'total-reviews'}, 
                            children: [
                              { type: 'div', attributes: { class: 'total-reviews-count' }, text: '2147483647' },
                              starIcons,
                              { type: 'div', attributes: { class: 'total-reviews-text'}, 
                                children: [
                                  { type: 'p', attributes: {class: 'total-reviews-side-note'}, text: '(And no longer counting. Because we can\'t.)' },
                                  { type: 'p', attributes: {class: 'five-star-reviews'}, text: '5 Star Reviews!' }
                                ]
                              }
                            ]
                          };
  return totalReviewsObj;
};

function createCustomerReviewObj() {
  const incognitoIconPath = "M17.06 13C15.2 13 13.64 14.33 13.24 16.1C12.29 15.69 11.42 15.8 10.76 16.09C10.35 14.31 8.79 13 6.94 13C4.77 13 3 14.79 3 17C3 19.21 4.77 21 6.94 21C9 21 10.68 19.38 10.84 17.32C11.18 17.08 12.07 16.63 13.16 17.34C13.34 19.39 15 21 17.06 21C19.23 21 21 19.21 21 17C21 14.79 19.23 13 17.06 13M6.94 19.86C5.38 19.86 4.13 18.58 4.13 17S5.39 14.14 6.94 14.14C8.5 14.14 9.75 15.42 9.75 17S8.5 19.86 6.94 19.86M17.06 19.86C15.5 19.86 14.25 18.58 14.25 17S15.5 14.14 17.06 14.14C18.62 14.14 19.88 15.42 19.88 17S18.61 19.86 17.06 19.86M22 10.5H2V12H22V10.5M15.53 2.63C15.31 2.14 14.75 1.88 14.22 2.05L12 2.79L9.77 2.05L9.72 2.04C9.19 1.89 8.63 2.17 8.43 2.68L6 9H18L15.56 2.68L15.53 2.63Z";
  const alienIconPath = "M12,3C16.97,3 21,6.58 21,11C21,15.42 15,21 12,21C9,21 3,15.42 3,11C3,6.58 7.03,3 12,3M10.31,10.93C9.29,9.29 7.47,8.58 6.25,9.34C5.03,10.1 4.87,12.05 5.89,13.69C6.92,15.33 8.74,16.04 9.96,15.28C11.18,14.5 11.33,12.57 10.31,10.93M13.69,10.93C12.67,12.57 12.82,14.5 14.04,15.28C15.26,16.04 17.08,15.33 18.11,13.69C19.13,12.05 18.97,10.1 17.75,9.34C16.53,8.58 14.71,9.29 13.69,10.93M12,17.75C10,17.75 9.5,17 9.5,17C9.5,17.03 10,19 12,19C14,19 14.5,17 14.5,17C14.5,17 14,17.75 12,17.75Z";
  const customerReview = "After subsisting on Soylent and caffeine powder for the past three months\
                          in my quest for peak productivity, dining here was a game-changer.\
                          The true Boolean Burger was expertly seasoned and cooked to sheer perfection.\
                          A delightful dining experience that I can't wait to tell my friends back home about. 5 Stars!";
  const customerIcon = { type: 'div', attributes: { class: 'customer-icon' },
                         children: [ 
                          { type: 'svg', nameSpace: SVGNS, attributes: { class: 'incognito-icon-swap', viewBox: '0 0 24 24' },
                            children: [ { type: 'path', nameSpace: SVGNS, attributes: {d: incognitoIconPath} } ]
                          },
                          { type: 'svg', nameSpace: SVGNS, attributes: { class: 'alien-icon', viewBox: '0 0 24 24' },
                            children: [ { type: 'path', nameSpace: SVGNS, attributes: {d: alienIconPath} } ]
                          }
                        ]
                      };
  const customerReviewObj = { type: 'div', attributes: { class: 'customer-review-container' },
                              children: [
                                {type: 'h4', attributes: { class: 'customer-name' }, text: 'Reel HuMon' },
                                customerIcon,
                                {type: 'p', attributes: { class: 'customer-review' }, text: customerReview }
                              ]}; 
   return customerReviewObj;
};

function createFeaturedInObj() {
  const featuredLogos = { type: 'div', attributes: {class: 'featured-in-logo-container'},
                          children: [
                            { type: 'img', attributes: { src: tasteMstrLogo } },
                            { type: 'img', attributes: { src: goourmentGazeLogo } },
                            { type: 'img', attributes: { src: culinaryChroniclesLogo } },
                            { type: 'img', attributes: { src: tasteSphereLogo } },
                            { type: 'img', attributes: { src: flavorJourneyLogo } },
                          ]
                        }

  const featuredSection = { type: 'section', attributes: { id: 'featured-in' }, children: [ { type: 'h2', attributes: {class:'featured-in-title'}, text: 'FEATURED IN' }, featuredLogos ] }
  return featuredSection
};

function createNewsletterFormObj() {
  const emailInput =  { type: 'label', attributes: { for: 'newsletter-email' }, 
                        children: [{ type: 'input', attributes: {type: 'text', id: 'newsletter-email', placeholder: 'example@email.io', required: true}}] 
                      }
  const options = { type: 'div', attributes: { class: 'newsletter-options-container'},
                    children: [
                      { type: 'input', attributes: {type: 'checkbox', id: 'newsletter-option-tech', name: 'tech'}},
                      { type: 'label', attributes: {for: 'newsletter-option-tech'}, text: 'Tech'},
                      { type: 'input', attributes: {type: 'checkbox', id: 'newsletter-option-restaurant', name: 'restaurant', checked: true}},
                      { type: 'label', attributes: {for: 'newsletter-option-restaurant'}, text: 'Restaurant'},
                    ]}
  const button = { type: 'label', attributes: {for: 'newsletter-submit'},
                   children: [
                    {type: 'button', attributes: {type: 'submit', id: 'newsletter-submit'}, text: 'Submit'}
                   ]}
  const form = { type: 'form', attributes: { action: '', id: 'newsletter-signup-form' },
                 children: [
                  emailInput,
                  options,
                  button
                 ]}
  return form;
};

const buildNewsLetter = () => buildElementTree(
  { type: 'section', attributes: { id: 'newsletter-container' },
    children: [
      {type: 'h2', text: 'Weekly Newsletter'},
      {type: 'h4', text: 'Restaurant & Tech Updates + Deals'},
      createNewsletterFormObj()
    ]}
);






export { renderIndexPage }