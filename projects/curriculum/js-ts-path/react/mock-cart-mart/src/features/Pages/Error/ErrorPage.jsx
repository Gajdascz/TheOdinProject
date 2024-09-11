import Action from '../../../components/Action/Action';
import styled from 'styled-components';
import { ERROR_MESSAGE, HOME_ACTION_TEXT, SHOP_ACTION_TEXT } from './config';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const ContentWrapper = styled.div`
  padding: var(--space-medium);
  border: var(--border);
  border-radius: var(--border-radius);
  box-shadow: var(--surface-3-shadow);
  display: flex;
  flex-direction: column;
  gap: var(--space-small);
`;

const Header = styled.h2`
  color: var(--color-on-surface);
`;

export default function ErrorPage() {
  return (
    <Container>
      <ContentWrapper>
        <Header>{ERROR_MESSAGE}</Header>
        <Action type="link" to="/products">
          {SHOP_ACTION_TEXT}
        </Action>
        <Action type="link" to="/">
          {HOME_ACTION_TEXT}
        </Action>
      </ContentWrapper>
    </Container>
  );
}
