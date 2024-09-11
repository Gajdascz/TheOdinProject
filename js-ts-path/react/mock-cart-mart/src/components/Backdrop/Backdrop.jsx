import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';

const StyledBackdrop = styled.div`
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: ${({ $opacity }) => `rgba(0,0,0,${$opacity})`};
`;

Backdrop.propTypes = {
  children: PropTypes.node,
  opacity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onClick: PropTypes.func,
};
export default function Backdrop({ children, opacity = '.5', onClick }) {
  const backdropRef = useRef();

  const handleClick = (e) => {
    e.stopPropagation();
    if (e.target === e.currentTarget && onClick) onClick();
  };

  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.key === 'Escape') return onClick();
    };
    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, [onClick]);

  return (
    <StyledBackdrop $opacity={opacity} onClick={handleClick} ref={backdropRef}>
      {children}
    </StyledBackdrop>
  );
}
