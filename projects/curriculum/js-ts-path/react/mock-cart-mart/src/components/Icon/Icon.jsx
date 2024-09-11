import PropTypes from 'prop-types';
import { lazy, Suspense } from 'react';
import styled from 'styled-components';
import Spinner from '../Spinner/Spinner';

const svgs = {
  starSolid: lazy(() => import('./svgs/StarSolid')),
  starHalf: lazy(() => import('./svgs/StarHalf')),
  chevronDown: lazy(() => import('./svgs/ChevronDown')),
  chevronLeft: lazy(() => import('./svgs/ChevronLeft')),
  chevronRight: lazy(() => import('./svgs/ChevronRight')),
  arrowLeft: lazy(() => import('./svgs/ArrowLeft')),
  lightDark: lazy(() => import('./svgs/LightDark')),
  shoppingCart: lazy(() => import('./svgs/ShoppingCart')),
  gitHub: lazy(() => import('./svgs/GitHub')),
};

const BaseSvg = styled.div`
  width: 32px;
  height: 32px;
  fill: var(--color-primary);
`;

Icon.propTypes = {
  type: PropTypes.oneOf([
    'starSolid',
    'starHalf',
    'chevronDown',
    'chevronLeft',
    'chevronRight',
    'arrowLeft',
    'lightDark',
    'shoppingCart',
    'gitHub',
  ]),
};
export default function Icon({ type, ...rest }) {
  const Svg = svgs[type];
  return (
    <Suspense fallback={<Spinner />}>
      {Svg ? <BaseSvg as={Svg} {...rest} /> : null}
    </Suspense>
  );
}
