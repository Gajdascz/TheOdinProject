import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import SlideIndicator from './SlideIndicator';

describe('SlideIndicator feature component', () => {
  it('Renders active and inactive indicators correctly', () => {
    render(<SlideIndicator size="20px" isActive={false} index={0} />);
    const inactive = screen.getByLabelText(`Slide 1`, { selector: 'button' });
    expect(inactive).toBeInTheDocument();
    render(<SlideIndicator size="20px" isActive={true} index={1} />);
    const active = screen.getByLabelText(`Slide 2`, {
      selector: 'button',
    });
    expect(active).toBeInTheDocument();
  });
});
