import styled, { css } from 'styled-components';
import { Theme } from '../ThemeProvider';
import { ButtonStylesProps } from './types';

export const variantStyles = (theme: Theme, variant = 'primary') =>
  ({
    primary: css`
      color: #ffffff;
      background-color: ${theme.colors.primary[600]};

      &:hover {
        background-color: ${theme.colors.primary[700]};
      }
    `,
    secondary: css`
      color: ${theme.colors.gray[900]};
      background-color: ${theme.colors.white};
      border: 1px solid ${theme.colors.gray[200]};

      &:hover {
        background-color: ${theme.colors.gray[100]};
      }
    `,
    ghost: css`
      color: ${theme.colors.gray[900]};
      background-color: transparent;

      &:hover {
        background-color: ${theme.colors.gray[100]};
      }
    `,
    link: css`
      padding: 0;
      color: ${theme.colors.blue[600]};
      background-color: transparent;
      font-weight: normal;

      &:hover {
        text-decoration: underline;
        color: ${theme.colors.blue[700]};
      }
    `,
    danger: css`
      color: ${theme.colors.white};
      background-color: ${theme.colors.red[600]};

      &:hover {
        background-color: ${theme.colors.red[700]};
      }
    `
  }[variant]);

export const sizeStyles = (size = 'md') =>
  ({
    small: css`
      padding: 0.3125rem 0.75rem;
      font-size: 0.75rem;
    `,
    medium: css`
      padding: 0.5625rem 1rem;
      font-size: 0.875rem;
    `,
    large: css`
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    `
  }[size]);

export const StyledButton = styled.button<ButtonStylesProps>`
  padding: 0.875rem 1.5625rem;

  border: 1px solid transparent;
  border-radius: 0.25rem;

  font-size: 1rem;
  font-weight: 600;

  cursor: pointer;

  ${({ size }) => sizeStyles(size)}
  ${({ theme, variant }) => variantStyles(theme, variant)}

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }
`;
