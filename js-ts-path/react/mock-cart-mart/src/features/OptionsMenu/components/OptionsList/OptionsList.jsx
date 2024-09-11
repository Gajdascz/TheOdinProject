import PropTypes from 'prop-types';
import styled from 'styled-components';

const OptionsContainer = styled.div`
  position: absolute;
  top: 98%;
  background-color: var(--surface-0-color);
  box-shadow: var(--surface-5-shadow);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 1px solid var(--color-primary);
  &:last-child {
    padding-bottom: var(--space-small);
  }
`;

const MenuOption = styled.p`
  text-align: center;
  font-weight: bold;
  padding-left: var(--space-small);
  padding-right: var(--space-small);
  border-bottom: ${({ $isActive }) =>
    $isActive ? '1px solid var(--color-primary)' : '1px solid transparent'};
  color: ${({ $isActive }) => ($isActive ? 'var(--color-primary)' : 'inherit')};
`;
const OptionWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: flex-end;
  padding-top: var(--space-large);
  &:hover > ${MenuOption} {
    color: ${({ $isActive }) =>
      $isActive ? 'var(--color-error)' : 'var(--color-primary)'};
    border-bottom: 1px solid
      ${({ $isActive }) =>
        $isActive ? 'var(--color-error)' : 'var(--color-primary)'};
  }
`;
OptionsList.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  isMultiSelect: PropTypes.bool,
  selected: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  onClick: PropTypes.func,
  clickRef: PropTypes.object,
};
export default function OptionsList({
  options,
  isMultiSelect,
  selected,
  onClick,
  clickRef,
  ...rest
}) {
  return (
    <OptionsContainer ref={clickRef} role="listbox" {...rest}>
      {options?.map((option, index) => (
        <OptionWrapper
          key={index}
          $isActive={
            isMultiSelect ? selected?.includes(option) : selected === option
          }
        >
          <MenuOption
            $isActive={
              isMultiSelect ? selected?.includes(option) : selected === option
            }
            onClick={onClick}
            role="option"
            aria-selected={
              isMultiSelect ? selected?.includes(option) : selected === option
            }
          >
            {option}
          </MenuOption>
        </OptionWrapper>
      ))}
    </OptionsContainer>
  );
}
