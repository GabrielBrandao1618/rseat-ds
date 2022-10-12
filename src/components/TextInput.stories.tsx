import type {ComponentMeta, ComponentStoryObj} from '@storybook/react';

import {Envelope} from 'phosphor-react';

import {TextInput} from './TextInput';

export default {
  title: 'Components/Text Input',
  component: TextInput.Root,

  args: {
    children: (
      <>
        <TextInput.Icon>
          <Envelope />
        </TextInput.Icon>
        <TextInput.Input 
          placeholder='Type your e-mail address'
        />
      </>
    )
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  },
} as ComponentMeta<typeof TextInput['Root']>

export const Default: ComponentStoryObj<typeof TextInput['Root']> = {}
export const WithoutIcon: ComponentStoryObj<typeof TextInput['Root']> = {
  args: {
    children: (
      <TextInput.Input 
        placeholder='Type your e-mail address'
      />
    )
  }
};