import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@font-face {
    font-family: 'atkinson-hl';
    src: url('../fonts/atkinsonhyperlegible.woff2') format('woff2'),
         url('../fonts/atkinsonhyperlegible.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
  :root {
    --color-background: ${({ theme }) => theme.colors.background};
    --color-primary: ${({ theme }) => theme.colors.primary};
    --color-secondary: ${({ theme }) => theme.colors.secondary};
    --color-error: ${({ theme }) => theme.colors.error};
    --color-success: ${({ theme }) => theme.colors.success};
    --color-disabled: ${({ theme }) => theme.colors.disabled};
    --color-on-primary: ${({ theme }) => theme.colors.on.primary};
    --color-on-secondary: ${({ theme }) => theme.colors.on.secondary};
    --color-on-background: ${({ theme }) => theme.colors.on.background};
    --color-on-surface: ${({ theme }) => theme.colors.on.surface};
    --color-on-error: ${({ theme }) => theme.colors.on.error};
    --color-on-success: ${({ theme }) => theme.colors.on.success};
    --color-on-disabled: ${({ theme }) => theme.colors.on.disabled};

    --icon-width: 32px;
    --icon-height: 32px;
        
    --border: ${({ theme }) => `2px solid ${theme.colors.border}`};
    --border-radius: 10px;
    --border-color: ${({ theme }) => theme.colors.border};

    --space-small: 0.5rem;
    --space-medium: 1rem;
    --space-large: 1.5rem;
    --space-xl: 2rem;

    ${({ theme }) =>
      theme.surface
        .map(
          (surf, index) => `
      --surface-${index}-color: ${surf.color};
      --surface-${index}-shadow: ${surf.shadow};
    `,
        )
        .join('')}

    body {
      font-family: 'atkinson-hl';
      background-color: var(--surface-0-color);
      color: var(--color-text-primary);
    }
  }
`;
