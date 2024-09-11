import { describe, it, expect, vi } from 'vitest';
import {
  getByPlaceholderText,
  getByRole,
  getByText,
  queryByText,
  render,
  screen,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import CheckoutPopup from './CheckoutPopup';
import {
  CANCEL_ACTION_TEXT,
  CLOSE_ACTION_TEXT,
  EMAIL_INPUT_PLACEHOLDER,
  ENTER_EMAIL_MESSAGE,
  FINALIZED_MESSAGE,
  FINALIZE_ACTION_TEXT,
  REVIEW_ORDER_ACTION_TEXT,
} from './config';

vi.mock('../../../components/Action/Action.jsx', () => ({
  default: () => <button>action</button>,
}));
vi.mock('../../../components/Backdrop/Backdrop,jsx', () => ({
  default: () => <div>backdrop</div>,
}));

const mockOnCheckout = vi.fn();
const mockOnClose = vi.fn();

describe('CheckoutPopup feature component', () => {
  it('Renders correctly', () => {
    render(
      <CheckoutPopup
        onCheckout={mockOnCheckout}
        onClose={mockOnClose}
        data-testid="checkoutPopup"
      />,
    );
    const popup = screen.getByTestId('checkoutPopup');
    expect(popup).toBeInTheDocument();
    expect(getByText(popup, ENTER_EMAIL_MESSAGE)).toBeInTheDocument();
    expect(
      getByPlaceholderText(popup, EMAIL_INPUT_PLACEHOLDER),
    ).toBeInTheDocument();
    const finalizeButton = getByRole(popup, 'button', {
      name: FINALIZE_ACTION_TEXT,
    });
    expect(finalizeButton).toBeInTheDocument();
    expect(finalizeButton).toHaveAttribute('disabled');
    expect(
      getByRole(popup, 'button', { name: CANCEL_ACTION_TEXT }),
    ).toBeInTheDocument();
    expect(
      queryByText(popup, { name: FINALIZED_MESSAGE }),
    ).not.toBeInTheDocument();
  });
  it('Rejects invalid email input', async () => {
    render(
      <CheckoutPopup
        onCheckout={mockOnCheckout}
        onClose={mockOnClose}
        data-testid="checkoutPopup"
      />,
    );
    const input = screen.getByPlaceholderText(EMAIL_INPUT_PLACEHOLDER);
    const finalizeButton = screen.getByRole('button', {
      name: FINALIZE_ACTION_TEXT,
    });
    const user = userEvent.setup();
    await user.type(input, 'bad@@@email$.ok');
    expect(finalizeButton).toHaveAttribute('disabled');
  });
  it('Allows valid email input', async () => {
    render(
      <CheckoutPopup
        onCheckout={mockOnCheckout}
        onClose={mockOnClose}
        data-testid="checkoutPopup"
      />,
    );
    const input = screen.getByPlaceholderText(EMAIL_INPUT_PLACEHOLDER);
    const finalizeButton = screen.getByRole('button', {
      name: FINALIZE_ACTION_TEXT,
    });
    const user = userEvent.setup();
    await user.type(input, 'valid@email.com');
    expect(finalizeButton).not.toHaveAttribute('disabled');
  });
  it('Calls onClose when Cancel is clicked', async () => {
    render(
      <CheckoutPopup
        onCheckout={mockOnCheckout}
        onClose={mockOnClose}
        data-testid="checkoutPopup"
      />,
    );
    const cancelButton = screen.getByRole('button', {
      name: CANCEL_ACTION_TEXT,
    });
    const user = userEvent.setup();
    await user.click(cancelButton);
    expect(mockOnClose).toHaveBeenCalledOnce();
  });
  it('Renders finalized message on finalize', async () => {
    render(
      <CheckoutPopup
        onCheckout={mockOnCheckout}
        onClose={mockOnClose}
        data-testid="checkoutPopup"
      />,
    );
    const popup = screen.getByTestId('checkoutPopup');
    const input = screen.getByPlaceholderText(EMAIL_INPUT_PLACEHOLDER);
    const finalizeButton = screen.getByRole('button', {
      name: FINALIZE_ACTION_TEXT,
    });
    const user = userEvent.setup();
    await user.type(input, 'valid@email.com');
    await user.click(finalizeButton);
    expect(getByText(popup, FINALIZED_MESSAGE)).toBeInTheDocument();
    expect(
      getByRole(popup, 'button', { name: REVIEW_ORDER_ACTION_TEXT }),
    ).toBeInTheDocument();
    expect(
      getByRole(popup, 'button', { name: CLOSE_ACTION_TEXT }),
    ).toBeInTheDocument();
  });
});
