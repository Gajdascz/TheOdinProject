import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import HamburgerMenu from './HamburgerMenu';
import userEvent from '@testing-library/user-event';
import { ARIA_LABEL, HAMBURGER_SYMBOL } from './config';

const props = {
  menuRef: { current: {} },
  toggleHamburger: vi.fn(),
  isHamburgerOpen: false,
  BREAK_WIDTH: '750px',
};

describe('HamburgerMenu feature', () => {
  it('Renders correctly', () => {
    render(<HamburgerMenu {...props} />);
    const menu = screen.getByLabelText(ARIA_LABEL);
    expect(menu).toBeInTheDocument();
    expect(menu.children).toHaveLength(1); // Should include button but not drop down (not open)
  });
  it('Renders the dropdown when clicked', async () => {
    const { rerender } = render(<HamburgerMenu {...props} />);
    const user = userEvent.setup();
    const menuButton = screen.getByText(HAMBURGER_SYMBOL);
    await user.click(menuButton);
    const newProps = { ...props, isHamburgerOpen: true };
    rerender(<HamburgerMenu {...newProps} />);
    const menu = screen.getByLabelText(ARIA_LABEL);
    expect(props.toggleHamburger).toHaveBeenCalledOnce();
    expect(menu.children).toHaveLength(2);
  });
});
