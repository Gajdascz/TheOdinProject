import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ShopHeader from './ShopHeader';
import { MemoryRouter } from 'react-router-dom';

const links = [
  { to: '/', text: 'link' },
  { to: '/', text: 'link' },
];
const icons = [<div key={0}>icon</div>, <div key={1}>icon</div>];
describe('ShopHeader feature', () => {
  it('Renders correctly', () => {
    render(<ShopHeader data-testid="shopHeader" />);
    expect(screen.getByTestId('shopHeader')).toBeInTheDocument();
    expect(screen.queryAllByText('link')).toHaveLength(0);
    expect(screen.queryAllByText('icon')).toHaveLength(0);
  });
  it('Renders with given links', () => {
    render(
      <MemoryRouter>
        <ShopHeader links={links} />
      </MemoryRouter>,
    );
    expect(screen.getAllByText('link')).toHaveLength(2);
  });
  it('Renders with given icons', () => {
    render(<ShopHeader icons={icons} />);
    expect(screen.getAllByText('icon')).toHaveLength(2);
  });
  it('Renders with logo text', () => {
    render(
      <MemoryRouter>
        <ShopHeader logoText="logo" />
      </MemoryRouter>,
    );
    expect(screen.getByText('logo')).toBeInTheDocument();
  });
});
