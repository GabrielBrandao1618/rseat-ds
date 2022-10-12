import type {ComponentMeta, ComponentStoryObj} from '@storybook/react';

import {Text, type TextProps} from './Text';

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Lorem ipsum',
    size: 'md'
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'] as TextProps['size'][],
      control: {
        type: 'inline-radio'
      }
    },
    asChild: {
      table: {
        disable: true
      }
    }
  }
} as ComponentMeta<typeof Text>

export const Default: ComponentStoryObj<typeof Text> = {}

export const Small: ComponentStoryObj<typeof Text> = {
  args: {
    size: 'sm'
  }
};

export const Large: ComponentStoryObj<typeof Text> = {
  args: {
    size: 'lg'
  }
};
export const CustomComponent: ComponentStoryObj<typeof Text> = {
  args: {
    asChild: true,
    children: (
      <p>Lorem ipsum</p>
    )
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  }
};