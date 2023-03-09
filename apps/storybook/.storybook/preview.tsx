import React from 'react';
import { GlobalStyle, ThemeProvider } from '@packages/ui';

const withProvider = (Story) => (
  <ThemeProvider>
    <GlobalStyle />
    <Story />
  </ThemeProvider>
);

export const decorators = [withProvider];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};
