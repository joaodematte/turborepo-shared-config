import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '@packages/ui';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    children: { control: 'text' },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    variant: { control: 'radio' },
    size: { control: 'radio' }
  }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  size: 'md',
  children: 'Button',
  disabled: false,
  loading: false
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  size: 'md',
  children: 'Button',
  disabled: false,
  loading: false
};

export const Subtle = Template.bind({});
Subtle.args = {
  variant: 'subtle',
  size: 'md',
  children: 'Button',
  disabled: false,
  loading: false
};
