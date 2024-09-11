import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ImageOverlay from './ImageOverlay';

describe('ImageOverlay component', () => {
  it('Renders an empty container if passed no props', () => {
    render(<ImageOverlay data-testid="emptyOverlay" />);
    const container = screen.getByTestId('emptyOverlay');
    expect(container).toBeInTheDocument();
    expect(container.firstChild).toBeNull();
  });
  it('Renders properly when all props are passed', () => {
    render(
      <ImageOverlay
        headerText={'Header Text'}
        bodyText={'Body Text'}
        action={{ type: 'button', text: 'Click Me' }}
      />,
    );
    const header = screen.getByText('Header Text');
    const body = screen.getByText('Body Text');
    const action = screen.getByRole('button');
    expect(header).toBeInTheDocument();
    expect(body).toBeInTheDocument();
    expect(action).toBeInTheDocument();
  });
  it('Conditionally renders a header', () => {
    render(<ImageOverlay headerText={'Header Text'} />);
    const header = screen.getByText('Header Text');
    expect(header).toBeInTheDocument();
  });
  it('Conditionally renders body text', () => {
    render(<ImageOverlay bodyText={'Body Text'} />);
    const body = screen.getByText('Body Text');
    expect(body).toBeInTheDocument();
  });
  it('Conditionally renders an action', () => {
    render(<ImageOverlay action={{ type: 'button' }} />);
    const action = screen.getByRole('button');
    expect(action).toBeInTheDocument();
  });
});
