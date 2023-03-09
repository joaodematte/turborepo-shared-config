export type ButtonStylesProps = {
  variant: 'primary' | 'secondary' | 'subtle';
  size: 'sm' | 'md';
};

export type ButtonProps = Partial<ButtonStylesProps> & React.HTMLAttributes<HTMLButtonElement>;
