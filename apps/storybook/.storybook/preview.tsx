import React from 'react';
import { GlobalStyle } from '@packages/ui';

const withGlobalStyle = (Story) => (
  <>
    <GlobalStyle />
    <Story />
  </>
);

export const decorators = [withGlobalStyle];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};
