import { ButtonProps } from 'antd';
import { Meta, Story } from '@storybook/react';
import Button from '@components/Button/Button';

export default {
  component: Button,
  title: 'Button',
  argTypes: {
    type: {
      options: [
        'primary',
        'ghost',
        'dashed',
        'link',
        'text',
        'default',
        'danger',
      ],
      control: { type: 'radio' },
      description: 'Button types',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    shape: {
      options: ['default', 'circle', 'round'],
      control: { type: 'radio' },
      description: 'Button shapes',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    size: {
      options: ['large', 'middle', 'small'],
      control: { type: 'radio' },
      description: 'Button sizes',
      table: {
        defaultValue: { summary: 'middle' },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Button disabled or enabled',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    loading: {
      control: { type: 'boolean' },
      description: 'Button loading or not',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    ghost: {
      control: { type: 'boolean' },
      description: 'Button ghost or not',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    children: {
      control: { type: 'text' },
      description: 'Button text',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'This is button component which is wrapper for ant button component.',
      },
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args: ButtonProps) => (
  <Button {...args} />
);

export const DefaultButton = Template.bind({});

DefaultButton.args = {
  children: 'Default Button',
  type: 'default',
  disabled: false,
  loading: false,
  ghost: false,
  shape: 'default',
  size: 'middle',
};
