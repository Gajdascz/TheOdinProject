import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import QuantityInput from './QuantityInput';
import {
  DECREASE_ARIA_LABEL,
  INCREASE_ARIA_LABEL,
  INPUT_ARIA_LABEL,
} from './config';

const mockOnQuantityChange = vi.fn((newQuantity) => newQuantity);

const props = {
  quantity: 0,
  onQuantityChange: mockOnQuantityChange,
  min: 0,
  max: 3,
  ['data-testid']: 'quantityInput',
};

describe('ProductCard feature', () => {
  it('Renders correctly', () => {
    render(<QuantityInput {...props} />);
    const input = screen.getByTestId('quantityInput');
    expect(input).toBeInTheDocument();
  });
  describe('Modifies quantity correctly', () => {
    describe('Add one', () => {
      it('Within bounds', async () => {
        render(<QuantityInput {...props} />);
        const user = userEvent.setup();
        const addButton = screen.getByLabelText(INCREASE_ARIA_LABEL);
        await user.click(addButton);
        expect(mockOnQuantityChange).toHaveBeenCalledWith(props.quantity + 1);
      });
      it('Prevents out of bounds', async () => {
        const newProps = { ...props, quantity: props.max };
        render(<QuantityInput {...newProps} />);
        const user = userEvent.setup();
        const addButton = screen.getByLabelText(INCREASE_ARIA_LABEL);
        await user.click(addButton);
        expect(mockOnQuantityChange).toHaveBeenCalledWith(props.max);
      });
    });
    describe('Remove one', () => {
      it('Within bounds', async () => {
        const newProps = { ...props, quantity: 1 };
        render(<QuantityInput {...newProps} />);
        const user = userEvent.setup();
        const addButton = screen.getByLabelText(DECREASE_ARIA_LABEL);
        await user.click(addButton);
        expect(mockOnQuantityChange).toHaveBeenCalledWith(
          newProps.quantity - 1,
        );
      });
      it('Prevents out of bounds', async () => {
        const newProps = { ...props, quantity: props.min };
        render(<QuantityInput {...newProps} />);
        const user = userEvent.setup();
        const addButton = screen.getByLabelText(DECREASE_ARIA_LABEL);
        await user.click(addButton);
        expect(mockOnQuantityChange).toHaveBeenCalledWith(newProps.min);
      });
    });
    describe('Manual Input', () => {
      it('Within bounds', async () => {
        render(<QuantityInput {...props} />);
        const user = userEvent.setup();
        const input = screen.getByLabelText(INPUT_ARIA_LABEL);
        await user.type(input, '2');
        expect(mockOnQuantityChange).toHaveBeenCalledWith(2);
      });
      it('Prevents out of bounds', async () => {
        render(<QuantityInput {...props} />);
        const user = userEvent.setup();
        const input = screen.getByLabelText(INPUT_ARIA_LABEL);
        await user.type(input, `${props.min - 1}`);
        expect(mockOnQuantityChange).toHaveBeenCalledWith(props.min);
        await user.type(input, `${props.max + 1}`);
        expect(mockOnQuantityChange).toHaveBeenCalledWith(props.max);
      });
    });
  });
});
