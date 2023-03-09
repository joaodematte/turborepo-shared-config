import { forwardRef } from 'react';
import { StyledButton } from './styles';
import { ButtonProps } from './types';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ variant = 'primary', children, ...props }, ref) => (
  <StyledButton ref={ref} variant={variant} {...props}>
    {children}
  </StyledButton>
));
