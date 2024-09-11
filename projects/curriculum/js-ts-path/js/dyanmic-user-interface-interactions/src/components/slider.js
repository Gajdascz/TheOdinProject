import { createElement } from '../utility/domHelpers.js';

const buildSliderContainer = () => createElement('div', ['slider-container']);
const buildImg = (path, alt, slideNumber) =>
  createElement('img', ['slider-image'], { src: path, alt, 'data-slide-number': slideNumber });
const buildIndicator = (slideNumber) => createElement('div', ['slide-indicator'], { 'data-slide-number': slideNumber });

const buildSliderImageContainer = (imgs) => {
  const sliderImageContainer = createElement('div', ['slider-image-container']);
  const builtImgs = imgs.map((img, index) => {
    const builtImg = buildImg(img.path, img.alt, index);
    builtImg.classList.add(index === 0 ? 'active-slide' : 'hide-slide');
    return builtImg;
  });
  sliderImageContainer.append(...builtImgs, buildSliderNavigation(imgs.length - 1));
  return sliderImageContainer;
};

const buildSliderNavigation = (numberOfImages) => {
  const sliderNavigationContainer = createElement('div', ['slider-navigation']);
  const buildNavBtn = (direction) => {
    const btn = createElement(
      'button',
      direction === 'prev' ? ['prev-slide'] : ['next-slide'],
      {
        'data-slide-number': 0
      },
      direction === 'prev' ? '<' : '>'
    );

    btn.addEventListener('click', (e) => {
      changeSlide(+btn.dataset.slideNumber + (direction === 'prev' ? -1 : 1), numberOfImages);
    });
    return btn;
  };
  sliderNavigationContainer.append(buildNavBtn('prev'), buildNavBtn('next'));
  return sliderNavigationContainer;
};

const buildSlideIndicators = (numOfImgs) => {
  const container = document.createElement('div');
  container.classList.add('slider-slide-indicators-container');
  for (let i = 0; i < numOfImgs; i++) {
    const indicator = buildIndicator(i);
    if (i === 0) indicator.classList.add('active-slide-indicator');
    indicator.addEventListener('click', function (e) {
      changeSlide(indicator.dataset.slideNumber);
    });
    container.append(indicator);
  }
  return container;
};

function changeSlide(targetSlideNumber, numberOfImages) {
  const currentSlide = document.querySelector('.active-slide');
  const currentIndicator = document.querySelector('.active-slide-indicator');
  const currentNum = currentSlide.dataset.slideNumber;
  if (currentNum !== targetSlideNumber) {
    let finalSlideNum;
    if (targetSlideNumber > numberOfImages) finalSlideNum = 0;
    else if (targetSlideNumber < 0) finalSlideNum = numberOfImages;
    else finalSlideNum = targetSlideNumber;
    const targetSlide = document.querySelector(`img[data-slide-number='${finalSlideNum}'`);
    const targetIndicator = document.querySelector(`div.slide-indicator[data-slide-number='${finalSlideNum}']`);
    [currentSlide, targetSlide].forEach((slide) => {
      slide.classList.toggle('active-slide');
      slide.classList.toggle('hide-slide');
    });
    [currentIndicator, targetIndicator].forEach((indicator) => indicator.classList.toggle('active-slide-indicator'));
    document
      .querySelectorAll('.slider-navigation > button')
      .forEach((btn) => (btn.dataset.slideNumber = finalSlideNum));
  }
}
const slider = (imgs) => {
  const sliderContainer = buildSliderContainer();
  const sliderImageContainer = buildSliderImageContainer(imgs);
  const slideIndicators = buildSlideIndicators(imgs.length);

  sliderContainer.append(sliderImageContainer, slideIndicators);

  const initImageRotation = (interval = 5000) => {
    setInterval(() => {
      const currentSlideNum = +sliderContainer.querySelector('.active-slide').dataset.slideNumber;
      changeSlide(currentSlideNum + 1, imgs.length - 1);
    }, interval);
  };

  return { element: sliderContainer, initImageRotation };
};

export { slider };
