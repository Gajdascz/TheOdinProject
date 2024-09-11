import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const IndicatorEffect = css`
  background-color: ${({ $activeColor }) => $activeColor};
  border: 1px solid var(--color-on-primary);
  box-shadow: 0 0 3px 2px var(--color-primary);
`;
const Indicator = styled.button`
  border-radius: 50%;
  width: ${({ $size }) => $size};
  height: ${({ $size }) => $size};
  border: 1px solid var(--color-primary);
  background-color: lightgray;
  &:hover,
  &:focus {
    ${IndicatorEffect}
  }
`;
const ActiveSliderIndicator = styled(Indicator)`
  ${IndicatorEffect}
`;

SlideIndicator.propTypes = {
  size: PropTypes.string,
  activeColor: PropTypes.string,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
  index: PropTypes.number,
};

export default function SlideIndicator({
  size = '20px',
  activeColor = 'var(--color-primary)',
  isActive = false,
  onClick,
  index,
}) {
  return isActive ? (
    <ActiveSliderIndicator
      $size={size}
      $activeColor={activeColor}
      aria-pressed="true"
      aria-label={`Slide ${index + 1}`}
    />
  ) : (
    <Indicator
      $size={size}
      onClick={onClick}
      aria-label={`Slide ${index + 1}`}
    />
  );
}
