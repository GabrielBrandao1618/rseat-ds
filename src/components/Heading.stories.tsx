import type {ComponentMeta, ComponentStoryObj} from '@storybook/react';

import {Heading, type HeadingProps} from './Heading';

export default {
  title: 'Components/Heading',
  component: Heading,
  args: {
    children: 'Lorem ipsum',
    size: 'md'
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'] as HeadingProps['size'][],
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
} as ComponentMeta<typeof Heading>

export const Default: ComponentStoryObj<typeof Heading> = {}

export const Small: ComponentStoryObj<typeof Heading> = {
  args: {
    size: 'sm'
  }
};

export const Large: ComponentStoryObj<typeof Heading> = {
  args: {
    size: 'lg'
  }
};
export const CustomComponent: ComponentStoryObj<typeof Heading> = {
  args: {
    asChild: true,
    children: (
      <h1>H1 heading</h1>
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