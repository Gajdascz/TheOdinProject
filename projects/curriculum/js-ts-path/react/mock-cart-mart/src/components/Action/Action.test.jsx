import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Action from './Action';

describe('Action component', () => {
  it('renders a button element when the type is button', () => {
    render(<Action type="button">Button</Action>);
    expect(screen.getByRole('button', { name: /Button/ })).toBeInTheDocument();
  });
  it('renders a link element when the type is link', () => {
    render(
      <MemoryRouter>
        <Action type="link">Link</Action>
      </MemoryRouter>,
    );
    expect(screen.getByRole('link', { name: /Link/ })).toBeInTheDocument();
  });
  it('renders an anchor element when the type is a', () => {
    render(
      <Action type="a" href="https://www.example.com">
        Anchor
      </Action>,
    );
    expect(screen.getByRole('link', { name: /Anchor/ })).toBeInTheDocument();
  });
  it('renders a link element when the type is navLink', () => {
    render(
      <MemoryRouter>
        <Action type="navLink">NavLink</Action>
      </MemoryRouter>,
    );
    expect(screen.getByRole('link', { name: /NavLink/ })).toBeInTheDocument();
  });
  it('renders a div element when the type is not defined', () => {
    render(<Action>Div</Action>);
    expect(screen.getByText(/Div/)).toBeInTheDocument();
  });
});
