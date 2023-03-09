import styled, { css } from 'styled-components';
import { ButtonStylesProps } from './types';

export const variantStyles = (variant = 'primary') =>
  ({
    primary: css`
      color: #ffffff;
      background-color: #000000;

      &:hover {
        background-color: #333333;
      }
    `,
    secondary: css`
      color: #000000;
      background-color: #eeeeee;

      &:hover {
        background-color: #e2e2e2;
      }
    `,
    subtle: css`
      color: #000000;
      background-color: transparent;

      &:hover {
        background-color: #eeeeee;
      }
    `
  }[variant]);

export const sizeStyles = (size = 'md') =>
  ({
    sm: css`
      padding: 0.65625rem 1.171875rem;
      font-size: 0.75rem;
    `,
    md: css`
      padding: 0.875rem 1.5625rem;
      font-size: 1rem;
    `
  }[size]);

export const StyledButton = styled.button<ButtonStylesProps>`
  padding: 0.875rem 1.5625rem;

  border: 1px solid transparent;
  border-radius: 0.5rem;

  font-size: 1rem;
  font-weight: 600;

  cursor: pointer;

  transition-duration: 0.2s;
  transition-property: background-color;
  transition-timing-function: cubic-bezier(0, 0, 1, 1);

  ${({ variant }) => variantStyles(variant)}
  ${({ size }) => sizeStyles(size)}

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }
`;
