import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import ProductRating from './ProductRating';

vi.mock('../../../../components/Icon/Icon.jsx', () => ({
  default: (props) => {
    return <div {...props} data-testid={props.type} />;
  },
}));
describe('ProductRating feature component', () => {
  describe('Renders correctly based on props', () => {
    it('With 3 full stars and 2 empty', () => {
      render(<ProductRating rate={3} count={42} />);
      const solidStars = screen.getAllByTestId('starSolid');
      expect(screen.getByText('42')).toBeInTheDocument();
      expect(solidStars).toHaveLength(5);
      const fullStars = solidStars.reduce(
        (acc, curr) =>
          (acc += curr.className === solidStars[0].className ? 1 : 0),
        0,
      );
      expect(fullStars).toEqual(3);
    });
    it('With 4 full stars and 1 half', () => {
      render(<ProductRating rate={4.5} count={500} />);
      const solidStars = screen.getAllByTestId('starSolid');
      const halfStars = screen.getAllByTestId('starHalf');
      expect(solidStars).toHaveLength(4);
      expect(halfStars).toHaveLength(1);
    });
    it('With 2 full stars and 1 half', () => {
      render(<ProductRating rate={2.5} count={500} />);
      const solidStars = screen.getAllByTestId('starSolid');
      const halfStars = screen.getAllByTestId('starHalf');
      expect(solidStars).toHaveLength(4);
      expect(halfStars).toHaveLength(1);
      const fullStars = solidStars.reduce(
        (acc, curr) =>
          (acc += curr.className === solidStars[0].className ? 1 : 0),
        0,
      );
      expect(fullStars).toEqual(2);
    });
  });
});
