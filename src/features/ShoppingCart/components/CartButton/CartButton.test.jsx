import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import CartButton from './CartButton';

describe('CartButton feature component', () => {
  describe('Renders correctly given props', () => {
    it('No item count when cart has zero items', () => {
      render(<CartButton itemsInCart={0} />);
      expect(screen.getByRole('button').children).toHaveLength(1); // Has icon but no item count
    });
    it('With an item count', () => {
      render(<CartButton itemsInCart={3} />);
      const button = screen.getByRole('button');
      expect(button.children).toHaveLength(2);
      expect(screen.getByText('3')).toBeInTheDocument();
    });
  });
});
