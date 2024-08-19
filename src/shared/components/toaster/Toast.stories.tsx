import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ToastOptions } from 'react-toastify';
import { ToastMsgs } from './Toast';

export default {
  title: 'Seed/Toast',
} as Meta;

type ToastStoryArgs = {
  message: string;
  options: ToastOptions;
};

type StoryType = Story<ToastStoryArgs>;

const Template: StoryType = (args) => {
  // You can use ToastMsgs here if needed
  return <div>{args.message}</div>;
};

export const SuccessMessage: StoryType = Template.bind({});
SuccessMessage.args = {
  message: 'Success Message',
  options: {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  } as ToastOptions,
};
