import { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import Action from '../../components/Action/Action';

import styled from 'styled-components';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';

const BREAK_WIDTH = '750px';

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--surface-3-color);
  box-shadow: var(--surface-3-shadow);
  max-width: 100vw;
  padding-left: var(--space-large);
  padding-right: var(--space-large);
`;

const HeaderMainWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: var(--space-small);
  padding-bottom: var(--space-small);
`;

const LogoLinkWrapper = styled(Action)`
  color: var(--color-on-surface);

  @media (max-width: ${BREAK_WIDTH}) {
    display: none;
  }
`;
const LogoText = styled.h1``;

const IconsContainer = styled.div`
  display: flex;
  gap: var(--space-medium);
`;

const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-small);
  @media (max-width: ${BREAK_WIDTH}) {
    display: none;
  }
`;
const NavLink = styled(Action)`
  width: 75px;
  color: var(--color-on-surface);
`;

ShopHeader.propTypes = {
  children: PropTypes.node,
};

ShopHeader.propTypes = {
  logoText: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string,
      text: PropTypes.string,
    }),
  ),
  icons: PropTypes.arrayOf(PropTypes.node),
};

export default function ShopHeader({
  logoText,
  links = [],
  icons = [],
  ...rest
}) {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const menuRef = useRef();
  const toggleHamburger = () => setIsHamburgerOpen((prev) => !prev);
  const handleClickOutsideMenu = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setIsHamburgerOpen(false);
    }
  };
  const handleKeydown = (e) => {
    if (e.key === 'Escape') setIsHamburgerOpen(false);
  };
  useEffect(() => {
    const removeListeners = () => {
      document.removeEventListener('click', handleClickOutsideMenu);
      document.removeEventListener('keydown', handleKeydown);
    };
    if (isHamburgerOpen) {
      document.addEventListener('click', handleClickOutsideMenu);
      document.addEventListener('keydown', handleKeydown);
    } else removeListeners();
    return removeListeners;
  }, [isHamburgerOpen]);
  return (
    <HeaderContainer {...rest}>
      <HeaderMainWrapper>
        <HamburgerMenu
          menuRef={menuRef}
          toggleHamburger={toggleHamburger}
          isHamburgerOpen={isHamburgerOpen}
          BREAK_WIDTH={BREAK_WIDTH}
        >
          <NavLink key={'homeLink'} to="/" type="navLink">
            Home
          </NavLink>
          {links.map((link, index) => (
            <NavLink key={index} to={link.to} type={'navLink'}>
              {link.text}
            </NavLink>
          ))}
        </HamburgerMenu>
        {logoText && (
          <LogoLinkWrapper to="/" type="link">
            <LogoText>{logoText}</LogoText>
          </LogoLinkWrapper>
        )}
        <LinksContainer>
          {links.map((link, index) => (
            <NavLink key={index} to={link.to} type={'navLink'}>
              {link.text}
            </NavLink>
          ))}
        </LinksContainer>

        <IconsContainer>{icons}</IconsContainer>
      </HeaderMainWrapper>
    </HeaderContainer>
  );
}
