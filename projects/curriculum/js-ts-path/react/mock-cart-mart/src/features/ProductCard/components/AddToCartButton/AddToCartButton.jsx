import PropTypes from 'prop-types';
import styled from 'styled-components';
import Action from '../../../../components/Action/Action';
import {
  DEFAULT_TEXT,
  FAILED_MARKER,
  FAILED_TEXT,
  SUCCESS_MARKER,
  SUCCESS_TEXT,
} from './config';
const AddToCartAction = styled(Action)`
  background-color: var(--surface-4-color);
  font-weight: bold;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
  flex: 1;
  min-width: max-content;
  padding-top: var(--space-medium);
  padding-bottom: var(--space-medium);
  position: relative;
`;
const AddToCartSuccessButton = styled(AddToCartAction)`
  color: var(--color-success);
  border-color: var(--color-success);
  gap: var(--space-small);
  box-shadow: var(--surface-5-shadow);
  &:hover,
  &:focus {
    border-color: var(--color-success);
    color: var(--color-success);
  }
`;

const AddToCartFailedButton = styled(AddToCartSuccessButton)`
  color: var(--color-error);
  border-color: var(--color-error);
  &:hover,
  &:focus {
    border-color: var(--color-error);
    color: var(--color-error);
  }
`;
const StatusMarker = styled.span`
  font-size: 1.25rem;
  position: absolute;
  right: 1%;
  top: 50%;
  transform: translateY(-50%);
  display: ${({ $isVisible }) => ($isVisible ? 'block' : 'none')};
`;
AddToCartButton.propTypes = {
  addStatus: PropTypes.bool,
  handleAddToCart: PropTypes.func,
};

export default function AddToCartButton({
  addStatus,
  handleAddToCart,
  ...rest
}) {
  return addStatus === false ? (
    <AddToCartAction type="button" onClick={handleAddToCart} {...rest}>
      {DEFAULT_TEXT}
    </AddToCartAction>
  ) : addStatus === true ? (
    <AddToCartSuccessButton type="button" onClick={handleAddToCart} {...rest}>
      {SUCCESS_TEXT}
      <StatusMarker $isVisible={true}>{SUCCESS_MARKER}</StatusMarker>
    </AddToCartSuccessButton>
  ) : (
    <AddToCartFailedButton type="button" onClick={handleAddToCart} {...rest}>
      {FAILED_TEXT}
      <StatusMarker $isVisible={true}>{FAILED_MARKER}</StatusMarker>
    </AddToCartFailedButton>
  );
}
