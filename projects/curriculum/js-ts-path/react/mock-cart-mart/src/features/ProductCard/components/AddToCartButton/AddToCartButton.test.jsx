import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import AddToCartButton from './AddToCartButton';

describe('AddToCartButton feature component', () => {
  describe('Renders correctly based on addStatus', () => {
    it('With false addStatus (idle)', () => {
      render(<AddToCartButton addStatus={false} handleAddToCart={vi.fn()} />);
      expect(screen.getByText('Add To Cart')).toBeInTheDocument();
    });
    it('With true addStatus (success)', () => {
      render(<AddToCartButton addStatus={true} handleAddToCart={vi.fn()} />);
      expect(screen.getByText('Added To Cart')).toBeInTheDocument();
    });
    it('With other addStatus (failed)', () => {
      render(<AddToCartButton addStatus={null} handleAddToCart={vi.fn()} />);
      expect(screen.getByText('Add To Cart Failed')).toBeInTheDocument();
    });
  });
});
