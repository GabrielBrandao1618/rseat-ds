import {ComponentMeta, ComponentStoryObj} from '@storybook/react';
import {within, userEvent, waitFor} from '@storybook/testing-library';

import {rest} from 'msw';

import {expect} from '@storybook/jest';

import { SignIn } from './SignIn';

export default {
  title: 'Pages/Sign in',
  component: SignIn,
  parameters: {
    msw: {
      handlers: [
        rest.post('/signin', (req, res, ctx) => {
          return res(ctx.json({
            message: 'Login realizado'
          }));
        })
      ]
    }
  }

} as ComponentMeta<typeof SignIn>;

export const Default: ComponentStoryObj<typeof SignIn> = {
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement);
    userEvent.type(canvas.getByPlaceholderText('Digite seu email'), 'email@email.com');
    userEvent.type(canvas.getByPlaceholderText('Digite sua senha'), 'mytotallysecurepassword');

    userEvent.click(canvas.getByRole('button'));

    await waitFor(() => {
      return expect(canvas.getByText('Login realizado')).toBeInTheDocument();
    });
  }
};