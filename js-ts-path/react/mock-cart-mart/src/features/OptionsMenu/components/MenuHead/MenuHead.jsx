import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from '../../../../components/Icon/Icon';
const MenuHeadContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-small);
  min-width: 100px;
  border: 1px solid var(--color-primary);
  border-bottom: ${({ $isOpen }) => ($isOpen ? 'none' : null)};
  &:hover {
    color: var(--color-secondary);
    box-shadow: var(--surface-5-shadow);
    > svg {
      fill: var(--color-secondary);
    }
  }
`;

const DropdownChevron = styled(Icon)`
  width: 24px;
  height: 24px;
  position: absolute;
  right: 0%;
`;

const CurrentSelect = styled.p`
  color: ${({ $isDefault }) =>
    $isDefault ? 'var(--color-on-disabled)' : 'var(--color-on-surface)'};
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding-right: var(--space-small);
`;

MenuHead.propTypes = {
  toggleMenu: PropTypes.func,
  headRef: PropTypes.object,
  isOpen: PropTypes.bool,
  isDefault: PropTypes.bool,
  defaultText: PropTypes.string,
  isMultiSelect: PropTypes.bool,
  selected: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
};

export default function MenuHead({
  toggleMenu,
  headRef,
  isOpen,
  isDefault,
  defaultText,
  isMultiSelect,
  selected,
}) {
  return (
    <MenuHeadContainer
      onClick={toggleMenu}
      ref={headRef}
      tabIndex={0}
      role="button"
      aria-haspopup="listbox"
      aria-expanded={isOpen}
    >
      <CurrentSelect $isDefault={isDefault}>
        {isDefault
          ? defaultText
          : isMultiSelect
            ? selected.join(', ')
            : selected}
      </CurrentSelect>
      <DropdownChevron type="chevronDown" aria-hidden={true} />
    </MenuHeadContainer>
  );
}
