import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from '../../../../components/Icon/Icon';

const ProductRatingWrapper = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  gap: 0.2rem;
`;

const ProductRateCount = styled.p`
  border-bottom: 0.5px solid var(--color-on-surface);
`;
const StarContainer = styled.div`
  display: flex;
`;

const StarIcon = styled(Icon)`
  width: 25px;
  height: 25px;
  fill: ${({ $hasFill }) =>
    $hasFill ? `var(--color-primary)` : `transparent`};
  stroke: ${({ $hasFill }) =>
    $hasFill ? `transparent` : `var(--color-primary)`};
`;

ProductRating.propTypes = {
  rate: PropTypes.number,
  count: PropTypes.number,
};

export default function ProductRating({ rate, count }) {
  const roundedRate = Math.round(rate * 2) / 2;
  const fullCount = Math.floor(roundedRate);
  const halfCount = roundedRate % 1 !== 0 ? 1 : 0;
  const emptyCount = 5 - fullCount - halfCount;
  const stars = {
    full: [...Array(fullCount)].map((_, index) => (
      <StarIcon key={`full-${index}`} type="starSolid" $hasFill={true} />
    )),
    half: halfCount === 1 ? <StarIcon type="starHalf" $hasFill={true} /> : null,
    empty: [...Array(emptyCount)].map((_, index) => (
      <StarIcon key={`empty-${index}`} type="starSolid" $hasFill={false} />
    )),
  };
  return (
    <ProductRatingWrapper>
      <StarContainer>
        {stars.full}
        {stars.half}
        {stars.empty}
      </StarContainer>
      <ProductRateCount>{count}</ProductRateCount>
    </ProductRatingWrapper>
  );
}
