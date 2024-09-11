import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Backdrop from './Backdrop';

describe('Backdrop component', () => {
  it('Renders with the correct opacity', () => {
    render(
      <Backdrop opacity="0.75" onClick={() => {}}>
        TestString
      </Backdrop>,
    );
    expect(screen.getByText(/TestString/)).toHaveStyle({
      backgroundColor: 'rgba(0,0,0,0.75)',
    });
    render(
      <Backdrop opacity={0.75} onClick={() => {}}>
        TestNumber
      </Backdrop>,
    );
    expect(screen.getByText(/TestNumber/)).toHaveStyle({
      backgroundColor: 'rgba(0,0,0,0.75)',
    });
  });
  describe('onClick', () => {
    let onClick, user;
    beforeEach(() => {
      onClick = vi.fn();
      user = userEvent.setup();
      render(
        <Backdrop onClick={onClick}>
          <div>FindMe</div>
        </Backdrop>,
      );
    });
    it('Calls onClick when directly clicked', async () => {
      const backdrop = screen.getByText(/FindMe/).parentElement;
      await user.click(backdrop);
      expect(onClick).toHaveBeenCalledOnce();
    });
    it('Does not call onClick when child is clicked', async () => {
      const child = screen.getByText(/FindMe/);
      await user.click(child);
      expect(onClick).toHaveBeenCalledTimes(0);
    });
    it('Calls onClick when Escape is pressed', async () => {
      await user.keyboard('{Escape}');
      expect(onClick).toHaveBeenCalledOnce();
    });
  });
});
