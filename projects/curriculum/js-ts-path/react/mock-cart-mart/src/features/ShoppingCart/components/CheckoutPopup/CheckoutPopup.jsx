import PropTypes from 'prop-types';
import { useState } from 'react';
import styled, { css } from 'styled-components';

import Backdrop from '../../../../components/Backdrop/Backdrop';
import Action from '../../../../components/Action/Action';
import {
  CANCEL_ACTION_TEXT,
  CLOSE_ACTION_TEXT,
  EMAIL_INPUT_PLACEHOLDER,
  EMAIL_PATTERN,
  ENTER_EMAIL_MESSAGE,
  FINALIZED_MESSAGE,
  FINALIZE_ACTION_TEXT,
  REVIEW_ORDER_ACTION_TEXT,
} from './config';

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: min-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--space-medium);
  border-radius: var(--border-radius);
  box-shadow: var(--surface-5-shadow);
  background-color: var(--surface-0-color);
  gap: var(--space-medium);
  border-width: 2px;
  border-style: solid;
  color: ${({ $isFinalized }) =>
    $isFinalized ? 'var(--color-success)' : 'var(--color-on-surface)'};
  border-color: ${({ $isFinalized }) =>
    $isFinalized ? 'var(--color-success)' : 'var(--border-color)'};
`;

const PopupButton = styled(Action)`
  border: 1px solid var(--color-primary);
`;

const DisabledFinalize = css`
  color: var(--color-on-disabled);
  background-color: var(--color-disabled);
  box-shadow: none;
  transition: none;
  border-color: var(--color-on-disabled);
  cursor: default;
  &:hover,
  &:focus {
    color: var(--color-on-disabled);
    background-color: var(--color-disabled);
    border-color: var(--color-on-disabled);
    box-shadow: none;
  }
  &:hover > p {
    color: inherit;
    border-color: inherit;
    transition: none;
  }
`;

const FinalizeButton = styled(PopupButton)`
  ${({ $isEnabled }) => ($isEnabled ? null : DisabledFinalize)}
`;

const EmailInput = styled.input`
  cursor: text;
  padding: var(--space-small);
  border-radius: var(--border-radius);
  border: 3px solid
    ${({ $isValid }) =>
      $isValid === true
        ? 'var(--color-success)'
        : $isValid === false
          ? 'var(--color-error)'
          : 'var(--color-primary)'};
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  gap: var(--space-small);
  & > * {
    flex: 1;
  }
`;

const EmailInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-small);
`;

CheckoutPopup.propTypes = {
  onCheckout: PropTypes.func,
  onClose: PropTypes.func,
};

export default function CheckoutPopup({ onCheckout, onClose, ...rest }) {
  const [isEmailValid, setIsEmailValid] = useState(null);
  const [isFinalized, setIsFinalized] = useState(false);
  const onEmailInput = (e) => {
    const value = e.target.value.trim();
    if (value === '') setIsEmailValid(null);
    else setIsEmailValid(EMAIL_PATTERN.test(value));
  };

  const onFinalize = () => {
    setIsFinalized(true);
    onCheckout();
  };
  return (
    <Backdrop onClick={onClose}>
      <Container $isFinalized={isFinalized} {...rest}>
        {!isFinalized ? (
          <>
            <EmailInputWrapper>
              <h3>{ENTER_EMAIL_MESSAGE}</h3>
              <EmailInput
                placeholder={EMAIL_INPUT_PLACEHOLDER}
                onChange={onEmailInput}
                $isValid={isEmailValid}
              />
            </EmailInputWrapper>
            <ButtonContainer>
              <FinalizeButton
                type="button"
                $isEnabled={isEmailValid}
                disabled={!isEmailValid}
                onClick={onFinalize}
              >
                {FINALIZE_ACTION_TEXT}
              </FinalizeButton>
              <PopupButton type="button" onClick={onClose}>
                {CANCEL_ACTION_TEXT}
              </PopupButton>
            </ButtonContainer>
          </>
        ) : (
          <>
            <h3>{FINALIZED_MESSAGE}</h3>
            <ButtonContainer>
              <PopupButton type="button" onClick={onClose}>
                {REVIEW_ORDER_ACTION_TEXT}
              </PopupButton>
              <PopupButton type="button" onClick={onClose}>
                {CLOSE_ACTION_TEXT}
              </PopupButton>
            </ButtonContainer>
          </>
        )}
      </Container>
    </Backdrop>
  );
}
