import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import MenuHead from './MenuHead';

const props = {
  toggleMenu: vi.fn(),
  headRef: { current: {} },
  isOpen: false,
  isDefault: true,
  defaultText: 'defaultText',
  isMultiSelect: false,
  selected: '',
};
describe('MenuHead feature component', () => {
  it('Renders correctly', () => {
    render(<MenuHead {...props} />);
    const head = screen.getByRole('button');
    expect(head).toBeInTheDocument();
    expect(head.ariaExpanded).toBe('false');
  });
  describe('Renders the correct current selection', () => {
    it('Default props', () => {
      render(<MenuHead {...props} />);
      expect(screen.getByText('defaultText')).toBeInTheDocument();
    });
    it('With string selected', () => {
      const newProps = { ...props, selected: 'selectedText', isDefault: false };
      render(<MenuHead {...newProps} />);
      expect(screen.getByText('selectedText')).toBeInTheDocument();
    });
    it('With array of strings selected', () => {
      const newProps = {
        ...props,
        selected: [
          'selectedText0',
          'selectedText1',
          'selectedText2',
          'selectedText3',
          'selectedText3',
        ],
        isDefault: false,
      };
      render(<MenuHead {...newProps} />);
      expect(screen.getByText(newProps.selected.join(''))).toBeInTheDocument();
    });
  });
});
