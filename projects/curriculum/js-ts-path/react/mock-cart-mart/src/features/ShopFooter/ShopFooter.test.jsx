import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ShopFooter from './ShopFooter';

describe('ShopFooter feature', () => {
  it('Renders correctly', () => {
    render(<ShopFooter data-testid="shopFooter" />);
    expect(screen.getByTestId('shopFooter')).toBeInTheDocument();
    expect(
      screen.getByLabelText('Opens Github profile in new tab'),
    ).toBeInTheDocument();
    expect(screen.getByText('© 2024 Nolan Gajdascz'));
  });
});
