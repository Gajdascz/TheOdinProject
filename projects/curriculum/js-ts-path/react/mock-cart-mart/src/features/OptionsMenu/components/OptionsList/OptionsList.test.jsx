import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import OptionsList from './OptionsList';

const props = {
  options: ['o1', 'o2', 'o3'],
  isMultiSelect: false,
  selected: '',
  onClick: vi.fn(),
  clickRef: { current: {} },
};
describe('OptionsList feature component', () => {
  it('Renders correctly', () => {
    render(<OptionsList {...props} />);
    expect(screen.getByRole('listbox')).toBeInTheDocument();
    expect(screen.getAllByRole('option')).toHaveLength(3);
  });
});
