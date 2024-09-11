import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`;

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 40px;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: var(--border-radius);
`;
const SpinnerElement = styled.div`
  border-radius: 50%;
  width: 50%;
  height: 50%;
  border-top: 2px solid var(--color-secondary);
  border-left: 2px solid transparent;
  border-right: 2px solid transparent;
  border-bottom: 2px solid var(--color-primary);
  animation: ${rotate} 1s linear infinite;
`;

export default function Spinner() {
  return (
    <SpinnerWrapper>
      <SpinnerElement role="status" />
    </SpinnerWrapper>
  );
}
