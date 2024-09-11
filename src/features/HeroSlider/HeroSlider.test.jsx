import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import HeroSlider from './HeroSlider';

vi.mock('./components/SlideIndicator/SlideIndicator.jsx', () => ({
  default: () => <button data-testid="slideIndicator" />,
}));
vi.mock('./components/SliderBar/SliderBar.jsx', () => ({
  default: ({ children }) => <div data-testid="sliderBar">{children}</div>,
}));
vi.mock('../../components/ImageWrapper/ImageWrapper.jsx', () => ({
  default: ({ children, ...props }) => (
    <div data-testid="imageWrapper" data-img-src={props.imgSrc}>
      {children}
    </div>
  ),
}));
vi.mock('../../components/ImageOverlay/ImageOverlay.jsx', () => ({
  default: () => <div data-testid="imageOverlay" />,
}));

describe('HeroSlider feature', () => {
  const displays = [
    {
      img: { src: 'image1.jpg' },
      overlay: { header: 'Header 1', text: 'Text 1', action: {}, position: {} },
    },
    {
      img: { src: 'image2.jpg' },
      overlay: { header: 'Header 2', text: 'Text 2', action: {}, position: {} },
    },
    {
      img: { src: 'image3.jpg' },
    },
  ];
  it('Renders correctly', () => {
    render(<HeroSlider displays={displays} data-testid="heroSlider" />);
    expect(screen.getByTestId('heroSlider')).toBeInTheDocument();
  });
  it('Renders the correct number of indicators', () => {
    render(<HeroSlider displays={displays} />);
    expect(screen.getAllByTestId('slideIndicator')).toHaveLength(
      displays.length,
    );
  });
  it('Auto rotates correctly', async () => {
    vi.useFakeTimers();
    vi.runOnlyPendingTimersAsync();
    render(<HeroSlider displays={displays} />);
    await waitFor(() => {
      expect(screen.getByTestId('imageWrapper')).toHaveAttribute(
        'data-img-src',
        'image1.jpg',
      );
    });
    vi.advanceTimersByTime(6000);
    await waitFor(() => {
      expect(screen.getByTestId('imageWrapper')).toHaveAttribute(
        'data-img-src',
        'image2.jpg',
      );
    });
    vi.advanceTimersByTime(6000);
    await waitFor(() => {
      expect(screen.getByTestId('imageWrapper')).toHaveAttribute(
        'data-img-src',
        'image3.jpg',
      );
    });
  });
  it('Renders ImageOverlay', () => {
    render(<HeroSlider displays={displays} />);
    const overlay = screen.getByTestId('imageOverlay');
    expect(overlay).toBeInTheDocument();
  });
});
