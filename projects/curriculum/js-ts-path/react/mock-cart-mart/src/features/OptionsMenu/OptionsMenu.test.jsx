import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import OptionsMenu from './OptionsMenu';

const props = {
  defaultText: 'Select',
  options: ['o1', 'o2', 'o3'],
  selected: '',
  onSelected: vi.fn(),
};

describe('OptionsMenu component', () => {
  it('Renders Correctly', () => {
    render(<OptionsMenu {...props} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });
  it('Renders the options menu when the head is clicked', async () => {
    render(<OptionsMenu {...props} />);
    const user = userEvent.setup();
    const head = screen.getByRole('button');
    await user.click(head);
    expect(screen.queryByRole('listbox')).toBeInTheDocument();
  });
});
