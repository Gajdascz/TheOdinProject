import PropTypes from 'prop-types';
import styled from 'styled-components';
import Action from '../../components/Action/Action';
import { ARIA_LABEL, ARIA_ROLE, HAMBURGER_SYMBOL } from './config';

const HamburgerContainer = styled.div`
  position: relative;
  display: none;
  @media (max-width: ${({ $BREAK_WIDTH }) => $BREAK_WIDTH ?? '750px'}) {
    display: block;
  }
`;

const HamburgerMenuButton = styled(Action)`
  box-shadow: none;
  position: relative;
  color: var(--color-primary);
  z-index: 1;
  font-size: 2rem;
`;
const HamburgerDropdown = styled.nav`
  display: flex;
  flex-direction: column;
  gap: var(--space-medium);
  position: absolute;
  left: 0%;
  top: 105%;
  background-color: var(--surface-0-color);
  border-radius: var(--border-radius);
  padding: var(--space-medium);
  box-shadow: var(--surface-4-shadow);
  z-index: 100;
  & > * {
    font-size: 1.25rem;
    width: 200px;
  }
`;

HamburgerMenu.propTypes = {
  menuRef: PropTypes.object,
  toggleHamburger: PropTypes.func,
  isHamburgerOpen: PropTypes.bool,
  BREAK_WIDTH: PropTypes.string,
  children: PropTypes.node,
};

export default function HamburgerMenu({
  menuRef,
  toggleHamburger,
  isHamburgerOpen,
  BREAK_WIDTH,
  children,
}) {
  return (
    <HamburgerContainer
      ref={menuRef}
      $BREAK_WIDTH={BREAK_WIDTH}
      role={ARIA_ROLE}
      aria-label={ARIA_LABEL}
    >
      <HamburgerMenuButton
        type="button"
        onClick={toggleHamburger}
        aria-expanded={isHamburgerOpen}
      >
        {HAMBURGER_SYMBOL}
      </HamburgerMenuButton>
      {isHamburgerOpen && <HamburgerDropdown>{children}</HamburgerDropdown>}
    </HamburgerContainer>
  );
}
