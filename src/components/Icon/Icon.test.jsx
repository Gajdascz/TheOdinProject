import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Icon from './Icon';

const types = [
  'starSolid',
  'starHalf',
  'chevronDown',
  'chevronLeft',
  'chevronRight',
  'arrowLeft',
  'lightDark',
  'shoppingCart',
  'gitHub',
];

describe('Icon component', () => {
  it('Renders the correct svg based on type', async () => {
    types.forEach(async (type) => {
      render(<Icon type={type} data-testid={type} />);
      const svg = await screen.findByTestId(type);
      expect(svg).toBeInTheDocument();
    });
  });
  it('Renders fallback while loading', () => {
    render(<Icon type={types[0]} />);
    const spinner = screen.getByRole('status');
    expect(spinner).toBeInTheDocument();
  });
  it('Does not render anything if type is invalid', () => {
    const { container } = render(<Icon type="invalidType" />);
    expect(container.firstChild).toBeNull();
  });
});
