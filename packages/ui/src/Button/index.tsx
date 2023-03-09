import { forwardRef } from 'react';
import { StyledButton } from './styles';
import { ButtonProps } from './types';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', children, loading = false, disabled = false, ...props }, ref) => {
    const isDisabled = disabled || loading;

    return (
      <StyledButton ref={ref} variant={variant} size={size} disabled={isDisabled} loading={loading} {...props}>
        {!loading ? children : 'Loading...'}
      </StyledButton>
    );
  }
);
