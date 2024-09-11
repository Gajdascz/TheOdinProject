import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from '../../../../components/Icon/Icon';
import Action from '../../../../components/Action/Action';

const SliderBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 0.25rem;
  background-color: var(--surface-4-color);
  width: 100%;
`;
const IndicatorsContainer = styled.div`
  display: flex;
  gap: var(--space-small);
`;

const SliderNavButton = styled(Action)``;

SliderBar.propTypes = {
  onNextSlide: PropTypes.func,
  onPrevSlide: PropTypes.func,
  children: PropTypes.node,
};

export default function SliderBar({
  onNextSlide,
  onPrevSlide,
  children,
  ...rest
}) {
  return (
    <SliderBarContainer {...rest}>
      <SliderNavButton type="button" onClick={onPrevSlide}>
        <Icon type="chevronLeft" />
      </SliderNavButton>
      <IndicatorsContainer>{children}</IndicatorsContainer>
      <SliderNavButton type="button" onClick={onNextSlide}>
        <Icon type="chevronRight" />
      </SliderNavButton>
    </SliderBarContainer>
  );
}
