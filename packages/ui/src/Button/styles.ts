import styled, { css } from 'styled-components';

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

export const StyledButton = styled.button<{ variant: 'primary' | 'secondary' | 'subtle' }>`
  padding: 0.875rem 1.5625rem;

  border: 1px solid transparent;
  border-radius: 0.5rem;

  font-size: 1rem;
  font-weight: 600;

  cursor: pointer;

  transition-duration: 0.2s;
  transition-property: background-color;
  transition-timing-function: cubic-bezier(0, 0, 1, 1);

  &:focus-visible {
    outline: 2px solid #000000;
    outline-offset: 0.125rem;
  }

  ${({ variant }) => variantStyles(variant)}
`;
