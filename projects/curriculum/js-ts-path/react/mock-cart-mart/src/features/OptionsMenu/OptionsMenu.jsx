import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import MenuHead from './components/MenuHead/MenuHead';
import OptionsList from './components/OptionsList/OptionsList';

const MenuContainer = styled.div`
  color: var(--color-on-surface);
  border: 1px solid var(--border-color);
  cursor: pointer;
  position: relative;
  max-width: 50%;
`;

OptionsMenu.propTypes = {
  defaultText: PropTypes.string,
  options: PropTypes.array,
  selected: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  onSelected: PropTypes.func,
};

export default function OptionsMenu({
  options,
  onSelected,
  defaultText = 'Select',
  selected = '',
}) {
  const [isOpen, setIsOpen] = useState(false);
  const isMultiSelect = Array.isArray(selected);
  const isDefault = selected.length === 0;

  const handleSelect = (e) => onSelected(e.target.textContent);

  const headRef = useRef();
  const optionsRef = useRef();

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const handleClick = (e) => {
    if (headRef?.current && headRef.current.contains(e.target)) return;
    else if (optionsRef?.current && !optionsRef.current.contains(e.target))
      setIsOpen(false);
  };

  useEffect(() => {
    const removeListeners = () => {
      document.removeEventListener('click', handleClick);
    };
    if (isOpen) {
      document.addEventListener('click', handleClick);
    } else removeListeners();
    return removeListeners;
  }, [isOpen]);

  return (
    <MenuContainer>
      <MenuHead
        headRef={headRef}
        toggleMenu={toggleMenu}
        isOpen={isOpen}
        isDefault={isDefault}
        isMultiSelect={isMultiSelect}
        defaultText={defaultText}
        selected={selected}
      />
      {isOpen && (
        <OptionsList
          clickRef={optionsRef}
          isMultiSelect={isMultiSelect}
          options={options}
          selected={selected}
          onClick={handleSelect}
        />
      )}
    </MenuContainer>
  );
}
