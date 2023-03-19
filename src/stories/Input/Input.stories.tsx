import { InputProps } from 'antd';
import { Meta, Story } from '@storybook/react';
import Input from '@components/Input/Input';

export default {
  component: Input,
  title: 'Input',
  argTypes: {
    addonAfter: {
      control: { type: 'text' },
      description:
        'The label text displayed after (on the right side of) the input field',
    },
    addonBefore: {
      control: { type: 'text' },
      description:
        'The label text displayed before (on the left side of) the input field',
    },
    defaultValue: {
      control: { type: 'text' },
      description: 'The default value of the input field',
    },
    disabled: {
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: 'false' },
      },
      description: 'The input field is disabled or not',
    },
    showCount: {
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: 'false' },
      },
      description: 'The input field is show count of letters or not',
    },
    status: {
      options: ['warning', 'error', 'default'],
      control: { type: 'radio' },
      table: {
        defaultValue: { summary: 'default' },
      },
      description: 'The status of the input field',
    },
    prefix: {
      control: { type: 'text' },
      description: 'The prefix of the input field',
    },
    suffix: {
      control: { type: 'text' },
      description: 'The suffix of the input field',
    },
    size: {
      options: ['large', 'middle', 'small'],
      control: { type: 'radio' },
      table: {
        defaultValue: { summary: 'middle' },
      },
      description: 'The size of the input field',
    },
    type: {
      options: ['text', 'password', 'email', 'number', 'url', 'search', 'tel'],
      control: { type: 'radio' },
      table: {
        defaultValue: { summary: 'text' },
      },
      description: 'The type of the input field',
    },
    value: {
      control: { type: 'text' },
      description: 'The value of the input field',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'This is input component which is wrapper for ant input component.',
      },
    },
  },
} as Meta;

const Template: Story<InputProps> = (args: InputProps) => <Input {...args} />;

export const DefaultInput = Template.bind({});

DefaultInput.args = {
  disabled: false,
  showCount: false,
  type: 'text',
  size: 'middle',
};
