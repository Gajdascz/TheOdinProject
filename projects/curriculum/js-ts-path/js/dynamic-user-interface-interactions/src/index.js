import { mobileSidebarNav } from './components/mobileSidebarNav.js';
import { slider } from './components/slider.js';
import { form } from './components/form.js';

// prettier-ignore
const homeSlider = slider([
    { path: '/assets/imgs/circuit.jpg', alt: 'Circuit board with components.'},
    { path: '/assets/imgs/newtons-balls.jpg', alt: 'Newtons cradle' },
    { path: '/assets/imgs/lightning.jpg', alt: 'Lightning in the sky.' },
    { path: '/assets/imgs/astronaut.jpg', alt: 'Astronaut in space.' },
    { path: '/assets/imgs/calculus.jpg', alt: 'Calculus equation on chalkboard.' }
  ])

mobileSidebarNav('mobile-webpage-sidebar-nav');

const sliderContainer = document.querySelector('div.slider');
sliderContainer.append(homeSlider.element);
// homeSlider.initImageRotation(5000);
const imageSliderBtn = sliderContainer.querySelector('button.image-slider-header-button');
imageSliderBtn.addEventListener('click', (e) => {
  sliderContainer.querySelector('.slider-container').classList.toggle('disappear');
});

const mobileMenusBtn = document.querySelector('button.mobile-menus-header-button');
mobileMenusBtn.addEventListener('click', (e) => {
  document.querySelectorAll('.mock-phone').forEach((phone) => phone.classList.toggle('disappear'));
});

const formDemoContainer = document.querySelector('.form-validation-demo-container');
const demoForm = form('validation-demo-form');
formDemoContainer.append(demoForm.element);
demoForm.initValidators();
