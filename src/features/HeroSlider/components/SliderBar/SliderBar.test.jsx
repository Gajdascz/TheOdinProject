import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import SliderBar from './SliderBar';

describe('SliderBar feature component', () => {
  it('Renders correctly', () => {
    render(<SliderBar data-testid="sliderBar" />);
    expect(screen.getByTestId('sliderBar')).toBeInTheDocument();
  });
});
