import { ThemeProvider as ThemeProviderSC } from 'styled-components';
import { ThemeProviderProps } from './types';

export const theme = {
  colors: {
    black: '#000000',
    white: '#ffffff',
    primary: {
      50: '#faf5ff',
      100: '#f3e9fe',
      200: '#e9d6fe',
      300: '#d8b6fc',
      400: '#bf88f8',
      500: '#a75af2',
      600: '#8a2be2',
      700: '#7d28c8',
      800: '#6a25a4',
      900: '#572083'
    },
    gray: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#e5e5e5',
      300: '#d4d4d4',
      400: '#a3a3a3',
      500: '#737373',
      600: '#525252',
      700: '#404040',
      800: '#262626',
      900: '#171717'
    },
    red: {
      50: '#fef2f2',
      100: '#fee2e2',
      200: '#fecaca',
      300: '#fca5a5',
      400: '#f87171',
      500: '#ef4444',
      600: '#dc2626',
      700: '#b91c1c',
      800: '#991b1b',
      900: '#7f1d1d'
    },
    blue: {
      50: '#eff4ff',
      100: '#dbe6fe',
      200: '#bfd3fe',
      300: '#93b4fd',
      400: '#6090fa',
      500: '#3b76f6',
      600: '#2563eb',
      700: '#1d58d8',
      800: '#1e4baf',
      900: '#1e408a'
    }
  }
};
export type Theme = typeof theme;

export function ThemeProvider({ children }: ThemeProviderProps) {
  return <ThemeProviderSC theme={theme}>{children}</ThemeProviderSC>;
}
