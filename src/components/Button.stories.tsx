import type {ComponentMeta, ComponentStoryObj} from '@storybook/react';

import {Button, type ButtonProps} from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Create account',
  },
  argTypes: {
    asChild: {
      table: {
        disable: true
      }
    }
  },
} as ComponentMeta<typeof Button>

export const Default: ComponentStoryObj<typeof Button> = {}