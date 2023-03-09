import { FlattenSimpleInterpolation } from 'styled-components';

export type Variant = 'primary' | 'secondary' | 'ghost' | 'link' | 'danger';
export type Size = 'small' | 'medium' | 'large';

export type VariantSelector<T extends string> = {
  [key in T]: FlattenSimpleInterpolation | undefined;
};

export type ButtonStylesProps = {
  variant: Variant;
  size: Size;
  disabled: boolean;
  loading: boolean;
};

export type ButtonProps = Partial<ButtonStylesProps> & React.HTMLAttributes<HTMLButtonElement>;
