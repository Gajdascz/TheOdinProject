import PropTypes from 'prop-types';
import styled from 'styled-components';

import Action from '../../components/Action/Action';
import {
  DECREASE_ACTION_TEXT,
  DECREASE_ARIA_LABEL,
  INCREASE_ACTION_TEXT,
  INCREASE_ARIA_LABEL,
  INPUT_ARIA_LABEL,
} from './config';

const Container = styled.div`
  display: flex;
  font-size: 1.25rem;
  max-width: 100%;
  min-width: 100px;
`;
const Input = styled.input`
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  cursor: text;
  text-align: center;
  background-color: inherit;
  padding: var(--space-small);
  color: var(--color-on-surface);
  border: var(--border);
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: bold;
  max-width: 100px;
`;
const QuantityChangeButton = styled(Action)`
  padding: 0.5em;
  color: var(--color-primary);
  background-color: var(--surface-4-color);
  border: var(--border);
  font-size: 1.5rem;
  overflow: hidden;
  box-shadow: none;
  &:first-of-type {
    border-radius: var(--border-radius) 0 0 var(--border-radius);
  }
  &:last-of-type {
    border-radius: 0 var(--border-radius) var(--border-radius) 0;
  }
  &::selection {
    color: inherit;
  }
`;

QuantityInput.propTypes = {
  quantity: PropTypes.number,
  onQuantityChange: PropTypes.func,
  min: PropTypes.number,
  max: PropTypes.number,
};

export default function QuantityInput({
  quantity,
  onQuantityChange,
  min = 0,
  max = Infinity,
  ...rest
}) {
  const handleAddOne = () =>
    onQuantityChange(quantity >= max ? quantity : quantity + 1);
  const handleRemoveOne = () =>
    onQuantityChange(quantity <= min ? min : quantity - 1);
  const handleQuantityInput = (e) => {
    const input = +e.target.value;
    onQuantityChange(input <= min ? min : input >= max ? max : input);
  };
  return (
    <Container {...rest}>
      <QuantityChangeButton
        type="button"
        onClick={handleAddOne}
        aria-label={INCREASE_ARIA_LABEL}
      >
        {INCREASE_ACTION_TEXT}
      </QuantityChangeButton>
      <Input
        type="number"
        pattern="[0-9]"
        onChange={handleQuantityInput}
        value={quantity === 0 ? '' : quantity}
        min={min}
        max={max}
        aria-label={INPUT_ARIA_LABEL}
      />
      <QuantityChangeButton
        type="button"
        onClick={handleRemoveOne}
        aria-label={DECREASE_ARIA_LABEL}
      >
        {DECREASE_ACTION_TEXT}
      </QuantityChangeButton>
    </Container>
  );
}
