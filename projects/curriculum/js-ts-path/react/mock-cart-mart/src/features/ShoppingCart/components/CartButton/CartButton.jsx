import PropTypes from 'prop-types';
import Icon from '../../../../components/Icon/Icon';
import Action from '../../../../components/Action/Action';
import styled from 'styled-components';
import { ARIA_HASPOPUP, ARIA_CONTROLS, ARIA_LABEL } from './config';
const ItemCount = styled.p`
  font-weight: bold;
  color: var(--color-primary);
  padding-left: 0.15rem;
  transition:
    border-color linear 0.25s,
    color linear 0.25s;
`;

CartButton.propTypes = {
  onClick: PropTypes.func,
  itemsInCart: PropTypes.number,
};

export default function CartButton({ onClick, itemsInCart }) {
  return (
    <Action
      type="button"
      onClick={onClick}
      aria-haspopup={ARIA_HASPOPUP}
      aria-controls={ARIA_CONTROLS}
      aria-label={ARIA_LABEL}
    >
      <Icon type="shoppingCart" title="Your Cart" />
      {itemsInCart > 0 && <ItemCount>{itemsInCart}</ItemCount>}
    </Action>
  );
}
