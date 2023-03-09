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
  size: 'medium',
  children: 'Primary',
  disabled: false,
  loading: false
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  size: 'medium',
  children: 'Secondary',
  disabled: false,
  loading: false
};

export const Ghost = Template.bind({});
Ghost.args = {
  variant: 'ghost',
  size: 'medium',
  children: 'Ghost',
  disabled: false,
  loading: false
};

export const Danger = Template.bind({});
Danger.args = {
  variant: 'danger',
  size: 'medium',
  children: 'Danger',
  disabled: false,
  loading: false
};

export const Link = Template.bind({});
Link.args = {
  variant: 'link',
  size: 'medium',
  children: 'Link',
  disabled: false,
  loading: false
};
