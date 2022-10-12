import type {ComponentMeta, ComponentStoryObj} from '@storybook/react';

import {Checkbox} from './Checkbox';
import {Text} from './Text';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: {},
  argTypes: {
    asChild: {
      table: {
        disable: true
      }
    }
  },
  decorators: [
    (Story) => {
      return (
        <div className="flex items-center gap-2">
          {Story()}
          <Text>Lembrar de mim</Text>
        </div>
      )
    }
  ]
} as ComponentMeta<typeof Checkbox>

export const Default: ComponentStoryObj<typeof Checkbox> = {}