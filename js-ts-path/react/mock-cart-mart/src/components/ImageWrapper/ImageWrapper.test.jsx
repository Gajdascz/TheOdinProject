import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ImageWrapper from './ImageWrapper';

describe('ImageWrapper component', () => {
  it('Renders correctly', () => {
    render(
      <ImageWrapper imgSrc={'test.jpg'} data-testid={'imageWrapper'}>
        <div>Child</div>
      </ImageWrapper>,
    );
    const wrapper = screen.getByTestId('imageWrapper');
    expect(wrapper).toHaveStyle('background-image: url(test.jpg)');
    expect(wrapper.firstChild.textContent).toBe('Child');
  });
});
