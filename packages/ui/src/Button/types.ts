export type ButtonStylesProps = {
  variant: 'primary' | 'secondary' | 'subtle';
  size: 'sm' | 'md';
  disabled: boolean;
  loading: boolean;
};

export type ButtonProps = Partial<ButtonStylesProps> & React.HTMLAttributes<HTMLButtonElement>;
