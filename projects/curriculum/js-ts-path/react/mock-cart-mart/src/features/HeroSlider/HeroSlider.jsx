import PropTypes from 'prop-types';
import { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import SliderBar from './components/SliderBar/SliderBar';
import SlideIndicator from './components/SlideIndicator/SlideIndicator';
import ImageWrapper from '../../components/ImageWrapper/ImageWrapper';
import ImageOverlay from '../../components/ImageOverlay/ImageOverlay';

const ANIMATION_TIME = 500;

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: var(--border-radius);
  border: var(--border);
  box-shadow: var(--surface-3-shadow);
  max-height: 75vh;
`;

const HeroImageWrapper = styled(ImageWrapper)`
  height: 100%;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transform: ${({ $isVisible, $direction }) =>
    $isVisible
      ? 'translateX(0)'
      : $direction === 'right'
        ? 'translateX(100%)'
        : 'translateX(-100%)'};
  transition:
    opacity ${({ $animationTime }) => $animationTime} ease,
    transform ${({ $animationTime }) => $animationTime} ease;
`;

HeroSlider.propTypes = {
  displays: PropTypes.arrayOf(PropTypes.object),
};

export default function HeroSlider({ displays, ...rest }) {
  const [currentDisplayIndex, setCurrentDisplayIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [direction, setDirection] = useState('');
  const { img, overlay } = displays[currentDisplayIndex];

  useEffect(() => setIsVisible(true), [currentDisplayIndex]);
  useEffect(() => {
    const autoInterval = setInterval(onNextSlide, 6000);
    return () => clearInterval(autoInterval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentDisplayIndex]);

  const toSlide = (index) => {
    const dir = index > currentDisplayIndex ? 'right' : 'left';
    setIsVisible(false);
    setDirection(dir);
    setTimeout(() => {
      const newIndex =
        index >= displays.length ? 0 : index < 0 ? displays.length - 1 : index;
      setCurrentDisplayIndex(newIndex);
      setIsVisible(true);
    }, ANIMATION_TIME);
  };

  const onNextSlide = () => toSlide(currentDisplayIndex + 1);
  const onPrevSlide = () => toSlide(currentDisplayIndex - 1);
  return (
    <HeroContainer {...rest}>
      <HeroImageWrapper
        imgSrc={img.src}
        $animationTime={`${ANIMATION_TIME / 1000}s`}
        $isVisible={isVisible}
        $direction={direction}
      >
        {overlay && (
          <ImageOverlay
            headerText={overlay.header}
            bodyText={overlay.text}
            action={overlay.action}
            $position={overlay.position}
          />
        )}
      </HeroImageWrapper>
      <SliderBar onNextSlide={onNextSlide} onPrevSlide={onPrevSlide}>
        {displays.map((display, index) => (
          <SlideIndicator
            key={index}
            isActive={index === currentDisplayIndex}
            onClick={() => toSlide(index)}
            index={index}
          />
        ))}
      </SliderBar>
    </HeroContainer>
  );
}
