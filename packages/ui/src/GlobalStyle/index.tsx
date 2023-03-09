import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

    &:focus-visible {
    outline: 2px solid #000000;
    outline-offset: 0.125rem;
  }
  }
`;
