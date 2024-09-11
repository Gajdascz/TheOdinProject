import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-image: url(${(props) => props.$imgSrc});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: var(--space-large);
  box-shadow: 0 0 10px 2px var(--surface-3-shadow);
  display: grid;
`;

ImageWrapper.propTypes = {
  imgSrc: PropTypes.string,
  children: PropTypes.node,
};
export default function ImageWrapper({ imgSrc, children, ...rest }) {
  return (
    <Wrapper $imgSrc={imgSrc} {...rest}>
      {children}
    </Wrapper>
  );
}
